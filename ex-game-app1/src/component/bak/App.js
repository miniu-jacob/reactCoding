import { useState, useEffect } from 'react';
import './App.css';
import Box from './component/Box';
import Choice from './component/Choice';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const gameItems = {
        scissors: {
            name: '가위', 
            img: 'images/scissors.png'
        }, 
        rock: {
            name: '바위',
            img: 'images/rock.png'
        },
        paper: {
            name: '보', 
            img: 'images/paper.png'
        }
    }
    // console.log('게임 요소: ', gameItems['paper'])
    // const keys = Object.keys(gameItems);
    const [userSelect, setUserSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState('');

    // gamePlay
    useEffect(()=>{
        // console.log('뭐낼꺼야? : ',event)
        if (userSelect && comSelect){
            setResult(whoWin(userSelect, comSelect))
            console.log('게임 선택 결과: ', userSelect, comSelect)
        }
    }, [userSelect, comSelect])


    const gamePlay = (choice) => {
        if (gameItems[choice]) {
            console.log('뭐냈어? ',gameItems[choice] );
            setUserSelect(gameItems[choice]);
        } else {
            console.error(`Invalid choice: ${choice}`);
        }
        const comPick = randomPick();
        console.log('comPick: ', comPick)
        setComSelect(comPick);
        
    }

    /* 랜덤픽인데 어디서 선택할 수 있어? >> 객체 >> 어떤 객체? gameItem 객체. 따라서 
    //  1. gameItem 객체에서 키 값을 가져오고 
        2. 랜덤이니까 인덱스 번호를 랜덤하게 선택하도록 함수를 써서 인덱스 번호를 정하고
        3. 가져온 키 값은 배열 > 어떻게 알아? 찍어보면 알지.
        4. 최종적으로 선택할 값은?  >> 키의배열[인덱스];
        5. 그러면 이게 가위바위보중 어떤 건지에 대한 문자열이 나온다.
        6. 결국에 리턴을 초기 객체['리턴값'] 으로 하면 문자열을 리턴할 수 있다. 

    */ 
    const randomPick = () =>{
        let itemArray = Object.keys(gameItems);
        console.log('배열인가? ', itemArray)
        
        const pickIndex = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[pickIndex];
        console.log('final value ? ', final)
        return gameItems[final];
        
        // 인덱스 번호만 보낼꺼야? 뭘 선택했는지를 보낼꺼야?
    }

    // 결과 출력
    const whoWin = (user, com) => {
        if(user.name === com.name){
            return 'TIE!!'
        } else if (user.name === '가위')
            return com.name === '보'? 'WIN!' : 'LOSER!!';
          else if (user.name ==='바위')
            return com.name === '가위' ? 'WIN!' : 'LOSER!!';
          else if (user.name ==='보')
            return com.name === '바위' ? 'WIN!' : 'LOSER!!'; 
    }

    // 특수 문자 제거
    const removeSpecialCharacters = (text) => text.replace(/[^a-zA-Z]/g, '');

    const winText = (result) => {
        let removedResult = removeSpecialCharacters(result).toLowerCase();
        console.log('qqqqqq', removedResult )

        if(removedResult === 'tie') return result = 'Same Same!';
        if(removedResult === 'loser') return result = 'You Lose!';
        if(removedResult === 'win') return result = 'You Win!';
    }


  return (
    <div>
        <div className='container'>
            <Box name='You' select={userSelect}  result={result} />
            <Box name='Computer' select={comSelect} result={result} />
        </div>
        <div className='user-pick-area'>
            {/* <Choice keys={keys}> */}
            {/* -- 1 -- 객체 자체를 넘겨준다.  */}
            {/* <Choice gameItems={gameItems} onClick={gamePlay()} > */}
            {/* </Choice> */}
            <img className='choice' onClick={()=>gamePlay('scissors')} src="images/scissors.png" alt="paper" width={50}  />
            <img className='choice' onClick={()=>gamePlay('rock')} src="images/rock.png" alt="paper" width={50}  />
            <img className='choice' onClick={()=>gamePlay('paper')} src="images/paper.png" alt="paper" width={50}  />
        </div>
        <div className='user-pick-area'>
            <h2>{winText(result)}</h2>
        </div>

 
    </div>
  );
}

export default App;

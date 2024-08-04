import { useState, useEffect } from 'react';
import './App.css';
import Box from './component/Box';
// import Choice from './component/Choice';
import 'bootstrap/dist/css/bootstrap.min.css';

const gameItem = {
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

function App() {

    // 변하는 값 설정
    const [userSelect, setUserSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState('');
    const [winner, setWinner] = useState('');

    useEffect(()=>{
        if(userSelect && comSelect){
            setResult(whoWin(userSelect, comSelect));
            // console.log('userEffect 결과: ',userSelect, comSelect )
            } 
        }, [userSelect, comSelect]);

    // 이미지 주소를 가져오는 함수
    const getImgSrc = (item) => {
        if (gameItem.hasOwnProperty(item)){
            return gameItem[item].img;
        } else {
            return `${item} 이 없습니다. `
        }
    }

    // 누가 이겼는지?
    const whoWin = (user, com) => {
        // console.log('whoWIn: ', user, com)
        if (user.name === com.name) return 'TIE!!';
        if (user.name === '가위')
            return com.name === '보' ? 'WIN!!' : 'LOSE!';
        else if (user.name === '바위')
            return com.name === '가위' ? 'WIN!!' : 'LOSE!';
        else if (user.name === '보')
            return com.name === '바위' ? 'WIN!!' : 'LOSE!';
        else {
            return `조건에 없습니다.`;
        }

    }

    // console.log(getImgSrc('rock'));

    // Computer randomPick 함수 
    const comRandomPick = () =>{
        const itemArray = Object.keys(gameItem);
        const valueKey = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[valueKey];
        return gameItem[final];
    }


    const playGame = (event)=>{
        console.log('Click event:',gameItem[event])
        setUserSelect(gameItem[event])
        const comValue = comRandomPick();
        setComSelect(comValue)
        // console.log('comValue: ', comValue)
    }

    return (
        <div>
            <div className='container'>
                <Box name='You' action={userSelect} result={result}  ></Box>
                <Box name='Computer' action={comSelect} result={result}></Box>
                
            </div>
            <div className='choice-area'>
                <img src="images/scissors.png" alt="" width={50} onClick={()=>playGame('scissors')} />
                <img src="images/rock.png" alt="" width={50} onClick={()=>playGame('rock')} />
                <img src="images/paper.png" alt="" width={50} onClick={()=>playGame('paper')} />
            </div>
            <div className='result-area'><h2>{result}</h2></div>

        {/* last */}
        </div>
    );
}

export default App

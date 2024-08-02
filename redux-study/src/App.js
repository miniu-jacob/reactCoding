import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';


// 값을 변경하기 위해서는 useDispatch 를 들고 와야 한다. 

function App() {

  // useSelector 는 함수를 매개변수로 받는다. 
  const count = useSelector(state=> state.count);
  let id = useSelector(state=> state.id);
  let password = useSelector(state => state.password);
  console.log('id: ', id)

  // dispatch 적용을 위한 주석 처리 - 1
  // const [num, setNum] = useState(0);

  // dispatch를 사용할 수 있도록 선언해 준다. 
  // 언제 dispatch 가 실행되냐? > 유저가 버튼을 눌렀을 때 
  // 즉 increaseNum 함수가 실행될 때. 
  // 따라서 increaseNum 함수 안에 dispatch() 함수를 실행해 준다. 
  const dispatch = useDispatch();


  const increaseNum = () => {
    // dispatch 를 실행하는데 객체를 인자로 넣어준다. 
    // type: 은 액션의 이름을 정해 준다. 
    // 액션은 dispatch 가 reducer에게 던진다. 
    // payload는 함수의 매개변수 같은 느낌. 
    dispatch({type: 'INCREMENT', payload:{num:5}  });

    // dispatch 적용을 위한 주석 처리 - 2
    // setNum(num+1);
  }

  /*
  useEffect(()=>{
    console.log('증가됨', num )
    
  }, [num]);      */

  const login = () => {
    dispatch({type: 'LOGIN', payload: {id:'jacob', password:'123'}});
  }
  
  return (
    <div>
      <Container>
        <div className='counting'>
          <span>ID: {id}, Password: {password}</span>
          <h1>{count}
          </h1>
          <button className='button' onClick={increaseNum}>클릭</button>
          <button onClick={login}>Login</button>
          <Box></Box>
        </div> 
      </Container>
    </div>
  );
}

export default App;

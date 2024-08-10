import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useReducer } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// useReducer 사용('react' - LINE - 3)


/* useReducer는 3가지로 이루어져 있다. 
    1. reducer: state 업데이트 (은행)
    2. dispatch: state 업데이트를 위한 요구 
    3. action : 요구의 내용
        */

    /* 
        ### Step 2. 리듀서 함수는 인자를 2개를 받는다.
        const reducer = () => {}
        1. state
        2. action 

        ### Step 3. 리듀서를 만들었으니 잔고에 money(state)를 넣어주자. 

            */
    // ACTION TYPES 를 객체로 빼주자.
    const ACTION_TYPES = {
        deposit: 'deposit',
        withdraw: 'withdraw',
    }
    

    const reducer = (state, action ) => {
        console.log('reducer가 일을 시작합니다.', state, action)
        // return state + action.payload;
        switch (action.type){
            case ACTION_TYPES.deposit:
                return state + action.payload;
            case ACTION_TYPES.withdraw:
                return state - action.payload;
            default: 
                return state;
        }
        
    };

function App() {
    const [ number, setNumber ] = useState(0);
    /* ### Step 1.  useReducer 를 위한 state 를 만들어 주자.
        useReducer는 useState 와 비슷하게 배열을 하나 반환해 준다. 

        const [ money, dispatch ] = useReducer();

        useReducer 는 인자를 두개를 받는다. 
        const [ money, dispatch ] = useReducer( 인자 두개~ );
        인자1 - reducer (아직 안만들어줌)
        인자2 - money state 안에 들어갈 초기값

        reducer라는 함수는 선언이 App() 안에서 되었기 때문에 함수 밖에서 만들어 준다. 
        */
    const [ money, dispatch ] = useReducer(reducer, 0);

        /* ### 3.1. useState 의 경우 [ number, setNumber ] = useState(0);
            number의 값을 변경할 때는 setNumber 로 변경한다.
            useReducer도 마찬가지로 money의 값을 바꾸고 싶을 때는 dispatch 를 통해서 변경한다.
        */

        /* ### 4. 시나리오 시작 
            예금 버튼을 누를때마다 dispatch를 불러보자.
            버튼에 onClick 을 준다. 
          */

  return (
    <Container className='text-center m-5 d-flex flex-column'>
        <Row>
            <Col className='text-start'>
            <h2>useReducer 은행에 오신 것을 환영합니다. </h2>
            <p>잔고: {money}원</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className='text-start d-flex '>
            <Col className='d-flex p-3 gap-3'>
                <input type="number"
                    className='col-3'
                    value={number}
                    onChange={(e) => setNumber(parseInt(e.target.value)) }
                    step="1000"
                />
                <Button className='col-2' onClick={()=>{
                    dispatch( { type: ACTION_TYPES.deposit, payload: number} )}}>예금</Button>
                <Button className='col-2' onClick={()=>{
                    dispatch( { type: ACTION_TYPES.withdraw, payload: number }) }}>출금</Button>
            </Col>
        </Row>
    </Container>
  );
}

export default App;

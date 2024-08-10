import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useReducer } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Student from './Student';
// useReducer 사용('react' - LINE - 3)


/* ### Step 2. initialState 정의
                        */
const initialState = {
    count: 0, // 학생 수, 처음에는 0 
    students: [         // 학생들은 객체로 만든다. (이번에는)
        {
            id: Date.now(), 
            name: 'Jacob', 
            isAttend: false,
        }
        
    ]
}

const reducer = (state, action) => {
    console.log('reducer가 일을 시작합니다.', state, action);
    switch (action.type){
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name: name, 
                isAttend: false 
            }
            return {
                count: state.count + 1,
                students: [ ...state.students, newStudent ]

            }
        default:
            return
    }
};

function App() {
    const [ name, setName ] = useState('');

    /* ###. Step 1. useReduce를 위한 state 만들기
        useReducer 의 두가지 인자
        1. reducer
        2. 초기 state 값 > 여기서는 initialState 로 줌 (객체로)
        
        reducer 와 initialState 는 함수 밖에서 정의한다. 
                        */
     
    const [ studentsInfo, dispatch ] = useReducer(reducer, initialState);
    

  return (
    <Container className='text-center m-5 d-flex flex-column'>
        <Row>
            <Col className='text-start'>
            <h1>출석부</h1>
            <p>총 학생 수: {studentsInfo.count}</p>
            </Col>
            <Col>
            </Col>
        </Row>
        <Row className='text-start d-flex '>
            <Col className='d-flex p-3 gap-3'>
                <input type="text"
                    className='col-4'
                    value={name}
                    placeholder='이름을 입력해 주세요.'
                    onChange={(e)=>{ setName(e.target.value)}}
                />
                <Button className='col-2' onClick={()=>{
                    dispatch({ type: 'add-student', 
                        payload: {name}
                     })
                }}>추가</Button>
            </Col>
        </Row>
        <Row className='text-start'>
                {/* 버튼 밑에 학생들 정보 출력 >> 
                    students 는 객체의 배열이니까 map 사용 쌉가능 */}
                { studentsInfo.students.map((student,index) => {
                    return (<Col key={index}><Student key={student.id} name={student.name} /></Col>) 
                } ) }
        </Row>
    </Container>
  );
}

export default App;

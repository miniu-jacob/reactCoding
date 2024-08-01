import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setEnableLogin}) => {
  // 버튼이나 input 의 타입이 submit 이면 onClick 이벤트와는 다르다. 
  // 따라서 onSubmit 이벤트를 준다. 
  const navigate = useNavigate();
  const loginUser = (event)=> {
    // 콘솔로찍어보면 바로 새로고침이 되는 것을 확인할 수 있다. 
    // 이때, 넘어온 이벤트 중 preventDefault 는 화면이 새로고침되는 것을 멈춰준다. 
    // 로그인이 되었다? 로그인 변수 변경 (setEnableLogin)
    // 그런데 어디에 있다? App.js 
    // 따라서 <Login /> 테그 안에 props 처럼 넣는다.
    event.preventDefault(); 
    console.log('login user function', event)
    setEnableLogin(true);
    navigate('/');
    
    
  }
  
  return (
    <Container>
      <Form onSubmit={(event)=> loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디를 입력하세요</Form.Label>
        <Form.Control type="email" placeholder="아이디를 입력하세요." />
        <Form.Text className="text-muted">
          이메일을 아이디로 사용할 수 있습니다.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>암호를 입력하세요</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
    </Form>

      
      

    </Container>
  )
}

export default Login

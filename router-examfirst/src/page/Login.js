import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

const Login = () => {
  return (
    <div>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>아이디를 입력하세요. </Form.Label>
        <Form.Control type="text" placeholder="아이디 입력" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>암호</Form.Label>
        <Form.Control type="password" placeholder="암호를 입력하세요." />
      </Form.Group>
    </Form>

        
      
    </div>
  )
}

export default Login

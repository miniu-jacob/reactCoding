import React from 'react'
import {Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// import Form from 'react-bootstrap/Form';

const Login = ({ hasPermission, setHasPermission }) => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasPermission(true);
        navigate('/');
        // console.log('권한: ', hasPermission)
    }

  return (
    <div className='d-flex justify-content-center text-start fs-6'>
        {/* <Row className='form-row col-4 mt-5'> */}
            <Form className='w-25 mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="formBasicId">
                <Form.Label className='text-left'>아이디</Form.Label>
                <Form.Control type="text" placeholder="아이디를 입력하세요" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="암호를 입력하세요" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className='fs-small' type="checkbox" label="자동 로그인" />
            </Form.Group>
            <Button variant="danger" type="submit">
                가입하기
            </Button>
            </Form>
    {/* </Row> */}
    </div>
  )
}

export default Login

import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Row className='contact-area'>
      <Col className='form-text mb-3'>
        <Form.Control className='input-field' type="text" placeholder="이름을 입력해 주세요" />
      </Col>
      <Col className='mb-2'>
        <Button>찾기</Button>
      </Col>
    </Row>
  )
}

export default SearchBox

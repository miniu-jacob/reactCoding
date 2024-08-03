import React from 'react'
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  const {name, mobileNum} = item;
  return (
    <Row>
      <Col lg={3} className='mb-2'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg" width={70} alt="" />
      </Col>
      <Col lg={9} className='md-4'>
        <div>{name}</div>
        <div>{mobileNum}</div>
      </Col>
      
      
    </Row>
  )
}

export default ContactItem

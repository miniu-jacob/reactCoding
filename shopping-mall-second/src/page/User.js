import React from 'react'
import { Container, Button } from 'react-bootstrap';

const User = ({hasPermission, setHasPermission }) => {

    const handleLogout = () => setHasPermission(false);
    
  return (
    <Container className='mt-5'>
        <span>
            로그인된 상태입니다. 
        </span>
        <div>
            <Button variant='danger' className='mt-4' onClick={handleLogout}>로그아웃</Button>
        </div>
      
    </Container>
  )
}

export default User

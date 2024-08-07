import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate('/');
    
    
    
  }
  
  return (
    <div>
      <h1>About 페이지입니다.</h1>
      <button onClick={gotoHome}>홈페이지로 돌아가기

      </button>
      
    </div>
  )
}

export default About

import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    const moveHome = () => {
        navigate('/');
    }



  return (
    <div>
        <h1>About 홈페이지</h1>
        <button onClick={moveHome}>홈페이지 가기</button>
      
    </div>
  )
}

export default About

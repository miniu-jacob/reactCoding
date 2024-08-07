import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const moveProductPage = () => {
        navigate('/products?q=pants')
    }

  return (
    <div>
        <h1>홈페이지 입니다. </h1>
        <Link to='/about'>About Page 가기</Link>
        <button onClick={moveProductPage}>바지 보러 가기</button>

      
    </div>
  )
}

export default Home

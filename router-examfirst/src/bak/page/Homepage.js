import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  const gotoProductPage = () => {
    navigate('/products?q=Y-shirts&num=143');
  }

  return (
    <div>
      <h1>Homepage 입니다. </h1>
      <button onClick={gotoProductPage}>바지 상품 페이지</button> 
    </div>
  )
}

export default Homepage

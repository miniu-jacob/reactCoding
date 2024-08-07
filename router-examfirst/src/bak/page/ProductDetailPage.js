import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log('아이디 값: ', id)
  return (
    <div>
      <h1>상품 상세 정보 페이지</h1>
      
    </div>
  )
}

export default ProductDetailPage

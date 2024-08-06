import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  let [ query, setQuery] = useSearchParams();
  console.log(query.get('q'))
  console.log(query.get('num'))
  return (
    <div>
      <h1>상품 전체 페이지 입니다. </h1>
      
    </div>
  )
}

export default Products

import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
    const [ query, setQuery ] = useSearchParams();
    console.log('query: ',query.get('q') )
  return (
    <div>
        <h1>제품 전체 페이지 </h1>
      
    </div>
  )
}

export default ProductPage

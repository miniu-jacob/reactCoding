import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetailPage = () => {
    let { id } = useParams();
  return (
    <div>
        Product 상세 화면
        <p>상품번호: {id}</p>
      {/* 추가로 상품 정보를 불러오고 표시하는 로직 */}
    </div>
  )
}

export default ProductsDetailPage

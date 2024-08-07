import React from 'react'
import { useParams } from 'react-router-dom'

const items = [ '아이폰', '갤럭시 S24', 'LG 그램 노트북', '아이패드']

const ProductDetailPage = () => {
    const { id } = useParams();
    const productName = items[id];
    // console.log('qq',id)
  return (
    <div>
        상품 상세 페이지
        <p>
        {/* 상품명: { productName ? productName : '상품이 없습니다.' } */}
        상품명: { items[id] ? items[id] : '상품이 없습니다.' }
        </p>
      
    </div>
  )
}

export default ProductDetailPage

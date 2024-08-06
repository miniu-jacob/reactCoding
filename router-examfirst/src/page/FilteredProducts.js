import React from 'react'
import { useSearchParams } from 'react-router-dom'


const FilteredProducts = ({ searchParams, setSearchParams }) => {
    // searchParams 객체에서 'category' 파리미터 값을 추출
    let category = searchParams.get('categopry');

    // 쿼리 문자열을 업데이트하는 함수 
    const updateCategory = (newCategory) => {
        // setSearchParams 함수를 사용하여 쿼리 문자열 설정 
        setSearchParams( { category: newCategory} );
    }
  return (
    <div>
        필터링된 제품 목록
        {/* 추출한 카테고리 값을 이용하여 필터링된 제품 목록을 화면에 표시 */}
        <h1>Filtered Products: {category}</h1>
        <button onClick={()=> updateCategory('electronics')} >Show Electronics</button>
        <button onClick={()=> updateCategory('clothing')} >Show Clothing</button>
      
    </div>
  )
}

export default FilteredProducts

import React from 'react'
import { useSearchParams } from 'react-router-dom';

const SearchResult = () => {
    // useSearchParams 훅을 사용하여 URL 쿼리 문자열에서 searchParams 객체 추출
    // 배열의 첫 번째 요소: URLSearchParams 객체 
    // 배열의 두 번째 요소: setSearchParams 함수 
    let [searchParams] = useSearchParams();
    
    // searchparams 에서 'query' 파라미터 값을 추출
    let query = searchParams.get('query');
    let hasQuery = searchParams.has('query');
    // console.log('has Query?', hasQuery)
    
    
    

  return (
    <div>
        <div>검색 결과 페이지 </div>
        <p>검색 내용: { hasQuery ? query : '쿼리 파라미터가 없습니다' }</p>

    </div>
  )
}

export default SearchResult

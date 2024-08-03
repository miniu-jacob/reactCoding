import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { usePostQuery } from './hooks/usePosts'

// API 호출을 위해 AXIOS 를 사용
// react-query 에서 사용하는 훅 = useQuery (매개변수: {})


// -- 7.1 -- 
// 쿼리 데이터를 가져와서 url에 추가할 수 있다. 

const ReactQueryPage = () => {
  // usePostQuery(postId)
  const [data, isLoading, isError, error ] = usePostQuery();



 
  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>{error.message}</h1>
  }
  

  return (
    <div>
      {/* {data.data.map(item=>( */}
      {/* -- 5 -- select 로 선별했기 때문에 다시 써준다.  */}
      {data?.map((item)=>(
        <div key={item.id}> {item.title} </div>
      ))} 
      
    </div>
  )
}

export default ReactQueryPage

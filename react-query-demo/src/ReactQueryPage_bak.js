import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'

// API 호출을 위해 AXIOS 를 사용
// react-query 에서 사용하는 훅 = useQuery (매개변수: {})


// -- 7.1 -- 
// 쿼리 데이터를 가져와서 url에 추가할 수 있다. 

const ReactQueryPage = () => {

  // -- 2 --  
  /*
  const bringPost = () => {
    return axios.get('http://localhost:5050/posts')
  } */

  // 이렇게 해 놓고 queryFn 에 bringPost() 를 할 수도 있다. -- 3 -- 

  // useQuery는 매개변수를 한번에 받을 수 있다. (예전에는 각각 받음)
  // API 호출에 이름을 정해줄 수 있다. 
  // 첫번째는 이름을 정해주고 두번째는 쿼리함수를 지정해 줄 수 있다. 
  // 함수를 따로 뺄 수도 있다.  -- 2 --

  // -- 4 -- 
  // useQuery 를 통해서 받는 값? 변수 지정 > 할당
  // data 객체 뿐만 아니라 여러 가지 값들 (서버 상태, isLoading... ) 을 받아올 수 있다. 
  
  // -- 5 --
  // 데이터를 선별해서 받을 수도 있다. select: 

  const { isError, isLoading, data , error} =  useQuery({
    // -- 7 -- 쿼리키 동적으로 바꾸기
    // 함수 매개변수에서 (ReactQueryPage= () => ) 에서 받아올 수 있다. 

    // queryKey: ['posts'],
    queryKey: ['posts', ],
    queryFn: (queryData) => { 
      const id = queryData.queryKey[1];
      console.log('Query Data: ', queryData)
      return axios.get(`http://localhost:5050/posts/${id}`)},
    // 에러 재시도 횟수
    retry: 0,
    select: (data)=> {
      return data.data
    },

    // 다양한 옵션들 -- 6 --
    // enabled: false, 로 두면 초기에 호출이 되지 않는다. 
    // enabled: false, // 기본값은 true다. 

    // 캐시가 inactive 로부터 삭제가 되기까지
    // gcTime: 5000,

    // 유통기한 1분 추가(fresh상태가 1분간 유지)
    // 1분간 API 호출 금지 
    // 인스타 좋아요 전체 개수 같은 것들( 실시간 필요 없음 )
    // staleTime: 3000,

    // 3초 마다 계속 API 를 호출하고 싶다.
    // refetchInterval: 3000,

    // 컴포넌트에 와도 API 호출을 안한다. 
    // refetchOnMount: false,
    
    // 윈도우에 포커싱이 되면 API 호출 하기 
    refetchOnWindowFocus: true, 

    // -- 3 -- 
    // queryFn: bringPost
  })
  console.log('Data',data)
  console.log('Loading: ', isLoading)

  // 기본 실패 재시도 횟수: 3번
  console.log('Error: ', isError)
  console.log('error msg: ', error)

  // 어떻게 쓰지? 
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

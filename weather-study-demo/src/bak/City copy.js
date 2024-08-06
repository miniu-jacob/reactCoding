import React from 'react'
import { Button } from 'react-bootstrap'

const City = (props) => {
    // 콘솔을 찍어보면 props는 배열이다. 따라서 
    // props.map 으로 돌릴 수는 없고 배열을 선택해야 한다. 
    // 다시 말해 props.map() 이  아니라 props.cities.map() 이 되어야 한다. 
    // console.log('cities: ', props)

    // City 에서는 onCityClick 이라는 핸들러를 props로 받아왔다. 각 버튼의 onClick 이벤트에 연결한다. 
  return (
    <div className='city-area'>
        { props.cities.map((city, index)=>(
            <Button 
                className='city' 
                key={index} 
                variant="warning"
                onClick={()=> props.onCityClick(city)}
                 >{city}</Button>
            
         )) 
         }
    </div>
  )
}

export default City

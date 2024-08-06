import React from 'react'
import { Button } from 'react-bootstrap'

const City = ({cityNames, buttonClick }) => {
    console.log('cityNames: ', cityNames)

  return (
    // onClick 이벤트에 익명 함수를 주고 인자로 받아온 props를 활용한다. 
    // props 이름은 받아온 그대로 
    
    <div className='city-area'>
        {
            cityNames.map((city, index)=>(
                <Button 
                    className='city' 
                    key={index}
                    // onClick={()=>{buttonClick.fetchWeatherDataByCity(city)}}
                    onClick={()=>{buttonClick(city)}}
                    variant="warning">
                    {city} </Button>
            ))
        }
    </div>
  )
}

export default City

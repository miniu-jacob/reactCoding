// * useContext 훅을 가져온다. 
import React, { useContext, useEffect } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react';
import { getUrl } from '../utils/WeatherUtils';

// * 정의해 둔 WeatherContext 를 가져온다. 
// src/context/WeatherContext.js 파일에 보면 export const ... 로 선언되어 있다. 
// 이는 named 로 내보낸 것이기 때문에 불러올 때 `{ }` 중괄호로 감싸 준다.
import { WeatherContext } from '@/context/WeatherContext';


const cities = ['Current Location', 'Hanoi', 'Dalat', 'Nha Trang', 'Seoul', 'Pattaya' ];

const WeatherLocations = () => {
    // * `useContext` 를 이용해서 `WeatherContext`를 가져온 다음 
    // * selectedCity 와 setSelectedCity를 가져온다. 
    const { selectedCity, setSelectedCity, isLoading } = useContext(WeatherContext);
    // console.log('city: ', cities)

    // * 도시를 선택했을 때 해당 도시를 넣는다. 
    const handleCityButton = (city) => {
       setSelectedCity(city); 
    }

  return (
    <>
        <ButtonGroup flexWrap={'wrap'}
            flexDir={['column', 'row']} gap={1}
        >
        { cities.map((city, index)=> {
            return (
                    <Button key={index}
                        variant={'solid'} 
                        borderRadius={'15px'}
                        size={['sm', 'md', 'md']} m={1}
                        colorScheme={ selectedCity === city ? 'teal' : 'gray'}
                        onClick={()=> handleCityButton(city)}
                        isLoading = { isLoading && selectedCity === city }
                        // bgColor={'orange.300'}
                        
                    >{city}</Button>
        )
        })}   
        </ButtonGroup>
      
    </>
  )
}

export default WeatherLocations

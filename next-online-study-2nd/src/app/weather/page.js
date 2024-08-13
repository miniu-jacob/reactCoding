'use client';
import React from 'react'
import { Flex, Text, Heading, Box } from '@chakra-ui/react';
import WeatherScreen from './component/WeatherScreen';
import WeatherLocations from './component/WeatherLocations';
// ! Context적용 Step 6: WeatherProvider 를 가져온다. 
import { WeatherProvider } from '@/context/WeatherContext';

const Weather = () => {
    const imageUrl = 'images/weather-background.jpg';


    // * Step 7: <WeatherProvider> 로 최상위를 감싸준다.
  return (
    <WeatherProvider>
        <Flex
            width={'100%'} height={'100%'}
            backgroundImage={`url(${imageUrl})`}
            backgroundSize={['contain','cover']}
            backgroundPosition={'center'}
            // objectFit={'contain'}
            backgroundRepeat={['repeat', 'no-repeat']}
            borderRadius={'25px'}
            // justifyContent={'center'}
            flexDir={'column'}
            alignItems={'center'}
            gap={6}
        >
            <Flex mt={['50px', '100px', '100px']} width={['250px', '400px', '400px']} height={'200px'} border={'2px solid white'} borderRadius={'15px'} alignItems={'center'} backgroundColor={'rgba(0,0,0,0.5)'}  
                justifyContent={'center'}
            >
                <WeatherScreen />
            
            </Flex>
            <Flex>
                <WeatherLocations />
            </Flex>
        </Flex>
    </WeatherProvider>
  )
}

export default Weather

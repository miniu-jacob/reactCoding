import React, { useContext } from 'react';
import { WeatherContext } from '@/context/WeatherContext';
import { Flex, Heading, Text } from '@chakra-ui/react';


const WeatherScreen = () => {

    const { weatherData, setWeatherData } = useContext(WeatherContext);
    const { name } = weatherData || {};
    const temp = weatherData?.main?.temp;
    const tempCel = temp ? temp.toFixed(1) : null;
    const tempFah = (tempCel * 9/5 + 32).toFixed(1);
    const desc = weatherData?.weather[0].description;
    
    // console.log('temp: ', temp)

  return (
    <Flex flexDir={'column'} textAlign={'center'} gap={3} >
        <Text fontSize={['15px', '25px', '25px']} color={'blanchedalmond'}>{name}</Text>
        <Heading color={'purple.100'}>
            { tempCel}°C / {tempFah}°F
        </Heading>
        <Heading color={'purple.100'} fontSize={['25px', '25px', '25px']}>
            { desc }
        </Heading>
        
    </Flex>
  )
}

export default WeatherScreen

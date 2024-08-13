import { useEditable } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import config from '@/apikey';
import { getUrl, fetchWeatherData } from '@/app/weather/utils/WeatherUtils';
// * Step 1: createContext, useState를 불러온다. 

// * Step 2: Weather Context 를 만든다. 
// 생성된 WeatherContext 는 Provider를 통해 컴포넌트 트리에 전달된다. 
// 그래서 모든 자식 컴포넌트에서 사용할 수 있다.
export const WeatherContext = createContext();

// * Step 3: WeatherProvider 컴포넌트를 만든다. 
// 날씨 관련 상태를 관리하고, Context를 통해 하위 컴포넌트에게 전달한다. 
// 매겨변수로 children 객체를 받는데 이 { children } 자식 컴포넌트들은 
// WeatherContext 에 접근할 수 있다. 
export const WeatherProvider = ({ children }) => {

    const [ selectedCity, setSelectedCity ] = useState('Current Location');
    const [ weatherData, setWeatherData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(()=>{

        const fetchData = async () => {
            if (selectedCity) {
                setIsLoading(true);
                // ! try , catch 문으로 변경 (fetch API 대신)
                try {
                    // console.log('Selected city: ', selectedCity)
                    // Netlify 용도 
                    const apiKey = process.env.API_KEY;
                    // Local 용도
                    // const apiKey = process.env.NEXT_PUBLIC_API_KEY;
                    const url = await getUrl(selectedCity, apiKey);
                    const data = await fetchWeatherData(url);
                    setWeatherData(data);
                    setIsLoading(false);
                } catch (error){
                    console.error('Error fetching weather data: ', error);
                }
                
            }
        }

        fetchData();
     }, [selectedCity]);

     useEffect(()=>{
        // if(weatherData){
            // console.log('city info: ', weatherData)
        // }
     },[weatherData]);

    return (
       <WeatherContext.Provider value={{ selectedCity, setSelectedCity, weatherData, isLoading }} >
            { children }
       </WeatherContext.Provider>
    );
    // * Step 4: WeatherContext.Provider를 통해 모든 하위 컴포넌트에 상태와 변경하는 함수를 전달한다. 
    // 따라서 이 Provider로 감싸진 모든 컴포넌트는 selectedCity, setSelectedCity 를 사용할 수 있다. 

    // * Step 5: 완료 후 Provider 를 적용해야 한다. 
    // src/app/{weather, game, gameclass} 등 여러 디렉토리들이 있지만
    // 적용되는 범위는 /weather 한정이므로 src/app/weather/page.js 에 작업해 준다.

};
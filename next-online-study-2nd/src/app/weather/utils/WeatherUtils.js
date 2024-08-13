import React from 'react'

// * Url 을 받아오는 함수
// Url 을 받아올 때는 api key 값을 넣어줘야 한다. 
// 다만 여기서는 매개변수로 설정만 해 주고 값을 넣어주는 것은 Context 에서 하기로 한다.
// 로직의 단순화
// 또한 Current Location 이 아닌 경우 city 값을 받아서 처리해야 하기 때문에 city 값도 받아온다.
export const getUrl = (city,  apiKey) => {
    const lang = 'kr';
    const units = 'metric';
    if(city === 'Current Location'){
        // ! 비동기 작업인 geolocation API 호출을 Promise로 처리한다. 
        return new Promise((resolve, reject)=>{
            // * 브라우저의 geolocation API 를 이용해 현재 위치를 가져온다.
            navigator.geolocation.getCurrentPosition((position)=>{
                // ! 콘솔로 찍어보면 latitude, longitude 로 나오는 것을 확인할 수 있다. 
                // * 따라서 구조 분해 할당으로 latitude, longitude 로 받아야 한다. 
                const { latitude:lat, longitude:lon } = position.coords;

                // * 추출했다면 resolve 를 호출하여 url 을 반환한다. 
                resolve(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=${units}&appid=${apiKey}`)
                }, 
                (error) => {
                    reject('Error retrieving location: ', error);
                    }
            );
        });
    } else {
        // return city 값을 api 에 넣는 값
        // 'Current Location' 이 아닌 경우에 도시를 넣는 Url 반환
        // Nha Trang 의 경우 공백이 있어. 에러가 난 것을 확인함. 따라서 URL-safe로 인코딩 후 넣는다. 
        const encodedCity = encodeURIComponent(city);
        return Promise.resolve(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=${units}&appid=${apiKey}`);
    }
}


export const fetchWeatherData = async (url) => {
    try {
        const res = await fetch(url);
        if(!res.ok) {
            throw new Error('Network response is not OK.');
        }
        return await res.json();
    } catch (error) {
        console.error('Fetching HTTP data Error: ', error);
        return null;
    }
};


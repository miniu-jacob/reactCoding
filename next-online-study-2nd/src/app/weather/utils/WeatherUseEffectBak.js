// 백업 useEffect 
// try catch 문으로 변경 후 백업 저장
/*
useEffect(()=>{
    if (selectedCity) {
        console.log('Selected city: ', selectedCity)
        // ! API 키와 'Current Location' 을 전달해 현재 위치 기반 Url을 가져온다.
        // * Url 은 src/weather/utils/WeatherUtils.js 파일에 있다.
        // getUrl 함수를 호출할 때 매개변수를 2개를 전달해야 한다. 
        // 1. city, 2. apiKey
        const apiKey = config.API_KEY;

        // ! getUrl 로 요청한 값을 출력해 보고 싶다면
        // 1. .then(); 을 쓴다. 
        // 2. 익명함수를 써서 콘솔로 출력한다.
        getUrl(selectedCity, apiKey)
            .then((url)=> {
                    return fetchWeatherData(url);
            })
            .then((data)=>{
                setWeatherData(data);
            })
            .catch((error)=>{
                console.error('Error fetching weather data: ', error);
            });
        }
 }, [selectedCity]); */

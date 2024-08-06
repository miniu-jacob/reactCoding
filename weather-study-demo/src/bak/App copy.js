import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherScreen from './component/WeatherScreen';
import City from './component/City';
import { API_KEY } from './apikey';

const cities = ['Current Location', 'Hanoi', 'Ho Chi Minh', 'Dalat', 'Seoul', 'Nha Trang'];

function App() {
    const [cityData, setCityData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // city info 호출
    const getCityInfo = () => {
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
            // 매개변수를 넣어줘야 한다. 뭘? 
            // 원래대로라면 showPosition = () => {} 에 들어갈 파라미터. (position)
        console.log('aaa', lat, lon)
        });

    }

    // showPosition 함수를 만들어도 되는데...
    // getCityInfo () => 에서 showPosition 파라미터 안에 직접 익명 함수를 만들 수도 있다. 
    /*
    const showPosition = (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(`lat: ${lat}, lon: ${lon}`)
    }           */

    const getWeatherByCurrentLocation = (lat, lon) =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        // console.log('URL: ', url);

        setLoading(true);
        fetch(url)
        .then( res => {
            // 응답 객체 출력
            // console.log('Response: ',res);
            return res.json();
        })
        .then( data => 
            {
            // console.log('Current Data: ', data);
            setCityData(data);
            setLoading(false);
        })
        .catch(error => {
            // console.error('Error:', error);
            setLoading(false);
        });
    }

    const handleCityClick = (city) => {
        if (city === 'Current Location'){
            getCityInfo();
            return;
        } 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        // console.log(`${city} 를 선택했음` )
        setLoading(true);
        fetch(url)
        .then( res => {
            // console.log('Check Response: ', res)
            return res.json();
        })
        .then ( data => {
            setCityData(data);
            // console.log('city name data', data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error:', error);
            setLoading(false);
        });
    }

    useEffect(()=>{
        getCityInfo();

    }, []);
    
    return (
        <Container className='white-board'>
            <Row className='justify-content-md-center'>
                <Col md='auto'></Col>
                {/* 로딩바를 추가한다.  */}
                { loading ? <div className='loading-box'>Loading...</div> : 
                <WeatherScreen cityData={cityData} ></WeatherScreen> } 
            </Row>
            <Row>
                <Col>
                    { !loading && <City cities={cities} onCityClick={handleCityClick} ></City> }
                </Col>
            </Row>
        </Container>
  );
}

export default App;
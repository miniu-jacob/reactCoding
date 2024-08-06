import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherScreen from './component/WeatherScreen';
import City from './component/City';
import { API_KEY } from './apikey';
import Footer from './component/Footer';

const cityNames = ['Current Location', 'Hanoi', 'Ho Chi Minh', 'Nha Trang', 'Dalat', 'Seoul'];
const units = 'metric'; 

function App() {
    const [city, setCity] = useState('Current Location');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    // 위도 경도를 가져오는 함수 
    const getLatLon = (callback) => {
        navigator.geolocation.getCurrentPosition((position)=>{
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            callback(lat, lon);
        });
    };

    // URL을 결정하는 함수
    const fetchWeatherDataByCity = (city) => {
        console.log('### city : ', city)
        if(city === 'Current Location') {
            // 함수를 직접 소출하면 안되고 익명 함수의 인자로 줘야 한다. 
            // getLatLon(lat, lon); <<<------ XXXXXX 틀림
            getLatLon((lat, lon)=>{
                // console.log('city: ', city, ' / values: ',lat, lon)
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
                // console.log('url',url)
                fetchWeatherData(url);
            });
        } else {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;
            fetchWeatherData(url);
        } 
    };

    // 데이터를 가져오는 함수
    const fetchWeatherData = (url) => {
        setLoading(true);
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error('Error fetching data: ', error);
            setLoading(false);
        })
    };

    
    // 랜더링 후 실행
    useEffect(()=>{
        // 랜더링 후 처음으로 API 호출
        // default city를 'Current Location' 으로 설정했기 때문에 파라미터로 city를 줄 수 있다. 
        fetchWeatherDataByCity(city);
    },[city]);
   
    return (
        <Container className='white-board'>
            <Row className='justify-content-md-center'>
                <Col md='auto'></Col>
                { loading ? <div>Loading...</div> : 
                <WeatherScreen data={data} ></WeatherScreen>  }
            </Row>
            <Row>
                <Col>
                    <City cityNames={cityNames} 
                    buttonClick={fetchWeatherDataByCity} 
                    >
                    </City> 
                </Col>
            </Row>
            <Footer></Footer>
        </Container>
  );
}

export default App;
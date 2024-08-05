import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherScreen from './component/WeatherScreen';
import City from './component/City';

const cities = ['Current Location', 'Hanoi', 'Ho Chi Minh', 'Dalat', 'Seoul', 'Nha Trang'];

function App() {
    const handleCityClick = (city) => {
        console.log(`${city} 를 선택했음` )
        
    }
    
    return (
        <Container className='white-board'>
            <Row className='justify-content-md-center'>
                <Col md='auto'></Col>
                <WeatherScreen></WeatherScreen>
            </Row>
            <Row>
                <Col>
                    <City cities={cities} onCityClick={handleCityClick} ></City>
                </Col>
            </Row>
        </Container>
  );
}

export default App;
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import WeatherScreen from './component/WeatherScreen';


function App() {
    return (
        <Container className='container'>
            <Row className='justify-content-md-center'>
                <Col md='auto'></Col>
                <WeatherScreen></WeatherScreen>
            </Row>
        </Container>
  );
}

export default App;
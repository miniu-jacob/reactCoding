// File: src/components/Navbar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // faTimes 아이콘 추가
import { Container, Row, Col, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const menuItems = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];

const Navbar = ({ hasPermission, setHasPermission }) => {

    const colCommon = 'col-auto border-bottom border-black border-1';
    const colSearch = `${colCommon} ms-3 me-auto d-md-none`;
    const colSecondSearch = `${colCommon} me-3 ms-auto d-none d-md-block`;
    const colLogin = `col-auto me-3 ms-auto`;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const moveHome = () => navigate('/');
    const checkLoginAction = () => {
        if(hasPermission){
            setHasPermission(false);
            navigate('/login');
        } else {
            navigate('/login');
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Container fluid className='second-container'>
            <Row className='justify-content-between'>
                <Col className={`${colSearch}`}>
                    <SearchBar />
                </Col>
                <Col className='col-left d-md-none'>
                    <Button variant='link' className='text-black' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} size={'lg'} />
                    </Button>
                </Col>
                <Col className={`${colLogin} login-area`} onClick={checkLoginAction}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className='ms-2'>
                        {hasPermission ? '로그아웃' : '로그인'}
                    </span>
                </Col>
            </Row>
            <Row className='main-area'>
                <Col className='text-center mb-3'>
                    <img className='img-src logo-img' 
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" 
                        alt="Logo" 
                        onClick={moveHome}
                        style={{ width: '80px'}}
                    />
                </Col>
            </Row>

            {/* 상단 navbar  */}
            <Row className={`row d-md-none ${isMenuOpen ? '' : 'd-none'}`}> 
                <Col className='col-auto d-md-none' md={1}></Col>
                <Col className='menu-area d-flex justify-content-center flex-wrap gap-1'>
                    {menuItems.map((menu, index) => {
                        return <button className='border-0 bg-white' key={index}>{menu}</button>
                    })}
                </Col>
                <Col className={`${colLogin} d-flex d-none d-md-block`}>
                    <SearchBar />
                </Col>
            </Row>

            {/* 슬라이딩 메뉴 */}
            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <Button variant='link' className='text-black close-btn' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faTimes} size={'lg'} />
                </Button>
                <div className='menu-content'>
                    {menuItems.map((menu, index) => (
                        <button className='border-0 bg-white w-100 text-start py-2' key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <Row className={`d-none d-md-flex`}> 
                <Col className='menu-area d-flex justify-content-center flex-wrap gap-1'>
                    {menuItems.map((menu, index) => (
                        <button className='border-0 bg-white' key={index}>{menu}</button>
                    ))}
                </Col>
                <Col className={`${colSecondSearch}`}>
                    <SearchBar />
                </Col>
            </Row>
        </Container>
    );
}

export default Navbar;

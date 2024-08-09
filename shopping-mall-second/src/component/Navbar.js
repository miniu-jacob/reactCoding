import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const menuItems = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];


const Navbar = ({ hasPermission, setHasPermission }) => {

    const colCommon = 'col-auto border-bottom border-black border-1';
    const colSearch = `${colCommon} ms-3 me-auto d-md-none`;
    const colSecondSearch = `${colCommon} me-3 ms-auto`;
    const colLogin = `col-auto me-3 ms-auto`;
    const navigate = useNavigate();

    const moveHome = () => navigate('/');
    // const moveLogin = () => navigate('/login');
    const checkLoginAction = () => {
        if(hasPermission){
            // 로그아웃 동작
            setHasPermission(false); // 로그인 상태 해제
            navigate('/login');
        } else {
            // 로그인 페이지로 이동
            navigate('/login');
        }
        
    }

  return (
    <Container fluid className='second-container'>
        <Row className='justify-content-between'>
        {/* <Row className='nav-top mt-3'> */}
            <Col className={`${colSearch}`}>
                <SearchBar></SearchBar>
            </Col>
            {/* 로그인한 유저라면 로그인, 아니면 로그아웃 */}
            <Col className={`${colLogin} login-area`} onClick={checkLoginAction} > 
                <FontAwesomeIcon icon={faUser}/>
                <span className='ms-2'>
                    { hasPermission ? '로그아웃' : '로그인'}
                </span>
            </Col>
        </Row>
        <Row className='main-area'>
            <Col className='text-center mb-3'>
                <img className='img-src logo-img' 
                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" 
                 alt="" 
                 onClick={moveHome}
                 style={{ width : '80px'}}
                  />
            </Col>
        </Row>
        <Row className='row'>
            <Col className='col-auto d-none d-md-block' md={1}></Col>
            <Col className='menu-area d-flex justify-content-center flex-wrap gap-1'>
                { 
                    menuItems.map((menu, index) => {
                        return <button className='border-0 bg-white' key={index}>{menu}</button>
                    })
                }
            </Col>
            <Col className={`${colSecondSearch} d-flex d-none d-md-block `}>
                <SearchBar></SearchBar>
            </Col>
        </Row>
    </Container>
  )
}

export default Navbar

import './App.css';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';
import { Products, Login, User, SearchResult, ProductDetailPage, FilteredProducts } from './page';
import  PrivateRoute from './route/PrivateRoute';
import { useState, useEffect } from 'react';


function App() {

    const [ hasPermission, setHasPermission] = useState(false);
    
    useEffect(()=>{
        // console.log('권한 상태: ', hasPermission)
    },[hasPermission]);

  return (
    <Container fluid className='container-fluid' >
        <Row className='mt-2 mb-3'>
            <Col>
                <Navbar hasPermission={hasPermission} setHasPermission={setHasPermission}></Navbar>
            </Col>
        </Row>
        <Row>
            <Col className='text-center'>
            <Routes>
                <Route path='/' element={<Products />}></Route>
                <Route path='/login' element={
                    //  여기에 로그인 유저 확인 로직 추가
                    // hasPermission 이 true 이면 User 컴포넌트 랜더링 
                    hasPermission ? (
                        <User 
                            hasPermission={hasPermission}
                            setHasPermission={setHasPermission} 
                        />
                    ) : (
                        // 아니면 로그인 컴포넌트 랜더링
                        <Login 
                        hasPermission={hasPermission}
                        setHasPermission={setHasPermission} />)
                }>
                </Route>
                    
                <Route path='/products/:id'
                    element={
                        <PrivateRoute hasPermission={hasPermission} />}></Route>
                {/* <Route path='/products/:id'element={<ProductDetailPage />}></Route> */}
                <Route path='/' element={<SearchResult />}></Route>
                <Route path='products' element={ <FilteredProducts />}></Route>
            </Routes>
            </Col>
        </Row>
    </Container>
  );
}

export default App;

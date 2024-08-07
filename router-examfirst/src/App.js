import './App.css';
import { About, Home, Products, ProductsDetailPage, SearchResult, FilteredProducts, Login, Member, PrivateRoute } from './page'
import {Routes, Route, Link, useParams, useSearchParams, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function App() {
    const navigate = useNavigate();
    const moveProductPage = () => {
        navigate('/products');
    }

    const movePage = (path) =>navigate(`/${path}?query=apple`);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ isMember, setIsMember ] = useState(false);

    const PrivateRoute = () => {
        // return isMember === true ? <Member /> : <Login /> 
        return isMember === true ? <Member /> : <Navigate to='/login' /> 
        // 유저가 로그인을 했다면? 유저 페이지
        // 유저가 로그인을 하지 않았다면? 로그인 페이지
    
    }

  return (
    <div>
        <nav>
            <div className='buttons'>
                <Link to='/' className='button'>Home 화면</Link>
                <Link to='/about' className='button'>About 화면</Link>
                <button className='button' onClick={moveProductPage}>제품 화면 </button>
                <button className='button' onClick={() => movePage('search') } > 검색 화면</button>
                <button className='button' onClick={() => movePage('filtered-products') } > 필터 화면</button>
                <button className='button' onClick={() => movePage('login') } > 로그인</button>
            </div>
        </nav>
        <div className='container'>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/products' element={<Products />} ></Route>
                <Route path='/products/:id' element={<ProductsDetailPage />}></Route>
                <Route path='/search' element={<SearchResult />} ></Route>
                <Route path='/filtered-products' element={<FilteredProducts 
                    searchParams={searchParams} 
                    setSearchParams={setSearchParams}
                />}></Route>
                <Route path={'/login'} element={<Login />}></Route>
                <Route path={'/member'} element={<PrivateRoute />}></Route>
            </Routes>
        </div>        
        
    </div>
  );
}

export default App;

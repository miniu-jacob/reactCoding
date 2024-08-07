import './App.css';
import { Home, About, ProductPage, ProductDetailPage, User, Login } from './page';
import {Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react';

// const menuItems = [ 'Home', 'About', 'Products', 'DetailPage', 'Login'];
const menuItems = [ 'Home', 'About', 'ProductPage'];

function App() {
    const navigate = useNavigate();
    const [ isMember, setIsMember ] = useState(false);

    const movePage = (path) => {
        if(path.toLowerCase() === 'home' ){
            navigate('/');
        } else if(path.toLowerCase() === 'productpage'){
            navigate('/products');
        } else if (path.toLowerCase() === 'productdetailpage'){
            navigate('/products/:id');
        }
         else {
            navigate(`/${path.toLowerCase()}`);
        }
    }

    const PrivateRoute = () => {
        return isMember === true ? <User /> : <Navigate to='/login' />;
        // return isMember === true ? <User /> : <Link to='/login' />;
        // return isMember === true ? <User /> : <Link to='/login' />;
    }

  return (
    <div>
        <nav className='menu-area'>
            { menuItems.map((menu, index)=>(
                <button key={index} onClick={() => movePage(menu)}>{menu}</button>
                ))
            }

        </nav>
        <div className='container'>
            <Routes>
                <Route path={'/'} element={<Home />}></Route>
                <Route path={'/about'} element={<About />}></Route>
                <Route path={'/products'} element={<ProductPage />}></Route>
                <Route path={'/products/:id'} element={<ProductDetailPage />} ></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/user' element={<PrivateRoute />}></Route>
                {/* <Route path='/user' element={<User />}></Route> */}
            </Routes>
        </div>
    </div>
  );
}

export default App;

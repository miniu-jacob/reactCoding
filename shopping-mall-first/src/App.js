import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {

  // 로그인을 관리하는 변수
  const [enableLogin, setEnableLogin] = useState(false);

  useEffect(()=>{
    console.log('enable login value: ', enableLogin)
    
  },[enableLogin])

  return (
    <div className='container'>

      {/* Navbar 라는 컴포넌트를 만든다. */}
      <Navbar />

      <Routes>
        <Route path='/' element={< ProductAll />}>Home</Route>
        <Route path='/login' element={<Login setEnableLogin={setEnableLogin} />}>Home</Route>
        {/* <Route path='/products/:id' element={<ProductDetail />}>Home</Route> */}
        <Route path='/products/:id' element={<PrivateRoute enableLogin={enableLogin} />} ></Route>
        

      </Routes>
    </div>
  );
}

export default App;

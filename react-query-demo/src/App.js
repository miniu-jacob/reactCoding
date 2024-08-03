import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'
import ReactQueryPage from './ReactQueryPage.js'
import NormalPage from './NormalPage.js';


function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/' style = {{ marginRight: '10px', padding: '20px' }} >
          HomePage
        </Link>
        <Link to='/react-query' >React Query</Link>
        <Link to='/normal' >Normal Page</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/react-query' element={ <ReactQueryPage /> } ></Route>
        <Route path='/normal' element={ <NormalPage /> } ></Route>
      </Routes>

    </div>
  );
}

export default App;

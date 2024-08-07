import './App.css';
import Navbar from './component/Navbar';
import SearchBar from './component/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const menuItems = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'Sale', '지속가능성'];

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Container className='main-section' >
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" width={80} />
            <Row className='row' >
                {/* md: 2, sm: 0 */}
                <Col md={2} sm={0}></Col>  
                <Col className='menu-area' md={8} sm={10}>
                { 
                    menuItems.map((menu, index) => {
                        return <button key={index}>{menu}</button>
                    })
                }
                </Col>
                <Col md={2} sm={2} className='search-area'>
                    <SearchBar></SearchBar>
                </Col>
            </Row>
            <Row>
                <Col>
                    Items
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';
// import store from './redux/store';



function App() {
  return (
    <div>
      <Container>
      <h1 className='title'>연락처</h1>
        <Row className='page-area'>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>


        </Row>
  
      </Container>
    </div>
  );
}

export default App;

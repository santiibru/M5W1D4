import './App.css';
import MyNav from './MyNav';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';
import MyFooter from './MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';


function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <Container>
        <Row>
            <AllTheBooks />
        </Row>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;

import './App.css';
import MyNav from './MyNav';
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks';
import MyFooter from './MyFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';



function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <Container>
          <AllTheBooks />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;

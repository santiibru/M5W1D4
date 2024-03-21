import './App.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
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

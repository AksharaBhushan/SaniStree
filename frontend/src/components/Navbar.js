import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
const Home = () => {
    return ( 
        <div>
        <Navbar  expand="lg" style={{backgroundColor:'#FFBBBB'}}>
  <Container>
    <Navbar.Brand href="#home"><b>Saniस्त्री</b></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" style={{marginRight:'10px'}}>
      <Nav className="me-auto">
        <Nav.Link href="#home" className='nav-item'>Home</Nav.Link>
        <Nav.Link href="#link" className='nav-item'>Link</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
     );
}
 
export default Home;
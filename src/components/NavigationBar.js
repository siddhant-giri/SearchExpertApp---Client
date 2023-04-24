import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/moneyPlantLogo.png'
import '../App.css';
import { FaSearch } from "react-icons/fa";

function NavigationBar() {
  return (
    <Navbar bg="white" className='Navbar' expand="lg">
      <Container fluid className='px-5'>
        <Navbar.Brand href="#"><img src={Logo} alt="logo" height={40}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">Experts</Nav.Link>
            <Nav.Link href="#action2">Q & A</Nav.Link>
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action1">Products</Nav.Link>
            <Nav.Link href="#action1">Learn</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <span className='searchIcon'><FaSearch /></span>
            <Button className='loginBtn'>Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
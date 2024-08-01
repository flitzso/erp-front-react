import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';
import './css/NavBarErp.css';

function NavBarErp() {
  return (
    // Logo NavBar
    <Navbar expand="lg" className="barraNav bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand href="#">
        <img
          src="caminho/para/sua/logo.png"
          alt="Logo"
          height="30" // Ajuste a altura conforme necessário
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>

        {/* Funcionalidades do navbar */}
          <Form className="d-flex">
            <Button variant="success" className="me-2">
              <FaSearch />
            </Button>
            <Button variant="success" className="me-2">
              <FaSearch />
            </Button>
            <Button variant="success" className="me-2">
              <FaSearch />
            </Button>
            <Button variant="success" className="me-2">
              <FaSearch />
            </Button>
          </Form>
           {/* Icone de notificação */}
           <a href="" class="text-body"> 
           <i class="fas fa-envelope fa-2x"></i>
           <span class="badge rounded-pill badge-notification bg-danger">9</span>
           </a>
           {/* Nome da conta logada */}
          <h5>You name</h5>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarErp;

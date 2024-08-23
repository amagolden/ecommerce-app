import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavHeader = ({ cartCount, cartTotal }) => {
    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#">Reese's Book Club Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
                <Nav.Link href="#">Cart</Nav.Link>
                <Nav.Link href="#">Count: {cartCount}</Nav.Link>
                <Nav.Link href="#">Cost: ${cartTotal}</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavHeader;
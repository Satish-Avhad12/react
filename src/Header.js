import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


 export function Header() {
  return (
    
      <Navbar bg="primary" data-bs-theme="light">
        <Container>
         {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand>*/ }
          < Nav  fill variant="tabs"  >
          <Nav.Link href="/home">Options</Nav.Link>
            <Nav.Link href="/home"> <b>Home</b></Nav.Link>
            <Nav.Link href="/ContactUS"><b>ContactUS</b></Nav.Link>
            <Nav.Link href="/ListEmployee"><b>ListEmp</b></Nav.Link>
            <Nav.Link href="/ListProduct"><b>ListProd</b></Nav.Link>
            <Nav.Link href="/ListCustomer"><b>ListCust</b></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}


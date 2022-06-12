import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
function NavBar() {
  return (
  <Navbar bg="transparent" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/">News Adda</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '300px' }}
        navbarScroll
      >
         <Nav.Link href="/">Home</Nav.Link>
         <Nav.Link href="/data">Data</Nav.Link>
         <Nav.Link href="/card">Card</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar
import React from 'react'
import {Container, Navbar,Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="/">Sumith</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/cart"><i className='fas fa-shopping-cart'>Cart</i></Nav.Link>
        <Nav.Link href="/login"><i className='fas fa-user'>Login</i></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import "./MyNavBarTop.css";

const MyNavBarTop = () => {
    return (
      <>  

  <Navbar collapseOnSelect fixed='top' expand="sm" className="color-nav" variant="dark">
  <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Brand className="nav-item" href="#home">Hamari Bakery</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
      <Nav.Link className="nav-item" href="#features">Occasions</Nav.Link>
      <Nav.Link className="nav-item" href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className="nav-item" variant="outline-light">Search</Button>
    </Form>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  
  </>
  
     )
}

export default MyNavBarTop;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button
import { FaUser } from 'react-icons/fa'; // Import FontAwesome User Icon
import './Header.css';

export default function Header() {
  return (
    <Navbar bg="black" data-bs-theme="dark">
      
    <Container>
    <Navbar.Brand href="#home">R A D I A N T</Navbar.Brand>
      <Nav className="mx-auto">
      
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Offices</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
      
    </Container>

    <Nav className="login-btn"> 
          <Button variant="outline-light" href="#login">
            <FaUser /> Login
          </Button>
        </Nav>
  </Navbar>
  )
}

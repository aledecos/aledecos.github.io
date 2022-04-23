import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Container } from 'react-bootstrap';
import "../../Styles/Navbar.css"
import logo from "../../Resources/Logo-White.png"

function Navsection() {
  return (
    <div className="header ">
        <img className='logo' src={logo}/>
        <Navbar className='navbar'  expand="lg" >
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-text ">
                    <Nav.Link href="#home" style={{color: "white", paddingRight:"100px"}} >Home</Nav.Link>
                    <Nav.Link href="#link" style={{color: "white", paddingRight:"30px"}} >Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    
    
  )
}

export default Navsection   
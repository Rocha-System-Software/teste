import { Navbar, Container, Nav} from 'react-bootstrap';
import React, { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // BOOTSTRAP

export default function Header(){

const [background, setBackground] = useState(false);

const bgTheme = (background ? "none" : "black");

function ScrollToComponent (id) {
    document.getElementById(id).scrollIntoView();
    setBackground(id === "home" ? true : false);
}

    return(
        
        <header>
            <Navbar className="header" variant="dark" bg={bgTheme} expand="md">
                <Container className="header">
                    <Navbar.Brand href="#home"><FaCode className="logo" onClick={() => ScrollToComponent('home') }/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link className="list-header" onClick={() => ScrollToComponent('aboutme')}>About me</Nav.Link>
                            <Nav.Link className="list-header" onClick={() => ScrollToComponent('projects')}>Projects</Nav.Link>
                            <Nav.Link className="list-header" onClick={() => ScrollToComponent('contacts')}>Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
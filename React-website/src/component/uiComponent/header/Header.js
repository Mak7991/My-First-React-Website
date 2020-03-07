import React from 'react';
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import './Header.css';

const Header = (props) => {
    const { fixedHeader } = props;
    console.log(fixedHeader)
    return (
        <Navbar expand="lg" className={`custom-header ${fixedHeader ? 'fixedHeader' : ''}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <Image src="assets/images/logo_white.png" className="logo" draggable={false} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="m-r">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">How it works</Nav.Link>
                        <Nav.Link href="#services">Pricing</Nav.Link>
                        <Nav.Link href="#work">Review</Nav.Link>
                        <Nav.Link href="#contact">FAQ</Nav.Link>
                        <Nav.Link href="#contact">Search</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;


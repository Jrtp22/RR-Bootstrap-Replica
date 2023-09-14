import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';

function TopBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container style={{ display: "flex",wrap:"nowrap", alignItems: "center" }}>
                                    <NavDropdown title="🟰" id="basic-nav-dropdown">
                        {/* Dropdown items go here */}
                    </NavDropdown>
                    <div className="mr-auto">

                    <Navbar.Brand href="#home">
                        <img
                            alt="Instacart Logo"
                            src="https://www.instacart.com/assets/beetstrap/brand/2022/carrotlogo-1286c257354036d178c09e815906198eb7f012b8cdc4f6f8ec86d3e64d799a5b.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </div>

                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="ml-auto">
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success">Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;

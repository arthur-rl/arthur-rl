import React from 'react'
import { Navbar, FormControl, Form, NavDropdown, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
const navbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <NavLink to="/" className="nav-link">home.</NavLink>
                        {/* <NavLink to="/about" className="nav-link">about me.</NavLink>
                        <NavLink to="/projects" className="nav-link">projects.</NavLink>
                        <NavLink to="/contact" className="nav-link">contact me.</NavLink> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default navbar;
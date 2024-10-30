import { Link, useLocation } from 'react-router-dom';
import React from 'react';

// function Nav() {
//     const currentPage = useLocation().pathname;

//     return (
//         <header>
            // <ul className='nav nav-tabs'>
            //     <li className='nav-item'>
            //         <Link className={`nav-link ${currentPage === '/' ? 'active' : ''}`} to='/'>Home</Link>
            //     </li>
            //     <li className='nav-item'>
            //         <Link className={`nav-link ${currentPage === '/About' ? 'active' : ''}`} to='/About'>About</Link>
            //     </li>
            //     <li className='nav-item'>
            //         <Link className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`} to='/Contact'>Contact</Link>
            //     </li>
            // </ul>
//         </header>
//     );
// }

// export default Nav;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
    const currentPage = useLocation().pathname;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Living Waters Church</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link className={`nav-link ${currentPage === '/' ? 'active' : ''}`} to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${currentPage === '/About' ? 'active' : ''}`} to='/About'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`} to='/Contact'>Contact</Link>
                </li>
            </ul>
            <NavDropdown title="Ministries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Youth</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Men
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
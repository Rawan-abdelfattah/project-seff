import React from 'react';
import TopNav from '../TopNav/TopNav';
import {Container,Nav,Navbar,NavDropdown,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { Twirl as Hamburger } from 'hamburger-react';
import logo from '../../assets/images/seff_logo_transparent.png';
import './Header.css';

const Header = () => {
  return (
      <section className='header position-absolute top-0 left-0 w-100 ' id='header' >
        <TopNav />
        <Navbar expand="lg">
          <Container fluid='xl' className='header-container p-0'>
            <Navbar.Brand>
              <img className='header-logo' src={logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" ><Hamburger className='nav-toogle-icon' color='#BF9B30'/></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="nav-container d-flex justify-content-between  w-100">
                <Nav.Link href="#home" className='nav-link text-uppercase text-white position-relative'>Home</Nav.Link>
                <Nav.Link href="#about" className='nav-link text-uppercase text-white position-relative'>About</Nav.Link>
                <NavDropdown title=
                   {<span className='text-uppercase text-white'>Tech <FontAwesomeIcon icon={faChevronDown} className='dropdown-icon ms-1'/></span>}
                   id="basic-nav-dropdown">
                  <NavDropdown.Item href="laptops" className='text-uppercase text-white'>Laptops</NavDropdown.Item>
                  <NavDropdown.Item href="phones" className='text-uppercase text-white'>
                    Phones
                  </NavDropdown.Item>
                  <NavDropdown.Item href="tablets" className='text-uppercase text-white'>Tablets</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#business" className='nav-link text-uppercase text-white  position-relative'>Business</Nav.Link>
                <Nav.Link href="#security" className='nav-link text-uppercase text-white  position-relative'>Security</Nav.Link>
                <Nav.Link href="#sports"   className='nav-link text-uppercase text-white    position-relative'>Sports</Nav.Link>
                <Nav.Link href="#medical"  className='nav-link text-uppercase text-white   position-relative'>Medical</Nav.Link>
                <Nav.Link href="#startups" className='nav-link text-uppercase text-white  position-relative'>Startups</Nav.Link>
                <Nav.Link href="#apps"     className='nav-link text-uppercase text-white  position-relative'>Apps</Nav.Link>
                <NavDropdown title=
                  {<span  className='text-uppercase text-white'>Courses <FontAwesomeIcon icon={faChevronDown} className='dropdown-icon ms-1'/></span>}
                  id="basic-nav-dropdown">
                  <NavDropdown.Item href="course1" className='text-uppercase text-white'>Course1</NavDropdown.Item>
                  <NavDropdown.Item href="course2" className='text-uppercase text-white'>
                    Course2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="course3" className='text-uppercase text-white'>Course3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#jobs" className='nav-link text-uppercase text-white  position-relative'>Jobs</Nav.Link>
                <Nav.Link><Button variant="warning" className='btn-contact text-uppercase text-white position-relative  '>Contact Us</Button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
  )
}
export default Header;

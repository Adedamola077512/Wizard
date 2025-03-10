
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavigationBar.css';
import { FaStar } from "react-icons/fa6";
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
function NavigationBar() {
      // useEffect(() => {
      //     AOS.init({
      //       duration: 2000,
      //       once: true, 
      //     });
      //   }, []);
  return (
    <Navbar expand="lg" variant="light" sticky="top" className="py-3 wizard">
      <Container>
        <Navbar.Brand href="#" className='CWorld' data-aos="fade-right"><FaStar /><b>WizardZ</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto text-center" data-aos="fade-up">
            <Nav.Link href="/home" className='home'><b>About us</b></Nav.Link>
            <Nav.Link href="/about" className='home'><b>Service</b></Nav.Link>
            <Nav.Link href="/blog" className='home'><b>Use Cases</b></Nav.Link>
            <Nav.Link href="/partner" className='home'><b>Pricing</b></Nav.Link>
            <Nav.Link href="/faq" className='home'><b>Bolg</b></Nav.Link>
          </Nav>
          <Button href='/contact' className="contact-btn" data-aos="fade-left">Request a qoute</Button>
        </Navbar.Collapse>      
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

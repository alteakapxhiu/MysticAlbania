import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'; // Import Bootstrap Button
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JavaScript bundle
import TourLogo from '../assets/img/TourLogo.png';
import { FiUser } from 'react-icons/fi';  // Import the person icon


export const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine the active link styles
  const linkStyle = (path) => ({
    fontWeight: location.pathname === path ? 'bold' : 'normal'
  });

  return (
    <Navbar className={`custom-navbar ${scrolling ? 'scrolled' : ''}`} expand="lg">
      <Container>
        <Navbar.Brand as="div" onClick={handleHomeClick} style={{ cursor: 'pointer' }}>
          <img
            alt="Tour Logo"
            src={TourLogo}
            width="100"
            height="90"
            className="d-inline-block align-top"
          />
          Mystic Albania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="underline">
            <Nav.Item>
              <Nav.Link as="div" onClick={handleHomeClick} style={{ cursor: 'pointer', ...linkStyle('/') }}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#attractions" style={linkStyle('#attractions')}>
                Attractions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#AlbTopGems" style={linkStyle('#top-gems')}>
                Albania's Top Gems
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/event-map" style={linkStyle('/event-map')}>
                Event Map
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
          <Button variant="outline-primary" as={Link} to="/sign-in" style={linkStyle('/sign-in')} className="ms-3">
              <FiUser className="me-2" /> 
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiCamera } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "./Home.css";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar-dark bg-black py-3">
      <Container className="d-flex justify-content-between">
        {/* Brand Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <CiCamera className="me-2 text-success" size={35} />
          <span className="text-light fw-bold fs-4">PhotoFolio</span>
        </Navbar.Brand>

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-uppercase fw-semibold mx-auto">
            <Nav.Link as={Link} to="/" className="text-light mx-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light mx-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-light mx-3">
              Services
            </Nav.Link>

            {/* Gallery Dropdown */}
            <NavDropdown title={<Link to="/gallery" className="text-light text-decoration-none">Gallery</Link>} className="text-light mx-3" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/gallery#nature">Nature</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery#people">People</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery#architecture">Architecture</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gallery#sports">Sports</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact" className="text-light mx-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Social Media Icons */}
        <div className="d-flex gap-1">
          {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedin].map((Icon, idx) => (
            <Icon key={idx} className="text-light" size={22} />
          ))}
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

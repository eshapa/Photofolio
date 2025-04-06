import React, { useState } from "react";
import { Container, Button, Row, Col, Navbar, Nav, NavDropdown, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { FaFacebookF, FaInstagram, FaLinkedin,  FaLink, FaSearch, FaArrowLeft, FaArrowRight } from "react-icons/fa";
 import {FaXTwitter} from "react-icons/fa6";
import { CiCamera } from "react-icons/ci"; // ✅ Importing CiCamera
import { motion } from "framer-motion";

import p1 from "../assets/p1.jpg";
import a from "../assets/gallery-2.jpg";
import b from "../assets/gallery-3.jpg";
import c from "../assets/gallery-4.jpg";
import d from "../assets/gallery-5.jpg";
import e from "../assets/gallery-6.jpg";
import f from "../assets/gallery-7.jpg";
import g from "../assets/gallery-8-2.jpg";

const images = [p1, a, b, c, d, e, f, g];

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
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
              <NavDropdown title="Gallery" className="text-light mx-3" menuVariant="dark">
                <NavDropdown.Item as={Link} to="/#nature">Nature</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/#people">People</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/#architecture">Architecture</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/#sports">Sports</NavDropdown.Item>
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

      {/* Hero Section */}
      <Container fluid className="home-container text-center text-light bg-black py-5">
        <motion.h1 className="fw-bold text-light" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          I'm <span className="text-success highlight">Jenny Wilson</span> a Professional
        </motion.h1>
        <motion.h1 className="fw-bold text-light" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
          Photographer from New York City
        </motion.h1>
        <motion.p className="text-secondary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.
        </motion.p>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
          <Button variant="success">AVAILABLE FOR HIRE</Button>
        </motion.div>
      </Container>

      {/* Gallery Section */}
      <Container fluid className="gallery-container mt-5">
        <Row className="justify-content-center">
          {images.map((img, idx) => (
            <Col key={idx} md={3} className="gallery-item mb-4">
              <div className="image-wrapper">
                <motion.img 
                  src={img} 
                  alt="Gallery" 
                  className="img-fluid rounded w-100 gallery-img" 
                  style={{ height: "250px", objectFit: "cover" }}
                  initial={{ scale: 0.9, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  transition={{ duration: 0.8, delay: idx * 0.2 }} 
                />
                <div className="overlay">
                  <FaLink className="overlay-icon" size={30} onClick={() => openModal(idx)} />
                  <FaSearch className="overlay-icon ms-3" size={30} onClick={() => navigate(`/gallery-view?image=${idx}`)} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Image Modal */}
      <Modal show={modalShow} onHide={closeModal} centered size="lg">
        <Modal.Body className="text-center position-relative p-0" style={{ background: "transparent", border: "none" }}>
          <button className="btn-close position-absolute top-0 end-0 m-3" onClick={closeModal}></button>
          <img src={images[currentImageIndex]} alt="Gallery" className="img-fluid rounded" />
          <div className="d-flex justify-content-between mt-3">
            <Button variant="dark" onClick={prevImage}><FaArrowLeft /></Button>
            <Button variant="dark" onClick={nextImage}><FaArrowRight /></Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;

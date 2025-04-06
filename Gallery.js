import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLink,
  FaSearch,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa"; // Changed from "react-icons/fa6" to "react-icons/fa"
import "./Gallery.css";

// Import your custom Navbar & Footer
import NavbarComponent from "../components/NavbarComponent";
import Footer from "../components/Footer";

// Import images (adjust paths as needed)
import p1 from "../assets/p1.jpg";
import a from "../assets/gallery-2.jpg";
import b from "../assets/gallery-3.jpg";
import c from "../assets/gallery-4.jpg";
import d from "../assets/gallery-5.jpg";
import e from "../assets/gallery-6.jpg";
import f from "../assets/gallery-7.jpg";
import g from "../assets/gallery-8-2.jpg";

// Array of images
const images = [p1, a, b, c, d, e, f, g];

const Gallery = () => {
  // State for modal visibility
  const [modalShow, setModalShow] = useState(false);
  // State for which image is currently displayed in the modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // For navigating to a separate gallery-view page
  const navigate = useNavigate();

  // Open the modal with a specific image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalShow(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalShow(false);
  };

  // Go to the next image (wraps around)
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image (wraps around)
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* NAVBAR */}
      <NavbarComponent />

      {/* HERO / TITLE SECTION */}
      <section className="gallery-hero text-center text-light bg-black py-5">
        <Container>
          <h1 className="display-4 fw-bold">Gallery</h1>
          <p className="mt-3 text-secondary mx-auto hero-paragraph">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officia quo dicta vel
            voluptus consequatur ut a odio voluptatem. Sit dolorem debitis veritatis ratione
            dolores. Quasi rerum dicta. Sit quaerat quam dolorem.
          </p>
          <Button variant="success" className="mt-3">
            AVAILABLE FOR HIRE
          </Button>
        </Container>
      </section>

      {/* BREADCRUMB BAR */}
      <div className="breadcrumb-container">
        <div className="breadcrumb-content">
          <a href="/" className="breadcrumb-home">Home</a> / <span>About</span>
        </div>
      </div>

      {/* GALLERY SECTION */}
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
                  <FaLink
                    className="overlay-icon"
                    size={30}
                    onClick={() => openModal(idx)}
                  />
                  <FaSearch
                    className="overlay-icon ms-3"
                    size={30}
                    onClick={() => navigate(`/gallery-view?image=${idx}`)}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* IMAGE MODAL */}
      <Modal
        show={modalShow}
        onHide={closeModal}
        centered
        size="lg"
        contentClassName="custom-modal-content" // Remove default white bg
      >
        <Modal.Body
          className="text-center position-relative p-0"
          style={{ background: "transparent", border: "none" }}
        >
          {/* Close Button */}
          <button
            className="btn-close position-absolute top-0 end-0 m-3"
            onClick={closeModal}
          ></button>

          {/* Modal Image */}
          <img
            src={images[currentImageIndex]}
            alt="Gallery"
            className="img-fluid rounded"
          />

          {/* Navigation Arrows */}
          <div className="d-flex justify-content-between mt-3">
            <Button variant="dark" onClick={prevImage}>
              <FaArrowLeft />
            </Button>
            <Button variant="dark" onClick={nextImage}>
              <FaArrowRight />
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Gallery;

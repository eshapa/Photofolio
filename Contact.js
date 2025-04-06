import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

//import NavbarComponent from "./NavbarComponent";
import "./Contact.css"; // Import CSS
import NavbarComponent from "./NavbarComponent";

const Contact = () => {
  return (
    <>
    <NavbarComponent></NavbarComponent>
      <div className="contact-page">
        {/* Contact Header */}
        <Container className="text-center contact-header">
          <h1>Contact</h1>
          <p className="contact-description">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem.
          </p>
          <button className="hire-button">AVAILABLE FOR HIRE</button>
        </Container>

        {/* Breadcrumb */}
             
        <div className="breadcrumb-container">
        <div className="breadcrumb-content">
          <a href="/" className="breadcrumb-home">Home</a> / <span>About</span>
        </div>
      </div>

        {/* Contact Info Section */}
        <Container className="contact-info-container">
          <div className="contact-info">
            {/* Location */}
            <div className="contact-item">
              <div className="icon-circle">
                <FaMapMarkerAlt className="icon" />
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>A108 Adam Street, 108 rytuj residence New York, NY 535022</p>
              </div>
            </div>

            {/* Call */}
            <div className="contact-item">
              <div className="icon-circle">
                <FaPhone className="icon" />
              </div>
              <div className="contact-text">
                <h4>Call</h4>
                <p>+1  5467 5589 55488 559054</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="icon-circle">
                <FaEnvelope className="icon" />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>sumagoinfotechnsk@example.com</p>
              </div>
            </div>
          </div>
        </Container>

        {/* Contact Form */}
        <Container>
          <Form className="contact-form">
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={4} placeholder="Message" />
            </Form.Group>
            <Button variant="success" type="submit">
              Send Message
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./About.css";
import profileImage from "../assets/profile-img.jpg";
import NavbarComponent from "../components/NavbarComponent";
import Test from "../components/Test"; 



const About = () => {
  
  return (
    <>
      <NavbarComponent />
      <section className="about-header text-center">
        <h1>About</h1>
        <p>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem.
        </p>
        <p>
          Sit dolorem debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
          ipsum dolorem.
        </p>
        <Button variant="success">AVAILABLE FOR HIRE</Button>
        
        <div className="breadcrumb-containerclass">
        <div className="breadcrumb-content">
          <a href="/" className="breadcrumb-home">Home</a> / <span>About</span>
        </div>
      </div>
      </section>
 

      <Container className="about-content">
        <Row className="align-items-center">
          <Col md={5} className="text-center">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-img img-fluid rounded"
            />
          </Col>
          <Col md={7}>
            <h2 className="about-title">
              UI/UX Designer, Photographer & Web Developer
            </h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Row>
        <Col md={6} xs={12} className="info-column">
          <p><span className="arrow">➤</span> <strong>Birthday:</strong> 1 May 1995</p>
          <p><span className="arrow">➤</span> <strong>Website:</strong> www.example.com</p>
          <p><span className="arrow">➤</span> <strong>Phone:</strong> +123 456 7890</p>
          <p><span className="arrow">➤</span> <strong>City:</strong> New York, USA</p>
        </Col>
        <Col md={6} xs={12} className="info-column">
          <p><span className="arrow">➤</span> <strong>Age:</strong> 30</p>
          <p><span className="arrow">➤</span> <strong>Degree:</strong> Master</p>
          <p><span className="arrow">➤</span> <strong>Email:</strong> email@example.com</p>
          <p><span className="arrow">➤</span> <strong>Freelance:</strong> Available</p>
        </Col>
      </Row>

            <p className="about-description">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
              Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt
              officia tempore. Et eius omnis.  Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid
              amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa
              magni laudantium dolores.
            </p>
        
            <p className="about-description">
              Recusandae est praesentium consequatur eos voluptatem. Vitae dolores
              aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime
              corporis aut ut ipsum consequatur.Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam
              alias sint possimus eveniet ad. Ratione in earum eum magni totam.
            </p>
          
          </Col>
        </Row>
      </Container>

     

        {/* Testimonials Section */}
        <Test />
  
    </>
  );
};

export default About;

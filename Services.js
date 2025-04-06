import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeartbeat, FaVectorSquare, FaCalendarAlt, FaWifi } from "react-icons/fa";
import "./Services.css";
import NavbarComponent from "../components/NavbarComponent";
import Test from "../components/Test"; // Importing the Test component

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <NavbarComponent />
      <div className="services-section">
        <Container className="text-center py-5">
          <h2 className="services-title">Services</h2>
          <p className="services-description">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint
            voluptas consequatur ut a odio voluptatem. Sit dolor debitis veritatis natus.
          </p>
          <button className="hire-button">AVAILABLE FOR HIRE</button>
        </Container>
        
        {/* Breadcrumb */}
        <div className="breadcrumb-container">
          <div className="breadcrumb-content">
            <a href="/" className="breadcrumb-home">Home</a> / <span>About</span>
          </div>
        </div>        {/* Services Cards */}
        <Container className="services-container">
          <Row className="justify-content-center">
            {[
              { icon: <FaHeartbeat />, title: "Lorem Ipsum", text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" },
              { icon: <FaVectorSquare />, title: "Sed ut perspici", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore" },
              { icon: <FaCalendarAlt />, title: "Magni Dolores", text: "Exceptetur sint occaecat cupidatat non proident, sunt in culpa qui officia" },
              { icon: <FaWifi />, title: "Nemo Enim", text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis" },
            ].map((service, index) => (
              <Col md={3} sm={6} className="mb-4" key={index}>
                <Card
                  className={`service-card ${activeIndex === index ? "active" : ""}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="icon-container">{service.icon}</div>
                  <Card.Body>
                    <Card.Title className="service-title">{service.title}</Card.Title>
                    <Card.Text className={`service-text ${activeIndex === index ? "visible" : ""}`}>
                      {service.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <div className="pricing-container">
          <p className="pricing-subtitle">PRICING</p>
          <h2 className="pricing-title">Check my adorable pricing</h2>

          <div className="pricing-table">
            <table>
              <tbody>
                <tr>
                  <td>Portrait Photography</td>
                  <td>$160.00</td>
                  <td>Fashion Photography</td>
                  <td>$300.00</td>
                </tr>
                <tr>
                  <td>Sports Photography</td>
                  <td>$200.00</td>
                  <td>Still Life Photography</td>
                  <td>$120.00</td>
                </tr>
                <tr>
                  <td>Wedding Photography</td>
                  <td>$500.00</td>
                  <td>Photojournalism</td>
                  <td>$200.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Test />
    </>
  );
};

export default Services;

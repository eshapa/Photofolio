import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import "./Galleryview.css";
import img1 from "../assets/gallery-2.jpg";
import img2 from "../assets/gallery-3.jpg";
import img3 from "../assets/gallery-4.jpg";
import img4 from "../assets/gallery-5.jpg";
import img5 from "../assets/gallery-6.jpg";
import img6 from "../assets/gallery-7.jpg";
import NavbarComponent from "./NavbarComponent";
import uf from "../assets/testimonials-2.jpg";


const Galleryview = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <>
      <NavbarComponent />

      <section className="gallery-hero">
        <Container>
          <h1 className="display-4 fw-bold">Gallery Single</h1>
          <p className="hero-paragraph">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorem
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
          <button className="hire-button">AVAILABLE FOR HIRE</button>
        </Container>
      </section>

      <div className="breadcrumb-bar">
        <p>
          <span style={{ color: "green", fontWeight: "bold" }}>Home</span> /
          <strong> Gallery Single</strong>
        </p>
      </div>

      <div className="image-slider">
        <button className="slider-btn prev" onClick={prevImage}>
          ❮
        </button>
        <img
          src={images[currentIndex]}
          alt={`Gallery ${currentIndex + 1}`}
          className="img-fluid"
        />
        <button className="slider-btn next" onClick={nextImage}>
          ❯
        </button>
      </div>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToImage(index)}
          ></span>
        ))}
      </div>
      <section className="portfolio-details">
  <Container>
    <div className="portfolio-content">
      {/* Left Content */}
      <div className="left-content">
        <h2>This is an example of portfolio details</h2>
        <p>
          Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
          inventore commodi labore quia quia. Exercitationem repudiandae
          officiis neque suscipit non officia eaque itaque enim.
        </p>
        <p>
          Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non
          aspernatur atque natus ut cum nam et. Praesentium error dolores
          rerum minus sequi quia veritatis eum.
        </p>

        {/* Testimonial Section */}
        <div className="testimonial">
          <p>
            <i>
              "Export tempor illum tamen malis malis eram quae irure esse
              labore quem cillum quid cillum eram malis quorum velit fore
              eram velit sunt aliqua noster fugiat irure amet legam anim
              culpa."
            </i>
          </p>
          <div className="testimonial-info">
            <img
              src={uf} // Ensure correct image path
              alt="Sara Wilsson"
              className="testimonial-img"
            />
            <div>
              <h5>Sara Wilsson</h5>
              <p>Designer</p>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="additional-info">
          <p>
            Impedit ipsum quae et aliquid doloribus et voluptatem quasi.
            Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea
            vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt
            assumenda tempore. Delectus voluptas necessitatibus est.
          </p>
          <p>
            Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis.
            Molestiae et autem libero. Explicabo et quod necessitatibus similique
            quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
          </p>
        </div>
      </div>

      {/* Right Content - Project Information */}
      <div className="right-content">
  <div className="project-info">
    <h3>Project Information</h3>
    <ul>
      <li>
        <strong>Category:</strong> Web Design
      </li>
      <li>
        <strong>Client:</strong> ASU Company
      </li>
      <li>
        <strong>Project Date:</strong> 01 March, 2020
      </li>
      <li>
        <strong>Location:</strong> New York, USA
      </li>
      <li>
        <strong>Project Duration:</strong> 3 Months
      </li>
      <li>
        <strong>Technologies Used:</strong> HTML, CSS, JavaScript, React.js, Bootstrap
      </li>
      <li>
        <strong>Team Members:</strong> John Doe, Jane Smith, Michael Brown
      </li>
      <li>
        <strong>Project URL:</strong>{" "}
        <a href="https://www.example.com">www.example.com</a>
      </li>
    </ul>
    <button className="visit-website">Visit Website</button>
  </div>
</div>

    </div>
  </Container>
</section>

    </>
  );
};

export default Galleryview;

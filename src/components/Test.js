import React, { useState } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import es from "../assets/testimonials-1.jpg";
import ys from "../assets/testimonials-2.jpg";
import ry from "../assets/testimonials-3.jpg";
import rt from "../assets/ma.jpg";
import ty from "../assets/testimonials-5.jpg";

const Test = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (_, newIndex) => setActiveIndex((newIndex % testimonials.length) + 1),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    customPaging: () => <div className="custom-dot"></div>,
    dotsClass: "slick-dots custom-dots",
  };

  const testimonials = [
    { text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster.", name: "John Larson", role: "Entrepreneur", img: es },
    { text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.", name: "Saul Goodman", role: "CEO & Founder", img: ys },
    { text: "Export tempor illum tamen malis eram quae irure esse labore quem cillum quid cillum eram malis quorum.", name: "Sara Wilsson", role: "Designer", img: ry },
    { text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.", name: "Amanda Smith", role: "Marketing Head", img: rt },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat justo nec urna cursus.", name: "Michael Brown", role: "Project Manager", img: ty },
  ];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <p className="testimonial-subtitle">TESTIMONIALS</p>
        <h2 className="testimonial-title">What they are saying</h2>
      </div>

      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-slide ${activeIndex === index ? "active-slide" : "inactive-slide"}`}>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="image-container">
                <img src={testimonial.img} alt={testimonial.name} className="profile-image" />
              </div>
              <h5 className="text-light mt-3">{testimonial.name}</h5>
              <p className="text-muted">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>

      <style>
        {
          `.testimonial-section {
            background-color: black;
            padding: 60px 15px;
            text-align: center;
          }

          .testimonial-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          .testimonial-subtitle {
            font-size: 18px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: rgba(255, 255, 255, 0.6);
            display: flex;
            align-items: left;
            justify-content: center;
            margin-bottom: 10px;
          }

          .testimonial-subtitle::after {
            content: "";
            width: 80px;
            height: 2px;
            background-color: #28a745;
            margin-left: 10px;
            display: inline-block;
          }

          .testimonial-title {
            font-size: 28px;
            font-weight: bold;
            color: white;
            margin-bottom: 20px;
            text-align: left;
          }

          .testimonial-slider {
            margin-top: 30px;
          }

          .testimonial-card {
            background: #222;
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            margin: 0 15px;
            min-height: 320px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: transform 0.5s ease, opacity 0.5s ease;
          }

          .active-slide .testimonial-card {
            transform: scale(1.1);
            z-index: 2;
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
          }

          .inactive-slide .testimonial-card {
            transform: scale(0.9);
            opacity: 0.7;
          }

          .stars {
            color: gold;
            font-size: 18px;
            margin-bottom: 10px;
          }

          .testimonial-text {
            font-style: italic;
            color: white;
            min-height: 80px;
            margin-bottom: 20px;
          }

          .image-container {
            display: flex;
            justify-content: center;
          }

          .profile-image {
            width: 70px;
            height: 70px;
            object-fit: cover;
            border-radius: 50%;
            border: 3px solid white;
          }

          .slick-dots {
            bottom: -40px;
          }

          .custom-dots li {
            margin: 0 5px;
          }

          .custom-dot {
            width: 12px;
            height: 12px;
            background: white;
            border-radius: 50%;
            opacity: 0.5;
            transition: opacity 0.3s ease;
          }

          .custom-dots .slick-active .custom-dot {
            opacity: 1;
            background: limegreen;
          }

          /* 📱 Mobile Styling */
          @media (max-width: 768px) {
            .testimonial-subtitle {
              font-size: 16px;
              text-align: center;
              display: block;
            }

            .testimonial-subtitle::after {
              display: block;
              margin: 10px auto;
            }

            .testimonial-title {
              font-size: 24px;
              text-align: center;
            }

            .testimonial-card {
              padding: 20px;
              min-height: auto;
            }

            .profile-image {
              width: 60px;
              height: 60px;
            }

            .slick-dots {
              bottom: -30px;
            }
          }`
        }
      </style>
    </section>
  );
};

export default Test;

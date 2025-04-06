import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222", // Darker Gray
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>
        © Copyright <strong>iPortfolio</strong> All Rights Reserved
      </p>
      <p>
        Designed by{" "}
        <a
          href="https://bootstrapmade.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", textDecoration: "none" }} // Ensures the link stays white
        >
          BootstrapMade
        </a>
      </p>
    </footer>
  );
};

export default Footer;

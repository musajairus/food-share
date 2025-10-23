import React from "react";
import "../styles/globals.css";

const Card = ({ title, description, image, children }) => {
  return (
    <div
      style={{
        backgroundColor: "var(--white)",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
      )}
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ color: "var(--blue)", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ marginBottom: "1rem", lineHeight: "1.5" }}>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;

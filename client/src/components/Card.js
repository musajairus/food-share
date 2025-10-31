import React from "react";

const Card = ({ image, title, description, location }) => {
  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#fff",
        borderRadius: "15px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 18px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={image || "https://via.placeholder.com/300x200?text=Food+Image"}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.5rem" }}>
          {description}
        </p>
        
      </div>
    </div>
  );
};

export default Card;

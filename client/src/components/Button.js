import React from "react";
import "../styles/globals.css";

const Button = ({ children, onClick, variant = "primary", style }) => {
  const variants = {
    primary: {
      backgroundColor: "var(--blue)",
      color: "var(--white)",
    },
    secondary: {
      backgroundColor: "var(--yellow)",
      color: "var(--dark)",
    },
    danger: {
      backgroundColor: "var(--red)",
      color: "var(--white)",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...variants[variant],
        padding: "0.75rem 1.5rem",
        borderRadius: "8px",
        fontWeight: 600,
        fontSize: "1rem",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s ease, opacity 0.2s ease",
        ...style,
      }}
      onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
    >
      {children}
    </button>
  );
};

export default Button;

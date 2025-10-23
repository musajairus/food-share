import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--dark)",
        color: "var(--white)",
        textAlign: "center",
        padding: "1rem",
        marginTop: "3rem",
      }}
    >
      <p>© {new Date().getFullYear()} FoodShare | Empowering Zero Hunger (SDG 2)</p>
      <p style={{ fontSize: "0.9rem", color: "var(--gray)" }}>
        Built by the FoodShare Dev Team
      </p>
    </footer>
  );
};

export default Footer;

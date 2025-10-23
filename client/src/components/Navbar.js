import React from "react";
import { Link } from "react-router-dom";
import "../styles/globals.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Food<span style={{ color: "var(--yellow)" }}>Share</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/request">Request</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/signin" className="signin-btn">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

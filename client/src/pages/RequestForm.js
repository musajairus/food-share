import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

const RequestForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { listing } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!listing) {
    return (
      <Layout>
        <h2>No Listing Selected</h2>
        <Button onClick={() => navigate("/")}>Go Back Home</Button>
      </Layout>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Request submitted for ${listing.title}!\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    navigate("/"); // go back to home after submission
  };

  return (
    <Layout>
      <h1>Request {listing.title}</h1>
      <p>Fill in your contact details to request this donation.</p>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1.5rem",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <Button type="submit">Submit Request</Button>
      </form>
    </Layout>
  );
};

export default RequestForm;

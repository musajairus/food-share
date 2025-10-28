import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const Request = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    description: "",
  });

  const navigate = useNavigate();
  const { addRequest } = useContext(DataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add request to global context
    addRequest(formData);

    alert(
      `Food Request Submitted!\nName: ${formData.name}\nContact: ${formData.contact}\nLocation: ${formData.location}\nDescription: ${formData.description}`
    );

    setFormData({ name: "", contact: "", location: "", description: "" });
    setShowForm(false);
  };

  return (
    <Layout>
      <h2>Request Food Assistance</h2>
      <p>If you or your organization need food, request help from nearby donors.</p>

      {!showForm && (
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          <Button onClick={() => setShowForm(true)}>Request Help</Button>
          <Button variant="danger" onClick={() => navigate("/dashboard")}>
            Check Status
          </Button>
        </div>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1.5rem",
            maxWidth: "500px",
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
            type="text"
            name="contact"
            placeholder="Phone or Email"
            value={formData.contact}
            onChange={handleChange}
            required
            style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <textarea
            name="description"
            placeholder="Describe the food you need"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
          />

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button type="submit">Submit Request</Button>
            <Button variant="secondary" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </form>
      )}
    </Layout>
  );
};

export default Request;

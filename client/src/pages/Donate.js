import React, { useState, useContext } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { DataContext } from "../context/DataContext";

const Donate = () => {
  const [showForm, setShowForm] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "individual",
    locationName: "",
    postedBy: "",
    image: null,
  });

  const { addDonation, donations, deleteDonation } = useContext(DataContext);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") setFormData({ ...formData, image: files[0] });
    else setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDonation(formData);
    alert("✅ Food donation submitted successfully!");
    setFormData({
      name: "",
      description: "",
      type: "individual",
      locationName: "",
      postedBy: "",
      image: null,
    });
    setShowForm(false);
  };

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", color: "#2c3e50" }}>
          Donate Surplus Food
        </h2>
        <p style={{ color: "#555", marginBottom: "1rem" }}>
          Help reduce waste and feed the hungry by contributing your excess food.
        </p>
        {!showForm && (
          <Button onClick={() => setShowForm(true)}>Donate Now</Button>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth < 900 ? "column" : "row",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
          flexWrap: "wrap",
        }}
>
  {/* Donation Form */}
        {showForm && (
         <form
  onSubmit={handleSubmit}
  style={{
    flex: "1",
    minWidth: "320px",
    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    padding: "2rem",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  }}
>
  <h3 style={{ marginBottom: "1rem", color: "#34495e", textAlign: "center" }}>
    🥗 Add Donation
  </h3>

  {/* Food Name */}
  <div style={fieldContainer}>
    <label style={labelStyle}>Food Name</label>
    <input
      type="text"
      name="name"
      placeholder="Enter food name"
      value={formData.name}
      onChange={handleChange}
      required
      style={inputStyle}
    />
  </div>

  {/* Description */}
  <div style={fieldContainer}>
    <label style={labelStyle}>Description</label>
    <textarea
      name="description"
      placeholder="Describe the food donation"
      value={formData.description}
      onChange={handleChange}
      rows={3}
      required
      style={inputStyle}
    />
  </div>

  {/* Type */}
  <div style={fieldContainer}>
    <label style={labelStyle}>Donation Type</label>
    <select
      name="type"
      value={formData.type}
      onChange={handleChange}
      style={inputStyle}
    >
      <option value="individual">Individual</option>
      <option value="hotel">Hotel</option>
    </select>
  </div>

  {/* Location */}
  <div style={fieldContainer}>
    <label style={labelStyle}>Location</label>
    <input
      type="text"
      name="locationName"
      placeholder="e.g. Nairobi CBD"
      value={formData.locationName}
      onChange={handleChange}
      required
      style={inputStyle}
    />
  </div>

  {/* Posted By */}
  <div style={fieldContainer}>
    <label style={labelStyle}>Posted By</label>
    <input
      type="text"
      name="postedBy"
      placeholder="Your Name"
      value={formData.postedBy}
      onChange={handleChange}
      required
      style={inputStyle}
    />
  </div>

  {/* Image Upload */}
  <div style={fieldContainer}>
    <label style={labelStyle}>Upload Image</label>
    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={handleChange}
      style={{
        ...inputStyle,
        border: "none",
        padding: "0.4rem",
        background: "none",
      }}
    />
  </div>

  {/* Buttons */}
  <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
    <Button type="submit">Submit</Button>
    <Button variant="secondary" onClick={() => setShowForm(false)}>
      Cancel
    </Button>
  </div>
</form>
        )}

        {/* Donation List */}
<div
  style={{
    flex: "2",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    justifyContent: "center",
    alignItems: "stretch",
    padding: "1rem",
  }}
>
  {donations?.length ? (
    donations.map((d, i) => (
      <div
        key={i}
        onClick={() => setExpandedCard(expandedCard === i ? null : i)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fff",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
          height: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.03)";
          e.currentTarget.style.boxShadow =
            "0 10px 25px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 8px 20px rgba(0,0,0,0.1)";
        }}
      >
        {d.image && (
          <img
            src={`http://localhost:5000${d.image}`}
            alt={d.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
        )}
        <div style={{ padding: "1rem", flexGrow: 1 }}>
          <h3
            style={{
              marginBottom: "0.3rem",
              color: "#2c3e50",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {d.name}
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "0.9rem", textAlign: "center" }}>
            Type: {d.type} | Posted by: {d.postedBy}
          </p>
          {expandedCard === i && (
            <>
              <p style={{ marginTop: "0.5rem", color: "#444" }}>
                {d.description}
              </p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                📍 {d.locationName}
              </p>
            </>
          )}
        </div>
        <div style={{ padding: "0 1rem 1rem" }}>
          <Button
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              deleteDonation(d.id);
            }}
            style={{
              width: "100%",
              marginTop: "0.5rem",
              borderRadius: "10px",
            }}
          >
            🗑 Delete
          </Button>
        </div>
      </div>
    ))
  ) : (
    <p>No donations yet.</p>
  )}
</div>
      </div>
    </Layout>
  );
};

const fieldContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  marginBottom: "0.5rem",
};

const labelStyle = {
  marginBottom: "0.3rem",
  fontWeight: "600",
  color: "#2c3e50",
  fontSize: "0.95rem",
};

const inputStyle = {
  padding: "0.8rem",
  borderRadius: "10px",
  border: "1px solid #ddd",
  outline: "none",
  fontSize: "0.95rem",
  background: "#fff",
  transition: "border 0.2s, box-shadow 0.2s",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
  marginBottom: "0.5rem",
};

export default Donate;

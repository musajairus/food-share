import React, { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Donate = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 3); // max 3 photos
    setFormData({ ...formData, photos: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just alert the data
    alert(
      `Food Donation Submitted!\nTitle: ${formData.title}\nDescription: ${formData.description}\nLocation: ${formData.location}\nPhotos: ${formData.photos.map((f) => f.name).join(", ")}`
    );

    // Reset form
    setFormData({ title: "", description: "", location: "", photos: [] });
    setShowForm(false);
  };

  return (
    <Layout>
      <h2>Donate Surplus Food</h2>
      <p>Help reduce waste and feed the hungry by contributing your excess food.</p>

      {!showForm && (
        <Button onClick={() => setShowForm(true)}>Donate Now</Button>
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
            name="title"
            placeholder="Food Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
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
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handlePhotoChange}
            style={{ padding: "0.5rem 0" }}
          />
          <small>Maximum 3 photos</small>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button type="submit">Submit Donation</Button>
            <Button variant="secondary" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </form>
      )}
    </Layout>
  );
};

export default Donate;

// src/components/FoodForm.js
import React, { useState } from "react";
import { postFood } from "../services/api";

export default function FoodForm({ onFoodPosted }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    type: "individual",
    postedBy: "",
    locationName: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await postFood(form);
      setMessage("✅ Food posted successfully!");
      setForm({ name: "", description: "", type: "individual", postedBy: "", locationName: "" });

      // Refresh food list
      if (onFoodPosted) onFoodPosted(response.food);
    } catch (error) {
      setMessage(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Post Food Donation</h2>

      <input
        type="text"
        name="name"
        placeholder="Food Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <select name="type" value={form.type} onChange={handleChange}>
        <option value="individual">Individual</option>
        <option value="hotel">Hotel</option>
      </select>

      <input
        type="text"
        name="postedBy"
        placeholder="Posted by"
        value={form.postedBy}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="locationName"
        placeholder="Location Name (e.g. Nairobi, Kisumu)"
        value={form.locationName}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post Food"}
      </button>

      {message && <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>{message}</p>}
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
    margin: "20px auto",
  },
};


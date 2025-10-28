import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";

const SignUp = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Only set user if setUser exists (prevents crash)
    if (setUser) {
      const newUser = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      };
      setUser(newUser);
      alert("Account created successfully!");
      navigate("/dashboard"); // Redirect safely
    } else {
      alert("Account created! But setUser is not defined.");
    }
  };

  return (
    <Layout>
      <h1>Create Account</h1>
      <p>Join FoodShare and help reduce food waste in your community.</p>

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
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
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
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={{ padding: "0.75rem", borderRadius: "6px", border: "1px solid #ccc" }}
        />

        <Button type="submit">Create Account</Button>
      </form>
    </Layout>
  );
};

export default SignUp;

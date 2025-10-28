import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      setUser({ email: formData.email });
      alert("Signed in successfully!");
      navigate("/");
    } else {
      alert("Please fill in both email and password.");
    }
  };

  return (
    <Layout>
      <h1>Sign In</h1>
      <p>Access your FoodShare dashboard and manage your listings.</p>

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
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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

        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
          <Button type="submit">Sign In</Button>
          <Button variant="secondary" onClick={() => navigate("/signup")}>
            Create Account
          </Button>
        </div>
      </form>
    </Layout>
  );
};

export default SignIn;

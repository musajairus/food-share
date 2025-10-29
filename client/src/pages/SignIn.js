import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { DataContext } from "../context/DataContext";

const SignIn = () => {
  const { setUser } = useContext(DataContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      // Fetch all users from mock API
      const res = await fetch("http://localhost:8001/users");
      const users = await res.json();

      // Verify credentials manually
      const foundUser = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      );

      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        setUser(foundUser);
        alert("Signed in successfully!");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to the server.");
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
          style={{
            padding: "0.75rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

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

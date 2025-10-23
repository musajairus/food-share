import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Donate = () => {
  const handleDonate = () => {
    alert("Thanks for donating!");
  };

  return (
    <Layout>
      <h2>Donate Surplus Food</h2>
      <p>Help reduce waste and feed the hungry by contributing your excess food.</p>

      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
        <Button onClick={handleDonate}>Donate Now</Button>
        <Button variant="secondary">View Guidelines</Button>
      </div>
    </Layout>
  );
};

export default Donate;

import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Request = () => {
  return (
    <Layout>
      <h2>Request Food Assistance</h2>
      <p>If you or your organization need food, request help from nearby donors.</p>

      <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
        <Button onClick={() => alert("Request submitted!")}>Request Help</Button>
        <Button variant="secondary">Check Status</Button>
      </div>
    </Layout>
  );
};

export default Request;

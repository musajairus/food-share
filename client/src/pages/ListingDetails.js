import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";

const ListingDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { listing } = location.state || {};

  if (!listing) {
    return (
      <Layout>
        <h2>No Listing Found</h2>
        <Button onClick={() => navigate("/")}>Go Back Home</Button>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{listing.title}</h1>
      {listing.image && (
        <img
          src={listing.image}
          alt={listing.title}
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            margin: "1rem 0",
          }}
        />
      )}
      <p>
        <strong>Description:</strong> {listing.description || "No description provided."}
      </p>
      <p>
        <strong>Location:</strong> {listing.location}
      </p>
      <p>
        <strong>Contact:</strong> {listing.contact || "Not available"}
      </p>

      <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
        <Button onClick={() => navigate(-1)}>Back to Home</Button>
        <Button
          variant="primary"
          onClick={() => navigate("/request-form", { state: { listing } })}
        >
          Request Food
        </Button>
      </div>
    </Layout>
  );
};

export default ListingDetails;

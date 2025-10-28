import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const sampleListings = [
    {
      image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlc2glMjBmcnVpdHN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      title: "Fresh Fruits from Kiambu",
      description: "Surplus mangoes available for pickup today.",
      location: "Kiambu",
      contact: "0700 123 456"
    },
    {
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      title: "Bakery Donation",
      description: "Leftover bread and pastries available daily after 5 PM.",
      location: "Westlands",
      contact: "0700 654 321"
    },
    // Add more listings as needed...
  ];

  return (
    <Layout>
      <h1>Available Food Donations</h1>
      <p>Here’s what’s being shared in your community:</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {sampleListings.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate("/listing-details", { state: { listing: item } })}
            style={{ cursor: "pointer" }}
          >
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

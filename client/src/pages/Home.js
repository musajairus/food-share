import React, { useContext } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { DataContext } from "../context/DataContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(DataContext); // access signed-in user

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
  ];

  return (
    <Layout>
      {/* --- HERO SECTION --- */}
      <section
        style={{
          textAlign: "center",
          padding: "4rem 1rem",
          marginBottom: "3rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "800", lineHeight: 1.1 }}>
          We dream of a <span style={{ color: "#FF6347" }}>waste-free</span> world
        </h1>
        <h2 style={{ fontSize: "2rem", fontWeight: "600", margin: "1rem 0" }}>
          FoodShare: <span style={{ color: "#FFD700" }}>the feel-good food-sharing app</span>
        </h2>
        <p style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6, marginBottom: "2rem" }}>
          Each day, edible food goes to waste while neighbors could benefit. FoodShare makes sharing surplus meals and groceries simple—helping people, saving money, and protecting the planet.
        </p>

        <Button
          variant="primary"
          onClick={() => navigate(user ? "/donate" : "/signup")}
          style={{ padding: "0.8rem 2rem", fontSize: "1.1rem", fontWeight: "600" }}
        >
          Get Started
        </Button>
      </section>

      {/* --- FOOD LISTINGS --- */}
      <h1 style={{ textAlign: "center", marginBottom: "0.5rem" }}>Available Food Donations</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>See what your community is sharing:</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
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

import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch donations from backend
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/food");
        setDonations(res.data);
      } catch (error) {
        console.error("❌ Error fetching donations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  return (
    <Layout>
      <h1>Available Food Donations</h1>
      <p>Here’s what’s being shared in your community:</p>

      {loading ? (
        <p>Loading donations...</p>
      ) : donations.length === 0 ? (
        <p>No donations yet. Be the first to donate!</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
{donations.map((item) => (
  <div
    key={item.id}
    onClick={() => navigate("/food-details", { state: { food: item } })}
    style={{ cursor: "pointer" }}
  >
    <Card
  image={
    item.image
      ? `http://localhost:5000${item.image}`
      : "https://images.unsplash.com/photo-1565958011705-44e211b37f7e?auto=format&fit=crop&w=800&q=60"
  }
  title={item.name || item.title}
  description={item.description}
  location={
    item.location?.name ||
    `${item.location?.latitude}, ${item.location?.longitude}`
  }
/>

  </div>
))}
        </div>
      )}
    </Layout>
  );
};

export default Home;

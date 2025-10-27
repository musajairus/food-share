import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => {
  const sampleListings = [
    {
      image: "https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlc2glMjBmcnVpdHN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      title: "Fresh Fruits from Kiambu",
      description: "Surplus mangoes available for pickup today.",
    },
    {
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJlYWR8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      title: "Bakery Donation",
      description: "Leftover bread and pastries available daily after 5 PM.",
    },
    {
      image: "https://images.unsplash.com/photo-1723475158232-819e29803f4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJpY2V8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      title: "Rice in Eastleigh",
      description: "Surplus Rice available for pickup today.",
    },
    {
      image: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZXNoJTIwbWVhdHxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
      title: "Butchery Donation",
      description: "Leftover meat products available daily after 5 PM.",
    },
    {
      image: "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1768",
      title: "Potatoes from Nyeri",
      description: "Surplus potatoes available for pickup today.",
    },
    {
      image: "https://media.istockphoto.com/id/1440695422/photo/cornmeal-mush-and-vegetable-dish-served-on-a-white-plate-on-a-wooden-table-african.jpg?s=612x612&w=0&k=20&c=blC3gKnv08gZdUtHQSjJdr4PBuseySA_cyjC0DRHtEA=",
      title: "Flour Donations",
      description: "Ugali portions available daily after 6 PM.",
    },
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
          <Card
            key={i}
            image={item.image}
            title={item.title}
            description={item.description}
            action={<Button onClick={() => alert("Claimed!")}>Claim</Button>}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;

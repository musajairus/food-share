import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default marker icon path issue in React build
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const FoodDetails = () => {
  const location = useLocation();
  const food = location.state?.food;

  if (!food) {
    return (
      <Layout>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>⚠️ No food details available</h2>
          <p>Try navigating from the food list again.</p>
        </div>
      </Layout>
    );
  }

  // If your backend returns location as an object
  const latitude = food.location?.latitude || food.latitude;
  const longitude = food.location?.longitude || food.longitude;

  return (
    <Layout>
      <div
        style={{
          maxWidth: "700px",
          margin: "2rem auto",
          background: "#fff",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {food.image && (
          <img
           src={`http://localhost:5000${food.image}`}
            alt={food.name}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "1rem",
            }}
          />
        )}

        <h2>{food.name}</h2>
        <p><strong>Type:</strong> {food.type}</p>
        <p><strong>Posted by:</strong> {food.postedBy}</p>
        <p><strong>Location:</strong> 📍 {food.locationName}</p>
        <p><strong>Description:</strong> {food.description}</p>

        {/* Map Section */}
        {latitude && longitude ? (
          <div style={{ marginTop: "2rem" }}>
            <h3>Map Location</h3>
            <MapContainer
              center={[latitude, longitude]}
              zoom={14}
              scrollWheelZoom={false}
              style={{
                height: "300px",
                width: "100%",
                borderRadius: "10px",
                marginTop: "1rem",
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              />
              <Marker position={[latitude, longitude]}>
                <Popup>
                  {food.locationName || "Food Location"}
                  <br />
                  {food.name}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        ) : (
          <p style={{ marginTop: "1rem", color: "gray" }}>
            📍 Location coordinates not available, but address is:{" "}
            <strong>{food.locationName}</strong>
          </p>
        )}
      </div>
    </Layout>
  );
};

export default FoodDetails;

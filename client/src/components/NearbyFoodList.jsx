import React, { useEffect, useState } from "react";
import { getNearbyFood } from "../api/foodService";

const NearbyFoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const data = await getNearbyFood(latitude, longitude);
        setFoods(data);
      },
      (err) => console.error("Location access denied:", err)
    );
  }, []);

  return (
    <div>
      <h3>Nearby Food</h3>
      {foods.length === 0 ? (
        <p>No nearby food available</p>
      ) : (
        foods.map((f) => (
          <div key={f.id}>
            <h4>{f.name}</h4>
            <p>{f.description}</p>
            <small>{f.type} • {f.location?.name || "Unknown location"}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default NearbyFoodList;

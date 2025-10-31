// src/services/api.js
const API_BASE = "http://localhost:5000/api";

export const postFood = async (foodData) => {
  try {
    const res = await fetch(`${API_BASE}/food`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to post food");
    return data;
  } catch (error) {
    console.error("❌ Error posting food:", error);
    throw error;
  }
};

export const getAllFood = async () => {
  try {
    const res = await fetch(`${API_BASE}/food`);
    if (!res.ok) throw new Error("Failed to fetch food list");
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

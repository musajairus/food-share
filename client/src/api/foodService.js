import axios from "axios";

const API_URL = "http://localhost:5000/api/food";

export const getAllFood = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const postFood = async (foodData) => {
  const res = await axios.post(API_URL, foodData);
  return res.data;
};

export const getNearbyFood = async (lat, lng) => {
  const res = await axios.get(`${API_URL}/nearby`, {
    params: { lat, lng },
  });
  return res.data;
};

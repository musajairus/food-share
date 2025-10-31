import axios from "axios";

const API_URL = "http://localhost:5000/api/locations";

export const getAllLocations = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addLocation = async (locationData) => {
  const res = await axios.post(API_URL, locationData);
  return res.data;
};

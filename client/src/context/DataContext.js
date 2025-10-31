import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [donations, setDonations] = useState([]);

  // ✅ Fetch donations from backend
  const fetchDonations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/food");
      setDonations(response.data);
    } catch (error) {
      console.error("❌ Error fetching donations:", error);
    }
  };

  // ✅ Add donation (handles image)
  const addDonation = async (donationData) => {
    try {
      const formData = new FormData();
      Object.keys(donationData).forEach((key) => {
        formData.append(key, donationData[key]);
      });

      await axios.post("http://localhost:5000/api/food", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      await fetchDonations(); // refresh list after upload
    } catch (error) {
      console.error("❌ Error adding donation:", error);
      throw error;
    }
  };

  // ✅ Delete donation
  const deleteDonation = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/food/${id}`);
      await fetchDonations(); // refresh list after delete
    } catch (error) {
      console.error("❌ Error deleting donation:", error);
    }
  };

  // ✅ Load donations on mount
  useEffect(() => {
    fetchDonations();
  }, []);

  return (
    <DataContext.Provider
      value={{
        donations,
        addDonation,
        deleteDonation,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

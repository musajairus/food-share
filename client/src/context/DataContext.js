import React, { useEffect ,createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // ====== USER AUTH STATE ======
  const [user, setUser] = useState(null);

  // Load saved user from localStorage when app starts
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

   // ====== DONATIONS STATE ======

  const [donations, setDonations] = useState([
    // initial mock data
    {
      id: "1",
      title: "Fresh Fruits from Kiambu",
      description: "Surplus mangoes available for pickup today.",
      location: "Kiambu",
      contact: "0800 123 456",
      image:
        "https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlc2glMjBmcnVpdHN8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
    },
  ]);

  const [requests, setRequests] = useState([]);

  const addDonation = (donation) => {
    setDonations((prev) => [...prev, { id: Date.now().toString(), ...donation }]);
  };

  const addRequest = (request) => {
    setRequests((prev) => [...prev, { id: Date.now().toString(), ...request }]);
  };

  return (
    <DataContext.Provider
      value={{ donations, requests, addDonation, addRequest ,setUser , user }}
    >
      {children}
    </DataContext.Provider>
  );
};
 
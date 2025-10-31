import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Request from "./pages/Request";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ListingDetails from "./pages/ListingDetails";
import RequestForm from "./pages/RequestForm";
import Navbar from "./components/Navbar";
import { DataProvider } from "./context/DataContext"; // <-- import DataProvider
import FoodForm from "./components/FoodPostForm";
import FoodList from "./components/NearbyFoodList";
import FoodDetails from "./pages/FoodDetails";

function App() {
  const [user, setUser] = useState(null); // null = not signed in

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>🌍 Food Sharing Platform</h1>
      <FoodForm onFoodPosted={() => setRefresh((r) => r + 1)} />
      <FoodList refreshTrigger={refresh} />
    </div>
  );
}
  return (
    <DataProvider>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/request" element={<Request />} />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <SignIn setUser={setUser} />}
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/listing-details" element={<ListingDetails />} />
          <Route path="/request-form" element={<RequestForm />} />
          <Route path="/food-post-form" element={<FoodForm />} />
          <Route path="/nearby-food-list" element={<FoodList />} />
          <Route path="/food-details" element={<FoodDetails />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;

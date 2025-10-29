import React, { useContext, useEffect } from "react";
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
import { DataProvider, DataContext } from "./context/DataContext";
import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const { user, setUser } = useContext(DataContext);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, [setUser]);

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/request" element={<Request />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp setUser={setUser} />} />
        <Route path="/listing-details" element={<ListingDetails />} />
        <Route path="/request-form" element={<RequestForm />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <DataProvider>
      <Router>
        <AppContent />
      </Router>
    </DataProvider>
  );
}

export default App;

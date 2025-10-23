import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          padding: "2rem",
          minHeight: "80vh",
          background: "var(--light)",
          color: "var(--dark)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          lineHeight: 1.6,
          fontSize: "1rem",
        }}
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;

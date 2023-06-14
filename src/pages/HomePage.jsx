import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="padding text-white"
      >
        HomePage
      </motion.div>
    </>
  );
};

export default HomePage;

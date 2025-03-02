import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Normalnav";


const NewLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div><Navbar/>
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white font-['Poppins'] px-4">
     
      {/* Title Section */}
      <h1 className="text-4xl font-bold mb-8">
        Manage Your Products Efficiently
      </h1>
      
      {/* Button Container */}
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Delete Products Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-64 py-3 px-6 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors"
          onClick={() => navigate("/delete")}
        >
          Delete Products
        </motion.button>
        
        {/* Add Products Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-64 py-3 px-6 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition-colors"
          onClick={() => navigate("/add")}
        >
          Add Products
        </motion.button>
        
      </div>
      </div>
    </div>
  );
};

export default NewLandingPage;

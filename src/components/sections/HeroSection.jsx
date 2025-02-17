import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import hero1 from '../../images/hero6.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img src={hero1} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </motion.div>
      <div className="relative z-10 h-full flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-left max-w-3xl"
          >
            <h1 className="text-7xl font-extrabold text-white mb-6 leading-tight">
              Elegance in <span className="text-emerald-400">Every Stitch</span>
            </h1>
            <p className="text-gray-300 text-xl mb-12 leading-relaxed">
              Where luxury meets sustainability. Experience the perfect blend of contemporary design and timeless sophistication.
            </p>
            <div className="flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-emerald-500 text-white px-10 py-4 rounded-full hover:bg-emerald-600 transition-all flex items-center group shadow-lg shadow-emerald-500/20"
              >
                Explore Collection
                <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 
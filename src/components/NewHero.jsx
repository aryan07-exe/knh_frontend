import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroVideo from "../images/herovid1.mp4";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 h-full flex items-center px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-left max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Elegance in <span className="text-emerald-400">Every Stitch</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 sm:mb-12 leading-relaxed">
            Where luxury and elegance meets comfort. Experience the perfect blend of contemporary designs, elegant fit and comfort.

            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/product")}
                className="bg-emerald-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-emerald-600 transition-all flex items-center group shadow-lg shadow-emerald-500/20 text-sm sm:text-base"
              >
                Explore Collection
                <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate("/inq")}
                className="border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black transition-all text-sm sm:text-base"
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
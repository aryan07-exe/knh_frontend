import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import hero2 from '../../images/wedding5.jpg';
import hero3 from '../../images/wedding7.jpg';
import { useNavigate } from "react-router-dom";

const BridalSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-emerald-400 text-sm tracking-widest uppercase mb-4 block">Bridal Collection</span>
            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">Enriched culture</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
            Every culture is enriched with its own unique features so are the custom pieces made for our brides. These pieces combines traditional designs, elegence alongside our commitment to comfort, creating a timeless piece for your special day!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-10 py-4 rounded-full hover:bg-gray-100 transition-all flex items-center group w-fit"
              onClick={() => navigate("/product")}
           >
              View Bridal Collection
              <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <img src={hero2} alt="Bridal 1" className="w-full h-[400px] object-cover rounded-lg transform -rotate-2" />
            <img src={hero3} alt="Bridal 2" className="w-full h-[400px] object-cover rounded-lg transform translate-y-8 rotate-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BridalSection; 
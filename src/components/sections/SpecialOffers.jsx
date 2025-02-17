import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import hero2 from '../../images/hero7.jpg';

const SpecialOffers = () => {
  return (
    <section className="py-24 bg-emerald-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-3xl p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-300 text-sm tracking-widest uppercase mb-4 block">Limited Time Offer</span>
              <h2 className="text-4xl font-bold text-white mb-6">Special Bridal Collection</h2>
              <p className="text-emerald-100 mb-8">
                Book your consultation now and get a complimentary accessory set with your bridal dress purchase.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-emerald-900 px-8 py-3 rounded-full hover:bg-emerald-50 transition-all shadow-lg inline-flex items-center"
              >
                Claim Offer
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
            <div className="relative">
              <img 
                src={hero2} 
                alt="Special Offer"
                className="rounded-xl shadow-2xl transform rotate-3"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers; 
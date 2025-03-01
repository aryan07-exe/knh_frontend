import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const BookingSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-32 bg-emerald-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">Begin Your Fashion Journey</h2>
          <p className="text-emerald-100 mb-12 max-w-2xl mx-auto text-lg">
            Book a consultation with our expert designers and start creating your dream wardrobe.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/inq")}
            className="bg-white text-emerald-900 px-10 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg"
          >
            Schedule Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection; 
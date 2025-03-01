import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaHeart, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import collection1 from '../../images/product7.jpg';
import collection2 from '../../images/wedding2.jpg';
import collection3 from '../../images/wedding3.jpg';

const CustomDesignsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [likedItems, setLikedItems] = useState([]);

  const collections = [
    {
      image: collection1,
      title: "Bridal Couture",
      description: "Handcrafted wedding dresses tailored to perfection",
      price: "Starting from $2,999",
      tags: ["Luxury", "Custom Fit", "Handmade"]
    },
    {
      image: collection2,
      title: "Evening Elegance",
      description: "Sophisticated gowns for special occasions",
      price: "Starting from $1,499",
      tags: ["Premium", "Elegant", "Timeless"]
    },
    {
      image: collection3,
      title: "Traditional Fusion",
      description: "Modern takes on classic designs",
      price: "Starting from $1,999",
      tags: ["Modern", "Cultural", "Unique"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const toggleLike = (index) => {
    setLikedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-500 opacity-30"></div>
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[180px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-400 text-sm tracking-widest uppercase mb-4 rounded-full font-medium">
            Bespoke Fashion
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Custom-Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Elegance</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Your vision, our expertise. Experience the luxury of a perfectly tailored outfit for any occasion 


          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {collections.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700/30"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-0 left-0 right-0 p-6"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg text-sm hover:bg-emerald-600 transition-colors shadow-lg inline-flex items-center justify-center group"
                        >
                          <FaShoppingBag className="mr-2" />
                          Explore Design
                          <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Like Button */}
                <button 
                  onClick={() => toggleLike(index)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all transform hover:scale-110"
                >
                  {likedItems.includes(index) ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-white" />
                  )}
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-emerald-400 font-medium text-sm">{item.price}</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">
                    Custom Made
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg inline-flex items-center group text-base font-medium"
          >
            Start Your Custom Journey
            <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
          </motion.button>
          <p className="text-gray-400 mt-4 text-sm">
            Book a consultation with our expert designers today
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomDesignsSection; 
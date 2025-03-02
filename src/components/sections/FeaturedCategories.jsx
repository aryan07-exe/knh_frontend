import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import bridalImage from '../../images/wedding2.jpg';
import eveningImage from '../../images/product7.jpg';
import traditionalImage from '../../images/wedding8.jpg';
import accessoriesImage from '../../images/product3.jpg';

const API_BASE_URL =import.meta.env.VITE_API_URL;
const FeaturedCategories = () => {
  const categories = [
    {
      name: 'Bridal Wear',
      image: bridalImage,
      description: 'Timeless elegance for your special day',
      items: '50+ Designs'
    },
    {
      name: 'Evening Gowns',
      image: eveningImage,
      description: 'Sophisticated styles for special occasions',
      items: '30+ Designs'
    },
    {
      name: 'Traditional',
      image: traditionalImage,
      description: 'Cultural heritage meets modern design',
      items: '40+ Designs'
    },
    {
      name: 'Accessories',
      image: accessoriesImage,
      description: 'Complete your look with elegance',
      items: '100+ Items'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-500 opacity-30"></div>
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[180px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-400 text-sm tracking-widest uppercase mb-4 rounded-full font-medium">
            Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Category</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore our curated collection of premium fashion pieces
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-gray-800">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-emerald-400 text-sm font-medium mb-2 block">
                      {category.items}
                    </span>
                    <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-emerald-400 text-sm font-medium inline-flex items-center group/btn"
                    >
                      Shop Now
                      <FaArrowRight className="ml-2 text-xs transition-transform group-hover/btn:translate-x-1" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCategories; 
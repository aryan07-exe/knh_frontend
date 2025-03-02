import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const API_BASE_URL =import.meta.env.VITE_API_URL;
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedItems, setLikedItems] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  // Fetch products from the backend
  useEffect(() => {
    setLoading(true);
    const url = category
      ? `${API_BASE_URL}/api/products?category=${category}`
      : " ${API_BASE_URL}/api/products";

    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [category]);

  const toggleLike = (productId) => {
    setLikedItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-['Poppins']">
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[180px] opacity-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-400 text-sm tracking-widest uppercase mb-4 rounded-full">
              {category
                ? category.charAt(0).toUpperCase() + category.slice(1)
                : "All Products"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                Collection
              </span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Discover our curated selection of premium fashion pieces, designed
              to elevate your style
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product._id}
                variants={itemVariants}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-emerald-500/30 transition-all duration-300 shadow-xl"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={` ${API_BASE_URL}${product.image}`}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(product._id)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all transform hover:scale-110"
                  >
                    {likedItems.includes(product._id) ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart className="text-white" />
                    )}
                  </button>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-white mb-2">
                      {product.name}
                    </h2>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-emerald-400">
                      ₹{product.price}
                    </p>
                    <div className="flex gap-2">
                      {Array.isArray(product.size)
                        ? product.size.map((size, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                            >
                              {size}
                            </span>
                          ))
                        : typeof product.size === "string"
                        ? product.size.split(",").map((size, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                            >
                              {size.trim()}
                            </span>
                          ))
                        : (
                            <span className="text-gray-400 text-xs">
                              No size available
                            </span>
                          )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function ProductPage() {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 p-8">
      <Navbar />
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">Explore Our Exclusive Collection</h1>
      <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
        Discover the latest trends and timeless pieces in our women's fashion collection. From elegant dresses to chic accessories, find everything you need to elevate your style.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div key={product._id} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-64 object-contain bg-gray-900" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
              <p className="text-gray-400 mt-3">{product.description}</p>
              <p className="text-lg font-bold text-purple-500 mt-4">₹{product.price}</p>
              <p className="text-sm text-gray-500 mt-1">Sizes: {product.size.join(", ")}</p>
              <button className="mt-6 w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;

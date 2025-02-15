import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductPage() {
  const [products, setProducts] = useState([]);

  // ✅ Backend se products fetch karna
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-1">₹{product.price}</p>
            <p className="text-sm text-gray-500">Sizes: {product.size.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;

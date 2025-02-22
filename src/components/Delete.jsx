import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // Fetch products from backend
    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    // Function to delete a product
    const deleteProduct = async (id) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/products/delete/${id}`);
            setProducts(products.filter(product => product._id !== id)); // Update UI
        } catch (error) {
            alert("Error deleting product");
            console.log(error);
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-10">
            <div className="max-w-5xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-extrabold text-white text-center mb-8"
                >
                    Manage <span className="text-emerald-400">Products</span>
                </motion.h1>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/20">
                    {products.length === 0 ? (
                        <p className="text-gray-300 text-center text-lg">No products available</p>
                    ) : (
                        <ul className="space-y-4">
                            {products.map((product) => (
                                <motion.li
                                    key={product._id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex justify-between items-center bg-white/20 backdrop-blur-md rounded-xl px-6 py-4 shadow-md border border-white/10"
                                >
                                    <span className="text-white text-lg font-semibold">
                                        {product.name}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
                                        onClick={() => deleteProduct(product._id)}
                                    >
                                        <FaTrash />
                                        <span className="hidden sm:inline">Delete</span>
                                    </motion.button>
                                </motion.li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductList;

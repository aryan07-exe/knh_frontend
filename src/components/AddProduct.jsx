import { useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        size: "",
        image: null,
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure all required fields are provided
        if (!product.name || !product.price || !product.size || !product.image) {
            alert("Please fill all fields before submitting.");
            return;
        }

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("size", product.size);
         // ✅ Added missing field
        formData.append("image", product.image);

        try {
            const res = await axios.post(`${API_BASE_URL}/api/products`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("Product added successfully!");
            console.log(res.data);

            // Reset form after successful submission
            setProduct({
                name: "",
                price: "",
                size: "",
                image: null,
            });
        } catch (error) {
            console.error("Error adding product:", error?.response?.data || error.message);
            alert("Error adding product. Check the console for details.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 p-8 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Add New Product</h2>
                
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        placeholder="Product Name"
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        placeholder="Price"
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="size"
                        value={product.size}
                        placeholder="Size (e.g., Small, Medium, Large)"
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>


                <div className="mb-4">
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="w-full text-white"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition-colors"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;

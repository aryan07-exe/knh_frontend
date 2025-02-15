import React, { useState } from "react";

//import "./Signup.css"; // Import the CSS file

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Signup successful! You can now login.");
      } else {
        alert(data.error || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-100">Create an Account</h2>
        <p className="text-center text-gray-400 text-sm">Sign up to get started</p>
        <form onSubmit={handleSignup} className="mt-6 space-y-6">
          {/* <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-gray-100"
              required
            />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-gray-100"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-gray-100"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition ease-in-out duration-200 shadow-md"
          >
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-400">
            Already have an account? <a href="/login" className="text-blue-400 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}


export default Signup;

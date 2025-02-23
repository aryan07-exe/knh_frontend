import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        console.log('hello',data);
        
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      } else {
        alert(data.error || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-['Poppins']">
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500 rounded-full filter blur-[180px] opacity-10"></div>
      
      <div className="w-full max-w-md p-8 relative">
        <div className="bg-gray-900/50 backdrop-blur-md p-8 rounded-xl border border-gray-800 shadow-xl">
          <h2 className="text-4xl font-bold text-center text-white mb-2">Welcome Back</h2>
          <p className="text-center text-gray-400 mb-8">Sign in to your account</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 text-white transition-all"
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 text-white transition-all"
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 bg-gray-800 border-gray-700 rounded focus:ring-emerald-500 text-emerald-500"
                />
                <label className="ml-2 block text-sm text-gray-400">Remember me</label>
              </div>
              <a href="#" className="text-sm text-emerald-400 hover:text-emerald-300 font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/20 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Sign In
            </button>

           

            <p className="text-center text-sm text-gray-400 mt-8">
              Don't have an account?{" "}
              <a href="/signup" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

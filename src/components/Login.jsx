import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

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
        localStorage.setItem("token", data.token); // Store JWT token
        navigate("/"); // Redirect to Landing page
      } else {
        alert(data.error || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
//       <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center">Login</h2>
//         <form onSubmit={handleLogin} className="mt-4 space-y-4">
//           <div>
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

return (
  <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700">
      <h2 className="text-3xl font-bold text-center text-gray-100">Welcome Back</h2>
      <p className="text-center text-gray-400 text-sm">Login to your account</p>
      <form onSubmit={handleLogin} className="mt-6 space-y-6">
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
        <div className="flex justify-between text-sm text-gray-400">
          <a href="#" className="hover:text-blue-400">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition ease-in-out duration-200 shadow-md"
        >
          Sign In
        </button>
        <p className="text-center text-sm text-gray-400">
          Don't have an account? <a href="/signup" className="text-blue-400 hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  </div>
);
}

export default Login;

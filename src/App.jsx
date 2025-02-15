import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./components/LandingPage";
import Navbar from "./components/Main";
 // Add a Home page if needed

function App() {
  return (
    <Router>
      <div>
      
        <Routes>
        <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


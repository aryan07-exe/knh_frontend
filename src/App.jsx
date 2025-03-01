import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Delete from "./components/Delete";
import Landing from "./components/LandingPage";
import ProductPage from "./components/Productpage";
import Admin from "./components/Admin";
import AddProduct from "./components/AddProduct";
import NewLandingPage from "./components/NewLandingPage";
import Login from "./components/Login";
import Inq from "./components/Inquiry";
import Nav from "./components/Normalnav";


function App() {
 

  return (
    <Router>
      <div>
    

        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/del" element={<Delete />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/inq" element={<Inq />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/add" element={<AddProduct />} />  
          {/* Pass setShowForm to NewLandingPage */}
          <Route path="/" element={<NewLandingPage  />} />  
          <Route path="/nav" element={<Nav  />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Landing from "./components/LandingPage";
import ProductPage from "./components/Productpage";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import NewLandingPage from "./components/NewLandingPage";
// Add a Home page if needed
//const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000"; 


  

function App() {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/hello")
  //     .then(response => {
  //       setData(response.data.message);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  return (
    <Router>
      <div>
      
        <Routes>
        <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/add" element={<AddProduct />} />  
          <Route path="/" element={<NewLandingPage />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;


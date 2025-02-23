import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo3.jpg";

const Navbar = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try { 
        const parsedUser = JSON.parse(userData);
        console.log("User Data:", parsedUser); // Debugging line
        if (parsedUser?.role) {
          setUserRole(parsedUser.role);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    //localStorage.removeItem("token");
    setUserRole(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  const navItems = [
    { name: "Bridal", ref: refs.bridalRef },
    { name: "Custom Designs", ref: refs.customRef },
    { name: "Categories", ref: refs.featuredRef },
    { name: "Offers", ref: refs.specialRef },
    { name: "Booking", ref: refs.bookingRef },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="KNH Logo" className="h-14 mr-4" />
            <span className="text-white text-xl font-bold">KnH Empire</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => scrollToSection(item.ref)}
              >
                <span className="text-gray-300 hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {userRole === "admin" && (
                  <motion.a
                    href="/admin"
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-2 text-emerald-400 transition relative group"
                  >
                    Admin Panel
                  </motion.a>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 text-gray-300 hover:text-white transition"
                  onClick={handleLogout}
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <>
              {userRole  && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 text-gray-300 hover:text-white transition"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </motion.button>)}
          
                {userRole  && (
                  
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 bg-emerald-500 text-white hover:bg-emerald-600 transition-colors rounded-lg"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </motion.button>)}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 bg-emerald-500 text-white hover:bg-emerald-600 transition-colors rounded-lg"
                  onClick={() => navigate("/signup")}
                >
                  INQUIRE NOW
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <span
                  key={item.name}
                  className="block text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                    scrollToSection(item.ref);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </span>
              ))}
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="block text-red-500 mt-4"
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      console.log(localStorage.getItem("user"));
    </nav>
  );
};

export default Navbar;

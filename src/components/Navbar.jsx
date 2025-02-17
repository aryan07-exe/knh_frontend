import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import logo from '../images/logo3.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-md font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="KNH Logo" className="h-14 mr-4" />
            <span className="text-white text-xl font-bold">KnH Empire</span> {/* Added heading */}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['New Arrivals', 'Dresses', 'Tops', 'Accessories', 'About'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"/>
              </motion.a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 text-gray-300 hover:text-white transition relative group"
              onClick={() => navigate('/')}
            >
              Sign In
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"/>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-6 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors"
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </motion.button>
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
              {['New Arrivals', 'Dresses', 'Tops', 'Accessories', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-4">
                <button 
                  className="w-full px-6 py-2 text-gray-300 hover:text-white transition"
                  onClick={() => navigate('/signin')}
                >
                  Sign In
                </button>
                <button 
                  className="w-full px-6 py-2 bg-green-500 text-white hover:bg-green-600 transition"
                  onClick={() => navigate('/signup')}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
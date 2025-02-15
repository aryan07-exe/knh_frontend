// ... existing imports ...
import { FaShoppingCart, FaSearch, FaHeart, FaStar, FaTruck, FaShieldAlt, FaUndo, FaHeadset, FaUser, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// ... other existing imports ...

// Import your local images
import heroImage1 from '../images/hero1.jpg';  // Adjust path according to your structure
import heroImage2 from '../images/hero2.jpg';
import heroImage3 from '../images/hero3.jpg';

const LandingPage = () => {
  return (
    <div className="bg-gray-950 min-h-screen font-['Poppins']">
      {/* Top Bar */}
      <div className="bg-gray-900 py-2 px-4 text-gray-300 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaPhoneAlt className="text-purple-500 mr-2" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-purple-500 mr-2" />
              <span>support@luxe.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-transparent border-none text-gray-300 focus:outline-none">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
            <select className="bg-transparent border-none text-gray-300 focus:outline-none">
              <option value="EN">English</option>
              <option value="ES">Español</option>
              <option value="FR">Français</option>
            </select>
          </div>
        </div>
      </div>

      {/* Enhanced Navbar */}
      <nav className="fixed w-full z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                LUXE
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition">New Arrivals</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Men</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Women</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Collections</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Sale</a>
            </div>
            <div className="flex items-center space-x-6">
              <FaSearch className="text-gray-300 hover:text-white cursor-pointer transition text-xl" />
              <FaHeart className="text-gray-300 hover:text-white cursor-pointer transition text-xl" />
              <div className="relative group">
                <FaShoppingCart className="text-gray-300 hover:text-white cursor-pointer transition text-xl" />
                <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
                {/* Mini Cart Preview */}
                <div className="absolute right-0 mt-2 w-72 bg-gray-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <h3 className="text-white font-semibold mb-2">Shopping Cart (2)</h3>
                    <div className="space-y-2">
                      {/* Cart Items Preview */}
                      <div className="flex items-center space-x-2">
                        <img src="product-thumb.jpg" alt="Product" className="w-12 h-12 object-cover rounded" />
                        <div className="flex-1">
                          <p className="text-white text-sm">Premium T-Shirt</p>
                          <p className="text-purple-500 text-sm">$59.99</p>
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-purple-500 text-white rounded-full py-2 mt-4 hover:bg-purple-600 transition">
                      View Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <FaUser className="text-gray-300 hover:text-white cursor-pointer transition text-xl" />
                {/* Auth Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="p-4 space-y-2">
                    <button className="w-full bg-purple-500 text-white rounded-full py-2 hover:bg-purple-600 transition">
                      Sign In
                    </button>
                    <button className="w-full border border-purple-500 text-purple-500 rounded-full py-2 hover:bg-purple-500 hover:text-white transition">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              <RiMenu3Line className="text-gray-300 hover:text-white cursor-pointer transition text-2xl md:hidden" />
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative h-screen">
        <Swiper
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          modules={[Autoplay, EffectFade, Navigation]}
          className="h-full"
        >
          {[
            { img: heroImage1, title: "Luxury Redefined", subtitle: "Exclusive Collection 2024" },
            { img: heroImage2, title: "Elegance in Style", subtitle: "Premium Fashion Selection" },
            { img: heroImage3, title: "Bold & Beautiful", subtitle: "New Season Arrivals" }
          ].map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl"
                  >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                      {slide.title} <span className="text-purple-500">Collection</span>
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-purple-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 transition"
                      >
                        Shop Now
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Rest of the sections remain the same */}
      // ... existing sections ...

    </div>
  );
};

export default LandingPage;
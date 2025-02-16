import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaInstagram, FaTwitter, FaPinterest, FaPlay, FaArrowRight } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

// Import your local images
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';
import collection1 from '../images/product1.jpg';
import collection2 from '../images/product2.jpg';
import collection3 from '../images/product3.jpg';
import collection4 from '../images/product4.jpg';
import eveningWear from '../images/product5.jpg';
import accessories from '../images/product6.jpg';
import casualWear from '../images/product7.jpg';

const LandingPage = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-gray-950 min-h-screen font-['Poppins']">
      <Navbar />
      <HeroSection setShowVideo={setShowVideo} />

      {/* Collection Preview */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light text-white mb-4 tracking-wide">Latest Collection</h2>
              <p className="text-gray-400">Discover our newest arrivals</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-white flex items-center group"
            >
              View All 
              <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[collection1, collection2, collection3, collection4].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Collection item ${index + 1}`}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white text-gray-900 py-3 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-white font-light">Luxury Item {index + 1}</h3>
                  <p className="text-gray-400 mt-1">$299.99</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-wide">Our Legacy of Elegance</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Since 1995, FemmeStyle has been crafting exceptional garments that blend timeless elegance with contemporary design. 
            Our commitment to quality and attention to detail has established us as a leading name in women's fashion.
          </p>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-center text-white mb-16 tracking-wide">
            Signature Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Evening Wear', desc: 'Timeless Sophistication', img: eveningWear },
              { name: 'Casual Wear', desc: 'Everyday Comfort', img: casualWear },
              { name: 'Accessories', desc: 'Refined Details', img: accessories }
            ].map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.02 }}
                className="relative h-[600px] group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                <img
                  src={category.img}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-light text-white mb-2 tracking-wide">{category.name}</h3>
                  <p className="text-gray-300 mb-8 font-light">{category.desc}</p>
                  <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-gray-900 transition duration-300">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Section */}
      <section className="py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light text-white mb-8 tracking-wide">The Art of Craftsmanship</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Every piece in our collection is a testament to the finest craftsmanship, 
              created by master artisans with decades of experience. We source only the 
              most exceptional materials from around the world.
            </p>
            <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-gray-900 transition duration-300">
              Discover Our Process
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={collection1} alt="Craftsmanship" className="w-full h-[400px] object-cover" />
            <img src={collection2} alt="Atelier" className="w-full h-[400px] object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h1 className="text-2xl font-bold text-white mb-6">
              FemmeStyle
            </h1>
            <p className="text-sm font-light">Crafting luxury fashion with uncompromising attention to detail since 1995.</p>
            <div className="flex space-x-4 mt-6">
              <FaInstagram className="text-xl hover:text-white cursor-pointer transition" />
              <FaTwitter className="text-xl hover:text-white cursor-pointer transition" />
              <FaPinterest className="text-xl hover:text-white cursor-pointer transition" />
            </div>
          </div>
          {['Collections', 'Company', 'Client Care', 'Legal'].map((section) => (
            <div key={section}>
              <h3 className="text-white font-light mb-6 tracking-wide">{section}</h3>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm font-light hover:text-white transition">
                      Link {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setShowVideo(false)}
          >
            <div className="relative w-full max-w-4xl mx-4">
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                onClick={() => setShowVideo(false)}
              >
                <RiCloseLine size={32} />
              </button>
              <div className="aspect-video bg-gray-800">
                {/* Add your video component here */}
                <div className="w-full h-full flex items-center justify-center text-white">
                  Video Player Placeholder
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
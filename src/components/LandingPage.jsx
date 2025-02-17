import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaInstagram, FaTwitter, FaPinterest, FaPlay, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
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

      {/* Elegant Slogan Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>
        <FaQuoteLeft className="text-4xl text-purple-500 mx-auto mb-8 opacity-50" />
        <h2 className="text-5xl font-extrabold text-white mb-6 tracking-wider">
          Elegance in Every Stitch
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Where timeless sophistication meets contemporary design. Each piece tells a story of craftsmanship and dedication.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30"></div>
      </section>

      {/* Collection Preview */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-light text-white mb-4 tracking-wider">Latest Collection</h2>
              <p className="text-gray-400 text-lg">Discover our newest arrivals</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-white flex items-center group bg-purple-500/10 px-6 py-3 rounded-full"
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
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Collection item ${index + 1}`}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white/90 text-gray-900 py-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Quick View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-white font-light text-lg">Luxury Item {index + 1}</h3>
                  <p className="text-purple-400 mt-2 font-medium">$299.99</p>
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

      {/* Custom-Made Designs Section */}
      <section className="py-32 px-4 bg-gray-800 relative">
        <div className="absolute inset-0 bg-[url('/path/to/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-purple-400 text-sm tracking-widest uppercase mb-4 block">Bespoke Fashion</span>
          <h2 className="text-5xl font-extrabold text-white mb-8">Custom-Made Designs</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience the luxury of bespoke fashion with our custom-made designs. Tailored to perfection, each piece is crafted to reflect your unique style.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-purple-500 text-white px-10 py-4 rounded-full hover:bg-purple-600 transition-colors flex items-center mx-auto group"
          >
            Begin Your Journey
            <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>
      </section>

      {/* Modern-Day Bridal Section */}
      <section className="py-32 px-4 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-purple-400 text-sm tracking-widest uppercase mb-4 block">Bridal Collection</span>
          <h2 className="text-5xl font-extrabold text-white mb-8">Modern-Day Bridal Dresses</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Walk down the aisle in style with our exquisite collection of modern-day bridal dresses. Each dress is a masterpiece, designed for the contemporary bride.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-900 px-10 py-4 rounded-full hover:bg-gray-100 transition-colors flex items-center mx-auto group"
          >
            View Collection
            <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">KnH Empire</h2>
            <p className="text-lg font-light max-w-2xl mx-auto">Elegance in Every Stitch</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
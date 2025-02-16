import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import your local images
import hero1 from '../images/hero1.jpg';
import hero2 from '../images/hero2.jpg';
import hero3 from '../images/hero3.jpg';

const HeroSection = ({ setShowVideo }) => {
  return (
    <section className="relative h-screen">
      <Swiper
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-full"
      >
        {[
          { src: hero1, title: "Elegant & Chic", subtitle: "Spring Collection 2024" },
          { src: hero2, title: "Bold & Beautiful", subtitle: "Summer Styles" },
          { src: hero3, title: "Timeless Classics", subtitle: "Year-Round Essentials" }
        ].map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
              <img
                src={slide.src}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative z-20 h-full flex items-center px-4 max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-2xl"
                >
                  <h2 className="text-6xl md:text-8xl font-light text-white mb-6 tracking-wider">
                    {slide.title}
                  </h2>
                  <p className="text-gray-200 text-xl md:text-2xl mb-12 font-light tracking-wide">
                    {slide.subtitle}
                  </p>
                  <div className="flex items-center space-x-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-white text-gray-900 px-12 py-4 text-lg font-light tracking-wider hover:bg-gray-200 transition-colors flex items-center group"
                    >
                      Explore Collection
                      <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setShowVideo(true)}
                      className="flex items-center space-x-3 text-white group"
                    >
                      <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-colors">
                        <FaPlay className="ml-1" />
                      </div>
                      <span className="font-light tracking-wide">Watch Story</span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection; 
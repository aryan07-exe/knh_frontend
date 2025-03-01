import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "../components/NewHero";
import BridalSection from "./sections/BridalSection";
import CustomDesignsSection from "./sections/CustomDesignsSection";
import FeaturedCategories from "./sections/FeaturedCategories";
import SpecialOffers from "./sections/SpecialOffers";
import BookingSection from "./sections/BookingSection";
import EnhancedFooter from "./sections/EnhancedFooter";



const NewLandingPage = () => {
  // Creating references for each section
  const heroRef = useRef(null);
  const bridalRef = useRef(null);
  const customRef = useRef(null);
  const featuredRef = useRef(null);
  const specialRef = useRef(null);
  const bookingRef = useRef(null);
  const footerRef = useRef(null);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black min-h-screen font-['Poppins']">
      <Navbar 
      
        scrollToSection={scrollToSection}
        refs={{ heroRef, bridalRef, customRef, featuredRef, specialRef, bookingRef, footerRef }}
      />

      <section ref={heroRef}>
        <HeroSection />
      </section>

      <section ref={bridalRef}>
        <BridalSection />
      </section>

      <section ref={customRef}>
        <CustomDesignsSection />
      </section>

      <section ref={featuredRef}>
        <FeaturedCategories />
      </section>

      <section ref={specialRef}>
        <SpecialOffers />
      </section>

      <section ref={bookingRef}>
        <BookingSection />
      </section>

      <section ref={footerRef}>
        <EnhancedFooter />
      </section>
    </div>
  );
};

export default NewLandingPage;

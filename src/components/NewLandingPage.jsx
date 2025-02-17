import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./sections/HeroSection";
import BridalSection from "./sections/BridalSection";
import CustomDesignsSection from "./sections/CustomDesignsSection";
import FeaturedCategories from "./sections/FeaturedCategories";
import SpecialOffers from "./sections/SpecialOffers";
import BookingSection from "./sections/BookingSection";
import EnhancedFooter from "./sections/EnhancedFooter";

const NewLandingPage = () => {
  return (
    <div className="bg-black min-h-screen font-['Poppins']">
      <Navbar />
      <HeroSection />
      <BridalSection />
      <CustomDesignsSection />
      <FeaturedCategories />
      <SpecialOffers />
      <BookingSection />
      <EnhancedFooter />
    </div>
  );
};

export default NewLandingPage; 
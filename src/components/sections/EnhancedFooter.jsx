import React from "react";
import { FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const EnhancedFooter = () => {
  const quickLinks = ['New Arrivals', 'Bridal Collection', 'Custom Designs', 'Accessories'];
  const customerCare = ['Contact Us', 'Book Appointment', 'Shipping Info', 'Returns', 'Size Guide'];

  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">KnH Empire</h2>
            <p className="text-gray-400">Elegance in Every Stitch</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Customer Care</h3>
            <ul className="space-y-4">
              {customerCare.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full focus:outline-none focus:border-emerald-500 text-white"
              />
              <button className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 KnH Empire. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-emerald-400 text-sm">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter; 
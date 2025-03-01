import React from "react";
import { FaInstagram,FaTiktok,FaFacebook } from "react-icons/fa";

const EnhancedFooter = () => {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">KnH Empire</h2>
            <p className="text-gray-400">Elegance in Every Stitch</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/knhempire?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://m.facebook.com/knhempire/" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.tiktok.com/@knhempire" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Bridal Collection
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Custom Designs
                </a>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Customer Care</h3>
            <ul className="space-y-4">
            <li className="space-y-2"> 
  <a className="text-gray-400 hover:text-emerald-400 transition-colors text-lg font-semibold">
    Email:
  </a>
  <br />
  <a className="text-white hover:text-emerald-400 transition-colors">  
    knhempire@gmail.com
  </a>

  <br /><br /> {/* Adds space between Email and Phone sections */}

  <a className="text-gray-400 hover:text-emerald-400 transition-colors text-lg font-semibold">
    WhatsApp:
  </a>
  <br />
  <a className="text-white hover:text-emerald-400 transition-colors">
    +234-8174466380
  </a>
</li>

              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-lg">
                  Book Appointment
                </a>
              </li>
            
            </ul>
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

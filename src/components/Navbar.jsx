  import { useState } from "react";

  import logo from "../images/knhlogo.jpg";

  const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <header className="flex shadow-lg py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          {/* Logo for large screens */}
          <a
            href="#"
            className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2 max-sm:hidden "
          >
            <img src={logo} alt="logo" className="w-36" />
          </a>
          
          {/* Logo for small screens */}
          <a href="#" className="hidden max-sm:block">
            <img src={logo} alt="logo" className="w-9" />
          </a>

          {/* Navbar Links */}
          <div
            className={`max-lg:w-full max-lg:fixed max-lg:bg-white max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 transition-all duration-300 ${
              menuOpen ? "block" : "hidden lg:flex"
            }`}
          >
            {/* Close button for mobile */}
            {menuOpen && (
              <button onClick={() => setMenuOpen(false)} className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
                </svg>
              </button>
            )}

            {/* Navigation Links */}
            <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="#" className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]">Home</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="#" className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]">Team</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="#" className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]">Feature</a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a href="#" className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]">Blog</a>
              </li>
            </ul>
          </div>

          {/* Right section - Login, Signup, and Menu Toggle */}
          <div className="flex items-center ml-auto space-x-6">
            <button className="font-semibold text-[15px] border-none outline-none">
              <a href="/#" className="text-[#007bff] hover:underline">Login</a>
            </button>
            <button className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
            <a href="/signup">Sign up</a>  
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
              <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    );
  };

  export default Navbar;


  
  
import React, { useState } from "react";

// Import your logo SVG image
import logo from "../../public/logo.svg";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center mx-2">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="font-bold text-xl">MKC</span>
        </div>

        <div className="lg:flex hidden items-center">
          <div className="text-sm lg:flex-grow">
            <a
              href="#neet"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              NEET
            </a>
            <a
              href="#jee"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              JEE
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Contact
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              About
            </a>
          </div>
          <div>
            <button className="bg-white text-black px-4 py-2 rounded-md mx-2">
              Pay Now
            </button>
          </div>
          <div>
            <button className="bg-white text-black px-4 py-2 rounded-md">
              Start Learning
            </button>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  d="M19.293 6.293l-4.293 4.293 4.293 4.293-1.414 1.414-4.293-4.293-4.293 4.293-1.414-1.414 4.293-4.293-4.293-4.293 1.414-1.414 4.293 4.293 4.293-4.293 1.414 1.414z"
                  fillRule="evenodd"
                />
              ) : (
                <path
                  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  fillRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block mx-4" : "hidden"} lg:hidden`}>
        <div className="text-sm">
          <a href="#home" className="block mt-4 text-white hover:text-gray-300">
            Home
          </a>
          <a
            href="#study-materials"
            className="block mt-4 text-white hover:text-gray-300"
          >
            Study Materials
          </a>
          <a
            href="#practice-tests"
            className="block mt-4 text-white hover:text-gray-300"
          >
            Practice Tests
          </a>
          <a
            href="#about"
            className="block mt-4 text-white hover:text-gray-300"
          >
            About
          </a>
        </div>

        <div className="mt-4">
          <button className="bg-white text-black px-4 py-2 rounded-md my-2">
            Start Learning
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

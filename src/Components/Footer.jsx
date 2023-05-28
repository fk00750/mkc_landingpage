import React from "react";

/**
 * You are a senior frontend developer with experience in developing mobile friendly and responsive sites, your prefered tools are react and tailwindcss.
 * Your current task is to make the following Footer component responsive
 */
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="md:col-span-2 lg:col-span-3">
          <h1 className="text-2xl font-bold mb-4">MKC</h1>
          <p className="text-sm mb-4">
            Major Kalshi Classes, a renowned coaching institute for NEET and JEE
            exams, has recently launched its new website with the aim of
            providing a seamless and comprehensive online learning experience to
            aspiring medical and engineering students.
          </p>
          <p className="text-sm">
            Address: 105/244, Shapath Building, Tagore Town, Prayagraj, Uttar Pradesh - 211002
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-gray-400">
                Admissions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p className="text-sm mb-2">Phone: (+91) 9696330033</p>
          <p className="text-sm mb-2">Email: support@majorkalshiclasses.com</p>
          <p className="text-sm">Follow us on social media:</p>
          <div className="flex space-x-2 mt-2">
            <a href="#" className="text-sm text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-sm text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-sm text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Major Kalshi Classes. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

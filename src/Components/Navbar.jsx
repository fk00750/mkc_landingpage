import React, { useState } from "react";

// Import your logo SVG image
import logo from "../../public/logo.svg";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

// Do the same for JEE button
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isJeeMenuOpen, setJeeMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggJeeleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    switch (id) {
      case "neet_course":
      case "jee_course":
        navigate("/course");
        break;
      case "neet_syllabus":
        navigate("/neet-syllabus");
        break;
      case "jee_syllabus":
        navigate("/jee-syllabus");
        break;
      case "neet_notification":
      case "jee_notification":
        navigate("/notification");
        break;
      case "neet_fee":
        navigate("/neet-fee-structure");
        break;
      case "jee_fee":
        navigate("/jee-fee-structure");
        break;
      case "neet_admission":
      case "jee_admission":
        navigate("/admission");
        break;
      case "logo":
      case "logo_name":
        navigate("/");
        break;
      case "about_mkc":
        navigate("/about");
        break;
      case "contact_mkc":
        navigate("/contact");
        break;
      default:
        break;
    }
  };

  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-center space-x-2 py-4">
        <div className="flex items-center mx-8">
          <img
            onClick={handleClick}
            id="logo"
            src={logo}
            alt="Logo"
            className="h-10 w-10 mr-2 cursor-pointer"
          />
          <span
            onClick={handleClick}
            id="logo_name"
            className="font-bold text-xl cursor-pointer"
          >
            MKC
          </span>
        </div>
        <div className="lg:flex hidden items-center">
          <div className="text-sm lg:flex space-x-4">
            <div
              className="relative group flex items-center justify-center -space-x-3"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                type="button"
                className={`flex mt-4 lg:inline-block lg:mt-0 text-white ${
                  isMenuOpen ? "text-gray-300" : "hover:text-gray-300"
                } mr-4`}
              >
                NEET
              </button>
              <BsFillArrowDownCircleFill className="h-4 w-4 text-white" />
              {isMenuOpen && (
                <div className="absolute bg-black text-white mt-48 p-2 rounded left-0">
                  <button
                    onClick={handleClick}
                    id="neet_course"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Course
                  </button>
                  <button
                    onClick={handleClick}
                    id="neet_syllabus"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Syllabus
                  </button>
                  <button
                    onClick={handleClick}
                    id="neet_notification"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Notification
                  </button>
                  <button
                    onClick={handleClick}
                    id="neet_fee"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Fee Structure
                  </button>
                  <button
                    onClick={handleClick}
                    id="neet_admission"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Admission
                  </button>
                </div>
              )}
            </div>
            <div
              className="relative group flex items-center justify-center -space-x-3"
              onMouseEnter={() => setJeeMenuOpen(true)}
              onMouseLeave={() => setJeeMenuOpen(false)}
            >
              <button
                type="button"
                className={`flex mt-4 lg:inline-block lg:mt-0 text-white ${
                  isJeeMenuOpen ? "text-gray-300" : "hover:text-gray-300"
                } mr-4`}
              >
                JEE
              </button>
              <BsFillArrowDownCircleFill className="h-4 w-4 text-white" />
              {isJeeMenuOpen && (
                <div className="absolute bg-black text-white mt-48 p-2 rounded left-0">
                  <button
                    onClick={handleClick}
                    id="jee_course"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Course
                  </button>
                  <button
                    onClick={handleClick}
                    id="jee_syllabus"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Syllabus
                  </button>
                  <button
                    onClick={handleClick}
                    id="jee_notification"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Notification
                  </button>
                  <button
                    onClick={handleClick}
                    id="jee_fee"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Fee Structure
                  </button>
                  <button
                    onClick={handleClick}
                    id="jee_admission"
                    className="block w-full text-left py-1 hover:text-blue-400"
                  >
                    Admission
                  </button>
                </div>
              )}
            </div>
            <button
              id="contact_mkc"
              type="button"
              onClick={handleClick}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              Contact
            </button>
            <button
              id="about_mkc"
              type="button"
              onClick={handleClick}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              About
            </button>
          </div>
          <div>
            <button className="bg-white text-black px-4 py-2 rounded-md ml-8 mr-2">
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
          <button
            type="button"
            className="block mt-4 text-white hover:text-gray-300"
          >
            Home
          </button>
          <button
            type="button"
            className="block mt-4 text-white hover:text-gray-300"
          >
            Study Materials
          </button>
          <button
            type="button"
            className="block mt-4 text-white hover:text-gray-300"
          >
            Practice Tests
          </button>
          <button
            type="button"
            className="block mt-4 text-white hover:text-gray-300"
          >
            About
          </button>
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

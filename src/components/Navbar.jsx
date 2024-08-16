import logo from "../assets/ph.png";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full text-black z-50 font-poppins bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="https://www.itsmorefuninthephilippines.com/">
              <img src={logo} alt="Logo" className="h-10" />
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className={`lg:flex flex-1 justify-center items-center lg:space-x-10 text-lg ${isOpen ? 'absolute top-16 left-0 w-full bg-white p-4 space-y-4' : 'hidden'} lg:block`}>
            <a href="#home" className="block lg:inline-block text-center hover:text-orange-600 font-bold">Home</a>
            <a href="#about" className="block lg:inline-block text-center hover:text-orange-600 font-bold">About</a>
            <a href="#info" className="block lg:inline-block text-center hover:text-orange-600 font-bold">Tourist Spot</a>
            <a href="#services" className="block lg:inline-block text-center hover:text-orange-600 font-bold">Services</a>
            <a href="#pricing" className="block lg:inline-block text-center hover:text-orange-600 font-bold">Pricing</a>
            <a href="#contact" className="block lg:inline-block text-center hover:text-orange-600 font-bold">Contact</a>
          </div>
          <div className="flex-shrink-0 hover:text-orange-600 transition-colors duration-300">
            <Link to="/login">
              <FaUser size={29} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

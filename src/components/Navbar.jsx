import logo from "../assets/ph.png";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-black z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="https://www.itsmorefuninthephilippines.com/">
              <img src={logo} alt="Logo" className="h-10" />
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center space-x-10 text-lg">
            <a href="Home" className="hover:text-red-500 font-bold">Home</a>
            <a href="About" className="hover:text-red-500 font-bold">About</a>
            <a href="#" className="hover:text-red-500 font-bold">Tourist Spot</a>
            <a href="#" className="hover:text-red-500 font-bold">Services</a>
            <a href="#" className="font-bold hover:text-red-500">Contact</a>
          </div>
          <div className="flex-shrink-0 hover:text-orange-600 transition-colors duration-300">
            <a href="#">
              <FaUser size={29} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

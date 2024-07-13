import logo from "../assets/ph.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-black z-50 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={logo} alt="Logo" className="h-10" />
            </a>
          </div>
          <div className="flex-1 flex justify-center items-center space-x-10 text-lg">
            <a href="Home" className="hover:text-red-500">Home</a>
            <a href="About" className="hover:text-red-500">About</a>
            <a href="#" className="hover:text-red-500">Services</a>
            <a href="#" className="hover:text-red-500">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

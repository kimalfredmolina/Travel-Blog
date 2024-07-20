import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import background from '../assets/tourist.mp4';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-[-1]">
        <source src={background} type="video/mp4" />
      </video>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Register a new account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              placeholder="Confirm Password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Register
          </button>
        </form>
        <div className="mt-4 text-center text-black">
          <p>or register with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-2xl text-black hover:text-green-500 transition-colors duration-300">
              <FaFacebook size={34} />
            </a>
            <a href="#" className="text-2xl text-black hover:text-green-500 transition-colors duration-300">
              <FaInstagram size={34} />
            </a>
            <a href="#" className="text-2xl text-black hover:text-green-500 transition-colors duration-300">
              <FaGithub size={34} />
            </a>
          </div>
          <p className="mt-4">
            Already have an account? <Link to="/login" className="text-green-500 hover:underline">Login here</Link>
          </p>
          <p className="mt-4">
            <Link to="/" className="text-green-500 hover:underline">Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

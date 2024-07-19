import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import background from '../assets/tourist.mp4';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{ backgroundImage: `url(${background})` }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Login into account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              placeholder="Email Address"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              placeholder="Password"/>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-500 hover:underline">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-black">
          <p>or login with</p>
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
            Don't have an account? <a href="#" className="text-green-500 hover:underline">Register here</a>
          </p>
          <p className="mt-4">
            <Link to="/" className="text-green-500 hover:underline">Back to Home</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

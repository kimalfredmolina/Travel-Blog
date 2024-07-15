import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-primary-foreground py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">Explore More</h2>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li><a href="#" className="text-black hover:text-orange-600 transition-colors duration-300 font-semibold">Destinations</a></li>
              <li><a href="#" className="text-black hover:text-orange-600 transition-colors duration-300 font-semibold">Travel Guides</a></li>
              <li><a href="#" className="text-black hover:text-orange-600 transition-colors duration-300 font-semibold">Tips & Tricks</a></li>
            </ul>
          </div>
          <div className="md:text-right">
            <h2 className="text-2xl font-bold mb-4 text-black">Follow Us</h2>
            <div className="flex justify-end space-x-6">
              <a href="https://www.facebook.com/kimalfred.amolina" className="text-2xl text-black hover:text-orange-600 transition-colors duration-300">
                <FaFacebook size={29} />
              </a>
              <a href="#" className="text-2xl text-black hover:text-orange-600 transition-colors duration-300">
                <FaInstagram size={29} />
              </a>
              <a href="https://github.com/kimalfred" className="text-2xl text-black hover:text-orange-600 transition-colors duration-300">
                <FaGithub size={29} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground text-black font-semibold">&copy; 2023 Your Company. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default Footer;

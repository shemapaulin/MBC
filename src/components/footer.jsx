import { FaYoutube, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import finalLogo from "../assets/finalLogo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-black text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <img src={finalLogo} alt="Final Logo" className="w-48" />
        </div>
        <div className="text-sm lg:w-2/3 flex justify-between">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase font-bold">Features</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="uppercase font-bold">Social Media</h3>
            <div className="flex justify-start space-x-3">
              <a href="https://www.facebook.com/mubugabiocoffee" title="Facebook" className="flex items-center p-1">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/mubugabiocoffee" title="Twitter" className="flex items-center p-1">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/mubugabiocoffee/" title="Instagram" className="flex items-center p-1">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@mubugabiocoffee2098" title="YouTube" className="flex items-center p-1">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" title="LinkedIn" className="flex items-center p-1">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-600">
        Built by ©{" "}
        <a href="https://www.mubugabiocoffee.com" target="_blank" rel="noopener noreferrer">
          Mubuga Bio Coffee
        </a>
      </div>
    </footer>
  );
};

export default Footer;

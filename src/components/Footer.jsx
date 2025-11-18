import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15322b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 tracking-wider">BOCADO</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience authentic flavors and culinary excellence in the heart of Berlin.
              Where tradition meets innovation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 p-2 rounded-full transition-colors duration-200"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 p-2 rounded-full transition-colors duration-200"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 hover:bg-teal-600 p-2 rounded-full transition-colors duration-200"
              >
                <FaTwitter className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-200 text-sm"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-300 hover:text-teal-300 transition-colors duration-200 text-sm"
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-medium">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="font-medium">12:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="font-medium">12:00 - 21:00</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <FaMapMarkerAlt className="text-teal-400 mt-1 flex-shrink-0" />
                <span>123 Berliner Straße, 10115 Berlin, Germany</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <FaPhone className="text-teal-400 flex-shrink-0" />
                <a href="tel:+491234567890" className="hover:text-teal-300 transition-colors duration-200">
                  +49 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <FaEnvelope className="text-teal-400 flex-shrink-0" />
                <a href="mailto:info@bocado.com" className="hover:text-teal-300 transition-colors duration-200">
                  info@bocado.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} BOCADO Berlin. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-teal-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-teal-300 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

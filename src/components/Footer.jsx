import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#134e4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">BOCADO</h3>
            <p className="text-gray-300 mb-4">
              Genießen Sie die feinsten kulinarischen Köstlichkeiten mit frischen Zutaten und authentischen
              Aromen. Wir servieren Glück auf jedem Teller.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200">
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200"
                >
                  Menü
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200"
                ></Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200"
                >
                  Kontakt
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/cart"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200"
                >
                  Warenkorb
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontaktieren Sie uns</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MdLocationOn className="h-5 w-5 text-[#feaa3f] mt-1 flex-shrink-0" />
                <span className="text-gray-300">Am Dachsbau 12, 13503 Berlin</span>
              </li>
              <li className="flex items-center space-x-3">
                <MdPhone className="h-5 w-5 text-[#feaa3f] flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200"
                >
                  +49 30 47036642
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MdEmail className="h-5 w-5 text-[#feaa3f] flex-shrink-0" />
                <a
                  href="mailto:info@bocado.com"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200"
                >
                  bocadoberlin@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61580057680833"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#feaa3f] hover:bg-[#fbbf24] p-2 rounded-full transition-colors duration-200"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/bocado.berlin?igsh=emZlN2cxcDYwY244"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#feaa3f] hover:bg-[#fbbf24] p-2 rounded-full transition-colors duration-200"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} BOCADO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

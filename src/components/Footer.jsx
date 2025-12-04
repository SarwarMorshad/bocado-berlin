import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#134e4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#feaa3f]">BOCADO</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Genießen Sie die feinsten kulinarischen Köstlichkeiten mit frischen Zutaten und authentischen
              Aromen. Wir servieren Glück auf jedem Teller.
            </p>
            {/* Social Media */}
            <div className="flex space-x-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61580057680833"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#feaa3f] hover:bg-[#fbbf24] p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bocado.berlin?igsh=emZlN2cxcDYwY244"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#feaa3f] hover:bg-[#fbbf24] p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#feaa3f] pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3 mt-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200 flex items-center group"
                >
                  <span className="mr-2 text-[#feaa3f] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200 flex items-center group"
                >
                  <span className="mr-2 text-[#feaa3f] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Menü
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200 flex items-center group"
                >
                  <span className="mr-2 text-[#feaa3f] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200 flex items-center group"
                >
                  <span className="mr-2 text-[#feaa3f] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to="/reservation"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200 flex items-center group"
                >
                  <span className="mr-2 text-[#feaa3f] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                  Reservierung
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#feaa3f] pb-2 inline-block">
              Kontakt
            </h3>
            <ul className="space-y-4 mt-4">
              {/* Address */}
              <li className="flex items-start space-x-3 group">
                <MdLocationOn className="h-5 w-5 text-[#feaa3f] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 leading-relaxed">Am Dachsbau 12, 13503 Berlin</span>
              </li>

              {/* Phone */}
              <li className="flex items-center space-x-3 group">
                <MdPhone className="h-5 w-5 text-[#feaa3f] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+493047036642"
                  className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200"
                >
                  +49 30 47036642
                </a>
              </li>

              {/* Email - General */}
              <li className="flex items-start space-x-3 group">
                <MdEmail className="h-5 w-5 text-[#feaa3f] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 mb-1">Allgemeine Anfragen:</span>
                  <a
                    href="mailto:bocadoberlin@gmail.com"
                    className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200 break-all"
                  >
                    bocadoberlin@gmail.com
                  </a>
                </div>
              </li>

              {/* Email - Reservations */}
              <li className="flex items-start space-x-3 group">
                <MdEmail className="h-5 w-5 text-[#feaa3f] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 mb-1">Reservierungen:</span>
                  <a
                    href="mailto:reservations@bocadoberlin.de"
                    className="text-gray-300 hover:text-[#feaa3f] transition-colors duration-200 break-all"
                  >
                    reservations@bocadoberlin.de
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 border-b-2 border-[#feaa3f] pb-2 inline-block">
              Öffnungszeiten
            </h3>
            <ul className="space-y-3 mt-4">
              <li className="flex justify-between text-gray-300">
                <span className="font-medium">Mo - Do:</span>
                <span>12:00 - 22:00 Uhr</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span className="font-medium">Fr - Sa:</span>
                <span>12:00 - 22:00 Uhr</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span className="font-medium">Sonntag:</span>
                <span>12:00 - 22:00 Uhr</span>
              </li>
            </ul>

            {/* Newsletter Signup (Optional) */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} BOCADO Berlin. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-[#feaa3f] transition-colors">
                Datenschutz
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#feaa3f] transition-colors">
                AGB
              </Link>
              <Link to="/imprint" className="text-gray-400 hover:text-[#feaa3f] transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { FaHome, FaUtensils, FaPhone, FaExclamationTriangle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Fehler</title>
        <meta
          name="description"
          content="Create a new account on Movie Matrix to start exploring and managing your movie collection."
        />
      </Helmet>
      <div className="min-h-screen bg-[#134e4a] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-[#feaa3f] rounded-full mb-6 animate-bounce">
              <FaExclamationTriangle className="h-16 w-16 text-white" />
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-9xl font-bold text-[#feaa3f] mb-4">404</h1>

          {/* Error Message */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¡Ay, caramba!</h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">Seite nicht gefunden</p>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
            Die Seite, die Sie suchen, existiert nicht oder wurde verschoben. Aber keine Sorge, unsere
            köstlichen Tapas warten auf Sie!
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-[#feaa3f] mx-auto mb-8"></div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <Link
              to="/"
              className="bg-[#feaa3f] hover:bg-[#fbbf24] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaHome className="h-5 w-5" />
              Home
            </Link>

            <Link
              to="/menu"
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaUtensils className="h-5 w-5" />
              Menu
            </Link>

            <Link
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaPhone className="h-5 w-5" />
              Contact
            </Link>
          </div>

          {/* Additional Info */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
            <p className="text-gray-200 mb-4">Brauchen Sie Hilfe? Kontaktieren Sie uns:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[#feaa3f] font-semibold">
              <a href="tel:+493047036642" className="hover:text-[#fbbf24] transition-colors">
                📞 +49 30 47036642
              </a>
              <span className="hidden sm:block text-white">|</span>
              <a href="mailto:bocadoberlin@gmail.com" className="hover:text-[#fbbf24] transition-colors">
                ✉️ bocadoberlin@gmail.com
              </a>
            </div>
          </div>

          {/* Fun Message */}
          <p className="text-gray-300 text-sm mt-8 italic">
            "Manchmal verirrt man sich... aber bei BOCADO findet man immer gutes Essen!" 🍷
          </p>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;

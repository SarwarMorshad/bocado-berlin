import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { TbTableShare } from "react-icons/tb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const navLinks = [
    { name: "Startseite", path: "/" },
    { name: "Über uns", path: "/about" },
    { name: "Kontakt", path: "/contact" },
    { name: "Speisekarte", path: "/menu" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // GSAP Animation for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      // Animate menu opening
      gsap.fromTo(
        mobileMenuRef.current,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );

      // Stagger animate menu items
      gsap.fromTo(
        menuItemsRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    } else if (mobileMenuRef.current) {
      // Animate menu closing
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#134e4a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl sm:text-3xl text-primary font-bold tracking-wider flex-shrink-0">
            BOCADO
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm xl:text-base font-semibold transition-colors duration-200 whitespace-nowrap ${
                    isActive ? "text-[#fbbf24]" : "text-white hover:text-[#feaa3f]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Online Bestellen Button - Desktop */}
            <a
              href="https://consumer.vectron.cloud/sites/7e568f4a-e8c1-4e45-b39c-08dccb017cc7/online-ordering"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fbbf24] hover:bg-[#feaa3f] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl font-semibold text-sm xl:text-base transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Online Bestellen
            </a>

            {/* Reserve Button - Desktop */}
            <Link
              to="/reservation"
              className="bg-[#feaa3f] hover:bg-[#fbbf24] text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-xl font-semibold text-sm xl:text-base transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center gap-1 xl:gap-2 justify-center whitespace-nowrap">
                <span>
                  <TbTableShare />
                </span>
                Tisch Reservieren
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              <svg
                className="h-6 w-6 transition-transform duration-300"
                style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden overflow-hidden" style={{ height: 0, opacity: 0 }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                ref={(el) => (menuItemsRef.current[index] = el)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-[#0f3a36] text-[#fbbf24]"
                      : "text-white hover:bg-[#0f3a36] hover:text-[#feaa3f]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Online Bestellen Button - Mobile */}
            <a
              href="https://consumer.vectron.cloud/sites/7e568f4a-e8c1-4e45-b39c-08dccb017cc7/online-ordering"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              ref={(el) => (menuItemsRef.current[navLinks.length] = el)}
              className="block mx-3 mt-4 bg-[#fbbf24] hover:bg-[#feaa3f] text-white px-6 py-2.5 rounded-lg font-semibold text-center transition-colors duration-200"
            >
              Online Bestellen
            </a>

            {/* Reserve Button - Mobile */}
            <Link
              to="/reservation"
              onClick={() => setIsMenuOpen(false)}
              ref={(el) => (menuItemsRef.current[navLinks.length + 1] = el)}
              className="block mx-3 mt-4 bg-[#feaa3f] hover:bg-[#fbbf24] text-white px-6 py-2.5 rounded-lg font-semibold text-center transition-colors duration-200"
            >
              <div className="flex items-center gap-2 justify-center">
                <span>
                  <TbTableShare />
                </span>
                Tisch Reservieren
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

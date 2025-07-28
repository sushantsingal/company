import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import indiaFlag from "../assets/flags/india.jpg";
import philippinesFlag from "../assets/flags/philippines.webp";
import usaFlag from "../assets/flags/usa.png";
import nepalFlag from "../assets/flags/nepal.png";
import kenyaFlag from "../assets/flags/kenya.png";
import hongkongFlag from "../assets/flags/hongkong.png";
import ukFlag from "../assets/flags/uk.avif";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative pb-1 font-medium capitalize transition duration-300
     ${isActive ? "text-blue-600" : "text-gray-700 hover:text-pink-600"}
     before:absolute before:bottom-0 before:left-0 before:h-[2px]
     before:bg-pink-600 before:transition-all before:duration-300
     before:w-0 hover:before:w-full`;

  const services = [
    "Event Consulting",
    "Marketing Consulting",
    "Tech Consulting",
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent"
        >
          Marketing Crawlers
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <NavLink to="/about" className={navLinkClass}>About</NavLink>

          {/* Services Dropdown */}
          <div className="relative group">
            <span
              className="relative pb-1 font-medium capitalize transition duration-300 flex items-center gap-1 text-gray-700 hover:text-pink-600
                before:absolute before:bottom-0 before:left-2 before:h-[2px]
                before:bg-pink-600 before:transition-all before:duration-300
                before:w-0 group-hover:before:w-full cursor-pointer"
            >
              Services <ChevronDown className="w-4 h-4" />
            </span>

            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/*Collective */}
          <div className="relative group">
            <span
              className="relative pb-1 font-medium capitalize transition duration-300 flex items-center gap-1 text-gray-700 hover:text-pink-600
                before:absolute before:bottom-0 before:left-2 before:h-[2px]
                before:bg-pink-600 before:transition-all before:duration-300
                before:w-0 group-hover:before:w-full cursor-pointer"
            >
              Crawlers Collective <ChevronDown className="w-4 h-4" />
            </span>

            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-56 z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/services/dream-chasers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition">Dream Chasers</Link>
              <Link to="/services/celebs-now" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition">Celebs Now</Link><a
                href="https://techbridgediplomacy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition"
              >
                Tech Bridge Diplomacy
              </a>
              <a
                href="https://theyogamantra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition"
              >
                Yoga Mantra
              </a>
            </div>
          </div>

          <NavLink to="/industries" className={navLinkClass}>Industries</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Insights</NavLink>
        </nav>

        {/* Country Flags (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {[indiaFlag, philippinesFlag, usaFlag, nepalFlag, kenyaFlag, hongkongFlag, ukFlag].map((flag, idx) => (
            <img
              key={idx}
              src={flag}
              alt="Country Flag"
              className="w-5 h-3 rounded-sm object-cover border"
              title="Office"
            />
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white bg-pink-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow px-6 pb-6 pt-2 flex flex-col space-y-4">
          <NavLink to="/about" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>

          {/* Mobile Dropdown */}
          <div>
            <button
              className="flex items-center gap-1 text-white bg-pink-600 font-medium capitalize"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 ml-4 space-y-1">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="block text-sm text-gray-700 hover:text-pink-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative group">
            <span
              className="relative pb-1 font-medium capitalize transition duration-300 flex items-center gap-1 text-gray-700 hover:text-pink-600
                before:absolute before:bottom-0 before:left-2 before:h-[2px]
                before:bg-pink-600 before:transition-all before:duration-300
                before:w-0 group-hover:before:w-full cursor-pointer"
            >
              Crawlers Collective <ChevronDown className="w-4 h-4" />
            </span>

            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-56 z-50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/services/dream-chasers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition">Dream Chasers</Link>
              <Link to="/services/celebs-now" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition">Celebs Now</Link><a
                href="https://techbridgediplomacy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition"
              >
                Tech Bridge Diplomacy
              </a>
              <a
                href="https://theyogamantra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition"
              >
                Yoga Mantra
              </a>
            </div>
          </div>

          <NavLink to="/industries" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Industries</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/portfolio" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>Insights</NavLink>
          <Link
            to="/contact"
            className="block w-full text-center bg-pink-600 text-white py-2 rounded hover:bg-blue-600 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Proposal
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent"
        >
          Marketing Crawlers
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative pb-1 font-medium capitalize transition duration-300
               ${isActive ? "text-blue-600" : "text-gray-700 hover:text-pink-600"}
               before:absolute before:bottom-0 before:left-0 before:h-[2px]
               before:bg-pink-600 before:transition-all before:duration-300
               before:w-0 hover:before:w-full`
            }
          >
            About
          </NavLink>

          {/* Dropdown Wrapper */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span
              className="relative pb-1 font-medium capitalize transition duration-300 flex items-center gap-1 text-gray-700 hover:text-pink-600
              before:absolute before:bottom-0 before:left-2 before:h-[2px]
              before:bg-pink-600 before:transition-all before:duration-300
              before:w-0 group-hover:before:w-full cursor-pointer"
            >
              Services <ChevronDown className="w-4 h-4" />
            </span>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50 py-2">
                {["Event Consulting", "Marketing Consulting", "Tech Consulting"].map((service, index) => (
                  <Link
                    key={index}
                    to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 transition"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/industries"
            className={({ isActive }) =>
              `relative pb-1 font-medium capitalize transition duration-300
               ${isActive ? "text-blue-600" : "text-gray-700 hover:text-pink-600"}
               before:absolute before:bottom-0 before:left-0 before:h-[2px]
               before:bg-pink-600 before:transition-all before:duration-300
               before:w-0 hover:before:w-full`
            }
          >
            Industries
          </NavLink>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `relative pb-1 font-medium capitalize transition duration-300
               ${isActive ? "text-blue-600" : "text-gray-700 hover:text-pink-600"}
               before:absolute before:bottom-0 before:left-0 before:h-[2px]
               before:bg-pink-600 before:transition-all before:duration-300
               before:w-0 hover:before:w-full`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative pb-1 font-medium capitalize transition duration-300
               ${isActive ? "text-blue-600" : "text-gray-700 hover:text-pink-600"}
               before:absolute before:bottom-0 before:left-0 before:h-[2px]
               before:bg-pink-600 before:transition-all before:duration-300
               before:w-0 hover:before:w-full`
            }
          >
            Contact
          </NavLink>
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Get Proposal
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

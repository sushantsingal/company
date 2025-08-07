import { useEffect, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  Phone,
  Mail,
  Facebook,
  Search,
  Instagram
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Event Consulting", path: "/services/event-consulting" },
  { name: "Tech Consulting", path: "/services/tech-consulting" },
  { name: "Marketing Consulting", path: "/services/marketing-consulting" },
  { name: "Dream Chasers", path: "/services/dream-chasers" },
  { name: "Celebs Now", path: "/services/celebs-now" },
  { name: "Industries", path: "/industries" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Retail", path: "/case-studies/retail" },
  { name: "Real Estate", path: "/case-studies/real-estate" },
  { name: "Oil & Gas", path: "/case-studies/oil-&-gas" },
  { name: "Manufacturing", path: "/case-studies/manufacturing" },
  { name: "Healthcare", path: "/case-studies/health-care" },
  { name: "Fintech", path: "/case-studies/fintech" },
  { name: "Education", path: "/case-studies/education" },
  { name: "Chemical", path: "/case-studies/chemical" },
  { name: "Insights", path: "/insights" },
  { name: "Collective", path: "/collective" },
  { name: "Contact", path: "/contact" },
  { name: "Digital Marketing", path: "/digital-marketing" },
  { name: "Digital Marketing Course", path: "/digital-marketing-course" },
  { name: "Internship Program", path: "/internship-program" },
  { name: "Our Process", path: "/our-process" },
  { name: "Partners", path: "/partners" },
  { name: "Terms", path: "/terms" },
  { name: "Advisors", path: "/advisors" },
  { name: "Mobile App Development", path: "/mobile-dev" },
  { name: "Website Development", path: "/web-dev" },
];

const Topbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const found = pages.find((page) =>
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (found) {
      navigate(found.path);
      setShowSearch(false);
      setSearchQuery("");
    } else {
      alert("No matching page found.");
    }
  };

  return (
    <div className="hidden md:block">
      <div className={`w-full bg-white border-b border-gray-300 text-sm text-gray-600 shadow-sm z-50 transition-all duration-300 ${isTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center relative">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1  text-pink-600">
              <Phone size={16} />
              <span className="text-gray-600 hover:text-pink-600 cursor-pointer font-semibold">+91 7627025781</span>
            </div>
            <div className="flex items-center gap-1 text-pink-600">
              <Mail size={16} />
              <a
                href="mailto:info@marketingcrawlers.com"
                className="text-gray-600 hover:text-pink-600"
              >
                info@marketingcrawlers.com
              </a>
            </div>
          </div>

          {/* Right: Socials & Search */}
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/marketingcrawlers/" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-pink-600 hover:text-pink-800 cursor-pointer" size={18} />
            </a>
            <a href="https://x.com/MarketingCrawl1/status/1418865005848629256" target="_blank" rel="noopener noreferrer">
              <BsTwitterX className="text-pink-600 hover:text-pink-800 cursor-pointer" size={18} />
            </a>
            <a href="https://www.instagram.com/marketingcrawlers/?hl=en " target="blank" className="text-pink-600 hover:text-pink-600">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/917627025781" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-pink-600 hover:text-pink-800 cursor-pointer" size={18} />
            </a>
            <button
              className="bg-white text-pink-600 hover:text-pink-800"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search size={18} />
            </button>

            {/* Search Bar */}
            {showSearch && (
              <div className="absolute top-full right-0 mt-2 z-[9999] bg-white border border-gray-300 shadow-md rounded-md py-2 px-3">
                <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-40 px-2 py-1 text-sm rounded border bg-white text-black border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500"
                  />
                  <button
                    type="submit"
                    className="bg-pink-600 text-white px-4 py-1 rounded hover:bg-pink-700"
                  >
                    Go
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
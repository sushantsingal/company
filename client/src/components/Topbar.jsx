import { useEffect, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  Phone,
  Mail,
  Facebook,
  Search,
} from "lucide-react";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";

const Topbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  if (!isTop) return null;

  return (
    <div className="w-full bg-white border-b border-gray-300 text-sm text-gray-600 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center relative">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-pink-600">
            <Phone size={16} />
            <span>+91 7627025781</span>
          </div>
          <div className="flex items-center gap-1 text-pink-600">
            <Mail size={16} />
            <a
              href="mailto:info@marketingcrawlers.com"
              className="text-gray-600 hover:underline"
            >
              info@marketingcrawlers.com
            </a>
          </div>
        </div>

        {/* Right: Socials & Search */}
        <div className="flex items-center gap-3 ">
          <a href="https://www.facebook.com/marketingcrawlers/" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-pink-600 hover:text-pink-800 cursor-pointer" size={18} />
          </a>
          <a href="https://x.com/MarketingCrawl1/status/1418865005848629256" target="_blank" rel="noopener noreferrer">
            <BsTwitterX className="text-pink-600 hover:text-pink-800 cursor-pointer" size={18} />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <FaGoogle className="text-pink-600 hover:text-pink-800 cursor-pointer" size={18} />
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
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 px-2 py-1 text-sm rounded border bg-white text-gray-300 border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-500"
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
  );
};

export default Topbar;
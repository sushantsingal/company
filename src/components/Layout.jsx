import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Layout = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="custom-scroll">
      <Outlet />
      {/* Go-to-top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-blue-600 transition z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Layout;

import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Topbar />
      <Navbar />
    </div>
  );
};

export default Header;

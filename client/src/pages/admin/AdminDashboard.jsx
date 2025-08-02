import { useState } from "react";
import PortfolioForm from "./PortfolioForm";
import ContactAdmin from "./ContactAdmin";
import RegisterAdmin from "./RegisterAdmin";
import PortfolioAdmin from "./PortfolioAdmin";
import AdminPartnerLogo from "./AdminPartnerLogo";
import {
  FilePlus,
  FolderKanban,
  ClipboardList,
  Handshake,
  Menu,
  X
} from "lucide-react";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("portfolios");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "content":
        return <ContactAdmin />;
      case "register":
        return <RegisterAdmin />;
      case "portfolio":
        return <PortfolioForm />;
      case "logo":
        return <AdminPartnerLogo />;
      case "portfolios":
      default:
        return <PortfolioAdmin />;
    }
  };

  const tabs = [
    { id: "content", label: "Contacts", icon: ClipboardList },
    { id: "register", label: "Registrations", icon: ClipboardList },
    { id: "portfolios", label: "Portfolios", icon: FolderKanban },
    { id: "portfolio", label: "Add Portfolio", icon: FilePlus },
    { id: "logo", label: "Partners", icon: Handshake },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-800">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-white shadow">
        <h2 className="text-xl font-bold text-pink-600">Admin Panel</h2>
        <button className="text-white bg-pink-600" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-white shadow-xl rounded-r-3xl md:rounded-none p-6 z-20 fixed md:static top-0 left-0 w-64 transition-transform duration-300 ease-in-out transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="hidden md:block">
          <h2 className="text-2xl font-bold text-pink-600 mb-10">Admin Panel</h2>
        </div>

        <ul className="space-y-3">
          {tabs.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => {
                  setActiveSection(id);
                  setSidebarOpen(false); // close sidebar on mobile after click
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition duration-200 bg-white ${
                  activeSection === id
                    ? "bg-pink-500 text-black font-semibold shadow-md"
                    : "text-pink-600 hover:bg-pink-100"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
          className="mt-10 w-full text-left px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-xl"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 bg-gray-100 mt-16 md:mt-0">{renderSection()}</main>
    </div>
  );
};

export default AdminDashboard;

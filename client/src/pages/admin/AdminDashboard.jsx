import { useState } from "react";
import PortfolioForm from "./PortfolioForm";
import ContactAdmin from "./ContactAdmin";
import PortfolioAdmin from "./PortfolioAdmin";
import AdminPartnerLogo from "./AdminPartnerLogo";
import { FilePlus, FolderKanban, ClipboardList, Handshake } from "lucide-react";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("portfolios");

  const renderSection = () => {
    switch (activeSection) {
      case "content":
        return <ContactAdmin />;
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
    { id: "content", label: "Registrations", icon: ClipboardList },
    { id: "portfolios", label: "Portfolios", icon: FolderKanban },
    { id: "portfolio", label: "Add Portfolio", icon: FilePlus },
    { id: "logo", label: "Partners", icon: Handshake },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl rounded-r-3xl p-6">
        <h2 className="text-2xl font-bold text-pink-600 mb-10">Admin Panel</h2>
        <button
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
          className="mt-10 w-full text-left px-4 py-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-xl"
        >
          Logout
        </button>
        <ul className="space-y-3">
          {tabs.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => setActiveSection(id)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl transition duration-200 bg-white ${
                  activeSection === id
                    ? "bg-pink-500 font-semibold shadow-md"
                    : "text-pink-600 hover:bg-pink-100"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">{renderSection()}</main>
    </div>
  );
};

export default AdminDashboard;
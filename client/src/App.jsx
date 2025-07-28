import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Loader from "./components/LoadingScreen";

import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Insights";
import IndustriesPage from "./pages/Industries";
import CollectivePage from "./pages/Collector";
import ContactPage from "./pages/Contact";
import EventConsulting from "./services/EventConsulting";
import TechConsulting from "./services/TechConsulting";
import MarketingConsulting from "./services/MarketingConsulting";
import DigitalMarketingCourse from "./services/DigitalMarketingCourse";
import DreamChasers from "./services/DreamChasers";
import Celebs from "./services/Celebs";
import InternshipProgram from "./services/InternshipProgram";
import OurProcess from "./services/OurProcess";
import PartnerPage from "./services/PartnerPage";
import TermsPage from "./services/Termspage";
import DigitalMarketingPage from "./services/DigitalMarketingPage";
import SingleProject from "./services/SingleProject";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // 1 second fake loading
    return () => clearTimeout(timeout);
  }, [location]);

  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("adminToken");
    return token ? children : <Navigate to="/admin/login" replace />;
  };

  return (
    <>
      {loading && <Loader />} {/* Loading screen overlay */}
      {!loading && (
        <>
          <Navbar />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin setAuth={setIsAuthenticated} />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard setAuth={setIsAuthenticated} />
                </ProtectedRoute>
              }
            />

            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="industries" element={<IndustriesPage />} />
              <Route path="collective" element={<CollectivePage />} />
              <Route path="services/event-consulting" element={<EventConsulting />} />
              <Route path="services/tech-consulting" element={<TechConsulting />} />
              <Route path="services/marketing-consulting" element={<MarketingConsulting />} />
              <Route path="services/dream-chasers" element={<DreamChasers />} />
              <Route path="services/celebs-now" element={<Celebs />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="digital-marketing-course" element={<DigitalMarketingCourse />} />
              <Route path="digital-marketing" element={<DigitalMarketingPage />} />
              <Route path="internship-program" element={<InternshipProgram />} />
              <Route path="our-process" element={<OurProcess />} />
              <Route path="partners" element={<PartnerPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="/portfolio/:id" element={<SingleProject />} />
            </Route>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Topbar from "./components/Topbar";
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
import DigitalMarketingCourse from "./pages/DigitalMarketingCourse";
import DreamChasers from "./services/DreamChasers";
import Celebs from "./services/Celebs";
import InternshipProgram from "./pages/InternshipProgram";
import CaseStudy from "./pages/CaseStudy";
import RetailCaseStudy from "./services/case/Retail";
import RealEstateCaseStudy from "./services/case/RealEstate";
import OilGasCaseStudy from "./services/case/OilGas";
import ManufacturingCaseStudy from "./services/case/Manufacturing";
import HealthCaseStudy from "./services/case/HealthCare";
import FintechCaseStudy from "./services/case/Fintech";
import EducationCaseStudy from "./services/case/Education";
import ChemicalCaseStudy from "./services/case/Chemical";
import OurProcess from "./services/OurProcess";
import PartnerPage from "./pages/PartnerPage";
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
          <Topbar />
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
              <Route path="/case-studies/retail" element={<RetailCaseStudy />} />
              <Route path="/case-studies/real-estate" element={<RealEstateCaseStudy />} />
              <Route path="/case-studies/oil-&-gas" element={<OilGasCaseStudy />} />
              <Route path="/case-studies/manufacturing" element={<ManufacturingCaseStudy />} />
              <Route path="/case-studies/health-care" element={<HealthCaseStudy />} />
              <Route path="/case-studies/fintech" element={<FintechCaseStudy />} />
              <Route path="/case-studies/education" element={<EducationCaseStudy />} />
              <Route path="/case-studies/chemical" element={<ChemicalCaseStudy />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="case-studies" element={<CaseStudy />} />
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
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import PortfolioPage from "./pages/Portfolio";
import IndustriesPage from "./pages/Industries";
import ContactPage from "./pages/Contact";
import Layout from "./components/Layout";
import EventConsulting from "./pages/services/EventConsulting";
import TechConsulting from "./pages/services/TechConsulting";
import MarketingConsulting from "./pages/services/MarketingConsulting";
import DigitalMarketingCourse from "./pages/services/DigitalMarketingCourse";
import InternshipProgram from "./pages/services/InternshipProgram";
import OurProcess from "./pages/services/OurProcess";
import PartnerPage from "./pages/services/PartnerPage";
import TermsPage from "./pages/services/TermsPage"; // ✅ Updated case
import DigitalMarketingPage from "./pages/services/DigitalMarketingPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="services/event-consulting" element={<EventConsulting />} />
          <Route path="services/tech-consulting" element={<TechConsulting />} />
          <Route path="services/marketing-consulting" element={<MarketingConsulting />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="digital-marketing-course" element={<DigitalMarketingCourse />} />
          <Route path="digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="internship-program" element={<InternshipProgram />} />
          <Route path="our-process" element={<OurProcess />} />
          <Route path="partners" element={<PartnerPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

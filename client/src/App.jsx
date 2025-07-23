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
import EventConsulting from "./services/EventConsulting";
import TechConsulting from "./services/TechConsulting";
import MarketingConsulting from "./services/MarketingConsulting";
import DigitalMarketingCourse from "./services/DigitalMarketingCourse";
import InternshipProgram from "./services/InternshipProgram";
import OurProcess from "./services/OurProcess";
import PartnerPage from "./services/PartnerPage";
import TermsPage from "./services/Termspage";
import DigitalMarketingPage from "./services/DigitalMarketingPage";
import PortfolioDetail from "./services/PortfoiloDetails";

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
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
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

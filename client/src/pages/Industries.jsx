import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import{ChevronLeft, ChevronRight} from "lucide-react";
import axios from "axios";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const industries = [
  { title: "FMCG", icon: "🧴", description: "Empowering FMCG brands with agile digital strategies that captivate fast-paced consumer attention." },
  { title: "Healthcare", icon: "🏥", description: "Building trust and engagement for healthcare providers through ethical and informative campaigns." },
  { title: "EdTech", icon: "🎓", description: "Accelerating growth for education platforms with scalable and intelligent marketing funnels." },
  { title: "Fashion & Lifestyle", icon: "👗", description: "Helping fashion brands own the narrative with aesthetic storytelling and influencer synergy." },
  { title: "Food & Beverages", icon: "🍔", description: "From cafes to cloud kitchens — we cook up engagement, loyalty, and footfall." },
  { title: "Real Estate", icon: "🏢", description: "Creating immersive digital journeys that turn browsers into serious buyers." },
  { title: "Startups", icon: "🚀", description: "Fueling startup growth with lean strategies, brand identity, and rapid performance tracking." },
  { title: "Hospitality", icon: "🏨", description: "Bringing guests to the doorstep with strong digital presence and smart CRM tactics." },
];

const Industries = () => {
  const [partners, setPartners] = useState([]);
  const [eventPartners, setEventPartners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/partners`);
        setPartners(res.data.generalPartners || []);
        setEventPartners(res.data.eventPartners || []);
      } catch (err) {
        console.error("Failed to fetch partner logos", err);
      }
    };

    fetchLogos();
  }, []);

  return (
    <div className="text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-pink-600 py-10 text-white text-center px-6">
        <motion.h1
          className="text-6xl md:text-5xl font-bold mb-4 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Industries We Empower
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl font-light"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeIn}
        >
          Tailored strategies that suit your domain, customer expectations, and business ambitions.
        </motion.p>
      </section>

      {/* Industries Grid */}
      <section className="py-10 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                variants={fadeIn}
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Carousel */}
      <section className="bg-gray-50 py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">Trusted by Leading Brands</h2>
          <p className="text-gray-600 mt-2">We’re proud to partner with some of the most respected organizations in the industry.</p>
        </div>
        <div className="relative">
        <div className="overflow-x-auto whitespace-nowrap px-4 scrollbar-hide">
          <div
            className="flex space-x-6"
            style={{
              transform: `translateX(-${currentIndex*140}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {partners.map((logo, index) => (
              <div key={index} className="w-28 h-28 flex-shrink-0 flex items-center justify-center bg-white rounded shadow">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${logo.imageUrl}`}
                  alt={`partner-${index}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent p-2 border-transparent focus:outline-none active:border-transparent"
        >
          <ChevronLeft className="w-20 h-20 text-gray-600"/>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent p-2 focus:outline-none active:border-transparent"
        >
          <ChevronRight className="w-20 h-20 text-gray-600"/>
        </button>
      </div>
        <motion.div className="mt-4 text-center py-6" initial="hidden" whileInView="visible" custom={2} viewport={{ once: true }}
                    variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                    }}>
          <Link to="/partners" className="bg-pink-600 text-white px-6 py-3 font-medium rounded hover:bg-blue-600 hover:text-white transition">
            View All
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Industries;
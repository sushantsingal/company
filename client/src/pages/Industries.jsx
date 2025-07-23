import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/partners");
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
      <section className="bg-gradient-to-br from-blue-600 to-pink-600 py-20 text-white text-center px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
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
      <section className="py-20 px-6 md:px-20 bg-white">
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
      <section className="bg-gray-50 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">Trusted by Leading Brands</h2>
          <p className="text-gray-600 mt-2">We’re proud to partner with some of the most respected organizations in the industry.</p>
        </div>
        <div className="overflow-hidden relative w-full">
            <div className="flex flex-wrap justify-center gap-6 px-4">
              {partners.map((logo, index) => (
                <div key={index} className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                  <img src={`http://localhost:5000${logo.imageUrl}`} alt={`partner-${index}`} className="max-h-full object-contain" />
                </div>
              ))}
            </div>
        </div>
        <motion.div className="mt-4 text-center py-6" initial="hidden" whileInView="visible" custom={2} variants={fadeIn}>
          <Link to="/partners" className="bg-pink-600 text-white px-6 py-3 font-medium rounded hover:bg-blue-600 hover:text-white transition">
            View All
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Industries;
import { motion } from "framer-motion";
import hero from "../assets/hero-image.png";
import about from "../assets/about-us.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import {
  BarChart3,
  MonitorSmartphone,
  Layers,
  ThumbsUp,
  Megaphone,
  Video,
  TrendingUp, 
  BarChart4
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Home = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [partners, setPartners] = useState([]);
  const [eventPartners, setEventPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get("https://marketing-crawlers.onrender.com/api/portfolio");
        setPortfolioData(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load portfolio.");
      } finally {
        setLoading(false);
      }
    };

    const fetchLogos = async () => {
      try {
        const res = await axios.get("https://marketing-crawlers.onrender.com/api/partners");
        setPartners(res.data.generalPartners || []);
        setEventPartners(res.data.eventPartners || []);
      } catch (err) {
        console.error("Failed to fetch partner logos", err);
      }
    };

    fetchPortfolio();
    fetchLogos();
  }, []);

  return (
    <div className="text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className=" bg-white md:px-18 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We are your <span className="text-pink-600">Growth Partner</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              From Branding to Performance Marketing, we deliver strategies that convert and grow your business online.
            </p>
            <Link to="/contact" className="bg-pink-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-600 hover:text-white transition">
              Get a Proposal
            </Link>
          </motion.div>
          <motion.img
            src={hero}
            alt="Marketing Hero"
            className="rounded-xl w-full max-w-full h-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Partner Carousel */}
      <section className="bg-gray-50 py-4">
        <div className="text-center mb-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Trusted by Leading Brands</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-lg">
            We’re proud to partner with some of the most respected organizations in the industry.
          </p>
        </div>

        <div className="overflow-hidden relative w-full">
            <div className="flex flex-wrap justify-center gap-6 px-4">
              {partners.map((logo, index) => (
                <div key={index} className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                  <img src={`https://marketing-crawlers.onrender.com${logo.imageUrl}`} alt={`partner-${index}`} className="max-h-full object-contain" />
                </div>
              ))}
            </div>
        </div>

        <motion.div
          className="mt-4 text-center py-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Link to="/partners" className="bg-pink-600 text-white px-6 py-3 font-medium rounded hover:bg-blue-600 hover:text-white transition">
            View All
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className=" bg-gray-50 py-10 px-6 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h1 className="text-3xl md:text-5xl font-bold text-pink-600">Who We Are</h1>
            <p className="text-gray-700 text-base md:text-lg">
              At <b>Marketing Crawlers</b>, we are passionate digital experts focused on crafting meaningful <b>brand experiences</b>. Our team blends creativity with data to generate results that matter.
            </p>
            <p className="text-gray-600">
              From ideation to execution, we specialize in building strategies that help businesses grow across platforms.
            </p>
          </motion.div>
          <motion.img
            src={about}
            alt="About Us"
            className="rounded-xl w-full max-w-full h-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-white py-20 px-6 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 className="text-3xl md:text-5xl font-bold mb-4" initial="hidden" whileInView="visible" variants={fadeUp}>
            Transforming Businesses with Insight, Creativity, and Bold Ideas
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-12 max-w-xl mx-auto text-xl"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={fadeUp}
          >
            Marketing Crawlers blends strategy, analytics, and innovation to push your brand beyond just ideas and into lasting success.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "SEO & Performance", icon: <BarChart3 size={36} />, desc: "Boost visibility and drive results with strategic SEO." },
              { title: "Website Development", icon: <MonitorSmartphone size={36} />, desc: "Fast, modern websites built to convert visitors." },
              { title: "Branding & UI/UX", icon: <Layers size={36} />, desc: "Stand out with impactful design and intuitive interfaces." },
              { title: "Social Media Marketing", icon: <ThumbsUp size={36} />, desc: "Captivate your audience with compelling content." },
              { title: "Google & Meta Ads", icon: <Megaphone size={36} />, desc: "Drive ROI with targeted, high-performance campaigns." },
              { title: "Video Production", icon: <Video size={36} />, desc: "Tell your story with stunning digital video content." },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border shadow-md hover:shadow-lg transition hover:scale-105"
                initial="hidden"
                whileInView="visible"
                custom={i + 2}
                variants={fadeUp}
              >
                <div className="mb-4 text-pink-600">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="bg-gray-50 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Empowering Businesses with Data, Design & Disruption
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto text-xl">
          Marketing Crawlers blends strategy, analytics, and innovation to push your brand—
          beyond just ideas and into lasting success.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="flex justify-center items-center mb-6">
              <span className="bg-pink-500 rounded-full p-4 hover:scale-110 transition-transform duration-300">
                <Megaphone className="text-white w-8 h-8" />
              </span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Brand-Centric Vision</h4>
            <p className="text-gray-500">
              From concept to execution, we keep your brand at the center. Our strategies align
              with your mission and values to establish authentic connections with your audience.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-6">
              <span className="bg-pink-500 rounded-full p-4 hover:scale-110 transition-transform duration-300">
                <TrendingUp className="text-white w-8 h-8" />
              </span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Resilient Growth</h4>
            <p className="text-gray-500">
              Every business deserves consistent and measurable growth. We build strategies that scale,
              using data-driven insights and disruptive innovation.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-6">
              <span className="bg-pink-500 rounded-full p-4 hover:scale-110 transition-transform duration-300">
                <BarChart4 className="text-white w-8 h-8" />
              </span>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">The Financial Gain</h4>
            <p className="text-gray-500">
              We don’t just create marketing strategies—we engineer business growth. Every decision
              is made to optimize your return on investment.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Projects Showcase */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
  <motion.h1 className="text-3xl md:text-5xl font-bold mb-12" initial="hidden" whileInView="visible" variants={fadeUp}>
    Our Work Speaks for Itself
  </motion.h1>

  {loading ? (
    <p className="text-gray-600">Loading projects...</p>
  ) : error ? (
    <p className="text-red-500">{error}</p>
  ) : (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {portfolioData.map((project, i) => (
        <motion.div
          key={project._id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all"
          initial="hidden"
          whileInView="visible"
          custom={i + 1}
          variants={fadeUp}
        >
          <img src= {`https://marketing-crawlers.onrender.com${project.image}`} alt={project.title} className="w-full h-52 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  )}

  <motion.div className="mt-8 py-2" initial="hidden" whileInView="visible" custom={2} variants={fadeUp}>
    <Link to="/portfolio" className="bg-pink-600 text-white px-6 py-3 font-medium rounded hover:bg-blue-600 hover:text-white transition">
      View All
    </Link>
  </motion.div>
</section>

      <CTA />
    </div>
  )
};
export default Home;

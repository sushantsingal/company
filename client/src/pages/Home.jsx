import { motion } from "framer-motion";
import hero from "../assets/home.png";
import about from "../assets/aa.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import cta from "../assets/img/cta.jpg";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import {
  ChevronLeft, 
  ChevronRight,
  Workflow,
  Megaphone,
  TrendingUp, 
  BarChart4,
  Cpu,
  Share2,
  RefreshCcw,
  GitBranch
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
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState(null);
    const [formloading, setFormLoading] = useState(false);
  
    const handleChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setFormLoading(true);
      setStatus(null);
  
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const data = await res.json();
  
        if (!res.ok) throw new Error(data.error || "Submission failed");
  
        setSubmitted(true);
      } catch (error) {
        setStatus({ error: true, message: error.message });
      } finally {
        setLoading(false);
      }
    };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the previous item
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  // Function to move to the next item
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };
  const [portfolioData, setPortfolioData] = useState([]);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/portfolio`);
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
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/partners`);
        setPartners(res.data.generalPartners || []);
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
      <section className="py-28 bg-white px-10 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your 360° Growth Partners
            </h1>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              We don’t execute marketing. We partner with brands to design future-ready growth beyond tactics.
            </p>
            <Link
              to="/contact"
              className="relative inline-block overflow-hidden px-6 py-3 rounded-xl border border-pink-600 font-semibold group"
            >
              <span className="relative z-10 text-pink-600 transition-colors duration-300 group-hover:text-white">Get a Proposal</span>
              <span
                className="absolute inset-0 bg-pink-600 top-[-25%] left-[-50%] h-[150%] w-[200%]
                          -translate-x-full skew-x-[-18deg]
                          group-hover:translate-x-0
                          transition-transform duration-1000 ease-in-out"
              ></span>
              <span
                className="absolute inset-0 bg-pink-600 top-[-25%] left-[-50%] h-[150%] w-[200%]
                          translate-x-full skew-x-[-18deg]
                          group-hover:translate-x-0
                          transition-transform duration-1000 ease-in-out"
              ></span>
          </Link>
          </motion.div>
          <motion.img
            src={hero}
            alt="Marketing Hero"
            className="rounded-xl w-full max-w-full h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          />
        </div>
      </section>

      {/* Partner Carousel */}
      <section className="bg-gray-50 py-10">
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Trusted by Leading Brands</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-lg">
          We’re proud to partner with some of the most respected organizations in the industry.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-x-auto whitespace-nowrap px-4 scrollbar-hide">
          <div
            className="inline-flex space-x-6"
            style={{
              transform: `translateX(-${currentIndex*140}px)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {partners.map((logo, index) => (
              <div key={index} className="w-28 h-28 flex-shrink-0 flex items-center justify-center bg-white rounded shadow">
                <img
                  src={logo.imageUrl}
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

      {/* View All Button */}
      {/* <motion.div
        className="mt-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Link
          to="/partners"
          className="bg-pink-600 text-white px-6 py-3 font-medium rounded hover:bg-blue-600 transition"
        >
          View All
        </Link>
      </motion.div> */}
    </section>

      {/* About Section */}
      <section className=" bg-gray-50 py-8 px-6 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h1 className="text-3xl md:text-5xl font-bold text-pink-600">Who We Are</h1>
            <p className="text-gray-700 text-base md:text-lg">
              At <b>Marketing Crawlers</b>, we create brand experiences and engineer how brands are experienced. 
            </p>
            <p className="text-gray-600">
              By combining AI-driven storytelling with strategic creativity, we turn data into direction and execution into scalable growth.
            </p>
            <p className="text-gray-600">
              From ideation to implementation, we design connected growth solutions that evolve with technology and changing consumer behavior.
            </p>
            <motion.div
              className="mt-6 text-center py-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Link
              to="/about"
              className="relative inline-block overflow-hidden px-6 py-3 rounded-xl border border-pink-600 font-semibold group"
            >
              <span className="relative z-10 text-pink-600 transition-colors duration-300 group-hover:text-white">About Us</span>
              <span
                className="absolute inset-0 bg-pink-600 top-[-25%] left-[-50%] h-[150%] w-[200%]
                          -translate-x-full skew-x-[-18deg]
                          group-hover:translate-x-0
                          transition-transform duration-1000 ease-in-out"
              ></span>
              <span
                className="absolute inset-0 bg-pink-600 top-[-25%] left-[-50%] h-[150%] w-[200%]
                          translate-x-full skew-x-[-18deg]
                          group-hover:translate-x-0
                          transition-transform duration-1000 ease-in-out"
              ></span>
          </Link>
            </motion.div>
          </motion.div>
          <motion.img
            src={about}
            alt="About Us"
            className="rounded-xl w-full max-w-full h-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className=" bg-white py-10 px-6 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 className="text-3xl md:text-5xl font-bold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}>
            Transforming Business Visions for What’s Next
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-12 max-w-xl mx-auto text-xl"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
           Marketing Crawlers blends creativity and emerging technologies to help brands move beyond ideas and build growth that evolves, adapts, and lasts.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Advanced Tech Integration", icon: <Cpu size={36} />, desc: "Blending technology with innovation to build scalable, high-impact, SEO-driven digital strategies." },
              { title: "Automated Marketing Solutions", icon: <Workflow size={36} />, desc: "Smart automation streamlining campaigns, nurturing leads, and building conversion-focused websites." },
              { title: "Multi-Channel Engagement", icon: <Share2 size={36} />, desc: "Stand out across channels through impactful design, intuitive interfaces, and seamless user experiences." },
              { title: "Comprehensive Digital Revamp", icon: <RefreshCcw size={36} />, desc: "Revitalize your online presence with content that engages, inspires, and leaves a lasting impact." },
              { title: "Complete Engineering Solutions", icon: <GitBranch size={36} />, desc: "End-to-end engineering solutions built to boost ROI, Performance and Campaign efficiency." },
              { title: "Event & Experiential Marketing", icon: <Megaphone size={36} />, desc: "Captivating events and digital videos powered by storytelling that elevate your brand." },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-xl border shadow-md hover:shadow-lg transition hover:scale-105"
                initial="hidden"
                whileInView="visible"
                custom={i + 1}
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
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
      <section className="bg-gray-50 py-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Helping brands move beyond ideas by turning insight into impact
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto text-xl">
          We design intelligent experiences and growth systems that shape future-ready change.
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
              From ideas to execution, we place your brand at the core of every decision. Our strategies align with your mission to create relevance and long-term connections with your audience.
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
              Every business deserves consistent and measurable growth. We design data-informed, future-ready strategies and deliver consistent progress over time.
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
              We don’t just create marketing strategies, we engineer business growth. Every decision is guided by intelligence, performance signals to optimize your return on investment.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Projects Showcase */}
    <section className="bg-white py-8 px-6 md:px-20 text-center">
    <motion.h1 className="text-3xl md:text-5xl font-bold mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }}
    variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}>
    Our Work Speaks for Itself
    </motion.h1>

    {loading ? (
      <p className="text-gray-600">Loading projects...</p>
    ) : error ? (
      <p className="text-red-500">{error}</p>
    ) : (
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portfolioData.slice(0,3).map((project, i) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all"
            initial="hidden"
            whileInView="visible"
            custom={i + 1}
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <img src= {project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    )}

    <motion.div className="mt-8 py-2" initial="hidden" whileInView="visible" custom={1} viewport={{ once: true }} variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}>
      <Link
              to="/insights"
              className="relative inline-block overflow-hidden px-6 py-3 rounded-xl border border-pink-600 font-semibold group"
            >
              <span className="relative z-10 text-pink-600 transition-colors duration-300 group-hover:text-white">View All</span>
              <span
                className="absolute inset-0 bg-pink-600 top-[-25%] left-[-50%] h-[150%] w-[200%]
                          -translate-x-full skew-x-[-18deg]
                          group-hover:translate-x-0
                          transition-transform duration-1000 ease-in-out"
              ></span>
              <span
                className="absolute inset-0 bg-pink-600 top-[-25%] left-[-50%] h-[150%] w-[200%]
                          translate-x-full skew-x-[-18deg]
                          group-hover:translate-x-0
                          transition-transform duration-1000 ease-in-out"
              ></span>
          </Link>
    </motion.div>
  </section>

      <Testimonials />
      <section className="relative py-24 overflow-hidden">
              <div className="absolute inset-0 flex flex-row md:flex-col">
                <div className="hidden md:block md:h-1/2 w-full bg-white"></div>
                <motion.div
                  initial={{ opacity: 0, y: -60}}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative h-screen md:h-1/2 overflow-hidden w-full"
                  >
                    <img
                      src={cta}
                      alt="comtact"
                      className="w-full h-full object-cover" />
                  </motion.div>
              </div>
              <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
               <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex items-end pb-16"
                      >
                        <div className="max-w-lg text-center md:text-left">
                          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Ready to Plan Your Upcoming Event?
                          </h2>
      
                          <p className="text-lg text-gray-50 leading-relaxed">
                            Let’s turn your next event into a strategic growth experience. Get a tailored event strategy today!
                          </p>
                        </div>
                      </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="flex justify-center md:justify-end"
                >
                    <div className="w-full max-w-xl bg-pink-600 rounded-2xl shadow-2xl p-8 md:p-10">
                      <h3 className="text-4xl font-bold text-white mb-6 text-center">
                        Let’s Start Your Project
                      </h3>
                      {submitted ? (
                        <div>
                          <h3 className="text-2xl font-semibold text-white mb-4">Thank You!</h3>
                          <p className="text-gray-300">
                            We've received your details. Our team will get in touch with you shortly.
                          </p>
                        </div>
                      ) : (
                      <form onSubmit={handleSubmit} className="space-y-5 text-white">
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          pattern="^[A-Za-z\s]{2,50}$"
                          placeholder="Your Name"
                          className="w-full border bg-pink-700 border-white rounded-lg px-4 py-3 
                                    focus:ring-2 focus:ring-white outline-none"
                        />
      
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                          placeholder="Email Address"
                          className="w-full border bg-pink-700 border-white rounded-lg px-4 py-3 
                                    focus:ring-2 focus:ring-white outline-none"
                        />
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          name="phone"
                          type="text"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          pattern="^[6-9]\d{9}$"
                          placeholder="Phone Number"
                          className="w-full border bg-pink-700 border-white rounded-lg px-4 py-3 
                                    focus:ring-2 focus:ring-white outline-none"
                        />
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          pattern="[A-Za-z\s]{2,50}$"
                          placeholder="Company Name"
                          className="w-full border bg-pink-700 border-white rounded-lg px-4 py-3 
                                    focus:ring-2 focus:ring-white outline-none"
                        />
      
                        <motion.textarea
                          name="message"
                          required
                          whileFocus={{ scale: 1.02 }}
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about yourself"
                          className="w-full border bg-pink-700 border-white rounded-lg px-4 py-3 
                                    focus:ring-2 focus:ring-white outline-none"
                        />
      
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          type="submit"
                          className="relative overflow-hidden w-full bg-pink-700 border border-white rounded-xl font-semibold py-3 group"
                        >
                          <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-pink-700">{loading ? "Sending..." : "Submit"}</span>
                          <span
                            className="absolute inset-0 bg-white top-[-25%] left-[-50%] h-[150%] w-[200%]
                                      -translate-x-full skew-x-[-18deg]
                                      group-hover:translate-x-0
                                      transition-transform duration-1000 ease-in-out"
                          ></span>
                          <span
                            className="absolute inset-0 bg-white top-[-25%] left-[-50%] h-[150%] w-[200%]
                                      translate-x-full skew-x-[-18deg]
                                      group-hover:translate-x-0
                                      transition-transform duration-1000 ease-in-out"
                          ></span>
                        </motion.button>
                      </form>
                    )}
                  {status?.error && (
                    <p className="mt-4 text-red-600 text-sm text-center">{status.message}</p>
                  )}
                    </div>
                </motion.div>
              </div>
            </section>
    </div>
  )
};
export default Home;

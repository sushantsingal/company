import { motion } from "framer-motion";
import hero from "../assets/hero-image.png";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import {
  BarChart3,
  MonitorSmartphone,
  Brush,
  ThumbsUp,
  DollarSign,
  Video,
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
  return (
    <div className="text-black overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-white py-24 px-6 md:px-20 flex items-center">
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

      {/* About Section */}
      <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl font-bold text-pink-600">Who We Are</h2>
            <p className="text-gray-700 text-base md:text-lg">
              At Marketing Crawlers, we are passionate digital experts focused on crafting meaningful brand experiences. Our team blends creativity with data to generate results that matter.
            </p>
            <p className="text-gray-600">
              From ideation to execution, we specialize in building strategies that help businesses grow across platforms.
            </p>
          </motion.div>
          <motion.img
            src="../assets/about-us.jpg"
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
          <motion.h2 className="text-3xl font-bold mb-4" initial="hidden" whileInView="visible" variants={fadeUp}>
            Transforming Businesses with Insight, Creativity, and Bold Ideas
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-12 max-w-xl mx-auto"
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
              { title: "Branding & UI/UX", icon: <Brush size={36} />, desc: "Stand out with impactful design and intuitive interfaces." },
              { title: "Social Media Marketing", icon: <ThumbsUp size={36} />, desc: "Captivate your audience with compelling content." },
              { title: "Google & Meta Ads", icon: <DollarSign size={36} />, desc: "Drive ROI with targeted, high-performance campaigns." },
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
      <section className="min-h-screen bg-gray-50 py-20 px-6 md:px-20 flex items-center">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold mb-4" initial="hidden" whileInView="visible" variants={fadeUp}>
            Our Work Process : From Idea to Execution
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-12 max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={fadeUp}
          >
            Our client-centric process ensures seamless execution and success from start to finish.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plan & Research",
                image: "../assets/Planing.jpg",
                desc: "We deep dive into your brand, audience, and market to define the best course of action.",
              },
              {
                title: "Design & Build",
                image: "../assets/Designing.jpg",
                desc: "Turning strategy into creative executions, we build stunning assets that resonate.",
              },
              {
                title: "Launch & Scale",
                image: "../assets/Launching.jpg",
                desc: "With launch strategies in place, we drive growth and scale your brand consistently.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl border shadow-md group hover:shadow-xl transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <div className="mb-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-20 mx-auto transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-pink-600 group-hover:-translate-y-1 transition">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:scale-[1.02] transition">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="bg-white py-20 px-6 md:px-20 text-center">
        <motion.h2 className="text-3xl font-bold mb-8" initial="hidden" whileInView="visible" variants={fadeUp}>
          Our Work Speaks for Itself
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Fashion Landing Page", image: "../assets/Project1.png" },
            { title: "Fitness Studio", image: "../assets/Project2.png" },
            { title: "Corporate Branding", image: "../assets/Project3.png" },
            { title: "E-commerce UI", image: "../assets/Project4.png" },
            { title: "Social Media Creatives", image: "../assets/Project5.png" },
            { title: "SEO Campaign", image: "../assets/Project6.png" },
          ].map((project, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-all"
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              variants={fadeUp}
            >
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-8" initial="hidden" whileInView="visible" custom={2} variants={fadeUp}>
          <Link to="/portfolio" className="bg-pink-600 text-white px-6 py-3 font-medium rounded hover:bg-blue-600 hover:text-white transition">
            View All
          </Link>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
};

export default Home;

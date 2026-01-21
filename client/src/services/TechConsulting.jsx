import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import tech from "../assets/tech-consulting.jpg";
import {
  ServerCog,
  Cloud,
  Bot,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const offer = [
              {
                title: "System Architecture",
                desc: "We define the right tech stack and system architecture based on your business model, scale plans, and long-term vision.",
                icon: ServerCog,
              },
              {
                title: "Cloud Solutions",
                desc: "Design and optimize cloud architectures that improve performance, scalability, and operational efficiency.",
                icon: Cloud,
              },
              {
                title: "Automation & AI",
                desc: "Implement intelligent automation and AI-driven workflows to streamline operations and enable smarter decision-making.",
                icon: Bot,
              },
            ]

const steps = [
  {
    title: "Discover Business & Technology",
    number: "1",
  },
  {
    title: "Intelligent Tech Mapping",
    number: "2",
  },
  {
    title: "Strategy Implementation Guidance",
    number: "3",
  },
  {
    title: "Continuous Optimization & Advisory",
    number: "4",
  },
];

const faqs = [
  {
    question: "Who can join this digital marketing course?",
    answer:
      "This course is ideal for students, fresh graduates, working professionals, entrepreneurs, and business owners who want to build practical digital marketing skills."
  },
  {
    question: "Do I need prior marketing experience?",
    answer:
      "No prior experience is required. The course starts from fundamentals and gradually moves to advanced strategies, tools, and live projects."
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Yes. The curriculum is designed to support beginners while also offering advanced modules for professionals looking to upskill."
  },
  {
    question: "Will I get a certificate after completion?",
    answer:
      "Yes. You will receive industry-recognized certifications along with course completion certificates."
  },
  {
    question: "Does the course provide placement assistance?",
    answer:
      "Yes. We provide placement assistance, internship opportunities, freelancing guidance, and career mentorship."
  },
  {
    question: "Is the training online or offline?",
    answer:
      "The course is delivered in a hybrid format, combining classroom sessions with online learning resources."
  },
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6, // delay between each child
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
};

const TechConsulting = () => {
  const FAQItem = ({ faq }) => {
        const [open, setOpen] = useState(false);
      
        return (
          <motion.div
            initial={false}
            animate={{}}
            className="border rounded-lg bg-gradient-to-r from-purple-700 to-pink-600"
          >
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex justify-between items-center p-5 text-left bg-white"
            >
              <span className="text-lg font-semibold text-black">
                {faq.question}
              </span>
              <span className="text-2xl text-black">
                {open ? "−" : "+"}
              </span>
            </button>
      
            <motion.div
              initial={false}
              animate={{
                height: open ? "auto" : 0,
                opacity: open ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="px-5 py-5 leading-relaxed text-white">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        );
      };
  
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
      const [submitted, setSubmitted] = useState(false);
      const [status, setStatus] = useState(null);
      const [loading, setLoading] = useState(false);
    
      const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
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

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-white text-black py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h1 className="text-5xl font-bold">
              Tech Consulting
            </h1>
            <p className="">
              Empowering a tech roadmap for your business that supports growth, efficiency, and future readiness.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <img
              src= {tech}
              alt="Event Graphic"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Center Paragraph Section */}
      <section className="py-6 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto flex gap-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-5xl font-bold mb-6">Where Technology Becomes a Growth Enabler</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Technology accelerates your business. It simplifies decisions, scales operations, and unlocks new growth. At Marketing Crawlers, we don’t sell tools. We design technology thinking.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our tech consulting helps businesses align technology with real business goals. Guiding decisions across infrastructure, software, automation, and digital transformation with clarity and precision.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-left">
              We blend:
            </p>
            <ul className="text-left list-disc text-md px-8">
              <li>Business-first strategy</li>
              <li>AI-informed decision-making</li>
              <li>Cross-functional expertise</li>
              <li>A long-term scalability mindset</li>
            </ul>
            <p className="text-gray-700 text-lg leading-relaxed text-left">
              So your technology becomes an asset, not a bottleneck.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-6 px-6 md:px-32 bg-gray-50">
        <div className="max-w-8xl text-center">
          <motion.h2
            className="text-5xl font-bold mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Our Process
          </motion.h2>

          <motion.div
            className="flex flex-row items-center gap-6 overflow-x-auto no-scrollbar px-2 md:px-6"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                className="relative flex-shrink-0 w-60 h-48 bg-gradient-to-r from-purple-700 to-pink-600 text-white shadow-md transform -skew-x-12"
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
                  <div className="text-4xl font-bold mb-2">{step.number}</div>
                  <div className="text-md md:text-lg font-medium text-center">{step.title}</div>
                </div>
  
                {index !== steps.length - 1 && (
                  <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 border-l-[20px] border-l-pink-600 border-y-[24px] border-y-transparent"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-white py-6 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl font-bold mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offer.map((item, i) => {
              const Icon = item.icon;
              return (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                custom={i + 1}
                viewport={{ once: true }}
                variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="flex flex-col items-center text-center gap-4 mb-4">
                    <Icon className="w-20 h-20 text-pink-600" />
                    <h3 className="text-3xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
              </motion.div>
            );
          })}
          </div>
        </div>
      </section>

      {/* CTA Button Section */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20 px-6 text-center">
        <div className="flex items-center gap-20 px-20 justify-evenly">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              viewport={{ once: true }}
              variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Make Technology Work for Your Business
            </motion.h2>
            <p className="mb-6 max-w-xl mx-auto">
              Get expert guidance on infrastructure, automation, and AI adoption to support future-ready growth.
            </p>
          </div>
          <Link
              to="/contact"
              className="relative inline-block overflow-hidden px-6 py-3 rounded-xl border border-white font-semibold group"
            >
              <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-pink-600">Let's Connect</span>
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
          </Link>
        </div>
      
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-5xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Everything you need to know before enrolling
            </p>
            <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>

        </div>
      </section>
      
      {/* CTA Form Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 flex flex-row md:flex-col">
          <div className="h-1/2 w-full bg-white"></div>
          <motion.div
            initial={{ opacity: 0, y: -60}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-1/2 overflow-hidden w-full"
            >
              <img
                src={tech}
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
              <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
                Bring Clarity to Your Marketing Strategy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are eager to learn about your aspirations and visions. Feel free to schedule a call with us.
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
  );
};

export default TechConsulting;

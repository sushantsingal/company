import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../components/Counter";
import cta from "../assets/img/cta.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const work = [
  {
    title: "Market Research",
    desc: "We understand goals, challenges, market landscape, and growth ambitions.",
  },
  {
    title: "Strategy Creation",
    desc: "We analyze data, audience behavior, and competitive signals to uncover opportunities.",
  },
  {
    title: "Execution",
    desc: "We translate strategy into action, guiding execution across channels, teams, and initiatives to ensure alignment with business objectives.",
  },
  {
    title: "Optimization",
    desc: "We refine strategies using performance insights, adapt to changing conditions, and optimize for sustained, long-term growth.",
  },
];

const faqs = [
  {
    question: "How involved will our internal team need to be?",
    answer:
      "We work collaboratively. Your team stays informed and aligned, while we provide clarity, direction, and expert guidance—reducing confusion and improving decision-making."
  },
  {
    question: "How do we know if we’re ready for marketing consulting?",
    answer:
      "If you’re asking: “What should we focus on next?”, “Why isn’t our marketing delivering results?”, “How do we scale intelligently?” Then you’re ready."
  },
  {
    question: "What industries do you work with?",
    answer:
      "We’ve worked across 50+ sectors, including technology, FMCG, healthcare, education, real estate, fashion, startups, and service businesses. Our strategies adapt to the market, not the other way around."
  },
  {
    question: "Is your consulting suitable for growing or mid-stage businesses?",
    answer:
      "Absolutely. Our consulting is designed to be scalable—whether you’re building your foundation, preparing to scale, or optimizing an existing marketing ecosystem."
  },
  {
    question: "Why should leadership invest in AI-led marketing consulting now?",
    answer:
      "Because growth today is no longer driven by intuition alone. AI-led consulting helps leadership reduce uncertainty, improve decision quality, and scale faster using data-backed intelligence—before competitors do."
  },
];

const MarketingConsulting = () => {
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
      <section className="bg-white text-white py-20 text-center px-4">
        <motion.h1
          className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-600 font-extrabold py-10"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Marketing Consulting in the Age of AI
        </motion.h1>
        <motion.p
          className="text-2xl text-black font-semibold mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Consultancy for businesses that are ready to think ahead and grow with intelligence.
        </motion.p>
      </section>

      {/* Graphic + Description */}
      <section className="p-4 md:px-10 bg-white">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 rounded-3xl shadow-lg items-center bg-gradient-to-r from-blue-700 to-pink-600">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col gap-3 p-6 md:p-10 text-left"
          >
            <h2 className="text-5xl font-bold text-white mb-6">Where Strategy Meets Intelligent Growth</h2>
            <p className="text-white text-md leading-relaxed">
              Based in the vibrant city of Jaipur, Rajasthan. <b>Marketing Crawlers</b> is a future-ready growth consulting agency where <b>AI intelligence, human creativity, and data-led storytelling</b> converge to deliver measurable business impact.
            </p>
            <p className="text-white text-md leading-relaxed">
              We provide <b>end-to-end marketing consulting</b>, scalable digital growth strategies, and intelligent <b>web and app ecosystems crafted for D2C, B2B, and B2C brands, as well as modern professionals</b> who demand more than just visibility—they demand outcomes.
            </p>
            <p className="text-white text-md leading-relaxed">
              We don’t chase trends
            </p>
            <p className="text-white text-md leading-relaxed">
               We <b>analyze, consult, execute, and optimize to scale.</b>
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="hidden md:grid grid-cols-2 gap-6 sm:gap-8 text-white text-center p-6 md:p-10"
          >
            <div>
              <h2 className="text-5xl font-bold">
                <Counter end={350} />
              </h2>
              <p className="mt-2 text-lg font-semibold">Projects Handled</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">
                <Counter end={45} />
              </h2>
              <p className="mt-2 text-lg font-semibold">Industries Served</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">
                <Counter end={500} />
              </h2>
              <p className="mt-2 text-lg font-semibold">Performance-Driven Stories</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">
                <Counter end={55} />
              </h2>
              <p className="mt-2 text-lg font-semibold">Strategy & Execution Professionals</p>
            </div>
          </motion.div>
          <div className="col-span-2 flex justify-center pb-8">
          <Link
              to="/contact"
              className="relative inline-block overflow-hidden px-6 py-3 rounded-xl border border-white font-semibold group"
            >
              <span className="relative z-10 text-white transition-colors duration-300 text-3xl">Let's Connect</span>
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
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-50 py-6 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            How We Work
            <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {work.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                initial="hidden"
                whileInView="visible"
                custom={i + 1}
                viewport={{ once: true }}
                variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
              <div className="absolute inset-0 flex flex-row md:flex-col">
                <div className="hidden md:block md:h-1/2 w-full bg-white"></div>
                <motion.div
                  initial={{ opacity: 0, y: -60}}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative h-full md:h-1/2 overflow-hidden w-full"
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
                      Bring Clarity to Your Marketing Strategy
                    </h2>

                    <p className="text-lg text-gray-50 leading-relaxed">
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

      {/* FAQ */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-5xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              Frequently Asked Questions
            </h2>
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
    </div>
  );
};

export default MarketingConsulting;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {useRef, useEffect, useState} from "react";
import cta from "../assets/img/cta.jpg";
import event1 from "../assets/img/1.jpg";
import event2 from "../assets/img/3.jpg";
import event3 from "../assets/img/13.jpg";
import event4 from "../assets/img/7.jpg";
import event5 from "../assets/img/2.jpg";
import event6 from "../assets/img/4.jpg";
import event7 from "../assets/img/6.jpg";
import event8 from "../assets/img/5.jpg";
import event9 from "../assets/img/14.jpg";
import {
  Lightbulb,
  Truck,
  Users,
  CalendarCheck,
  BarChart3,
  Palette,
} from "lucide-react";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const steps = [
  {
    title: "Strategic Planning",
    number: "1",
    desc: "Goal-driven planning aligned with your brand vision, audience expectations, and business objectives."
  },
  {
    title: "Partner & Technology Coordination",
    number: "2",
    desc: "Seamless coordination across vendors, platforms, and event technologies, ensuring smooth execution without complexity."
  },
  {
    title: "Audience Engagement",
    number: "3",
    desc: "Interactive experiences, intelligent content, and engagement touchpoints designed to keep audiences involved and invested."
  },
  {
    title: "On-Ground Management",
    number: "4",
    desc: "From pre-event setup to live execution and wrap-up, we handle every detail so you can focus on relationships and visibility."
  },
  {
    title: "Post-Event Performance Analysis",
    number: "5",
    desc: "Clear reports, engagement insights, and ROI metrics that show what worked—and how to scale it next time."
  },
  {
    title: "Consistent Brand Integration",
    number: "6",
    desc: "Your brand identity is thoughtfully embedded across every touchpoint, creating a cohesive and memorable experience."
  },
];

const categories = [
  { icon: event6},
  { icon: event2},
  { icon: event3},
  { icon: event5},
  { icon: event7},
  { icon: event4},
  { icon: event1},
];

const grow = [
  {
    title: "Strategic Planning",
    desc: "We analyze your event goals to craft a strategy that aligns with your brand and target audience.",
    icon: Lightbulb,
  },
  {
    title: "Vendor Coordination",
    desc: "Leverage our network of trusted vendors for logistics, tech, venue, and more.",
    icon: Truck,
  },
  {
    title: "Audience Engagement",
    desc: "We design interactive experiences and creative content to keep your audience hooked.",
    icon: Users,
  },
  {
    title: "On-Ground Management",
    desc: "From setup to teardown, we manage everything so you can focus on networking and visibility.",
    icon: CalendarCheck,
  },
  {
    title: "Post-Event Analysis",
    desc: "Get detailed insights and reports on performance, attendee feedback, and ROI.",
    icon: BarChart3,
  },
  {
    title: "Custom Branding",
    desc: "We ensure your brand identity is seamlessly integrated across all event touchpoints.",
    icon: Palette,
  },
];

const faqs = [
  {
    question: "What types of events do you consult and manage?",
    answer:
      "We consult and manage corporate events, brand activations, product launches, conferences, exhibitions, community meetups, and experiential marketing events. Whether it’s a high-level strategy or full-scale execution, we tailor our approach to your objectives."
  },
  {
    question: "How do you ensure strong audience engagement?",
    answer:
      "We design interactive touchpoints, smart content flows, and real-time engagement mechanisms that keep attendees involved. From live interactions to post-event follow-ups, engagement is intentional and measurable."
  },
  {
    question: "How early should we involve you in event planning?",
    answer:
      "Ideally, the earlier the better. Early involvement allows us to align strategy, audience intent, technology, and execution for maximum impact. However, we can also step in at mid or late stages if needed."
  },
  {
  question: "What governance and reporting structures do you follow?",
  answer: [
    "Defined approval workflows",
    "Centralized communication",
    "Timeline and milestone tracking",
    "Post-event executive reporting",
    "Ensures transparency, accountability, and leadership confidence"
    ]
  },
  {
    question: "Are your events suitable for tech-savvy audiences?",
    answer:
      "Yes. We design events for developers, founders, CXOs, product teams, and innovation leaders, ensuring the content, flow, and engagement match their expectations."
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


const EventConsulting = () => {
  const techScroll = useRef(null);

  useEffect(() => {
    const container = techScroll.current;
    if(!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const interval = setInterval(() => {
      if(!container) return;

      scrollAmount += scrollStep;
      container.scrollLeft += scrollStep;

      if(
        container.scrollLeft + container.clientWidth >= container.scrollWidth
      ) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

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
          {Array.isArray(faq.answer) ? (
            <ul className="list-disc pl-6 space-y-2 text-white px-5 py-5 leading-relaxed">
              {faq.answer.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-white px-5 py-5 leading-relaxed">{faq.answer}</p>
          )}
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
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20 px-6 md:px-20">
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
              Event Consulting
            </h1>
            <p className="">
              We design events that turn experiences into long-term growth.
            </p>
            <p className="">
              We plan events with intelligent designs, data-driven experiences, and  AI technologies. From strategic ideation to flawless execution, they are built to:
            </p>
            <ul className="text-md list-disc leading-relaxed mx-10">
              <li>Engage with audiences</li>
              <li>Generate insights</li>
              <li>Drive business outcomes</li>
              <li>Turn interactions into actionable intelligence</li>
              <li>Optimize engagement in real-time actions</li>
            </ul>
            <Link
              to="/contact"
              className="relative inline-block overflow-hidden px-6 py-3 rounded-xl border border-white font-semibold group"
            >
              <span className="relative z-10 text-white transition-colors duration-300">Let's Connect</span>
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
              src= {event9}
              alt="Event Graphic"
              className="w-full max-w-md mx-auto rounded-lg"
            />
          </motion.div>

        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white px-4 sm:px-8 text-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          {/* Icon list with scroll */}
          <motion.div
            ref={techScroll}
            className="mt-10 flex item-center gap-10 overflow-x-auto scrollbar-hide px-4"
            onMouseEnter={() => clearInterval()}
          >
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[250px]"
              >
                <img src={item.icon} alt={item.label} className="w-auto h-36 hover:scale-105 transition-transform rounded-md" />
                <span className="mt-3 text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
          
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 uppercase">
            What We Deliver
            <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="bg-white 
                          text-black rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-pink-600 text-white 
                                flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>

                <p>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 uppercase">
            How We Transform Events into Strategic Growth Frameworks
            <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12">
              <img
                src= {event8}
                alt="Event Graphic"
                className="w-1/2"
              />
            <div className="flex flex-wrap gap-4">
              {grow.map((item, i) =>{
                const Icon = item.icon;
                return(
                <motion.div
                  key={i}
                  className="bg-white w-full p-6 rounded-xl shadow hover:shadow-md transition"
                  initial="hidden"
                  whileInView="visible"
                  custom={i + 1}
                  viewport={{ once: true }}
                  variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="w-6 h-6 text-pink-600" />
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
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

      {/* CTA Section */}
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
  );
};

export default EventConsulting;
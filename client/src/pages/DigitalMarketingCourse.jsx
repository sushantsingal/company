import {useState} from "react";
import { motion } from "framer-motion";
import lin from "../assets/lin.png";
import { Link } from "react-router-dom";
import {ClockFading, GraduationCap, CalendarDays, Tags, Sparkles, BrainCircuit, Target, Layers, Settings2, TrendingUp} from "lucide-react";
import dm from "../assets/hero-image.jpg";
import google from "../assets/google.png";
import hs from "../assets/hs.png";
import meta from "../assets/meta.png";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const features = [
  {    
    title: "Content Creation & Storytelling",
    desc: "Create content that captures attention, communicates value, and connects with real audiences across platforms.",
  },
  {
    title: "SEO & Paid Media Execution",
    desc: "Learn how to optimize for search, run Google Ads, and execute performance campaigns that drive measurable results.",
  },
  {
    title: "Social Media Strategy & Management",
    desc: "Plan, publish, and manage social content that builds brand presence, engagement, and community.",
  },
  {
    title: "Analytics, Reporting & ROI Tracking",
    desc: "Track performance, interpret data, and communicate results in a way businesses understand and value.",
  },
  {
    title: "Live Projects & Real Campaigns",
    desc: "Work on real-world campaigns and use actual data to gain practical experience and build confidence.",
  },
  {
    title: "Tool & Platform Exposure",
    desc: "Get hands-on with modern marketing platforms, analytics tools, automation systems, and AI-assisted workflows.",
  },
];
const why = [
  {    
    title: "AI-Powered Marketing",
    icon: <BrainCircuit/>
  },
  {
    title: "Audience & Market Insight",
    icon: <Target/>
  },
  {
    title: "Integrated Digital Strategy",
    icon: <Layers/>
  },
  {
    title: "Intelligent Campaign Design",
    icon: <Sparkles/>
  },
  {
    title: "Tech & Tools Mastery",
    icon: <Settings2/>
  },
  {
    title: "Analytics & Growth Optimization",
    icon: <TrendingUp/>
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

const videoTestimonials = [
  {
    name: "Aman Sharma",
    role: "Performance Marketer",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Neha Verma",
    role: "Social Media Strategist",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    name: "Rohit Meena",
    role: "SEO Specialist",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
];
const FAQItem = ({ faq }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={{}}
      className="border rounded-lg"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <span className="text-lg font-semibold">
          {faq.question}
        </span>
        <span className="text-2xl">
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
        <p className="px-5 pb-5 leading-relaxed text-black">
          {faq.answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

const DigitalMarketingCourse = () => {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      city: "",
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
        const res = await fetch(`/api/registers`, {
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
    <div className="bg-white">
      <div className="bg-gradient-to-r from-purple-700 to-pink-500 p-12 text-center">
        <div className="flex grid-cols-1 lg:grid-cols-2 p-4 gap-8 justify-end">
          <div className="text-white text-left">
            <h1 className="text-6xl font-bold py-4">Join The Best Digital Marketing Course In Jaipur</h1>
            <p className="text-lg font-medium leading-relaxed py-4">Real Projects • Expert Mentorship • Gen-AI Powered Marketing</p>
            <p className="text-md leading-relaxed mb-2">
<b>Marketing Crawlers</b> delivers an AI-powered digital marketing course in Jaipur where learning meets execution. Work on real campaigns, scale brands, and build job-ready skills, all in just 60 days. Our goal-oriented training takes you from fundamentals to advanced execution.
            </p>
            <ul className="text-md list-disc leading-relaxed mx-10 py-6">
                <li>Internship & Freelancing Opportunities</li>
                <li>Personal Mentorship & Career Guidance</li>
                <li>AI-Driven Marketing & Automation</li>
                <li>Real Client Projects & Live Campaigns</li>
              </ul>
            <p className="text-md font-medium leading-relaxed mb-6">Ready to Launch Your Digital Career?
            </p>
            <div>
              <Link
                to="/register"
                className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 mx-6 rounded-lg hover:bg-blue-50 transition"
              >
                Enroll Now
              </Link>

              <Link
                to="/digital-marketing-course"
                className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 mx-6 rounded-lg hover:bg-blue-50 transition"
              >
                Download Brochure
              </Link>
            </div>
          </div>
          <motion.div
            className="border-white border-2 rounded-2xl shadow-xl p-10 w-3/4"
            initial="hidden"
            whileInView="visible"
            variants={fade}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div>
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">Thank You!</h3>
                <p className="text-gray-700">
                  We've received your details. Our team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-10 mb-10">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    pattern="^[A-Za-z\s]{2,50}$"
                    title="Name should contain only letters and spaces"
                    placeholder="Your Name"
                    className="p-3 border-b border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                    title="Please enter a valid email address"
                    placeholder="Your Email"
                    className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="^[6-9]\d{9}$"
                    title="Enter a valid 10-digit Indian mobile number"
                    placeholder="Phone Number"
                    className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                <input
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your City"
                  pattern="^[A-Za-z\s]{2,50}$"
                  title="Name should contain only letters and spaces"
                  className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></input>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="text-xl bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  {loading ? "Sending..." : "Register"}
                </button>
              </form>
            )}

            {status?.error && (
              <p className="mt-4 text-red-600 text-sm text-center">{status.message}</p>
            )}
          </motion.div>
        </div>
      </div>

      <section className="pt-6 px-4 md:px-20 bg-gray-50 p-4">
        <div className="mb-8 text-center">
          <h1 className="text-black text-4xl font-extrabold text-center ">Program Highlights</h1>
          <p className="text-gray-600 mt-3 text-lg">
              Everything you need to know before enrolling
            </p>
          <div className="w-16 h-1 bg-rose-500 mx-auto mt-2"></div>
        </div>
          <div className="grid gap-10 md:grid-cols-4">
            <div className="border-r-2">
              <h2 className="text-black text-xl font-bold py-4">Certifications</h2>
              <div className="flex items-center gap-4">
                <GraduationCap className="w-10 h-10 text-pink-600 flex-shrink-0" />
                <div className="grid grid-cols-2 w-2/3 content-center gap-2">
                  <img src={hs} alt="hs" />
                  <img src={meta} alt="meta" className="w-40"/>
                  <img src={google} alt="google" />
                  <img src={lin} alt="google" />
                </div>
              </div>
            </div>
            <div className="border-r-2">
              <h2 className="text-black text-xl font-bold py-4">Course Duration</h2>
              <div className="flex items-center gap-6">
                <CalendarDays className="w-10 h-10 text-pink-600 flex-shrink-0" />
                <div>
                  <p className="text-md text-gray-700 font-medium leading-relaxed">
                      2 Months, Hybrid
                  </p>
                  <p className="text-md text-white font-medium leading-relaxed bg-gradient-to-r from-purple-700 to-pink-500 rounded-sm p-1">
                      60 Day 60 Hours
                  </p>
                </div>
              </div>
            </div>
            <div className="border-r-2">
              <h2 className="text-black text-xl font-bold py-4">Batch Timings</h2>
              <div className="flex items-center gap-3">
                <ClockFading className="w-10 h-10 text-pink-600 flex-shrink-0" />
                <div>
                  <p className="text-md text-gray-700 font-medium leading-relaxed">
                      8:00 - 9:00, Mon-Fri
                  </p>
                  <p className="text-md text-white font-medium leading-relaxed bg-gradient-to-r from-purple-700 to-pink-500 rounded-sm text-center p-1">
                      AM / PM
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-black text-xl font-bold py-4">Course Fee</h2>
              <div className="flex items-center gap-3">
                <Tags className="w-10 h-10 text-pink-600 flex-shrink-0" />
                <div>
                  <p className="text-md text-gray-700 font-medium leading-relaxed">
                      <b>₹ 25000</b> / <s>₹ 35000</s>
                  </p>
                  <p className="text-md text-white font-medium leading-relaxed bg-gradient-to-r from-purple-700 to-pink-500 rounded-sm text-center p-1">
                      Limited Offer
                  </p>
                </div>
              </div>
            </div>
            
          </div>
      </section>

      <section className="max-w-6xl mx-auto text-center my-10">
        <div className="text-center text-black mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold relative inline-block">
              AI-Integrated Digital Marketing Course in Jaipur
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
              Everything you need to know before enrolling
            </p>
          <div className="w-16 h-1 bg-rose-500 mx-auto mt-2"></div>
        </div>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
        {features.map((item, idx) => (
            <motion.div
            key={idx}
            variants={cardVariants}
            className="group flex flex-col items-center p-6 rounded-md shadow-sm border transition-all ease-in-out bg-white text-black hover:bg-gradient-to-r from-purple-700 to-pink-500 hover:text-white"
            >
            <div className="flex items-center gap-3 mb-3">
                <h4 className="font-bold text-md">{item.title}</h4>
            </div>
            <p className="text-sm">{item.desc}</p>
            </motion.div>
        ))}
        </motion.div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              Students Testimonials
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Hear directly from our students who transformed their careers
            </p>
            <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
          </div>

          {/* Videos */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {videoTestimonials.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Video */}
                <div className="relative aspect-video">
                  <iframe
                    src={item.videoUrl}
                    title={item.name}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
            
                {/* Info */}
                <div className="p-5 text-center">
                  <h4 className="font-bold text-lg text-black">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA */}
          <div className="text-center mt-14">
            <Link
              to="/register"
              className="inline-block bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Join the Next Batch
            </Link>
          </div>
          
        </div>
      </section>

      <section className="px-32 py-10">
        <div className="my-10 text-center">
          <h1 className="text-black text-4xl font-extrabold text-center ">Why Choose Marketing Crawlers?</h1>
          <p className="text-gray-600 mt-3 text-lg">
              Everything you need to know before enrolling
            </p>
          <div className="w-16 h-1 bg-rose-500 mx-auto mt-2"></div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 py-6">
          <div>
              <img
                src={dm}
                alt="Internship Program"
                className="rounded-2xl shadow-lg h-full"
              />
          </div>
          <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
        {why.map((item, idx) => (
            <motion.div
            key={idx}
            variants={cardVariants}
            className="group flex flex-col items-center p-6 rounded-md border transition-all duration-300 text-black hover:border-gray-600 shadow-lg"
            >
            <div className="justify-center flex flex-wrap gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-pink-500 bg-blue-300 group-hover:bg-white transition-colors duration-300">
                {item.icon}
              </div>
              <h4 className="font-bold text-md text-center">{item.title}</h4>
            </div>
            </motion.div>
        ))}
        </motion.div>
        </div>
      </section> 

       <section className="bg-gradient-to-r from-purple-700 to-pink-500 text-white py-20 px-6 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        viewport={{ once: true }}
        variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Ready to Elevate Your Brand?
      </motion.h2>
      <p className="mb-6 max-w-xl mx-auto">
        Let’s build something impactful together. Talk to our consultants today.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
      >
        Let's Connect
      </Link>
    </section>

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
    </div>
  );
};

export default DigitalMarketingCourse;
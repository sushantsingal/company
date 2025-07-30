import { motion } from "framer-motion";
import CTA from "../components/CTA";
import event from "../assets/event-consulting.jpg";
import {
  Lightbulb,
  Truck,
  Users,
  CalendarCheck,
  BarChart3,
  Palette
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
    title: "Initial Consultation",
    number: "1",
  },
  {
    title: "Custom Strategy Development",
    number: "2",
  },
  {
    title: "Collaborative Solution Design",
    number: "3",
  },
  {
    title: "Implementation & Real-Time Support",
    number: "4",
  },
  {
    title: "Post-Event Review & Feedback",
    number: "5",
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
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-16 text-center px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Event Consulting
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg"
          initial="hidden"
          animate="visible"
          custom={1}
          viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Maximize your event’s impact with tailored strategies, expert planning, and seamless execution.
        </motion.p>
      </section>

      {/* Graphic Description Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
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
            <h2 className="text-3xl font-bold text-gray-800">
              Event Consulting Services
            </h2>
            <p className="text-gray-600">
              We help brands plan, manage, and execute events that leave lasting impressions. From strategic ideation to flawless execution — our team is with you every step of the way.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Custom Event Strategy & Planning</li>
              <li>Budget & Vendor Management</li>
              <li>Creative Design & Marketing Integration</li>
              <li>On-Ground Execution & Analytics</li>
            </ul>
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
              src= {event}
              alt="Event Graphic"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
          <p className="text-gray-600">
            Whether you’re organizing a corporate conference, product launch, or brand activation,
            our event consulting services are designed to deliver outstanding experiences and measurable success.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 uppercase">
          How We Address and Resolve Event Consultancy Queries
        </h2>

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
              className="relative flex-shrink-0 w-60 h-48 bg-yellow-400 text-white shadow-md transform -skew-x-12"
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
                <div className="text-4xl font-bold mb-2">{step.number}</div>
                <div className="text-md md:text-lg font-medium text-center">{step.title}</div>
              </div>

              {index !== steps.length - 1 && (
                <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 border-l-[20px] border-l-yellow-400 border-y-[24px] border-y-transparent"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
      {/* Services Grid */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
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
          ].map((item, i) =>{
            const Icon = item.icon;
            return(
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
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
      </section>

      <CTA />
    </div>
  );
};

export default EventConsulting;
import { motion } from "framer-motion";
import event from "../assets/event-consulting.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
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
          variants={fadeUp}
        >
          Event Consulting
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
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
            variants={{
              hidden: { opacity: 0, x: -30 },
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

      {/* Services Grid */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Planning",
              desc: "We analyze your event goals to craft a strategy that aligns with your brand and target audience.",
            },
            {
              title: "Vendor Coordination",
              desc: "Leverage our network of trusted vendors for logistics, tech, venue, and more.",
            },
            {
              title: "Audience Engagement",
              desc: "We design interactive experiences and creative content to keep your audience hooked.",
            },
            {
              title: "On-Ground Management",
              desc: "From setup to teardown, we manage everything so you can focus on networking and visibility.",
            },
            {
              title: "Post-Event Analysis",
              desc: "Get detailed insights and reports on performance, attendee feedback, and ROI.",
            },
            {
              title: "Custom Branding",
              desc: "We ensure your brand identity is seamlessly integrated across all event touchpoints.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              variants={fadeUp}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Your Next Big Event</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Collaborate with our event consulting experts and take the stress out of planning while ensuring remarkable outcomes.
        </p>
        <a
          href="/contact"
          className="bg-white text-pink-600 px-6 py-3 font-medium rounded hover:bg-blue-600 hover:text-white transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default EventConsulting;

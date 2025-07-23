import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const services = [
  {
    title: "Website Design & Development",
    description:
      "Custom-designed, high-performance websites that look stunning and convert visitors into customers.",
    icon: "🖥️",
  },
  {
    title: "SEO & Performance",
    description:
      "Technical audits, on-page SEO, keyword research, and Google optimization to rank higher and faster.",
    icon: "📈",
  },
  {
    title: "Social Media Marketing",
    description:
      "Targeted campaigns to grow your audience and build brand trust across Instagram, Facebook, and more.",
    icon: "📱",
  },
  {
    title: "Performance Marketing",
    description:
      "ROI-focused ads through Google, Meta, and more — to drive leads, sales, and revenue with precision.",
    icon: "💰",
  },
  {
    title: "Branding & Identity",
    description:
      "Craft your visual identity with logo design, brand guidelines, and impactful messaging.",
    icon: "🎨",
  },
  {
    title: "Email & Automation",
    description:
      "Grow and nurture your audience with email flows, newsletters, and CRM automation.",
    icon: "✉️",
  },
];

const Services = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-20 text-center px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          From branding to performance — we help businesses grow with end-to-end digital solutions.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
              variants={fadeUp}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
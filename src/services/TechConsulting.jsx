import { motion } from "framer-motion";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import tech from "../assets/tech-consulting.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const TechConsulting = () => {
  return (
    <div className="text-gray-800">
      <section className="bg-gradient-to-r from-blue-600 to-pink-600 text-white py-20 text-center px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Tech Consulting
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Empower your business with smart technology decisions, optimized systems, and future-ready strategies.
        </motion.p>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold mb-6">Smart Technology, Smarter Business</h2>
            <p className="text-gray-700 leading-relaxed">
              We help businesses align technology with their goals by providing expert consulting on infrastructure, software solutions, and digital transformation strategies. Whether you're scaling or optimizing, we guide your path with precision.
            </p>
          </motion.div>
          <motion.img
            src={tech}
            alt="Tech Consulting Graphic"
            className="rounded-xl shadow-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            What We Offer
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "System Architecture",
                desc: "We design scalable architectures that optimize speed, reliability, and security.",
              },
              {
                title: "Cloud Solutions",
                desc: "Move to the cloud or optimize your cloud stack for better performance.",
              },
              {
                title: "Automation & AI",
                desc: "Integrate intelligent automation tools and AI-driven processes into your workflow.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
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
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
          >
            Our Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Discover Needs",
              "Audit Infrastructure",
              "Plan & Recommend",
              "Implement & Support",
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                custom={i + 1}
                variants={fadeUp}
              >
                <span className="text-4xl font-bold text-pink-600 block mb-2">
                  0{i + 1}
                </span>
                <p className="text-gray-700 font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </div>
  );
};

export default TechConsulting;

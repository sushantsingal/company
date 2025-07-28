import { motion } from "framer-motion";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
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

const TechConsulting = () => {
  return (
    <div className="text-gray-800">
      <section className="bg-gradient-to-r from-blue-600 to-pink-600 text-white py-20 text-center px-4">
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
          Tech Consulting
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={1}
          viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
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
            variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
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
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          />
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
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
            {[
              {
                title: "System Architecture",
                desc: "We design scalable architectures that optimize speed, reliability, and security.",
                icon: ServerCog,
              },
              {
                title: "Cloud Solutions",
                desc: "Move to the cloud or optimize your cloud stack for better performance.",
                icon: Cloud,
              },
              {
                title: "Automation & AI",
                desc: "Integrate intelligent automation tools and AI-driven processes into your workflow.",
                icon: Bot,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
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
      </section>

      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
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
                viewport={{ once: true }}
                variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
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

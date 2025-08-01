import { motion } from "framer-motion";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import marketing from "../assets/marketing-consulting.jpg";
import { BarChart3, Lightbulb, Rocket, SlidersHorizontal } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const MarketingConsulting = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-20 text-center px-4">
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
          Marketing Consulting
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
          Our marketing consultants help you create high-impact strategies that connect with your audience and drive growth.
        </motion.p>
      </section>

      {/* Graphic + Description */}
      <section className="py-6 px-6 md:px-20 bg-white">
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
            <h2 className="text-3xl font-bold mb-6">Marketing that Drives Real Results</h2>
            <p className="text-gray-700 leading-relaxed">
              Whether it’s performance marketing, branding, or campaign planning, we align our strategies with your goals. Our experts bring together data, creativity, and experience to ensure maximum ROI.
            </p>
          </motion.div>
          <motion.img
            src={marketing}
            alt="Marketing Strategy"
            className="rounded-xl shadow-md"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          />
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-50 py-6 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Our Consulting Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            {[
              {
                icon: <BarChart3 className="text-pink-600 w-6 h-6 mb-3" />,
                title: "Market Research",
                desc: "In-depth analysis of your industry, competitors, and audience for informed strategies.",
              },
              {
                icon: <Lightbulb className="text-pink-600 w-6 h-6 mb-3" />,
                title: "Strategy Creation",
                desc: "We build custom campaigns focused on performance, conversion, and customer journey.",
              },
              {
                icon: <Rocket className="text-pink-600 w-6 h-6 mb-3" />,
                title: "Execution",
                desc: "Deploy and monitor marketing campaigns across the right channels for your business.",
              },
              {
                icon: <SlidersHorizontal className="text-pink-600 w-6 h-6 mb-3" />,
                title: "Optimization",
                desc: "We refine and scale campaigns based on continuous tracking, analytics, and user behavior.",
              },
            ].map((item, i) => (
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
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials/>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default MarketingConsulting;

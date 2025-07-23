import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-pink-600 text-white py-20 px-6 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
        Get in Touch
      </Link>
    </section>
  );
};

export default CTA;
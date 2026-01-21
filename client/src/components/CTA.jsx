import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
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
        className="relative inline-block overflow-hidden px-6 py-3 rounded-xl border border-white font-semibold group"
      >
        <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-pink-600">Let's Connect</span>
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
      </Link>
      </section>
  );
};

export default CTA;
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder, BuildOps",
    text: "Marketing Crawlers transformed our digital presence. Their team is brilliant with strategy and execution.",
  },
  {
    name: "Neha Verma",
    role: "CMO, TechNest",
    text: "They truly act as an extension of our team. Results speak for themselves.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-10"
          viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-lg p-6"
              viewport={{ once: true }}
              variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-pink-600">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { motion } from "framer-motion";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";
import Project6 from "../assets/Project6.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const projects = [
  {
    title: "Branding Campaign",
    category: "FMCG",
    image: Project1,
  },
  {
    title: "Lead Generation",
    category: "EdTech",
    image: Project2,
  },
  {
    title: "Social Strategy",
    category: "Fashion",
    image: Project3,
  },
  {
    title: "Website Revamp",
    category: "Healthcare",
    image: Project4,
  },
  {
    title: "Performance Ads",
    category: "Food & Bev",
    image: Project5,
  },
  {
    title: "SEO Campaign",
    category: "Real Estate",
    image: Project6,
  },
];

const PortfolioPage = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-20 text-center px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Our Work Portfolio
        </motion.h1>
        <motion.p
          className="max-w-xl mx-auto text-lg"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          See how we’ve helped brands grow with strategy, content, and creativity.
        </motion.p>
      </section>

      {/* Portfolio Cards */}
      <section className="py-16 px-6 md:px-20 bg-white text-black">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
              variants={fadeUp}
            >
              <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

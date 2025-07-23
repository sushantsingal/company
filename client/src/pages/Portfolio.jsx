import { motion } from "framer-motion";
import {Clock, Keyboard, FolderOpen, MessageCircle} from "lucide-react";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";

const projects = [
  {
    title: "The Best SEO Tools for 2023",
    description:
      "In the ever-evolving world of SEO, staying ahead of the competition requires utilizing the best tools available.",
    image: Project1,
    link: "/portfolio/ecommerce-branding",
    date: "June 16, 2023",
    author: "marketingcrawlers",
    category: "Digital Marketing",
    comments: "No comments yet",
  },
  {
    title: "Social Campaign for EdTech",
    description:
      "This campaign targeted students with viral content and influencer collaborations to boost signups.",
    image: Project2,
    link: "/portfolio/edtech-social-campaign",
    date: "May 20, 2023",
    author: "marketingcrawlers",
    category: "Campaigns",
    comments: "5 comments",
  },
  {
    title: "UI/UX for a FinTech App",
    description:
      "Redesigned a dashboard to improve engagement and user retention across devices.",
    image: Project3,
    link: "/portfolio/fintech-ui-ux",
    date: "April 10, 2023",
    author: "marketingcrawlers",
    category: "UI/UX",
    comments: "2 comments",
  },
  {
    title: "Digital Strategy for NGO",
    description:
      "Delivered a donor-driven strategy that helped raise over ₹10L in a quarter.",
    image: Project4,
    link: "/portfolio/ngo-digital-strategy",
    date: "March 28, 2023",
    author: "marketingcrawlers",
    category: "Strategy",
    comments: "No comments yet",
  },
];

const PortfolioPage = () => {
  return (
    <div className="bg-[#f1f7fb] min-h-screen py-16 px-4 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            Insights & Case Studies
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we solve real-world business problems with our digital
            strategies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
                  {project.title}
                </h3>

                <div className="flex flex-wrap items-center text-sm text-gray-500 gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="text-pink-500" /> {project.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Keyboard className="text-pink-500" /> {project.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <FolderOpen className="text-pink-500" /> {project.category}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="text-pink-500" /> {project.comments}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <span className="text-pink-600 font-medium hover:underline text-sm">
                  Read More →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;

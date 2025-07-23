import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Clock,
  Keyboard,
  FolderOpen,
  MessageCircle,
} from "lucide-react";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/portfolio")
      .then((res) => {
        console.log("Portfolio API response:", res.data);
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch portfolio items.");
        setLoading(false);
      });
  }, []);

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
            Explore how we solve real-world business problems with our digital strategies.
          </p>
        </motion.div>

        {loading ? (
          <p className="text-center text-gray-600">Loading portfolio...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500">No portfolio items available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.isArray(projects) ?(
            projects.map((project, index) => (
              <motion.a
                href={`/portfolio/${project.slug || project._id}`}
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition block"
              >
                <img
                  src={project.image ? `https://marketing-crawlers.onrender.com${project.image}` : "/placeholder.png"}
                  alt={project.title || "Project"}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
                    {project.title || "Untitled Project"}
                  </h3>

                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="text-pink-500" />
                      {project.date || "N/A"}
                    </div>
                    <div className="flex items-center gap-1">
                      <Keyboard className="text-pink-500" />
                      {project.author || "Anonymous"}
                    </div>
                    <div className="flex items-center gap-1">
                      <FolderOpen className="text-pink-500" />
                      {project.category || "General"}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="text-pink-500" />
                      {project.comments || "No comments yet"}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description || "No description provided."}
                  </p>

                  <span className="text-pink-600 font-medium hover:underline text-sm">
                    Read More →
                  </span>
                </div>
              </motion.a>
            ))
          ):(<p className="text-center text-pink-500">Projects data is not an array.</p>)
          }
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;

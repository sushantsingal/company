import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Clock,
  Keyboard,
  FolderOpen,
  MessageCircle,
} from "lucide-react";

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const allTags = [...new Set((project?.tags || []))];

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`https://marketing-crawlers.onrender.com/api/portfolio/${id}`);
        setProject(res.data);
      } catch (err) {
        setError("Project not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <motion.div
      className="max-w-screen mx-auto bg-white px-4 md:px-8 py-12 text-[#313131]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-3 space-x-1">
        <span className="hover:underline cursor-pointer">Home</span>
        <span>/</span>
        <span className="hover:underline cursor-pointer">Portfolio</span>
        <span>/</span>
        <span className="text-pink-600 font-medium">{project.title}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-pink-600 leading-snug mb-3">
        {project.title}
      </h1>

      {/* Meta Info */}
      <div className="flex items-center text-sm text-gray-500 mb-6 gap-6">
        <div className="flex items-center gap-2">
          <Clock className="text-pink-500" />
          {project.date || "N/A"}
        </div>
        <div className="flex items-center gap-2">
          <Keyboard className="text-pink-500" />
          {project.author || "Anonymous"}
        </div>
        <div className="flex items-center gap-2">
          <FolderOpen className="text-pink-500" />
          {project.category || "General"}
        </div>
      </div>

      {/* Cover Image */}
      <div className="mb-8">
        <img
          src={`https://marketing-crawlers.onrender.com${project.image}`}
          alt={project.title}
          className="w-full rounded-lg object-cover shadow"
        />
      </div>

      {/* Description */}
      <div className="space-y-6 text-[1rem] text-gray-700 leading-relaxed">
        {project.description.split("\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Tags */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Tags</label>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 rounded-full text-sm bg-pink-500 text-white"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Social Share (optional) */}
      <div className="mt-8 flex gap-3 flex-wrap">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">Share on Facebook</button>
        <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded text-sm">Share on Twitter</button>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded text-sm">Share on Pinterest</button>
      </div>
    </motion.div>
  );
};

export default SingleProject;

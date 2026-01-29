import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Keyboard, FolderOpen } from "lucide-react";

const SingleProject = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const allTags = [...new Set(project?.tags || [])];

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(
          `/api/portfolio/${id}`
        );
        setProject(res.data);
      } catch (err) {
        setError("Insight not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <motion.article
      className="bg-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Back */}
      <div className="max-w-4xl mx-auto px-4 pt-6">
        <Link
          to="/insights"
          className="text-pink-600 text-sm font-medium hover:underline"
        >
          ← Back to Insights
        </Link>
      </div>

      {/* Image */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] md:h-[600px] object-cover rounded-xl shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
          {project.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
          <div className="flex items-center gap-2">
            <Keyboard className="w-4 h-4 text-pink-500" />
            {project.author || "Anonymous"}
          </div>
          <div className="flex items-center gap-2">
            <FolderOpen className="w-4 h-4 text-pink-500" />
            {project.category || "General"}
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-pink-500 mb-8"></div>

        {/* Description */}
        <div
          className=" prose prose-lg max-w-none prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg prose-p:text-gray-700 prose-p:my-2 prose-h1:my-4 prose-h2:my-4 prose-h3:my-3 prose-h4:my-2 prose-ul:my-2 prose-li:my-1 prose-img:my-4 prose-img:rounded-lg prose-img:shadow "
          dangerouslySetInnerHTML={{ __html: project.description }}
        />

        {/* Tags */}
        {allTags.length > 0 && (
          <div className="mt-10">
            <h4 className="font-semibold mb-3 text-gray-800">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 bg-gray-50 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Want insights like this for your brand?
          </h3>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-700 transition"
          >
            Talk to Our Experts
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default SingleProject;

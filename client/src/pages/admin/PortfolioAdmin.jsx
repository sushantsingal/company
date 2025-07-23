import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Pencil, Trash2, X } from "lucide-react";
import EditPortfolioForm from "./EditPortfolioForm";

const PortfolioAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState(null); // triggers modal

  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/portfolio");
      setProjects(res.data);
      setLoading(false);
    } catch (err) {
      toast.error("Failed to load portfolios.");
      setLoading(false);
    }
  };

  const handleEditSubmit = async (updatedData) => {
    try {
      const form = new FormData();
      form.append("title", updatedData.title);
      form.append("description", updatedData.description);
      if (updatedData.image instanceof File) {
        form.append("image", updatedData.image);
      }

      await axios.put(`https://marketing-crawlers.onrender.com/api/portfolio/${updatedData._id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      
      toast.success("Portfolio updated!");
      setEditingProject(null);
      fetchProjects();
    } catch (err) {
      console.error(err);
      toast.error("Update failed.");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this portfolio item?")) return;

    try {
      await axios.delete(`/api/portfolio/${id}`);
      toast.success("Portfolio deleted.");
      fetchProjects(); // Refresh list
    } catch (err) {
      toast.error("Delete failed.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="space-y-4 relative px-6 py-10 md:px-10">
      <Toaster />
      <h2 className="text-3xl font-bold mb-4 text-pink-500">Manage Portfolios</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative rounded-xl shadow-lg bg-white p-4 border"
            >
              <img
                src={`https://marketing-crawlers.onrender.com${project.image}`}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="font-bold text-lg mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-3">{project.description}</p>

              <div className="absolute top-2 right-2 flex gap-2">
                <button
                  onClick={() => setEditingProject(project)}
                  className="p-1.5 rounded-full bg-yellow-100 hover:bg-yellow-200"
                >
                  <Pencil className="w-4 h-4 text-yellow-700" />
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="p-1.5 rounded-full bg-red-100 hover:bg-red-200"
                >
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal for Editing */}
      <AnimatePresence>
        {editingProject && (
            <motion.div
            className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            <motion.div
                className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-2xl relative"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <button
                onClick={() => setEditingProject(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                >
                <X className="w-6 h-6" />
                </button>

                <h3 className="text-xl font-bold mb-4">Edit Portfolio</h3>
                <EditPortfolioForm
                formData={editingProject}
                onClose={() => setEditingProject(null)}
                onSubmit={handleEditSubmit}
                />
            </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
    </div>
  );
};

export default PortfolioAdmin;

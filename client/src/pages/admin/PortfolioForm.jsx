import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PortfolioForm = ({ editingProject = null, onSuccess = () => {} }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
    date: "",
    comments: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title || "",
        description: editingProject.description || "",
        category: editingProject.category || "",
        author: editingProject.author || "",
        date: editingProject.date || "",
        comments: editingProject.comments || "",
      });
      setPreview(`https://marketing-crawlers.onrender.com${editingProject.image}`);
    }
  }, [editingProject]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus("Uploading...");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (image) {
      data.append("image", image);
    }

    try {
      if (editingProject) {
        await axios.put(`/api/portfolio/${editingProject._id}`, data);
        toast.success("Portfolio updated ✅");
      } else {
        await axios.post("/api/portfolio", data);
        toast.success("Portfolio uploaded ✅");
      }

      setUploadStatus("");
      setFormData({
        title: "",
        description: "",
        category: "",
        author: "",
        date: "",
        comments: "",
      });
      setImage(null);
      setPreview(null);
      onSuccess(); // Close modal or refresh list
    } catch (err) {
      console.error(err);
      setUploadStatus("Upload failed ❌");
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl max-w-3xl mx-auto mt-8">
    <h2 className="text-3xl font-semibold mb-6 text-pink-600">Add Portfolio Post</h2>
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            {["title", "description", "category", "author", "date", "comments"].map((field) => (
            <input
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={field !== "comments"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="w-full p-3 border bg-white border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            ))}

            <div>
            <label className="block mb-1 font-medium text-gray-700">Image</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded-xl"
            />
            </div>

            {preview && <img src={preview} alt="Preview" className="h-40 object-cover rounded-xl shadow-md" />}

            <button
            type="submit"
            className="bg-pink-600 text-white py-3 px-6 rounded-xl hover:bg-pink-700 transition"
            >
            Upload
            </button>

            {uploadStatus && <p className="text-sm text-gray-600 mt-2">{uploadStatus}</p>}
    </form>
    </div>

  );
};

export default PortfolioForm;
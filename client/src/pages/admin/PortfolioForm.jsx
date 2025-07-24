import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const PortfolioForm = ({ editingProject = null, onSuccess = () => {} }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
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
        tags: Array.isArray(editingProject.tags) ? editingProject.tags.join(", ") : "",
        author: editingProject.author || "",
        date: editingProject.date || "",
        comments: editingProject.comments || "",
      });
      if (editingProject.image) {
        setPreview(`https://marketing-crawlers.onrender.com${editingProject.image}`);
      }
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
    const tagArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0); // ensure no empty tags

    // Append normal fields
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("author", formData.author);
    data.append("date", formData.date);
    data.append("comments", formData.comments);

    // Append tags as strings, not objects
    tagArray.forEach((tag) => data.append("tags[]", tag));

    // Append image only if it's new or changed
    if (image) {
      data.append("image", image);
    }

    try {
      if (editingProject) {
        await axios.put(`https://marketing-crawlers.onrender.com/api/portfolio/${editingProject._id}`, data);
        toast.success("Portfolio updated ✅");
      } else {
        await axios.post("https://marketing-crawlers.onrender.com/api/portfolio", data);
        toast.success("Portfolio uploaded ✅");
      }

      setUploadStatus("");
      setFormData({
        title: "",
        description: "",
        category: "",
        tags: "",
        author: "",
        date: "",
        comments: "",
      });
      setImage(null);
      setPreview(null);
      onSuccess();
    } catch (err) {
      console.error(err);
      setUploadStatus("Upload failed ❌");
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-6 text-pink-600">
        {editingProject ? "Edit Portfolio Post" : "Add Portfolio Post"}
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        {["title", "category", "tags", "author", "date", "comments"].map((field) => (
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

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full p-3 border bg-white border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 h-40"
        />

        <div>
          <label className="block mb-1 font-medium text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-xl"
          />
        </div>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="h-40 object-cover rounded-xl shadow-md"
          />
        )}

        <button
          type="submit"
          className="bg-pink-600 text-white py-3 px-6 rounded-xl hover:bg-pink-700 transition"
        >
          {editingProject ? "Update" : "Upload"}
        </button>

        {uploadStatus && <p className="text-sm text-gray-600 mt-2">{uploadStatus}</p>}
      </form>
    </div>
  );
};

export default PortfolioForm;
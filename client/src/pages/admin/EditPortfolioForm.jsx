import { useState, useEffect } from "react";

const EditPortfolioForm = ({ formData, onClose, onSubmit }) => {
  const [title, setTitle] = useState(formData.title || "");
  const [description, setDescription] = useState(formData.description || "");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(formData.image ? `http://localhost:5000${formData.image}` : "");

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(image);
    }
  }, [image]);

    const handleEditSubmit = async (updatedData) => {
    try {
        const form = new FormData();
        form.append("title", updatedData.title);
        form.append("description", updatedData.description);

        // If new image is selected
        if (updatedData.image instanceof File) {
        form.append("image", updatedData.image);
        }

        await axios.put(`/api/portfolio/${updatedData._id}`, form, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        });

        toast.success("Portfolio updated!");
        setEditingProject(null);
        fetchProjects();
    } catch (err) {
        console.error(err);
        toast.error("Failed to update portfolio.");
    }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedData = {
            _id: formData._id,
            title,
            description,
            image: image || formData.image,
    };

    onSubmit(updatedData);
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold">Title</label>
        <input
          type="text"
          className="w-full border p-2 rounded bg-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Description</label>
        <textarea
          className="w-full border p-2 rounded bg-white"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {preview && (
          <img src={preview} alt="Preview" className="mt-2 w-full h-40 object-cover rounded" />
        )}
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditPortfolioForm;

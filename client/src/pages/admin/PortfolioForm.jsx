import { useEffect, useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { cleanHTML } from "../../utils/cleanHTML";

const PortfolioForm = ({ editingProject = null, onSuccess = () => {} }) => {
  const editorRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    slug:"",
    category: "",
    tags: "",
    author: "",
    date: "",
    comments: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null); 
  const [content, setContent] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const cleanedContent = cleanHTML(content);

  /* ---------- Load edit data ---------- */
  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title || "",
        category: editingProject.category || "",
        tags: Array.isArray(editingProject.tags)
          ? editingProject.tags.join(", ")
          : "",
        author: editingProject.author || "",
        date: editingProject.date || "",
        comments: editingProject.comments || "",
      });

      setContent(editingProject.description || "");
      setMetaDescription(editingProject.metaDescription || "");

      if (editingProject.image) {
        setPreview(`${editingProject.image}`);
      }
    }
  }, [editingProject]);

  /* ---------- Editor helpers ---------- */
  const exec = (command, value = null) => {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
  };

  /* ---------- Insert Link ---------- */
const insertLink = () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) {
    toast.error("Select text first to add a link");
    return;
  }

  const url = prompt("Enter link (https://...)");
  if (!url) return;

  editorRef.current?.focus();
  document.execCommand("createLink", false, url);

  // force target _blank
  const anchor = selection.anchorNode?.parentElement;
  if (anchor && anchor.tagName === "A") {
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener noreferrer");
  }
};


  /* ---------- Media upload for editor ---------- */
  const handleEditorImageUpload = async (file) => {
    const data = new FormData();
    data.append("image", file);

    try {
      const res = await axios.post(
        `/api/upload/editor-upload`,
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      exec("insertImage", res.data.url);
    } catch {
      toast.error("Media upload failed");
    }
  };

  /* ---------- Normal handlers ---------- */
  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ---------- Submit ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploadStatus("Publishing...");
    setSubmitStatus(null);

    const data = new FormData();
    const tagArray = formData.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    data.append("title", formData.title);
    data.append("slug", formData.slug);
    data.append("description", cleanedContent);
    data.append("metaDescription", metaDescription);
    data.append("category", formData.category);
    data.append("author", formData.author);
    data.append("date", formData.date);
    data.append("comments", formData.comments);
    tagArray.forEach((tag) => data.append("tags[]", tag));

    if (image) data.append("image", image);

    try {
      if (editingProject) {
        await axios.put(
          `/api/portfolio/${editingProject.id}`,
          data
        );
        toast.success("Insight updated ✅");
        setSubmitStatus({
        type: "success",
        message: "Insight updated successfully.",
        });
      } else {
        await axios.post(
          `/api/portfolio`,
          data
        );
        toast.success("Insight published ✅");
        setSubmitStatus({
        type: "success",
        message: "Insight published successfully.",
      });
      setFormData({
        title: "",
        category: "",
        tags: "",
        author: "",
        date: "",
        comments: "",
      });
      setContent("");
      setMetaDescription("");
      setImage(null);
      setPreview(null);
      if (editorRef.current) editorRef.current.innerHTML = "";
      }
      onSuccess();
    } catch {
      toast.error("Something went wrong");
      setSubmitStatus({
      type: "error",
      message:
        error.response?.data?.message ||
        "Failed to submit. Please try again.",
    });
    } finally {
      setUploadStatus("");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold mb-6">
        {editingProject ? "Edit Insight" : "Add New Insight"}
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= LEFT ================= */}
        <div className="lg:col-span-2 space-y-4">

          {/* Title */}
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Add title"
            className="bg-pink-400 w-full text-2xl font-semibold p-4 border rounded-md"
            required
          />

          {/* Toolbar */}
          <div className="flex flex-wrap gap-2 border rounded-t-md p-2 bg-pink-400">

            <button type="button" onClick={() => exec("bold")} className="editor-btn">B</button>
            <button type="button" onClick={() => exec("italic")} className="editor-btn italic">I</button>

            <select onChange={(e) => exec("formatBlock", e.target.value)} className="bg-white rounded-sm" defaultValue="p">
              <option value="p">Paragraph</option>
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
            </select>

            <button type="button" onClick={() => exec("insertUnorderedList")} className="editor-btn">
              • Bullets
            </button>

            <button type="button" onClick={() => exec("insertOrderedList")} className="editor-btn">
              1. Numbers
            </button>

            <button type="button" onClick={() => exec("indent")} className="editor-btn">➡</button>
            <button type="button" onClick={() => exec("outdent")} className="editor-btn">⬅</button>

            <button type="button" onClick={() => exec("justifyLeft")} className="editor-btn">⯇</button>
            <button type="button" onClick={() => exec("justifyCenter")} className="editor-btn">≡</button>
            <button type="button" onClick={() => exec("justifyRight")} className="editor-btn">⯈</button>

            {/* <button
              type="button"
              onClick={() => document.getElementById("editorMedia").click()}
              className="editor-btn"
            >
              🖼 Media
            </button> */}

            <button
              type="button"
              onClick={insertLink}
              className="editor-btn"
              title="Insert Link"
            >
              🔗 Link
            </button>

            <button type="button" onClick={() => exec("removeFormat")} className="editor-btn">
              ✖
            </button>
          </div>

          {/* Hidden media input */}
          <input
            id="editorMedia"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (e.target.files[0]) handleEditorImageUpload(e.target.files[0]);
              e.target.value = "";
            }}
          />

          {/* Editor */}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            className="bg-pink-400 min-h-[350px] p-4 border border-t-0 rounded-b-md prose max-w-none focus:outline-none"
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
          />
        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-6">

          <button
            type="submit"
            disabled={!!uploadStatus}
            className={`py-2 rounded w-full text-white transition
              ${uploadStatus ? "bg-gray-400 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"}
            `}
          >
            {uploadStatus ? uploadStatus : editingProject ? "Update" : "Publish"}
          </button>
          {submitStatus && (
            <div
              className={`p-3 rounded text-sm font-medium ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          {/* Meta */}
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            maxLength={160}
            placeholder="Meta description"
            className="bg-pink-400 w-full p-2 border rounded"
          />

          {/* Slug */}
          <input
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="Slug"
            className="bg-pink-400 w-full p-2 border rounded"
          />
          
          {/* Category */}
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="bg-pink-400 w-full p-2 border rounded"
          />
          
          {/* Author */}
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author"
            className="bg-pink-400 w-full p-2 border rounded"
          />

          {/* Tags */}
          <input
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="seo, branding, ai"
            className="bg-pink-400 w-full p-2 border rounded"
          />

          {/* Featured Image */}
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {preview && <img src={preview} className="rounded h-40 w-full object-cover" />}
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;

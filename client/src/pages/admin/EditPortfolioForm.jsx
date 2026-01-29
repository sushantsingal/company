import { useEffect, useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { cleanHTML } from "../../utils/cleanHTML";

const EditPortfolioForm = ({ formData, onClose, onSuccess }) => {
  const editorRef = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  /* ---------- Load existing data ---------- */
  useEffect(() => {
    if (!formData) return;

    setTitle(formData.title || "");
    setMetaDescription(formData.metaDescription || "");
    setSlug(formData.slug || "");
    setPreview(formData.image || "");

    // 🔥 Inject HTML into editor (THIS FIXES EVERYTHING)
    if (editorRef.current) {
      editorRef.current.innerHTML = formData.description || "";
      setContent(formData.description || "");
    }
  }, [formData]);

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


  /* ---------- Editor image upload ---------- */
  const handleEditorImageUpload = async (file) => {
    const data = new FormData();
    data.append("image", file);

    try {
      const res = await axios.post(
        `/api/upload/editor`,
        data
      );

      exec("insertImage", res.data.url);
    } catch {
      toast.error("Editor image upload failed");
    }
  };

  /* ---------- Featured image ---------- */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ---------- Submit ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", title);
    data.append("description", cleanHTML(content));
    data.append("metaDescription", metaDescription);
    data.append("slug", slug);

    if (image) data.append("image", image);

    try {
      await axios.put(
        `/api/portfolio/${formData.id}`,
        data
      );

      toast.success("Insight updated ✅");
      onSuccess();
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Title */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Insight title"
        className="w-full p-3 text-xl font-semibold bg-white border rounded"
        required
      />

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 border rounded p-2 bg-gray-100">
        <button type="button" onClick={() => exec("bold")} className="editor-btn">B</button>
        <button type="button" onClick={() => exec("italic")} className="editor-btn italic">I</button>

        <select
          defaultValue="p"
          onChange={(e) => exec("formatBlock", e.target.value)}
          className="border bg-white rounded px-2"
        >
          <option value="p">Paragraph</option>
          <option value="h1">H1</option>
          <option value="h2">H2</option>
          <option value="h3">H3</option>
          <option value="h4">H4</option>
        </select>

        <button type="button" onClick={() => exec("insertUnorderedList")} className="editor-btn">•</button>
        <button type="button" onClick={() => exec("insertOrderedList")} className="editor-btn">1.</button>

        {/* <button
          type="button"
          onClick={() => document.getElementById("editorEditMedia").click()}
          className="editor-btn"
        >
          🖼
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

      {/* Hidden editor image input */}
      <input
        id="editorEditMedia"
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
        className="min-h-[300px] p-4 border rounded prose max-w-none focus:outline-none"
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      />

      {/* Meta Description */}
      <textarea
        value={metaDescription}
        onChange={(e) => setMetaDescription(e.target.value)}
        maxLength={160}
        placeholder="Meta description (SEO)"
        className="w-full p-2 border rounded"
      />

      <input
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="slug"
        className="w-full p-3 text-xl border rounded"
        required
      />

      {/* Featured Image */}
      <div>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <img src={preview} className="mt-3 h-40 w-full object-cover rounded" />
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-pink-600 text-white rounded"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditPortfolioForm;

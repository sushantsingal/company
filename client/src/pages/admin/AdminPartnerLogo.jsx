import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPartnerLogo = () => {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("general");
  const [logos, setLogos] = useState([]);

  const fetchLogos = async () => {
    const res = await axios.get("https://marketing-crawlers.onrender.com/api/partners");
    const all = [...res.data.generalPartners, ...res.data.eventPartners];
    setLogos(all);
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("logo", file);
    formData.append("type", type);

    await axios.post("https://marketing-crawlers.onrender.com/api/partners/upload", formData);
    setFile(null);
    fetchLogos();
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://marketing-crawlers.onrender.com/api/partners/${id}`);
    fetchLogos();
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-pink-500">Upload Partner Logo</h1>

      <div className="flex gap-4 items-center mb-6">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded px-2 py-1 bg-white"
        >
          <option value="general">General Partner</option>
          <option value="event">Event Partner</option>
        </select>
        <button
          onClick={handleUpload}
          className="bg-pink-600 text-white px-4 py-2 rounded"
        >
          Upload
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {logos.map((logo) => (
          <div
            key={logo._id}
            className="relative bg-white p-4 rounded shadow text-center"
          >
            <img
              src={`https://marketing-crawlers.onrender.com${logo.imageUrl}`}
              alt="logo"
              className="w-full h-24 object-contain"
            />
            <p className="text-sm mt-2">{logo.type.toUpperCase()}</p>
            <button
              onClick={() => handleDelete(logo._id)}
              className="absolute top-1 right-1 text-sm text-red-600 bg-white"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPartnerLogo;
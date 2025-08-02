import { useEffect, useState } from "react";
import axios from "axios";
import { Mail, User, MessageSquare, X, Building, Phone } from "lucide-react";

const ContactAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    axios.get("https://marketing-crawlers.onrender.com/api/contact")
      .then((res) => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching contacts:", err);
        setLoading(false);
      });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      await axios.delete(`https://marketing-crawlers.onrender.com/api/contact/${id}`);
      setContacts(prev => prev.filter(contact => contact._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete contact.");
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-600 mb-8">
          Contact Form Submissions
        </h2>

        {loading ? (
          <p className="text-gray-500 text-center">Loading submissions...</p>
        ) : contacts.length === 0 ? (
          <p className="text-gray-500 text-center">No contact submissions found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="relative bg-white rounded-2xl shadow-md p-5 transition hover:shadow-lg border border-gray-100"
              >
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="absolute top-3 right-3 bg-white text-gray-600 hover:text-red-500 transition"
                  title="Delete"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-2 mb-2 text-pink-600 font-medium">
                  <User size={18} />
                  {contact.name}
                </div>
                <div className="flex items-center gap-2 text-gray-700 mb-2 text-sm break-all">
                  <Mail size={16} />
                  {contact.email}
                </div>
                <div className="flex items-center gap-2 text-gray-700 mb-2 text-sm break-all">
                  <Building size={16} />
                  {contact.company}
                </div>
                <div className="flex items-center gap-2 text-gray-700 mb-2 text-sm break-all">
                  <Phone size={16} />
                  {contact.phone}
                </div>
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <MessageSquare size={16} className="mt-1" />
                  <p>{contact.message}</p>
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  Submitted on: {new Date(contact.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactAdmin;
import { useState } from "react";
import { motion } from "framer-motion";
import contact from "../assets/contact.jpg";
import OfficeLocations from "../components/OfficeLocation";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setSubmitted(true);
    } catch (error) {
      setStatus({ error: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-10 text-center px-4">
        <motion.h1 className="text-6xl font-bold mb-4" initial="hidden" animate="visible" variants={fade}>
          Let’s Connect & Grow Together
        </motion.h1>
        <motion.p className="max-w-2xl mx-auto text-lg text-gray-300" initial="hidden" animate="visible" custom={1} variants={fade}>
          We’re excited to hear about your brand. Fill the form below and our team will reach out.
        </motion.p>
      </section>

      {/* Location Dropdown */}
      <OfficeLocations />

      {/* Content */}
      <section className="py-10 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Img */}
          <motion.img
            src={contact}
            alt="Our Office Locations"
            className="rounded-2xl shadow-xl w-full object-cover"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial="hidden"
            whileInView="visible"
            variants={fade}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">Thank You!</h3>
                <p className="text-gray-700">
                  We've received your details. Our team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                  <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}

            {status?.error && (
              <p className="mt-4 text-red-600 text-sm text-center">{status.message}</p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
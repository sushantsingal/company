import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const Contact = () => {
  return (
    <div className=" bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-20 text-center px-4">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fade}
        >
          Let’s Connect & Grow Together
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-300"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fade}
        >
          We’re excited to hear about your brand. Fill the form below and our team will reach out.
        </motion.p>
      </section>

      {/* Form + Info */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl flex flex-col justify-center space-y-6"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={fade}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">Jaipur, Rajasthan, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-pink-600 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">hello@yourcompany.com</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Company"
                className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full p-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

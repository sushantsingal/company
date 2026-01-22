import { motion } from "framer-motion";
import india from "../assets/flags/india.jpg";
import philippines from "../assets/flags/philippines.webp";

const officeData = [
  {
    title: "HeadQuarter",
    address: [
      "Marketing Crawlers",
      "PN 596, Lane Number 5, Nirman Nagar",
      "Jaipur, Rajasthan, India",
    ],
    flag: india,
  },
  {
    title: "Bengaluru Office",
    address: [
      "Tejas Arcade",
      "No. 527/B 1st Main Road Ward No. 9",
      "Dr Rajkumar Rd, Bengaluru",
      "Karnataka 560010, INDIA",
    ],
    flag: india,
  },
  {
    title: "Philippines Office",
    address: ["34-A General Echavez St.", "Cebu City, Philippines"],
    flag: philippines,
  },
];

const OfficeLocation = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-20 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-600">
            🌍 Global Office Locations
          </h2>
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {officeData.map((office, index) => (
            <motion.div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-start gap-2 mb-2">
                <img
                  src={office.flag}
                  alt={`${office.title} Flag`}
                  className="w-6 h-4 rounded-sm object-cover border"
                />
                <h4 className="font-semibold text-sm text-gray-800">
                  {office.title}
                </h4>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;

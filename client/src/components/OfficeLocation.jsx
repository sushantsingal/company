import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronDown, ChevronUp } from "lucide-react";

const officeData = [
  {
    title: "HeadQuarter",
    address: [
      "Marketing Crawlers",
      "PN 596, Lane Number 5, Nirman Nagar",
      "Jaipur, Rajasthan, India",
    ],
  },
  {
    title: "Bengaluru Office",
    address: [
      "Tejas Arcade",
      "No. 527/B 1st Main Road Ward No. 9",
      "Dr Rajkumar Rd, Bengaluru",
      "Karnataka 560010, INDIA",
    ],
  },
  {
    title: "Philippines Office",
    address: ["34-A General Echavez St.", "Cebu City, Philippines"],
  },
  {
    title: "USA Office",
    address: ["331 Sorrento Drive, Ballwin", "MO 63021, Missouri, USA"],
  },
  {
    title: "Nepal Office",
    address: [
      "Ground Floor, Trade Tower Building",
      "Thapathali Road, Kathmandu-44600, Nepal",
    ],
  },
  {
    title: "Kenya Office",
    address: [
      "4th Floor, Laiboni Centre, Lenana Road",
      "Kilimani, Nairobi, Kenya",
    ],
  },
  {
    title: "Hong Kong Office",
    address: [
      "RM 1701, 17th Floor, Shui On Centre",
      "6-8 Harbour Road, Wanchai, Hong Kong",
    ],
  },
  {
    title: "UK Office",
    address: [
      "27 Court Farm Avenue, Epsom, Surrey",
      "England, KT19 0HD",
    ],
  },
];

const OfficeLocation = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-gray-50 px-6 md:px-20 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center cursor-pointer bg-white shadow-md px-6 py-4 rounded-xl hover:shadow-lg transition" onClick={() => setOpen(!open)}>
          <h2 className="text-xl font-semibold text-gray-800">🌍 Global Office Locations</h2>
          {open ? <ChevronUp className="text-pink-600" /> : <ChevronDown className="text-pink-600" />}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              {officeData.map((office, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <Building2 className="text-pink-600 mt-1" />
                    <h4 className="font-semibold text-lg text-gray-800">{office.title}</h4>
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    {office.address.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OfficeLocation;

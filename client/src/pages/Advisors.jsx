import { motion } from "framer-motion";
import team1 from "../assets/advisor/kamlakant.jpeg";
import team2 from "../assets/advisor/ben.jpeg";
import team3 from "../assets/advisor/prakash.jpg";
import team4 from "../assets/advisor/pankaj.jpeg";
import team5 from "../assets/advisor/dev.jpeg";

const Advisor = () => {
  const advisors = [
    {
      imageUrl: team3,
      name: "Mr. Prakash Chandra Saini",
      role: "Retd. Deputy Secretary, Rajasthan Legacy Assembly",
    },
    {
      imageUrl: team4,
      name: "Mr. Pankaj Satav",
      role: "Founder & CEO, Kallakar Factory",
    },
    {
      imageUrl: team2,
      name: "Mr. Ben Sarita",
      role: "Global Partnerships, Content and Programming Director at DigiMarCon & TECHSPO",
    },
    {
      imageUrl: team1,
      name: "Mr. Kamala Kant Dash",
      role: "Government & Public Affairs | Academia ⇆ Industry ⇆Govt Partnership",
    },
    {
      imageUrl: team5,
      name: "Mr. Dev Ray",
      role: "Co-founder KANOE GLOBAL",
    },
  ];

  return (
    <div className="text-gray-800">
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-10 text-center px-6 mb-10">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
        >
          Advisors
        </motion.h1>
      </section>
      <div className="max-w-5xl mx-auto">
        {/* Meet Our Partners Section */}
        <section className="mb-20">          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-full h-full bg-white p-4 shadow-lg rounded-lg hover:scale-105 transition"
              >
                <div className="w-50 h-50 rounded-t-full overflow-hidden border-4 border-white shadow-md mb-4">
                  <img
                    src={advisor.imageUrl}
                    alt={advisor.name}
                    className="object-cover max-h-64 w-60"
                  />
                </div>
                <h3 className="text-md font-semibold text-gray-600 mt-1">{advisor.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{advisor.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Advisor;

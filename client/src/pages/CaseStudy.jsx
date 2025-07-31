import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RetailImg from "../assets/Case/reatil.jpg";
import EstateImg from "../assets/Case/real-estate.jpg";
import OilImg from "../assets/Case/oil-gas.jpg";
import EducationImg from "../assets/Case/education.png";
import ManufacImg from "../assets/Case/manufac.png";
import HealthImg from "../assets/Case/health 1.png";
import FinImg from "../assets/Case/fintech.png";
import ChemImg from "../assets/Case/chem.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const CaseStudy = () => {
  const caseStudies = [
  { title: "Retail", img: RetailImg, link: "/case-studies/retail" },
  { title: "Real Estate", img: EstateImg, link: "/case-studies/real-estate" },
  { title: "Oil & Gas", img: OilImg, link: "/case-studies/oil-&-gas" },
  { title: "Education", img: EducationImg, link: "/case-studies/education" },
  { title: "Manufacturing", img: ManufacImg, link: "/case-studies/manufacturing" },
  { title: "Chemical", img: ChemImg, link: "/case-studies/chemical" },
  { title: "Health Care", img: HealthImg, link: "/case-studies/health-care" },
  { title: "Fintech", img: FinImg, link: "/case-studies/fintech" },
    ];

  return (
    <div className="text-gray-800 bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-pink-600 py-10 text-white text-center px-6">
        <motion.h1
          className="text-6xl md:text-5xl font-bold mb-4 tracking-tight"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Case Studies
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl font-semibold "
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeIn}
        >
          Every idea, thought, or project is possible with the right direction.
        </motion.p>
      </section>

      {/* Grid Section */}
      <section className="mx-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto py-12">
        {caseStudies.map((item, index) => (
          <motion.div key={index} className="relative group overflow-hidden shadow-lg rounded-md"
            initial="hidden"
            animate="visible"
            variants={fadeIn}>
            {item.img ? (
              <>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Link
                    to={item.link}
                    className="bg-white text-black px-4 py-2 rounded font-medium shadow-md hover:text-pink-500"
                  >
                    Read More
                  </Link>
                </motion.div>
                {/* Bottom Text */}
                <div className="absolute bottom-2 left-4 text-3xl font-medium text-black bg-white bg-opacity-80 px-2 py-1 rounded">
                  {item.title}
                </div>
              </>
            ) : (
              <div className="w-full h-60 bg-gray-300 flex items-center justify-center text-gray-600 text-lg rounded">
                {item.title || "Coming Soon"}
              </div>
            )}
            </motion.div>
        ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
import React from "react";
import { motion } from "framer-motion";
import real1 from "../../assets/Case/Oil/oil1.png";
import real2 from "../../assets/Case/Oil/oil2.jpg";
import real3 from "../../assets/Case/Oil/oil3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OilGas = () => {
  return (
    <section className="bg-white text-black">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold">Oil & Gas</h1>
          </div>
    
          {/* Section 1 */}
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Predictive Maintenance</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">The oil and gas company, sought to reduce equipment downtime and maintenance costs.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>IoT and AI:</b> Deployed IoT sensors and AI for predictive maintenance of critical equipment.</li>
                <li><b>Real-Time Monitoring:</b> Used real-time data to monitor equipment health and performance.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>30% reduction in maintenance costs.</li>
                <li>Decreased equipment downtime.</li>
                <li>Enhanced operational efficiency and safety.</li>
              </ul>
            </div>
    
            {/* Image Placeholder */}
            <img src={real1} alt="section1" className="w-full h-auto rounded-md shadow-md" />
          </div>
    
          {/* Section 2 - Reversed + Motion */}
          <motion.div
            className="max-w-7xl mx-auto px-6 py-16 border-t grid md:grid-cols-2 gap-32 items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image */}
            <img src={real2} alt="section2" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
    
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Digital Oilfield Solutions</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">They aimed to enhance its exploration and production efficiency through digital transformation.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Digital Oilfield:</b> Implemented digital oilfield solutions, including IoT, AI, and big data analytics.</li>
                <li><b>Remote Operation:</b>  Enabled remote monitoring and control of oilfield operations.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>25% increase in production efficiency.</li>
                <li>Reduced operational costs and risks.</li>
                <li>Improved decision-making through data-driven insights.</li>
              </ul>
            </div>
          </motion.div>
    
          {/* Section 3 - Normal Order + Motion */}
          <motion.div
            className="max-w-7xl mx-auto px-6 py-16 border-t grid md:grid-cols-2 gap-32 items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Supply Chain Optimization</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">They faced challenges in optimizing its supply chain operations.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Blockchain Technology:</b>  Implemented blockchain for secure and transparent supply chain management.</li>
                <li><b>AI-Powered Logistics:</b> Utilized AI to optimize logistics and inventory management.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>40% reduction in supply chain costs.</li>
                <li>Improved transparency and traceability.</li>
                <li>Enhanced supplier collaboration and efficiency.</li>
              </ul>
            </div>
    
            {/* Image */}
            <img src={real3} alt="section3" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
          </motion.div>
        </section>
  );
};

export default OilGas;
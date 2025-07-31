import React from "react";
import { motion } from "framer-motion";
import real1 from "../../assets/Case/Manu/manu1.jpg";
import real2 from "../../assets/Case/Manu/manu2.jpg";
import real3 from "../../assets/Case/Manu/manu3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Manufacturing = () => {
  return (
    <section className="bg-white text-black">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold">Manufacturing</h1>
          </div>
    
          {/* Section 1 */}
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Smart Factory Implementation</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">A leading automobile manufacturer, faced challenges in production efficiency and quality control. The company implemented a smart factory solution using IoT and AI technologies.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>IoT Sensors:</b> Installed IoT sensors on machinery to monitor performance in real-time.</li>
                <li><b>AI Analytics:</b> Used AI to analyze data and predict maintenance needs, reducing downtime.</li>
                <li><b>Automated Quality Control:</b> Implemented AI-driven image recognition for defect detection.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>20% increase in production efficiency.</li>
                <li>15% reduction in operational costs.</li>
                <li>Significant improvement in product quality and reduced defects.</li>
              </ul>
            </div>
    
            {/* Image Placeholder */}
            <img src={real1} alt="section1" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
          </div>
    
          {/* Section 2 - Reversed + Motion */}
          <motion.div
            className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image */}
            <img src={real2} alt="section2" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
    
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Digital Twin Technology</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">A manufacturer of precision components, sought to optimize its manufacturing process and reduce time-to-market.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Digital Twin Technology:</b> Created digital replicas of physical assets to simulate and optimize production processes.</li>
                <li><b>Predictive Maintenance:</b> Used real-time data to predict equipment failures and schedule maintenance proactively.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>30% reduction in production lead time.</li>
                <li>25% decrease in maintenance costs.</li>
                <li>Enhanced product customization capabilities.</li>
              </ul>
            </div>
          </motion.div>
    
          {/* Section 3 - Normal Order + Motion */}
          <motion.div
            className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-32 items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Supply Chain Optimization</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">A global supplier of industrial gears, faced inefficiencies in its supply chain management.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Blockchain Technology:</b> Implemented blockchain for transparent and secure supply chain tracking.</li>
                <li><b>AI-Powered Demand Forecasting:</b> Utilized AI to predict demand and optimize inventory levels.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>40% reduction in inventory holding costs.</li>
                <li>Improved supplier collaboration and transparency.</li>
                <li>Faster response to market demands.</li>
              </ul>
            </div>
    
            {/* Image */}
            <img src={real3} alt="section3" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
          </motion.div>
        </section>
  );
};

export default Manufacturing;
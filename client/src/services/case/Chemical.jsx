import React from "react";
import { motion } from "framer-motion";
import real1 from "../../assets/Case/Chem/chem1.jpg";
import real2 from "../../assets/Case/Chem/chem2.jpg";
import real3 from "../../assets/Case/Chem/chem3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Chemical = () => {
  return (
    <section className="bg-white text-black">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold">Chemical</h1>
          </div>
    
          {/* Section 1 */}
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Smart Manufacturing</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">The chemical manufacturer, aimed to optimize its production processes and reduce waste.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>IoT and AI:</b>  Implemented IoT sensors and AI for real-time monitoring and optimization of production processes.</li>
                <li><b>Predictive Maintenance:</b> Used predictive analytics to schedule maintenance and reduce downtime.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>30% reduction in production waste.</li>
                <li>Improved operational efficiency and cost savings.</li>
                <li>Enhanced product quality and consistency.</li>
              </ul>
            </div>
    
            {/* Image Placeholder */}
            <img src={real1} alt="section1" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
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
              <h2 className="text-4xl font-bold mb-4">Digital Supply Chain</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">They sought to improve its supply chain efficiency and transparency.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Blockchain Technology:</b> Implemented blockchain for secure and transparent supply chain tracking.</li>
                <li><b>AI-Powered Demand Forecasting:</b> Utilized AI to predict demand and optimize inventory levels.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>35% reduction in inventory costs..</li>
                <li>Improved supply chain transparency and collaboration.</li>
                <li>Faster response to market changes.</li>
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
              <h2 className="text-4xl font-bold mb-4">R&D Innovation</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700"> They aimed to accelerate its research and development processes through digital transformation.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>AI and Big Data Analytics:</b> Used AI and big data analytics to analyze research data and identify new chemical compounds.</li>
                <li><b>Collaboration Platforms:</b> Implemented digital collaboration platforms for R&D teams</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>25% reduction in time-to-market for new products.</li>
                <li>Enhanced innovation and discovery of new compounds.</li>
                <li>Improved collaboration and knowledge sharing among researchers.</li>
              </ul>
            </div>
    
            {/* Image */}
            <img src={real3} alt="section3" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
          </motion.div>
        </section>
  );
};

export default Chemical;
import React from "react";
import { motion } from "framer-motion";
import real1 from "../../assets/Case/Fin/fin1.png";
import real2 from "../../assets/Case/Fin/fin2.png";
import real3 from "../../assets/Case/Fin/fin3.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Fintech = () => {
  return (
    <section className="bg-white text-black">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold">Fintech</h1>
          </div>
    
          {/* Section 1 */}
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">AI-Driven Risk Management</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700"> A fintech company, aimed to improve its risk management and fraud detection capabilities.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>AI and Machine Learning:</b>  Implemented AI algorithms to detect fraudulent activities and manage risks.</li>
                <li><b>Real-Time Analytics:</b> Used real-time analytics to monitor transactions and identify anomalies.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>40% reduction in fraud incidents.</li>
                <li>Enhanced risk assessment accuracy.</li>
                <li>Increased customer trust and security</li>
              </ul>
            </div>
    
            {/* Image Placeholder */}
            <img src={real1} alt="section1" className=" w-full h-auto rounded-md shadow-md" />
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
            <img src={real2} alt="section2" className=" w-full h-auto rounded-md shadow-md" />
    
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Blockchain-Based Payment Solutions</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">They wanted to offer faster and more secure payment solutions to its customers.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Blockchain Technology:</b> Developed a blockchain-based payment platform for secure and transparent transactions.</li>
                <li><b>Smart Contracts:</b> Implemented smart contracts for automated and efficient payment processing.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>50% reduction in transaction processing time.</li>
                <li>Enhanced security and transparency.</li>
                <li>Increased customer satisfaction and adoption.</li>
              </ul>
            </div>
          </motion.div>
    
          {/* Section 3 - Normal Order + Motion */}
          <motion.div
            className="max-w-7xl mx-auto px-6 py-26 border-t grid md:grid-cols-2 gap-32 items-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Customer Experience Enhancement</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700"> They aimed to improve its customer experience through digital transformation.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Mobile Banking App:</b> Developed a user-friendly mobile banking app with AI-powered personal finance management tools.</li>
                <li><b>Chatbots:</b> Implemented AI chatbots for 24/7 customer support and assistance.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>60% increase in mobile app usage.</li>
                <li>Improved customer engagement and satisfaction.</li>
                <li>Reduced operational costs through automation.</li>
              </ul>
            </div>
    
            {/* Image */}
            <img src={real3} alt="section3" className=" w-full h-auto rounded-md shadow-md" />
          </motion.div>
        </section>
  );
};

export default Fintech;
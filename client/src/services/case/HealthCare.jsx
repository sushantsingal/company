import React from "react";
import { motion } from "framer-motion";
import real1 from "../../assets/Case/Health/health1.png";
import real2 from "../../assets/Case/Health/health2.png";
import real3 from "../../assets/Case/Health/health3.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HealthCare = () => {
  return (
    <section className="bg-white text-black">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold">Health Care</h1>
          </div>
    
          {/* Section 1 */}
          <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Telehealth Expansion</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700">They aimed to expand its telehealth services to improve patient access and care quality.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Telehealth Platform:</b> Developed a user-friendly telehealth platform for remote consultations.</li>
                <li><b>AI Triage System:</b> Implemented AI to assist in patient triage and appointment scheduling.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>50% increase in patient appointments.</li>
                <li>Improved patient satisfaction and access to care.</li>
                <li>Reduced hospital readmissions.</li>
              </ul>
            </div>
    
            {/* Image Placeholder */}
            <img src={real1} alt="section1" className="w-full h-auto rounded-md shadow-md" />
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
            <img src={real2} alt="section2" className=" w-full h-auto rounded-md shadow-md" />
    
            {/* Text */}
            <div className="text-left">
              <h2 className="text-4xl font-bold mb-4">Predictive Analytics for Patient Care</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700"> A healthcare provider, wanted to leverage data to enhance patient care and outcomes.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>Predictive Analytics:</b> Utilized AI to analyze patient data and predict health risks.</li>
                <li><b>Personalized Treatment Plans:</b>  Developed personalized treatment plans based on predictive insights.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>30% improvement in patient outcomes.</li>
                <li>Reduced hospital stays and readmissions.</li>
                <li>Enhanced preventive care measures.</li>
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
              <h2 className="text-4xl font-bold mb-4">Electronic Health Records Integration</h2>
              <p className="font-semibold text-xl">Overview</p>
              <p className="mb-4 text-gray-700"> They sought to integrate electronic health records (EHR) across its network for seamless patient information sharing.</p>
    
              <p className="font-semibold text-xl">Solution</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li><b>EHR System Integration:</b> Implemented an interoperable EHR system across all facilities.</li>
                <li><b>Cloud-Based Data Storage:</b> Used cloud technology for secure and scalable data storage.</li>
              </ul>
    
              <p className="font-semibold mt-4 text-xl">Outcome</p>
              <ul className="text-gray-700 list-inside list-disc">
                <li>Improved care coordination and patient safety.</li>
                <li>20% reduction in administrative costs.</li>
                <li>Enhanced data accessibility for healthcare providers.</li>
              </ul>
            </div>
    
            {/* Image */}
            <img src={real3} alt="section3" className="w-full h-auto rounded-md shadow-md" />
          </motion.div>
        </section>
  );
};

export default HealthCare;
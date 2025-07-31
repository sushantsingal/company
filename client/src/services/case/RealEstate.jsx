import React from "react";
import { motion } from "framer-motion";
import real1 from "../../assets/Case/Real/real1.jpg";
import real2 from "../../assets/Case/Real/real2.jpg";
import real3 from "../../assets/Case/Real/real3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RealEstate = () => {
  return (
    <section className="bg-white text-black">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold">Real Estate</h1>
      </div>

      {/* Section 1 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
        {/* Text */}
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">Property Management</h2>
          <p className="font-semibold text-xl">Overview</p>
          <p className="mb-4 text-gray-700">They aimed to enhance its property management services through digital transformation.</p>

          <p className="font-semibold text-xl">Solution</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li><b>IoT and Automation:</b> Implemented IoT sensors for real-time monitoring of properties and automated maintenance scheduling.</li>
            <li><b>AI-Powered Analytics:</b> Used AI to analyze property data and optimize management strategies.</li>
          </ul>

          <p className="font-semibold mt-4 text-xl">Outcome</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li>25% reduction in maintenance costs.</li>
            <li>Improved tenant satisfaction and retention.</li>
            <li>Enhanced operational efficiency.</li>
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
          <h2 className="text-4xl font-bold mb-4">Virtual Property Tours</h2>
          <p className="font-semibold text-xl">Overview</p>
          <p className="mb-4 text-gray-700">They wanted to provide immersive property viewing experiences for potential buyers and tenants.</p>

          <p className="font-semibold text-xl">Solution</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li><b>Virtual Reality Tour:</b> Developed VR tours for properties, allowing clients to explore remotely.</li>
            <li><b>AI Chatbots:</b>  Implemented AI chatbots for real-time assistance during virtual tours.</li>
          </ul>

          <p className="font-semibold mt-4 text-xl">Outcome</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li>50% increase in property viewings.</li>
            <li>Improved client engagement and satisfaction.</li>
            <li>Faster decision-making and property transactions.</li>
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
          <h2 className="text-4xl font-bold mb-4">Data-Driven Real Estate</h2>
          <p className="font-semibold text-xl">Overview</p>
          <p className="mb-4 text-gray-700">They sought to leverage data analytics to enhance its real estate services.</p>

          <p className="font-semibold text-xl">Solution</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li><b>Big Data Analytics:</b> Used big data to analyze market trends and property values.</li>
            <li><b>AI Recommendations:</b> Implemented AI to provide personalized property recommendations to clients.</li>
          </ul>

          <p className="font-semibold mt-4 text-xl">Outcome</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li>30% increase in successful property transactions.</li>
            <li>Improved client satisfaction and loyalty.</li>
            <li>Enhanced market insights and competitive advantage.Improved client satisfaction and loyalty.</li>
          </ul>
        </div>

        {/* Image */}
        <img src={real3} alt="section3" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
      </motion.div>
    </section>
  );
};

export default RealEstate;
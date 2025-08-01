import React from "react";
import { motion } from "framer-motion";
import retail1 from "../../assets/Case/Retail/retail1.jpg";
import retail2 from "../../assets/Case/Retail/retail2.jpg";
import retail3 from "../../assets/Case/Retail/retail3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RetailCaseStudy = () => {
  return (
    <section className="bg-white text-black">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold">Retail</h1>
      </div>

      {/* Section 1 */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
        {/* Text */}
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">Omni-Channel Retailing</h2>
          <p className="font-semibold text-xl">Overview</p>
          <p className="mb-4 text-gray-700">They aimed to enhance its property management services through digital transformation.</p>

          <p className="font-semibold text-xl">Solution</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li><b>Integrated E-Commerce Platform:</b> Developed an integrated e-commerce platform with real-time inventory updates.</li>
            <li><b>AI-Powered Personalization:</b> Used AI to personalize customer experiences both online and in-store.</li>
          </ul>

          <p className="font-semibold mt-4 text-xl">Outcome</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li>40% increase in online sales.</li>
            <li>Improved customer engagement and loyalty.</li>
            <li>Enhanced inventory management and reduced stockouts.</li>
          </ul>
        </div>

        {/* Image Placeholder */}
        <img src={retail1} alt="section1" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
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
        <img src={retail2} alt="section2" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />

        {/* Text */}
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-4">Smart Inventory Management</h2>
          <p className="font-semibold text-xl">Overview</p>
          <p className="mb-4 text-gray-700">They sought to optimize its inventory management to reduce costs and improve efficiency.</p>

          <p className="font-semibold text-xl">Solution</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li><b>IoT and RFID Technology:</b> Implemented IoT sensors and RFID tags for real-time inventory tracking.</li>
            <li><b>AI Demand Forecasting:</b> Utilized AI to predict demand and optimize stock levels.</li>
          </ul>

          <p className="font-semibold mt-4 text-xl">Outcome</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li>30% reduction in inventory holding costs.</li>
            <li>Improved stock accuracy and availability.</li>
            <li>Enhanced operational efficiency and reduced waste.</li>
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
          <h2 className="text-4xl font-bold mb-4">Customer Experience Enhancement</h2>
          <p className="font-semibold text-xl">Overview</p>
          <p className="mb-4 text-gray-700">They wanted to elevate its customer experience through digital transformation.</p>

          <p className="font-semibold text-xl">Solution</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li><b>AI-Powered Chatbots:</b> Implemented AI chatbots for 24/7 customer support and personalized shopping assistance.</li>
            <li><b>Augmented Reality (AR):</b> Developed AR features for virtual try-ons and product visualizations.</li>
          </ul>

          <p className="font-semibold mt-4 text-xl">Outcome</p>
          <ul className="text-gray-700 list-inside list-disc">
            <li>50% increase in customer satisfaction.</li>
            <li>Improved online and in-store engagement.</li>
            <li>Higher conversion rates and sales.</li>
          </ul>
        </div>

        {/* Image */}
        <img src={retail3} alt="section3" className="bg-gray-300 w-full h-full rounded-md shadow-md" />
      </motion.div>
    </section>
  );
};

export default RetailCaseStudy;
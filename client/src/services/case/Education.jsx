import React from "react";
import { motion } from "framer-motion";
import real1 from "../../assets/Case/Edu/edu1.png";
import real2 from "../../assets/Case/Edu/edu2.jpg";
import real3 from "../../assets/Case/Edu/edu3.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Education = () => {
  return (
   <section className="bg-white text-black">
         {/* Gradient Header */}
         <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
           <h1 className="text-white text-5xl md:text-7xl font-extrabold">Education</h1>
         </div>
   
         {/* Section 1 */}
         <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
           {/* Text */}
           <div className="text-left">
             <h2 className="text-4xl font-bold mb-4">E-Learning Platform</h2>
             <p className="font-semibold text-xl">Overview</p>
             <p className="mb-4 text-gray-700">They wanted to create a comprehensive e-learning platform to enhance remote learning.</p>
   
             <p className="font-semibold text-xl">Solution</p>
             <ul className="text-gray-700 list-inside list-disc">
               <li><b>LMS Implementation:</b> Developed a robust Learning Management System (LMS) with interactive features.</li>
               <li><b>AI-Powered Personalization:</b> Used AI to personalize learning experiences for students.</li>
             </ul>
   
             <p className="font-semibold mt-4 text-xl">Outcome</p>
             <ul className="text-gray-700 list-inside list-disc">
               <li>50% increase in student engagement.</li>
               <li>Improved learning outcomes and satisfaction.</li>
               <li>Enhanced accessibility to quality education</li>
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
           <img src={real2} alt="section2" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
   
           {/* Text */}
           <div className="text-left">
             <h2 className="text-4xl font-bold mb-4">Digital Campus</h2>
             <p className="font-semibold text-xl">Overview</p>
             <p className="mb-4 text-gray-700">They aimed to transform its campus into a digital hub to improve administrative efficiency and student experience.</p>
   
             <p className="font-semibold text-xl">Solution</p>
             <ul className="text-gray-700 list-inside list-disc">
               <li><b>Campus Management System:</b> Implemented a digital campus management system for streamlined administration.</li>
               <li><b>IoT and Smart Classrooms:</b> Deployed IoT for smart classrooms and real-time resource management.</li>
             </ul>
   
             <p className="font-semibold mt-4 text-xl">Outcome</p>
             <ul className="text-gray-700 list-inside list-disc">
               <li>30% reduction in administrative costs.</li>
               <li>Improved student and faculty satisfaction.</li>
               <li>Enhanced campus safety and resource utilization</li>
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
             <h2 className="text-4xl font-bold mb-4">Virtual Reality Learning</h2>
             <p className="font-semibold text-xl">Overview</p>
             <p className="mb-4 text-gray-700">They sought to enhance its curriculum with immersive learning experiences using virtual reality.</p>
   
             <p className="font-semibold text-xl">Solution</p>
             <ul className="text-gray-700 list-inside list-disc">
               <li><b>VR Learning Modules:</b> Developed VR modules for various subjects to provide hands-on learning experiences.</li>
               <li><b>AI Tutoring:</b> Implemented AI to provide personalized property recommendations to clients.</li>
             </ul>
   
             <p className="font-semibold mt-4 text-xl">Outcome</p>
             <ul className="text-gray-700 list-inside list-disc">
               <li>40% improvement in student comprehension and retention.</li>
               <li>Increased student engagement and participation.</li>
               <li>Enhanced learning outcomes in complex subjects.</li>
             </ul>
           </div>
   
           {/* Image */}
           <img src={real3} alt="section3" className="bg-gray-300 w-full h-auto rounded-md shadow-md" />
         </motion.div>
       </section>
  );
};

export default Education;
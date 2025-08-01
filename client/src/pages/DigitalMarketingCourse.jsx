import React from "react";
import { motion } from "framer-motion";
import { Laptop, BookOpenCheck, UserCheck, Briefcase } from "lucide-react";
import CourseBanner from "../assets/digital-marketing-course.jpg";
import dm from "../assets/dm.jpg";

const DigitalMarketingCourse = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold">Digital Marketing Course</h1>
      </div>
      <div className="pt-6 px-4 md:px-20">
          <div className="grid gap-20 md:grid-cols-2">
            <div>
                <img
                  src={CourseBanner}
                  alt="Internship Program"
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
            </div>
            <div>
              {/* Intro */}
              <h2 className="text-black text-xl font-bold py-4">Learn Digital Marketing the Practical Way</h2>
              <p className="text-md text-gray-700 font-medium leading-relaxed mb-2">
                In today’s digital world, knowing how to market online isn’t just a bonus—it’s a must. Our program is designed to give you real, hands-on experience so you can confidently apply what you learn.
              </p>
              <h2 className="text-black text-lg py-4">Here’s what you’ll explore:</h2>
              <ul className="text-md text-gray-700 leading-relaxed mb-8 gap-4">
                <li><b>Content Creation:</b> Make content that grabs attention and connects with people.</li><br></br>
                <li><b>SEO & Google Ads:</b> Learn how to rank higher on Google and run successful ad campaigns.</li><br></br>
                <li><b>Social Media Strategy:</b> Plan and manage content to grow your brand and engage followers.</li><br></br>
                <li><b>Analytics & ROI:</b> Understand what’s working by tracking results and showing the value of your efforts.</li><br></br>
                <li><b>Live Projects:</b> Work on real campaigns to build your skills and gain practical experience.</li><br></br>
              </ul>
            </div>
          </div>
      </div>
      <div className=" flex justify-center text-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd-btwcxDOk0AAt4xBdYEE4FkFxIirT1KOqFmopEIPJsgj6wQ/viewform?usp=sharing&ouid=112648620577953336544"
          target="blank"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition"
        >
          Apply Now
        </a>
      </div>

      <div className="py-12 px-4 md:px-20">
              <div className="grid gap-20 md:grid-cols-2 py-6">
                <div>
                  {/* Intro */}
                  <h2 className="text-black text-xl font-bold py-4">Learn from Experts Who Know the Industry</h2>
                  <p className="text-md text-gray-700 font-medium leading-relaxed mb-2">
                    Our trainers are experienced digital marketers who work with top brands and bring real-world knowledge to the classroom. They don’t just teach—they guide you with insights that come from doing the work themselves.
                  </p>
                  <h2 className="text-black text-lg py-4">What You’ll Get:</h2>
                  <ul className="text-md text-gray-700 leading-relaxed mb-8">
                    <li><b>Practical Tips:</b> Learn from real case studies and proven strategies.</li>
                    <li><b>Latest Trends:</b> Stay updated with the newest tools and techniques.</li>
                    <li><b>One-on-One Support:</b> Get answers to your questions and feedback on your work.</li>
                    <li><b>Problem-Solving Skills:</b> Tackle real challenges and learn how to get results.</li>
                  </ul>
      
                  <div className="text-center">
                  <a
                  href="/register"
                  target="blank"
                  className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition"
                >
                  Register Now
                </a>
                  </div>
                </div>
                <div>
                    <img
                      src={dm}
                      alt="Internship Program"
                      className="rounded-2xl shadow-lg w-full h-auto object-cover"
                    />
                </div>
            </div>
      </div>
       {/* Call to Action */}
        <div className="p-6 rounded-xl text-center">
          <h2 className="text-4xl font-semibold text-pink-700 mb-4">Your Path to Career Acceleration Starts Here</h2>
          <p className="text-gray-700 text-xl mb-4">Our Digital Marketing Expert course is designed to be a launchpad for your career. Whether you’re a fresh graduate looking to enter a booming industry, a professional seeking to upskill, or an entrepreneur aiming to boost your online presence, this program will equip you with the “future-ready skills” needed to succeed.</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Contact Us
          </a>
        </div>
      
    </div>
  );
};

export default DigitalMarketingCourse;
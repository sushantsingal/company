import React from "react";
import { motion } from "framer-motion";
import { Laptop, BookOpenCheck, UserCheck, Briefcase } from "lucide-react";
import CourseBanner from "../assets/digital-marketing-course.jpg";

const DigitalMarketingCourse = () => {
  return (
    <div className="bg-[#f1f7fb] text-gray-800 min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Intro Section: Text + Image */}
        <div className="mb-16">
          {/* Text */}
          <div>
            <h1 className="text-4xl font-bold mb-6 text-pink-600">
              Digital Marketing Course
            </h1>
            <p className="text-gray-700 mb-4">
              Explore our comprehensive digital marketing course designed to equip you with the skills to thrive in the digital world. From SEO and content creation to paid advertising and analytics, we cover everything you need to become a confident digital marketer.
            </p>
            <p className="text-gray-700">
              Our experienced mentors, live projects, and hands-on assignments ensure you're ready to take on real-world challenges. Join our program to build a rewarding career in digital marketing.
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-pink-600 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* List */}
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-base">
              <li>Search Engine Optimization (SEO)</li>
              <li>Search Engine Marketing (SEM)</li>
              <li>Social Media Management</li>
              <li>Google Ads & Facebook Ads</li>
              <li>Email Marketing Campaigns</li>
              <li>Content Strategy & Copywriting</li>
              <li>Google Analytics & Reporting</li>
            </ul>

            {/* Image */}
            <div>
              <img
                src={CourseBanner} // Use same or new relevant image
                alt="What You'll Learn"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Course Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">Course Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow flex items-start gap-4">
              <Laptop className="text-pink-600 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Live Sessions</h3>
                <p className="text-gray-600">Engage in interactive live sessions led by industry professionals.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow flex items-start gap-4">
              <BookOpenCheck className="text-pink-600 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Hands-On Projects</h3>
                <p className="text-gray-600">Work on real client projects to apply your learning.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow flex items-start gap-4">
              <UserCheck className="text-pink-600 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">1:1 Mentorship</h3>
                <p className="text-gray-600">Get personal guidance and feedback from experts.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow flex items-start gap-4">
              <Briefcase className="text-pink-600 w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-1">Career Support</h3>
                <p className="text-gray-600">We assist with resume building, mock interviews, and job placement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-pink-100 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">Ready to Level Up?</h2>
          <p className="text-gray-700 mb-4">Kickstart your digital marketing career with our expert-led training program.</p>
          <a
            href="/apply"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingCourse;
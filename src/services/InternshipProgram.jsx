import React from "react";
import { motion } from "framer-motion";

const InternshipProgram = () => {
  return (
    <div className="bg-[#f1f7fb] text-gray-800 min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-pink-600">Internship Program</h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-4">
          Join our intensive internship program to gain hands-on experience in real-world digital marketing, design, and development projects. Learn by doing and boost your career prospects in just a few months.
        </p>
        <p className="text-gray-700 mb-8">
          Whether you're a student or a recent graduate, our program offers mentorship, flexible schedules, and project-based learning tailored to help you grow in today’s digital-first world.
        </p>

        {/* What You'll Gain */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">What You'll Gain</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Work on real client campaigns and projects</li>
            <li>Exposure to digital tools & platforms (SEO, SMM, Canva, etc.)</li>
            <li>Collaborate with experienced mentors</li>
            <li>Build a job-ready portfolio</li>
            <li>Certificate & letter of recommendation</li>
            <li>Potential job placement opportunities</li>
          </ul>
        </div>

        {/* Program Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">Program Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Flexible Timing</h3>
              <p className="text-gray-600">Balance your studies or job while gaining work experience.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Practical Exposure</h3>
              <p className="text-gray-600">Learn by doing, not just watching tutorials.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Weekly Assignments</h3>
              <p className="text-gray-600">Track progress and receive regular feedback.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-2">Certification</h3>
              <p className="text-gray-600">Get certified upon successful completion of the program.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-pink-100 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">Launch Your Career With Confidence</h2>
          <p className="text-gray-700 mb-4">Apply now to join our next internship batch and gain practical industry experience.</p>
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

export default InternshipProgram;

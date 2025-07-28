import React from "react";
import { Clock, Cpu, ClipboardCheck, Award } from "lucide-react";
import InternshipBanner from "../assets/internship-program.jpg";

const InternshipProgram = () => {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-10">
          Internship Program
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Elevate your skills with our intensive internship program crafted for emerging talents. Get practical experience, expert mentorship, and a portfolio that gets noticed.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Designed for students and recent graduates, this program helps you gain confidence in digital marketing, design, and development with real-time exposure.
        </p>

        {/* What You'll Gain */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-center text-pink-600 mb-8">What You'll Gain</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ul className="space-y-4 text-base sm:text-lg text-gray-700 font-medium list-disc">
              <li>Real client projects & campaigns</li>
              <li>Master SEO, SMM, Canva, and marketing tools</li>
              <li>Learn directly from industry mentors</li>
              <li>Build a portfolio that opens doors</li>
              <li>Internship certificate & LOR</li>
              <li>Job & freelance opportunities</li>
            </ul>

            <div>
              <img
                src={InternshipBanner}
                alt="Internship Program"
                className="rounded-2xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">Program Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cards */}
            {[{
              icon: <Clock className="text-pink-600 w-6 h-6" />,
              title: "Flexible Timing",
              desc: "Schedule that suits your availability—learn alongside your studies or job."
            }, {
              icon: <Cpu className="text-pink-600 w-6 h-6" />,
              title: "Hands-On Learning",
              desc: "Experience the tools, strategies, and challenges professionals face."
            }, {
              icon: <ClipboardCheck className="text-pink-600 w-6 h-6" />,
              title: "Weekly Assignments",
              desc: "Interactive tasks with feedback to track your growth every week."
            }, {
              icon: <Award className="text-pink-600 w-6 h-6" />,
              title: "Completion Certificate",
              desc: "Showcase your achievement with a professional certificate."
            }].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex gap-4 hover:shadow-lg transition"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-pink-100 p-8 rounded-xl text-center max-w-3xl mx-auto shadow-inner">
          <h2 className="text-xl sm:text-2xl font-bold text-pink-700 mb-3">Launch Your Career With Confidence</h2>
          <p className="text-gray-700 text-base mb-5">
            Don’t miss this opportunity to build your skills and break into the digital world. Limited seats only!
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternshipProgram;

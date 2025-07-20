import React from "react";

const OurProcess = () => {
  return (
    <div className="bg-[#f1f7fb] text-gray-800 min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Our Process</h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          At the core of our company lies a streamlined and strategic process tailored to deliver exceptional results for our clients. Whether it's digital marketing, branding, consulting, or tech services — our process ensures clarity, creativity, and impact.
        </p>

        {/* Step-by-step Process */}
        <div className="space-y-10">
          {[
            {
              step: "01",
              title: "Discovery & Research",
              desc: "Understanding your business, goals, audience, and competition forms the foundation of our strategy. We engage in deep market research and stakeholder discussions."
            },
            {
              step: "02",
              title: "Strategy Planning",
              desc: "Our team maps out a data-driven and goal-oriented strategy that aligns with your objectives, timelines, and budget."
            },
            {
              step: "03",
              title: "Execution",
              desc: "We put plans into action with precision. From creatives to campaigns to tech integrations, we ensure smooth rollouts and brand consistency."
            },
            {
              step: "04",
              title: "Optimization & Monitoring",
              desc: "Using advanced tools, we monitor key performance indicators, analyze data, and refine strategies for maximum impact."
            },
            {
              step: "05",
              title: "Reporting & Feedback",
              desc: "You get regular updates and insights. We believe in full transparency and welcome collaboration to drive mutual success."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="text-pink-600 text-2xl font-bold w-10">{item.step}</div>
                <h3 className="text-xl font-semibold ml-4">{item.title}</h3>
              </div>
              <p className="text-gray-600 ml-14">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-pink-100 mt-16 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">Let’s Work Together</h2>
          <p className="text-gray-700 mb-4">Connect with our team and experience a process that delivers tangible business growth.</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;

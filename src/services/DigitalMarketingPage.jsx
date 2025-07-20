import React from "react";

const DigitalMarketingPage = () => {
  return (
    <div className="bg-[#f1f7fb] text-gray-800 min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold mb-6 text-pink-600">
          Digital Marketing Services
        </h1>
        <p className="text-gray-700 mb-6">
          Unlock your brand's full potential with our tailored digital marketing strategies. Whether you're a startup or an enterprise, our comprehensive services are designed to increase your visibility, engagement, and conversions across all platforms.
        </p>

        {/* Service Breakdown */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Search Engine Optimization (SEO)</h3>
            <p className="text-gray-600">
              Improve your rankings on search engines and drive organic traffic to your website with our expert SEO solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Social Media Marketing</h3>
            <p className="text-gray-600">
              Engage with your audience and grow your following through strategic campaigns on platforms like Instagram, Facebook, LinkedIn, and more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Pay-Per-Click Advertising (PPC)</h3>
            <p className="text-gray-600">
              Maximize your ROI with targeted paid campaigns that bring results quickly across Google, Facebook, and YouTube.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">Email & Content Marketing</h3>
            <p className="text-gray-600">
              Build long-term customer relationships through valuable content, newsletters, and automated funnels.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Proven track record of successful campaigns</li>
            <li>Dedicated team of certified marketers</li>
            <li>Transparent reporting and analytics</li>
            <li>Customized strategy for your industry and goals</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-pink-100 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">
            Ready to Go Digital?
          </h2>
          <p className="text-gray-700 mb-4">
            Let’s take your business to the next level. Schedule a consultation today.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingPage;
import { useState, useEffect } from "react";
import axios from "axios";

const PartnersPage = () => {
  const [partners, setPartners] = useState([]);
  const [eventPartners, setEventPartners] = useState([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/partners`);
        setPartners(res.data.generalPartners || []);
        setEventPartners(res.data.eventPartners || []);
      } catch (err) {
        console.error("Failed to fetch partner logos", err);
      }
    };
    fetchLogos();
  }, []);

  return (
    <div className="bg-[#f1f7fb] text-gray-800 min-h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-600">Our Clients</h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          We are proud to be associated with a growing network of individuals who share our mission of enabling digital transformation and business growth. Our partnerships span across industries and are built on trust, collaboration, and a shared commitment to excellence.
        </p>
        <p className="text-gray-700 mb-10 leading-relaxed">
          From strategic alliances to community partnerships, our partner ecosystem enhances our ability to deliver quality services, innovative campaigns, and impactful outcomes for clients across sectors.
        </p>

        {/* General Partners */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-pink-600 mb-6">
            Our Clients
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
            {partners.map((logo, index) => (
              <div
                key={index}
                className="w-32 h-32 sm:w-56 sm:h-56 bg-white p-4 rounded shadow flex items-center justify-center hover:scale-105 hover:shadow-md transition-all"
              >
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${logo.imageUrl}`}
                  alt={`partner-${index}`}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Event Partners */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-pink-600 mb-4">
            Our Event Clients
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 px-2">
            From industry summits to student fests, our event partners are instrumental in helping us amplify our brand presence and deliver meaningful experiences.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
            {eventPartners.map((logo, index) => (
              <div
                key={`event-${index}`}
                className="w-36 h-20 sm:w-56 sm:h-40 bg-white p-3 rounded shadow flex items-center justify-center hover:scale-105 hover:shadow-md transition-all"
              >
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}${logo.imageUrl}`}
                  alt={`event-partner-${index}`}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition duration-200"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;

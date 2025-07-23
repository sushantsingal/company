import { Settings, GraduationCap, Building2, Users } from "lucide-react";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const PartnersPage = () => {
  return (
    <div className="bg-[#f1f7fb] text-gray-800 min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-pink-600">Our Partners</h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-4">
          We are proud to be associated with a growing network of partners who share our mission of enabling digital transformation and business growth. Our partnerships span across industries and are built on trust, collaboration, and a shared commitment to excellence.
        </p>
        <p className="text-gray-700 mb-8">
          From strategic alliances to community partnerships, our partner ecosystem enhances our ability to deliver quality services, innovative campaigns, and impactful outcomes for clients across sectors.
        </p>

        {/* Partner Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-pink-600">Types of Partners</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow flex items-start gap-4">
              <Settings className="text-pink-600 w-20 h-20 mt-1" />
              <div>
              <h3 className="text-lg font-semibold mb-2">Technology Partners</h3>
              <p className="text-gray-600">
                We work with top-tier tech companies to bring you the best platforms, tools, and integrations for success.
              </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow flex items-start gap-4">
              <GraduationCap className="text-pink-600 w-20 h-20 mt-1" />
              <div>
              <h3 className="text-lg font-semibold mb-2">Training Partners</h3>
              <p className="text-gray-600">
                Our educational and training partnerships ensure up-to-date curriculum and mentorship from experienced industry professionals.
              </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow flex items-start gap-4">
              <Building2 className="text-pink-600 w-20 h-20 mt-1" />
              <div>
              <h3 className="text-lg font-semibold mb-2">Corporate Alliances</h3>
              <p className="text-gray-600">
                Collaborating with startups, SMEs, and enterprises to deliver measurable results through marketing and digital consulting.
              </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow flex items-start gap-4">
              <Users className="text-pink-600 w-20 h-20 mt-1" />
              <div>
              <h3 className="text-lg font-semibold mb-2">Community Collaborations</h3>
              <p className="text-gray-600">
                We support local communities and institutions to promote skill development and digital awareness.
              </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Partners Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-600 mb-4">
            Meet Our Partners
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Trusted by industry leaders and future-forward innovators, our partners share our passion for excellence, growth, and digital enablement. Explore the organizations that empower our mission.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {partners.map((logo, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-white p-4 rounded shadow flex items-center justify-center hover:scale-110 hover:shadow-md transition"
              >
                <img
                  src={logo}
                  alt={`partner-${index}`}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Event Partners Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-600 mb-4">
            Our Event Partners
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            From industry summits to student fests, our event partners are instrumental in helping us amplify our brand presence and deliver meaningful experiences.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {[partner4, partner5, partner6].map((logo, index) => (
              <div
                key={`event-${index}`}
                className="w-36 h-20 bg-white p-4 rounded shadow flex items-center justify-center hover:scale-110 hover:shadow-md transition"
              >
                <img
                  src={logo}
                  alt={`event-partner-${index}`}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-pink-100 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold text-pink-700 mb-2">Want to Collaborate?</h2>
          <p className="text-gray-700 mb-4">Join our growing list of partners and let's build something great together.</p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;

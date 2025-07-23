import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import { useParams } from "react-router-dom";
import { CalendarDays, Folder, MessageCircle, User } from "lucide-react";

const projectData = {
  "ecommerce-branding": {
    title: "E-commerce Branding & SEO",
    image: Project1,
    description: `We worked with an online fashion retailer to enhance their digital presence through SEO and rebranding. Organic traffic grew 300% and conversions doubled in under 3 months.`,
    details: [
      "SEO Audit and Keyword Mapping",
      "Competitor Research",
      "Brand Identity Design",
      "On-page Optimization & Technical Fixes",
      "Performance Analytics & Reporting"
    ],
    date: "June 12, 2024",
    author: "marketingcrawlers",
    category: "Digital Marketing",
    comments: "No comments yet",
  },
  "edtech-social-campaign": {
    title: "Social Campaign for EdTech",
    image: Project2,
    description: `This campaign targeted students across platforms, generating 50K+ leads in a month with viral short-form content and influencer collaboration.`,
    details: [
      "Instagram Reels Strategy",
      "Paid Ads (Meta + Google)",
      "Content Calendar & Management",
      "Influencer Outreach",
      "Performance Monitoring"
    ],
    date: "March 21, 2024",
    author: "marketingcrawlers",
    category: "Social Campaign",
    comments: "2 comments",
  },
};

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return <div className="text-center mt-20 text-gray-700">Project not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl mb-8"
        />

        <h1 className="text-3xl font-bold text-pink-600 mb-4">
          {project.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-6 gap-y-2 mb-6">
          <div className="flex items-center gap-1">
            <CalendarDays size={16} /> {project.date}
          </div>
          <div className="flex items-center gap-1">
            <User size={16} /> {project.author}
          </div>
          <div className="flex items-center gap-1">
            <Folder size={16} /> {project.category}
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} /> {project.comments}
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed text-[17px]">
          {project.description}
        </p>

        <h2 className="text-xl font-semibold text-pink-600 mb-3">What We Did</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-10">
          {project.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <div className="mt-12 bg-pink-100 p-6 rounded-xl text-center">
          <h2 className="text-lg font-semibold text-pink-700 mb-2">
            Got a Project Like This?
          </h2>
          <p className="text-gray-700 mb-4">
            Let’s build something impactful together.
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

export default PortfolioDetail;
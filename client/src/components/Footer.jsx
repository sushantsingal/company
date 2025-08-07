import hero from "../assets/hero-image.png";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import {
  Facebook,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  MessageCircle,
  LinkedinIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 px-2 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-1">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Important links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/case-studies" className="text-gray-600 hover:text-pink-600">
                Case Studies
              </a>
            </li>
            <li>
              <a href="/digital-marketing-course" className="text-gray-600 hover:text-pink-600">
                Digital Marketing Course
              </a>
            </li>
            <li>
              <a href="/internship-program" className="text-gray-600 hover:text-pink-600">
                Internship Program
              </a>
            </li>
            <li>
              <a href="/partners" className="text-gray-600 hover:text-pink-600">
                Our Clients
              </a>
            </li>
            <li>
              <a href="/advisors" className="text-gray-600 hover:text-pink-600">
                Our Advisors
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Additional links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/our-process" className="text-gray-600 hover:text-pink-600">
                Our Process
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-600 hover:text-pink-600">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Categories</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {/* <li>
              <a href="/digital-marketing" className="text-gray-600 hover:text-pink-600">
                Digital Marketing
              </a>
            </li> */}
            <li>
              <a href="/portfolio" className="text-gray-600 hover:text-pink-600">
                Insights
              </a>
            </li>
          </ul>
        </div>
        
        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Our Verticals</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="/mobile-dev" target="blank" className="text-gray-600 hover:text-pink-600">
               Mobile App Development
              </a>
            </li>
            <li>
              <a href="/web-dev" target="blank" className="text-gray-600 hover:text-pink-600">
               Web Development
              </a>
            </li>
            <li>
              <a href="https://techbridgediplomacy.com/" target="blank" className="text-gray-600 hover:text-pink-600">
               Tech Bridge Diplomacy
              </a>
            </li>
            <li>
              <a href="https://theyogamantra.com/" target="blank" className="text-gray-600 hover:text-pink-600">
                Yog Mantra
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col items-center md:items-center">
          <img src={hero} alt="logo" className="h-24 w-auto mb-4" />
          <div className="flex gap-4">
            <a href="https://www.facebook.com/marketingcrawlers/" target="blank" className="text-gray-500 hover:text-pink-600">
              <Facebook size={18} />
            </a>
            <a href="https://x.com/MarketingCrawl1/status/1418865005848629256" target="blank" className="text-gray-500 hover:text-pink-600">
              <BsTwitterX size={18} />
            </a>
            <a href="https://www.instagram.com/marketingcrawlers/?hl=en " target="blank" className="text-gray-500 hover:text-pink-600">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/917627025781" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className= "text-gray-500 hover:text-pink-600" size={20} />
            </a>
            <a href="https://www.linkedin.com/company/marketing-crawlers/posts/?feedView=all" target="blank" className="text-gray-500 hover:text-pink-600">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        © {new Date().getFullYear()} Marketing Crawlers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

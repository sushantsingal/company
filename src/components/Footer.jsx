import React from "react";
import {
  Facebook,
  Twitter,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Important links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
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
                Our Partners
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
            <li>
              <a href="/digital-marketing" className="text-gray-600 hover:text-pink-600">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="/portfolio" className="text-gray-600 hover:text-pink-600">
                Uncategorized
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-center md:items-end">
          <img src="src/assets/hero-image.jpg" alt="logo" className="h-24 w-auto mb-4" />
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

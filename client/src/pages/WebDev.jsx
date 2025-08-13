import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { SearchCheck, ChevronLeft, ChevronRight, Lightbulb, Layout, Code, BugPlay, Rocket, PencilRuler, BarChart3, Gauge, PlayCircle } from "lucide-react";
import phone2 from "../assets/Group 5.png";
import phone1 from "../assets/Group 4.png";
import discover from "../assets/Web/discover.png";
import deploy from "../assets/Web/deploy.png";
import design from "../assets/Web/design.png";
import develop from "../assets/Web/develop.png";
import Cross from "../assets/logos/cross.svg?react";
import Progress from "../assets/logos/progressive.svg?react";
import Pro from "../assets/logos/pro.svg?react";
import Dev from "../assets/logos/dev.svg?react";
import UX from "../assets/logos/UX.svg?react";

const offers = [
  {
    img: phone1,
    color: "#F28B82", // Soft rose
    title: "Web App Integration Services",
    desc: "We always stay on top of the latest developments in deployment, customization, and integration to design the perfect, seamless approach to how you utilize your software.",
  },
  {
    img: phone1,
    color: "#FBBC04", // Warm amber
    title: "Mobile App Development Services",
    desc: "With years of expertise under our belt, our team specializing in custom mobile app development can assist you in creating seamless and fluid experiences across various mobile devices.",
  },
  {
    img: phone1,
    color: "#34A853", // Fresh green
    title: "Enterprise Web Design and Development",
    desc: "We use custom APIs and our vast knowledge of web services to build Enterprise Web Applications for digital marketing, CRM, inventory control, expedited workflows, and so much more.",
  },
  {
    img: phone1,
    color: "#4285F4", // Google blue
    title: "Full-Stack Web Development Solutions",
    desc: "Our expert Full-Stack website developers are highly skilled in Java and SQL programming languages with experience in leading 12-factor applications and cloud platform implementation.",
  },
  {
    img: phone1,
    color: "#34A853", // Fresh green
    title: "Web Portal Development",
    desc: "Our Web Portal Developers have both engineering expertise and a keen understanding of the business sector to create reliable and robust web solutions that help companies manage their workflows.",
  },
  {
    img: phone1,
    color: "#34A853", // Fresh green
    title: "Animation & Graphics Web Design",
    desc: "Our award-winning animators and graphic designers create beautiful logos, branding materials, illustrations, infographics, motion graphics, and more to fulfill your branding vision.",
  },
  {
    img: phone2,
    color: "#4285F4", // Google blue
    title: "Ecommerce Development Solutions",
    desc: "Our Ecommerce development services can help you build an online store that drives sales and revenue. We have experience with various e-commerce platforms, including Magento, Shopify, and BigCommerce and we can help you choose the best for your business.",
  },
  {
    img: phone2,
    color: "#F28B82", // Soft rose
    title: "Web Integration Services",
    desc: "Our team of experienced web developers provides comprehensive web integration services, ensuring your software operates seamlessly across all platforms and devices for optimal performance and user experience.",
  },
];

const services = [
  {
    title: "Discover",
    description:
      "First we listen and 'strip down' your idea to reveal the core of your app's value proposition.",
    icon: Pro,
    image: discover,
    colSpan: "col-span-1",

  },
  {
    title: "Design",
    description:
      "We create a lean, impactful go-to-market product strategy that de-risks your investment.",
    icon: UX,
    image: design,
    colSpan: "col-span-1",
  },
  {
    title: "Develop",
    description:
      "Our development team works hand-in-hand with our creative team to build with precision.",
    icon: Dev,
    image: develop,
    colSpan: "col-span-1",
  },
  {
    title: "Deploy",
    description:
      "Real artists ship. We partner with you to launch and iterate to find true product-market fit.",
    icon: Lightbulb,
    image: deploy,
    colSpan: "col-span-1",
  },
];


const steps = [
  {
    id: "01",
    title: "Ideation",
    description: "We conduct product discovery and user research.",
    icon: Lightbulb,
  },
  {
    id: "02",
    title: "Design",
    description: "Turning ideas into wireframes and final UI design.",
    icon: Layout,
  },
  {
    id: "03",
    title: "Development",
    description: "Agile-based full stack development in sprints.",
    icon: Code,
  },
  {
    id: "04",
    title: "Quality Assurance",
    description: "Manual and automated testing across devices.",
    icon: BugPlay,
  },
  {
    id: "05",
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and performance monitoring.",
    icon: Rocket,
  },
];

const categories = [
  { name: "Frontend", items: [
    { icon: phone1, label: "Material UI" },
    { icon: phone1, label: "TypeScript" },
    { icon: phone1, label: "GraphQL" },
    { icon: phone1, label: "WebSockets" },
    { icon: phone1, label: "HTML" },
    { icon: phone1, label: "CSS" },
    { icon: phone1, label: "CSS" },
    { icon: phone1, label: "CSS" },
    { icon: phone1, label: "CSS" },
    { icon: phone1, label: "CSS" },
  ]},
  { name: "Backend", items: [
    { icon: phone2, label: "Node.js" },
    { icon: phone2, label: "Express" },
    { icon: phone2, label: "MongoDB" },
  ]},
  // Add other categories here...
];


const WebDev = () => {
    const scrollRef = useRef(null);
    const techScroll = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [isManual, setIsManual] = useState(false);
    const [partners, setPartners] = useState([]);
    const manualTimerRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        const scrollAmount = direction === "left" ? -200 : 200;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        techScroll.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

        setIsManual(true);
        if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
        manualTimerRef.current = setTimeout(() => setIsManual(false), 2000);
    };

    useEffect(() => {
        const fetchLogos = async () => {
        try {
            const res = await axios.get("https://marketing-crawlers.onrender.com/api/partners");
            setPartners(res.data.generalPartners || []);
        } catch (err) {
            console.error("Failed to fetch partner logos", err);
        }
        };
        fetchLogos();

        if (isManual) return;

        const interval = setInterval(() => {
        if (!isHovered && scrollRef.current && techScroll.current) {
            scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
            techScroll.current.scrollBy({ left: 1, behavior: "smooth" });
        }
        }, 20);

        return () => clearInterval(interval);
    }, [isHovered, isManual]);

  return (
    <div>
        {/* Hero */}
        <section className=" bg-white flex items-center justify-center px-6 md:px-16 py-20">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">

            {/* Left Side Content */}
            <div className="flex flex-col justify-start space-y-8">

              {/* Top Heading and Stats */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    WEB DEVELOPMENT <br />
                    SERVICES <br />
                    COMPANY
                  </h1>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg max-w-xl">
                Establish a solid digital presence with our web development company. We specialize in building unique web-based solutions with advanced technologies to help you fulfill your business needs on the spot.
              </p>

              {/* Right-aligned CTA and follow-up */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-xl">
                <p className="text-gray-700 text-base md:text-lg md:max-w-xs">
                  Want to know more details and learn how we can help?
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-xl">
                <button
                  onClick={() => window.location.href = "/contact"}
                  className="mt-4 md:mt-0 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-3 rounded-md transition-all duration-300"
                >
                  LET’S GET IN TOUCH
                </button>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="flex justify-center">
              <img
                src={phone1} // Replace with your image path
                alt="Developer Illustration"
                className="w-full max-w-md md:max-w-7xl"
              />
            </div>
            
          </div>
        </section>

        {/* Client */}
        <section className="bg-white py-8 px-1">
            <div className="text-center text-gray-800 mb-14">
                <h2 className="text-4xl md:text-6xl font-extrabold relative inline-block">
                Our Clients
                <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
                </h2>
            </div>

            <div className="relative">
                {/* Scroll Left */}
                <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 shadow-md p-2 rounded-full z-10 transition-transform hover:scale-110"
                >
                <ChevronLeft className="text-gray-800" />
                </button>

                {/* Scroll Right */}
                <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 shadow-md p-2 rounded-full z-10 transition-transform hover:scale-110"
                >
                <ChevronRight className="text-gray-800" />
                </button>

                {/* Scrolling Logos */}
                <div
                ref={scrollRef}
                className="overflow-x-auto whitespace-nowrap scroll-smooth px-16 no-scrollbar"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                <div className="inline-flex items-center gap-12">
                    {partners.map((logo, index) => (
                    <img
                        key={index}
                        src={`https://marketing-crawlers.onrender.com${logo.imageUrl}`}
                        alt={`partner-${index}`}
                        className="h-20 object-contain transition-transform duration-300 hover:scale-110"
                    />
                    ))}
                </div>
                </div>
            </div>
        </section>
        
        {/* Features */}
        <section className="py-12 px-6 bg-white select-none text-black">
          {/* Heading */}
          <div className="text-center mx-auto mb-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              What We Offer
            </h2>
            <div className="w-16 h-1 bg-rose-600 mx-auto mt-2"></div>
            <p className="mt-4 text-gray-500 text-lg">
              Work with groundbreakers who create top-notch mobile and web apps on time & on budget.
            </p>
          </div>
          <div className=" border-b-2 border-gray-200 mb-6"></div>

          {/* Two Column List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-6xl mx-auto">
            {offers.map((service, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-rose-100 rounded-lg">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                {/* Text */}
                <div>
                  <h4 className="text-2xl font-extrabold text-gray-800 mb-4">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-md">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Have */}
        <section className="bg-white py-8 px-6 md:px-24 text-gray-800">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
              What We Have
              <div className="w-16 h-1 bg-rose-500 mx-auto mt-2"></div>
            </h2>
            <p className="mt-4 text-gray-500 text-xl max-w-3xl mx-auto">
              We’re a team of designers, developers, and marketers who deliver
              end-to-end digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-8 text-gray-800">
            {services.map(({ title, description, icon: Icon, image, colSpan }, index) => (
              <div
                key={index}
                className={` group relative p-6 rounded-2xl overflow-hidden border-2 border-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-rose-700 flex items-center`}
              >
                {/* Left-to-right background fill */}
                {/* <div className="absolute inset-0 bg-rose-500 scale-x-100 origin-right group-hover:scale-x-0 transition-transform duration-500 ease-out"></div> */}

                {/* Content (left side) */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-32 h-32 mb-4 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-white transition-colors duration-300">
                    <img src={image} alt={title}/>
                    {/* <Icon className="w-10 h-10 text-rose-600 transition-colors duration-300" /> */}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-md">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Process */}
        <section className="py-12 px-6 bg-white text-gray-800 select-none">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
              Our Process
              <div className="w-16 h-1 bg-rose-500 mx-auto mt-2"></div>
            </h2>
            <p className="mt-4 text-gray-500 text-xl max-w-3xl mx-auto">
              Work with groundbreakers who create top-notch mobile and web apps on time & on budget.
            </p>
          </div>
          {/* Steps */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {steps.map((step, idx, arr) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex items-center gap-8">
                  {/* Step Circle */}
                  <div className="flex flex-col items-center group">
                    <div className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-rose-500">
                      <Icon className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="mt-3 font-semibold text-gray-800">
                      {step.title}
                    </p>
                  </div>
                  {/* Arrow (except last step) */}
                  {idx < arr.length - 1 && (
                    <span className="px-4 text-gray-400 text-4xl hidden md:inline-block">
                      ›
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-gray-50 px-4 sm:px-8 text-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            {/* Title */}
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
                  Technologies Expertise
                  <div className="w-16 h-1 bg-rose-500 mx-auto mt-2"></div>
                </h2>
                <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
                  That Powers Your Digital Success
                </p>
              </div>

            {/* Tabs */}
            <div className="mt-8 flex flex-wrap justify-center border-b border-gray-200">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 cursor-pointer text-lg font-semibold border-r border-gray-300 last:border-none ${
                    activeTab === idx
                      ? "text-rose-500 border-b-2 border-rose-500"
                      : "text-black hover:text-rose-500"
                  }`}
                >
                  {cat.name}
                </div>
              ))}
            </div>

            {/* Icon list with scroll */}
            <motion.div
              ref={techScroll}
              className="mt-10 flex gap-10 overflow-x-auto scrollbar-hide px-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {categories[activeTab].items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center min-w-[250px]"
                >
                  <img src={item.icon} alt={item.label} className="w-60 h-auto hover:scale-110 transition-transform" />
                  <span className="mt-3 text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-white py-8 px-6 md:px-20 text-center text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
                Let's build something amazing together. Reach out today and take the first step toward digital success.
            </p>
            <button
                className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-rose-600 hover:scale-105 transition-transform duration-300"
                onClick={() => window.location.href = "/contact"}
            >
                Get In Touch
            </button>
        </section>
    </div>
  );
};

export default WebDev;
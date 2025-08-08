import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Lightbulb, Layout, Code, BugPlay, Rocket, Calendar, PhoneCall, ShieldCheck, DollarSign, Headphones, Settings2, } from "lucide-react";
import phone3 from "../assets/phone3.png";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import Embed from "../assets/logos/device.svg?react";
import Ios from "../assets/logos/ios.svg?react";
import Android from "../assets/logos/android.svg?react";
import Native from "../assets/logos/native.svg?react";
import Cross from "../assets/logos/cross.svg?react";
import Progress from "../assets/logos/progressive.svg?react";
import Pro from "../assets/logos/pro.svg?react";
import Dev from "../assets/logos/dev.svg?react";
import UX from "../assets/logos/UX.svg?react";


const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const offer = [
  {
    icon: <Ios className="w-8 h-8 text-rose-600 transition-transform duration-300 hover:scale-110" />,
    title: "iOS App Development",
    desc: "Craft high-performance, intuitive, and elegant apps for iPhone and iPad using the latest iOS frameworks.",
  },
  {
    icon: <Android className="w-8 h-8 text-rose-600 transition-transform duration-300 hover:scale-110" />,
    title: "Android App Development",
    desc: "Build feature-rich Android applications that run smoothly across all devices, tailored for diverse screen sizes and user needs.",
  },
  {
    icon: <Embed className="w-8 h-8 text-rose-600 transition-transform duration-300 hover:scale-110" />,
    title: "Wearables and Embedded Software",
    desc: "Develop smart, responsive apps for wearables and IoT devices with seamless connectivity and real-time performance.",
  },
  {
    icon: <Native className="w-8 h-8 text-rose-600 transition-transform duration-300 hover:scale-110" />,
    title: "Native Mobile Apps",
    desc: "Fast, responsive apps built specifically for iOS or Android, offering superior user experience and device-level optimization.",
  },
  {
    icon: <Cross className="w-8 h-8 text-rose-600 transition-transform duration-300 hover:scale-110" />,
    title: "Cross-Platform Apps",
    desc: "Deliver cost-effective mobile apps that work seamlessly across iOS and Android platforms.",
  },
  {
    icon: <Progress className="w-8 h-8 text-rose-600 transition-transform duration-300 hover:scale-110" />,
    title: "Progressive Web Apps",
    desc: "Combine the power of web and mobile with fast, installable, and offline-capable web apps that boost user engagement and reach.",
  },
];

const services = [
  {
    title: "Discover",
    description:
      "First we listen and 'strip down' your idea to reveal the core of your app's value proposition.",
    icon: Pro,
  },
  {
    title: "Design",
    description:
      "We create a lean, impactful go-to-market product strategy that de-risks your investment.",
    icon: UX,
  },
  {
    title: "Develop",
    description:
      "Our development team works hand-in-hand with our creative team to build with precision.",
    icon: Dev,
  },
  {
    title: "Deploy",
    description:
      "Real artists ship. We partner with you to launch and iterate to find true product-market fit.",
    icon: Lightbulb,
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

const features = [
  {
    icon: <Calendar className="w-6 h-6 text-rose-600" />,
    title: "We Think Like Partners",
    desc: "Your success is our priority. We collaborate closely to solve real problems with smart tech.",
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-rose-600" />,
    title: "Weekly Scrum Updates",
    desc: " Stay in the loop with structured weekly calls, updates, and progress reviews.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
    title: "Quality First, Always",
    desc: "Every line of code is reviewed, tested, and optimized for performance and security.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-rose-600" />,
    title: "On Time. Within Budget",
    desc: "We deliver exactly what you expect, on schedule and with no hidden costs.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-rose-600" />,
    title: "Scalable Solutions",
    desc: "We don’t just build apps. We build future-proof platforms designed to grow with your business.",
  },
  {
    icon: <Settings2 className="w-6 h-6 text-rose-600" />,
    title: "Free Support",
    desc: "Our commitment doesn’t end at launch. We’re here for the long haul with 90 days of free support.",
  },
];


const MobileDev = () => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isManual, setIsManual] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [partners, setPartners] = useState([]);
    const manualTimerRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;

        const scrollAmount = direction === "left" ? -200 : 200;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

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
        if (!isHovered && scrollRef.current) {
            scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
        }
        }, 20);

        return () => clearInterval(interval);
    }, [isHovered, isManual]);

  return (
    <div className="bg-white">
        {/* Hero */}
        <section className="relative flex w-full items-center justify-center bg-white overflow-hidden">
            <div className="relative w-full flex flex-col items-center text-center px-6 md:px-12 pt-16">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">Innovate • Design • Launch • Scale </h1>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
                Your Trusted Partner for Custom Mobile App Development
                </h1>

                {/* Subheading */}
                

                {/* Phone Images */}
                <div className="relative flex justify-center py-14">
                    <img
                        src={phone1}
                        alt="App Mockup 1"
                        className="w-64 md:w-96 rotate-[12deg] drop-shadow-2xl"
                    />
                    <div className="w-full">
                        <p className="text-lg md:text-2xl text-gray-600 mt-6 max-w-2xl">
                        Transform your vision into a high-performance mobile app that engages users and drives growth.
                        </p>

                        {/* CTA Button */}
                        <button onClick={() => window.location.href = "/contact"} className="mt-8 bg-rose-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-rose-600 transition">
                        Let's Talk
                        </button>
                    </div>
                    <img
                        src={phone2}
                        alt="App Mockup 2"
                        className="w-64 md:w-96 -rotate-[12deg] drop-shadow-2xl"
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
        <section className="relative py-12 bg-white overflow-hidden">
            <div className=" mx-auto px-4 sm:px-10">
                <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl text-gray-800 font-extrabold relative inline-block">
                    What We Offer
                    <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
                </h2>
                <p className="mt-4 text-gray-500 text-2xl max-w-full mx-auto">
                    We offer end-to-end digital solutions to help businesses launch, scale, and succeed with technology.
                </p>
                </div>

                <div className="relative flex flex-col md:flex-row items-stretch md:min-h-[600px]">
                    {/* Left image section */}
                    <div className="relative w-full h-[300px] md:h-auto overflow-hidden">
                        {/* Foreground Image */}
                        <img
                        src={phone3}
                        alt="phone3"
                        className="absolute inset-0 w-full h-full object-container z-10"
                        />
                    </div>

                    {/* Right text section */}
                    <motion.div
                        className="w-full md:w-2/3 p-6 sm:p-10 flex flex-col justify-start items-start bg-white z-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {offer.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            className="flex items-start gap-4 mb-6"
                        >
                            <div className="bg-rose-100 p-3 rounded-full">
                            {item.icon}
                            </div>
                            <div>
                            <h4 className="font-semibold text-lg text-gray-800">
                                {item.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1 max-w-sm">{item.desc}</p>
                            </div>
                        </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
        
        {/* Have */}
        <section className="bg-white py-2 px-6 md:px-24 text-gray-800">
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
                What We Have
                <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
                </h2>
                <p className="py-4 text-gray-500 text-2xl max-w-full mx-auto">
                We’re a team of designers, developers, and marketers who deliver
                end-to-end digital solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
                {services.map(({ title, description, icon: Icon }, index) => (
                <div key={index} className="flex flex-col w-2/3 items-start transition-transform duration-300 hover:scale-110">
                    <Icon className="w-8 h-8 mb-4 text-rose-600" />
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-md text-gray-600">{description}</p>
                </div>
                ))}
            </div>
        </section>
        
        {/* Process */}
        <section className="bg-white text-black py-16 px-6 md:px-20">
            <div className="text-center mb-14">
                <h2 className="text-4xl md:text-5xl text-gray-800 font-extrabold relative inline-block">
                Our Process
                <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
                </h2>
                <p className="mt-4 text-gray-500 text-2xl max-w-full mx-auto">
                Work with groundbreakers who create top-notch mobile and web apps on time & on budget.
                </p>
            </div>

            {/* Cards */}
            <div
                className="flex justify-center flex-wrap md:flex-nowrap mx-auto mb-16"
                onMouseLeave={() => setHoveredIndex(null)} // reset on leave
            >
                {steps.map((step, index) => {
                const isHovered = hoveredIndex === index;
                const isStep1AndNotHovering = index === 0 && hoveredIndex === null;
                const isActive = isHovered || isStep1AndNotHovering;

                return (
                    <motion.div
                    key={index}
                    className="relative flex flex-col items-start justify-start border border-gray-200 rounded overflow-hidden shadow-md bg-white transition-all duration-500"
                    onMouseEnter={() => setHoveredIndex(index)}
                    animate={{ width: isActive ? 280 : 140 }}
                    initial={{ width: index === 0 ? 280 : 140 }}
                    style={{ height: 240 }}
                    >
                    {/* Step Number */}
                    <div className="px-3 w-1/2 text-center text-2xl font-bold mt-4 text-gray-900">
                        {step.id}
                    </div>

                    {/* Title */}
                    <div className="w-1/2 text-center mt-6 px-2 font-semibold text-gray-800">
                        {step.title}
                    </div>

                    {/* Description */}
                    <motion.div
                        className="absolute top-0 left-[140px] h-full px-4 py-6 flex flex-col gap-4 items-center justify-center border-l-4 border-rose-500 text-sm text-gray-600 w-[140px]"
                        initial={{ opacity: index === 0 ? 1 : 0 }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                        {/* Icon + Description */}
                        <div className="flex flex-col items-center justify-center gap-2">
                            <step.icon className="w-10 h-10 text-rose-500" />
                        </div>
                        <p className="text-sm">{step.description}</p>
                    </motion.div>
                    </motion.div>
                );
                })}
            </div>
        </section>
        
        {/* Trust */}
        <section className="py-8 bg-gray-50 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <div className="text-center text-gray-800 mb-14">
                <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block">
                    Your Mobile App, In Trusted Hands
                    <div className="w-16 h-1 bg-rose-500 mx-auto mt-4"></div>
                </h2>
                <p className="mt-4 text-gray-500 text-2xl max-w-full mx-auto">
                    We treat your project like our own. As a team of passionate tech experts, we bring not only skill but genuine care to every stage of development.
                </p>
                </div>

                <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                >
                {features.map((item, idx) => (
                    <motion.div
                    key={idx}
                    variants={cardVariants}
                    className="group flex flex-col items-center p-6 rounded-md shadow-sm border transition-all duration-300 bg-white text-gray-800 hover:bg-gray-600 hover:text-white"
                    >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-rose-200 group-hover:bg-white transition-colors duration-300">
                        {item.icon}
                        </div>
                        <h4 className="font-semibold text-md">{item.title}</h4>
                    </div>
                    <p className="text-sm">{item.desc}</p>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
        
        {/* CTA */}
        <section className="bg-white py-8 px-6 md:px-20 text-center text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
                Let's build something amazing together. Reach out today and take the first step toward digital success.
            </p>
            <button
                className="bg-gray-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-rose-700 hover:scale-105 transition-transform duration-300"
                onClick={() => window.location.href = "/contact"}
            >
                Get In Touch
            </button>
        </section>
    </div>
  );
};

export default MobileDev;
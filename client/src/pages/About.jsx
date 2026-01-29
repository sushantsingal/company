import { motion } from "framer-motion";
import { TrendingUp, Linkedin, Brain,Users,Layers,Cpu,Handshake,ChevronLeft, ChevronRight } from "lucide-react";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import team4 from "../assets/team4.jpeg";
import about from "../assets/about.jpg";
import focus from "../assets/focus.jpg";
import { useRef, useEffect } from "react";
import { setSEO } from "../utils/seo";

const teamMembers = [
    {
      name: "Krishna K. Saini",
      role: "Founder & CEO",
      img: team1,
      linkedin: "https://www.linkedin.com/in/krishna-saini-global/",
    },
    {
      name: "Suvinay Mathur",
      role: "Global Partnership Specialist",
      img: team2,
      linkedin: "https://www.linkedin.com/in/suvinaymathur/",
    },
    {
      name: "Bhanu Priya",
      role: "Digital Marketing Manager",
      img: team3,
      linkedin: "https://www.linkedin.com/in/bhanupriya-singal/",
    },
    {
      name: "Divanshu Saini",
      role: "Growth & Marketing Executive",
      img: team4,
      linkedin: "https://www.linkedin.com/in/divanshu-saini-25a106322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

const why = [
              {
                title: "Vision & Intelligent Thinking",
                desc: "We begin with strategic thinking, AI-driven insight, and creative storytelling to design growth that is purposeful, relevant, and built to perform.",
                icon: <Brain className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Experience & Growth Perspective",
                desc: "Our work across diverse industries, platforms, and evolving technologies gives us the perspective to understand what works, what doesn’t, and what’s coming next.",
                icon: <Users className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Measurable, Scalable Growth",
                desc: "Results aren’t just numbers, they’re progress. Our approach has delivered scalable impact, clear outcomes, and long-term growth for 100+ brands.",
                icon: <TrendingUp className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Integrated Growth Capabilities",
                desc: "We operate across marketing, technology, digital experiences, and events. Bringing everything together into a single connected growth ecosystem.",
                icon: <Layers className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Technology-Enabled Execution",
                desc: "We leverage modern technologies, intelligent automation, and performance intelligence to inform decisions, optimize execution, and drive smarter growth.",
                icon: <Cpu className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Client-Centric Approach",
                desc: "Your vision leads the way. We collaborate closely, think alongside you, and align every initiative with your goals, because meaningful growth is built together, not outsourced.",
                icon: <Handshake className="text-pink-600 w-8 h-8 mb-4" />,
              },
            ]

const About = () => {
  useEffect(() => {
      setSEO({
        title: "Marketing Crawlers | About Us",
        description:
          "AI-driven digital marketing & IT agency with a vision for intelligent growth. Marketing Crawlers deliver scalable, integrated, and client-centric solutions.",
        canonical: "https://www.marketingcrawlers.com/about",
      });
    }, []);

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

// useEffect(() => {
//   const scrollSpeed = 2;
//   const stepTime = 3;

//   const scrollElement = scrollRef.current;

//   const auto = () => {
//     if(!scrollElement) return;

//     const { scrollLeft, scrollWidth, clientWidth } = scrollElement;

//       if(scrollLeft + clientWidth >= scrollWidth - scrollSpeed){
//         scrollElement.scrollTo({left:0, behavior: "smooth"});
//       } else {
//         scrollElement.scrollBy({left: scrollSpeed, behavior: "auto",});
//       }
//     };

//     const interval = setInterval(auto, stepTime)
//   return ()=> clearInterval(interval);
// }, []);

  return (
    <div className="text-gray-800">
      {/* Page Banner */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-10 text-center px-4">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          custom={1}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
        >
          We market brands. Architect growth. Frame strategies.
        </motion.p>
      </section>

      {/* Company Story */}
      <section className="py-10 px-4 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-3xl font-bold mb-6">Who Are We ?</h2>
            <p className="text-gray-700 leading-relaxed">
              <b>Marketing Crawlers</b> is a growth-focused company built for an AI-driven, fast-evolving digital world.
            </p><br></br>
            <p className="text-gray-700 leading-relaxed">
              We don’t operate as a traditional IT or digital firm. We connect with brands to design intelligent digital experiences that blend strategy, creativity, and emerging technology to drive real, measurable growth.
            </p><br></br>
            <p className="text-gray-700 leading-relaxed">
              From brand identity and experience design to intelligent websites, applications, and performance ecosystems. Our work is engineered to do more than exist online. It is built to learn, adapt, and perform new ideas.
            </p><br></br>
            <p className="text-gray-700 leading-relaxed">
              We help products move from being one of many options to becoming a brand. We don’t chase trends. We analyze data, understand behavior, and transform intelligence into foresight, anticipating what’s next.
            </p><br></br>
            <p className="text-gray-700 leading-relaxed">
              At Marketing Crawlers, growth is powered by intelligence, ethics, and systems designed for long-term impact.
            </p>
          </motion.div>
          <motion.img
            src={about}
            alt="Team working together"
            className="rounded-xl shadow-md"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          />
        </div>
      </section>

      {/* Meet the Team Carousel */}
      <section className="bg-white py-10 px-4 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 className="text-3xl font-bold mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}>
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
           Our team is a collective of strategic thinkers and creative minds working together to turn ideas into intelligent execution and vision into measurable growth.
          </motion.p>

          <div className="relative">
            <div className="flex justify-end gap-4 mb-6">
              <button onClick={() => scroll('left')} className="p-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll('right')} className="p-2 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700">
                <ChevronRight size={20} />
              </button>
            </div>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide py-4" style={{ scrollBehavior: "smooth"}}>
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  className="group relative min-w-[280px] bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition pt-4"
                  initial="hidden"
                  whileInView="visible"
                  custom={i + 1}
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  <img src={member.img} alt={member.name} className="w-36 h-auto mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                  <div className="absolute inset-0 bg-white bg-opacity-60 rounded-xl flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer">
                    <div className="flex gap-4 mt-2">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <Linkedin size={40} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Percentage Graph Section */}
      <section className="bg-gray-50 py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src={focus}
            alt="Focus areas graph"
            className="rounded-xl shadow-md"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          />
          <div className="space-y-6">
            <motion.h2
              className="text-3xl font-bold"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
              }}
            >Enhanced Efficiency, Exceptional Outcomes
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
             We turn complex challenges into clear, measurable growth by combining strategy, technology, and intelligence.
            </motion.p>
            {[{ label: "Creative Strategy", value: 90 },
              { label: "Tech Development", value: 80 },
              { label: "Digital Marketing", value: 85 }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                custom={i + 1}
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm font-medium text-gray-700">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-pink-600 h-3 rounded-full"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Why Choose Marketing Crawlers?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {why.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                initial="hidden"
                whileInView="visible"
                custom={i + 1}
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
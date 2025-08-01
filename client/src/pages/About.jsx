import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, DollarSign, Mail, Phone, Linkedin, Instagram, Brain,Users,Layers,Cpu,Handshake,ChevronLeft, ChevronRight } from "lucide-react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";
import team6 from "../assets/team6.jpg";
import about from "../assets/about.jpg";
import focus from "../assets/focus.jpg";
import { useEffect, useRef } from "react";

const teamMembers = [
    {
      name: "Krishna Saini",
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
      name: "Vikas Kumawat",
      role: "Project Head cum Business Developer",
      img: team3,
      linkedin: "https://www.linkedin.com/in/vikas-kumawat-326884a3/",
    },
    // {
    //   name: "Priya Kapoor",
    //   role: "Content Head",
    //   img: team4,
    //   linkedin: "https://www.linkedin.com/in/krishna-saini-global/",
    // },
  ];

const About = () => {
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
          We’re a passionate team driving brands forward with strategy, creativity, and technology.
        </motion.p>
      </section>

      {/* Focus Points */}
      {/* <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          {[{
              title: "Brand Awareness",
              desc: "Creating a unique digital identity that your customers remember.",
              icon: <Lightbulb className="mx-auto h-16 w-16 text-pink-600" />,
            },
            {
              title: "Brand Growth",
              desc: "Deploying strategies that scale your business across platforms.",
              icon: <TrendingUp className="mx-auto h-16 w-16 text-blue-600" />,
            },
            {
              title: "Brand Profit",
              desc: "Focusing on ROI-driven marketing that delivers real results.",
              icon: <DollarSign className="mx-auto h-16 w-16 text-green-600" />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="space-y-4"
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
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Company Story */}
      <section className="py-10 px-6 md:px-20 bg-gray-50">
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
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              At <b>Marketing Crawlers</b>, a <b>multi-award-winning digital marketing agency</b>, we specialize in building performance-driven campaigns, offering transparency and cost-effective digital solutions to mission-driven businesses worldwide.
            </p><br></br>
            <p className="text-gray-700 leading-relaxed">
              From <b>web development, SEO services</b>, and <b>custom ad campaigns</b> to <b>Google and Facebook Ads</b>, we craft digital journeys that transform businesses. Our tailored marketing strategies have empowered startups and global enterprises alike to achieve measurable success in their digital transformation.
            </p><br></br>
            <p className="text-gray-700 leading-relaxed">
              Contact us today to experience the power of ethical and data-driven marketing solutions.
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
      <section className="bg-white py-10 px-6 md:px-20">
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
            Our team consists of creative thinkers, problem solvers, and experienced professionals who bring their best every day to help your brand thrive. From strategic planning to flawless execution, every member plays a key role in our success.
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
                  <img src={member.img} alt={member.name} className="w-28 h-auto mx-auto rounded-full mb-4" />
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                  {/* <p className="text-gray-600 text-sm mb-4">{member.desc}</p> */}
                  <div className="absolute inset-0 bg-white bg-opacity-60 rounded-xl flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer">
                    {/* <p className="mb-2 text-sm text-grey-700 flex items-center gap-2 hover:text-pink-600"><Mail size={16} /> {member.email}</p>
                    <p className="mb-2 text-sm text-gray-700 flex items-center gap-2 hover:text-pink-600"><Phone size={16} /> {member.phone}</p> */}
                    <div className="flex gap-4 mt-2">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        <Linkedin size={40} />
                      </a>
                      {/* <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                        <Instagram size={20} />
                      </a> */}
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
             Empowering our clients with systems that maximize productivity and performance. We turn complex challenges into scalable, impactful solutions.
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
            {[
              {
                title: "Creative & Strategic",
                desc: "We combine imaginative storytelling with data-backed strategies to deliver campaigns that resonate and convert.",
                icon: <Brain className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Experienced Team",
                desc: "With over a decade of hands-on experience across diverse industries, our team understands what works and what doesn’t—so your brand doesn’t have to learn the hard way.",
                icon: <Users className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Proven Results",
                desc: "100+ brands have scaled their business with our performance-driven solutions. We let our track record speak for itself.",
                icon: <TrendingUp className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Full-Service Capabilities",
                desc: "From branding and digital marketing to development and automation—we offer end-to-end services to cover your complete growth journey.",
                icon: <Layers className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Tech-Enabled Execution",
                desc: "We leverage the latest technologies, automation tools, and performance dashboards to ensure precision and transparency.",
                icon: <Cpu className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Client-Centric Approach",
                desc: "Your vision is at the core of what we do. We work closely with you to align strategies with your goals and KPIs.",
                icon: <Handshake className="text-pink-600 w-8 h-8 mb-4" />,
              },
            ].map((item, i) => (
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
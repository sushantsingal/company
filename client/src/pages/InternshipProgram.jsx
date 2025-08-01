import { motion } from "framer-motion";
import { GiSprint } from "react-icons/gi";
import { GraduationCap, Brain, BadgeCheck, Users, Earth, Clock, Cpu, ClipboardCheck, Award } from "lucide-react";
import Internship from "../assets/internship.jpg";
import InternshipBanner from "../assets/internship-program.jpg";

const InternshipProgram = () => {
  return (
    <div className="bg-white text-gray-800">
      <div className="bg-gradient-to-r from-purple-700 to-pink-500 py-24 text-center">
            <h1 className="text-white text-5xl md:text-7xl font-extrabold">Internship Program</h1>
          </div>
      <div className="py-16 px-4 md:px-20">
        <div className="grid gap-20 md:grid-cols-2 py-6">
          <div>
              <img
                src={Internship}
                alt="Internship Program"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
          </div>
          <div className="text-center">
            {/* Intro */}
            <h1 className="text-black py-6">Join Our  Internship Program</h1>
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-4">
              At Marketing Crawlers, internships aren’t just about experience — we create launchpads for Next-generation leaders. Whether you’re into tech, marketing, design, or devops, we offer real projects, real teams, and real outcomes. You’ll build, create, and grow in a space that values fresh ideas and fearless thinking.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
            This is more than a learning opportunity — it’s your launchpad. With mentorship, hands-on work, and exposure across industries, you’ll shape your future (and maybe ours too). Ready to kickstart your career? Let’s build something meaningful — together.
            </p>

            <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-btwcxDOk0AAt4xBdYEE4FkFxIirT1KOqFmopEIPJsgj6wQ/viewform?usp=sharing&ouid=112648620577953336544"
            target="blank"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition"
          >
            Apply Now
          </a>
          </div>
        </div>

        {/* What You'll Gain */}
        <div className="my-16">
          <h2 className="text-5xl font-bold text-center text-pink-600 mb-8">What You'll Gain</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Real-World Experience",
                desc: "Work on live Martech projects that impact actual businesses. No mock tasks — just real campaigns, real data, and real outcomes.",
                icon: <Earth className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Future-Ready Skills",
                desc: "Get hands-on with industry tools like CRMs, marketing automation, APIs, data pipelines, and web technologies. Learn what's used today.",
                icon: <GiSprint className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Mentorship That Matters",
                desc: "Learn directly from experienced tech leads, digital strategists, and engineers who’ll guide you, support you, and challenge you to grow.",
                icon: <GraduationCap className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Cross-Functional Exposure",
                desc: "Get to collaborate with marketing, design, and analytics teams — understanding how integrated Martech solutions are crafted and delivered.",
                icon: <Users className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Innovation & Problem-Solving",
                desc: "Bring your ideas to the table. From creative brainstorming to testing real solutions, you’ll help drive innovation, not just observe it.",
                icon: <Brain className="text-pink-600 w-8 h-8 mb-4" />,
              },
              {
                title: "Career Acceleration",
                desc: "High performers don’t leave empty-handed — they leave with portfolios, referrals, freelance gigs, and even full-time job offers.",
                icon: <BadgeCheck className="text-pink-600 w-8 h-8 mb-4" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
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

        {/* Program Highlights */}
        {/* <div className="mb-20">
          <h2 className="text-2xl font-semibold text-pink-600 mb-6 text-center">Program Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[{
              icon: <Clock className="text-pink-600 w-6 h-6" />,
              title: "Flexible Timing",
              desc: "Schedule that suits your availability—learn alongside your studies or job."
            }, {
              icon: <Cpu className="text-pink-600 w-6 h-6" />,
              title: "Hands-On Learning",
              desc: "Experience the tools, strategies, and challenges professionals face."
            }, {
              icon: <ClipboardCheck className="text-pink-600 w-6 h-6" />,
              title: "Weekly Assignments",
              desc: "Interactive tasks with feedback to track your growth every week."
            }, {
              icon: <Award className="text-pink-600 w-6 h-6" />,
              title: "Completion Certificate",
              desc: "Showcase your achievement with a professional certificate."
            }].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex gap-4 hover:shadow-lg transition"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className="bg-pink-100 p-8 rounded-xl text-center max-w-3xl mx-auto shadow-inner">
          <h2 className="text-xl sm:text-2xl font-bold text-pink-700 mb-3">Launch Your Career With Confidence</h2>
          <p className="text-gray-700 text-base mb-5">
            Don’t miss this opportunity to build your skills and break into the digital world. Limited seats only!
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-btwcxDOk0AAt4xBdYEE4FkFxIirT1KOqFmopEIPJsgj6wQ/viewform?usp=sharing&ouid=112648620577953336544"
            target="blank"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternshipProgram;

import { motion } from "framer-motion";
import logo from "../assets/dc.png";
import { BsInstagram } from "react-icons/bs";
import { GiShuttlecock, GiEightBall, GiVolleyballBall, GiCoffeeCup, GiMountains, GiCricketBat } from "react-icons/gi";
import img1 from "../assets/dreams/dc1.jpg";
import img2 from "../assets/dreams/dc2.png";
import img3 from "../assets/dreams/dc3.png";
import img4 from "../assets/dreams/dc4.jpg";
import img5 from "../assets/dreams/dc5.png";
import img6 from "../assets/dreams/dc6.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const DreamChasers = () => {
  return (
    <div className="text-black bg-white font-sans">
      <section className="relative w-full bg-white overflow-hidden py-16">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
          
          {/* Left Side Visuals */}
          <div className="hidden md:flex flex-col items-end space-y-6">
            {[img1, img2].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`left-${i}`}
                className="w-48 h-52 object-cover skew-y-6 transform shadow-md rounded"
              />
            ))}
          </div>
          <div className="hidden md:flex flex-col items-center space-y-6 px-4">
            {[img3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`left-${i}`}
                className="w-48 h-52 object-cover skew-y-6 transform shadow-md rounded"
              />
            ))}
          </div>

          {/* Center Content */}
          <div className="text-center max-w-2xl px-4">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto my-6 w-full h-80 object-contain"
            />
            <p className="text-lg text-gray-700 leading-relaxed">
              Dream Chasers is an exclusive community crafted for CEOs, founders, visionaries, and dreamers — who seek more than just boardroom wins.
            </p>
          </div>

          {/* Right Side Visuals */}
          <div className="hidden md:flex flex-col items-center space-y-6 px-4">
            {[img6].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`right-${i}`}
                className="w-48 h-52 object-cover -skew-y-6 transform shadow-md rounded"
              />
            ))}
          </div>
          <div className="hidden md:flex flex-col items-start space-y-6">
            {[img4, img5].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`right-${i}`}
                className="w-48 h-52 object-cover -skew-y-6 transform shadow-md rounded"
              />
            ))}
          </div>
        </div>
      </section>
       {/* Content */}
      <section className="flex justify-center">
        <div className="relative z-10 max-w-5xl px-6">
          <p className="mt-6 font-semibold text-lg md:text-2xl max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores corrupti dolor aperiam, ab amet beatae, veritatis qui dolorem quisquam officia ex et incidunt minima ipsam nam fuga pariatur nulla laboriosam.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white text-gray-700 py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto pb-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">Explore What We Do</h2>
          <p>At Dream Chasers, we believe real conversations and strong connections happen when we step away from the ordinary. That’s why we host carefully curated experiences that blend fun, fitness, and fellowship.</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cricket: Weekend Warriors",
              desc: "Uniting dreamers with powerful strokes and winning spirits",
              icon: GiCricketBat,
            },
            {
              title: "Badminton: Smash Mode On",
              desc: "From friendly smashes to fierce competition — we play it all",
              icon: GiShuttlecock,
            },
            {
              title: "Billiards: Chalk. Aim. Fire.",
              desc: "Precision, patience, and perfect angles — all in good company",
              icon: GiEightBall,
            },
            {
              title: "Volleyball: Net Vibes Only",
              desc: "High-fives, high jumps, and unforgettable rallies",
              icon: GiVolleyballBall,
            },
            {
              title: "The Dream Lounge",
              desc: "Celebrate milestones, share visions, and grow stronger — together",
              icon: GiCoffeeCup,
            },
            {
              title: "Trekking: Wander & Warrior",
              desc: "Adventure isn’t just a destination, it’s a shared experience",
              icon: GiMountains,
            },
          ].map((item, i) =>{
            const Icon = item.icon;
            return(
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-gray-600 hover:shadow-md transition"
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              variants={fadeUp}
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className="w-8 h-8 text-black" />
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
            );
          })}
        </div>
        <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}>
        <div className="flex justify-center pt-8">
          <a
            href="https://www.instagram.com/_celebsnow/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 text-xl text-white font-semibold rounded-md transition-all duration-300 bg-black hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white"
          >
            <BsInstagram className="text-xl" />
            Follow Us
          </a>
        </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DreamChasers;
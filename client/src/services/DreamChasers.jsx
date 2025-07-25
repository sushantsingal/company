import { motion } from "framer-motion";
import CTA from "../components/CTA";
import event from "../assets/partner1.png";
import { GiShuttlecock, GiEightBall, GiVolleyballBall, GiCoffeeCup, GiMountains, GiCricketBat } from "react-icons/gi";
import about from "../assets/dream-chasers.jpg";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const EventConsulting = () => {
  return (
    <div className="text-gray-800">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#2563eb] to-[#db2777] text-white py-16 text-center px-4">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Dream Chasers
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Join us on a journey that blends leadership with lifestyle.
        </motion.p>
      </section>

      {/* Graphic Description Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-4xl font-bold text-gray-800 text-center">
              Welcome to Dream Chasers
            </h2>
            <p className="text-gray-600 text-lg">
              Dream Chasers is an exclusive community of high-performing individuals—CEOs, MDs, Founders, and change-makers—who believe in the power of connection, collaboration, and purposeful living. We bring leaders together not just for business, but for life-enriching experiences that build stronger bonds and better futures.
            </p>
            {/* <h2 className="text-2xl font-bold">Who We Are</h2> */}
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>At Dream Chasers, we understand that true leadership extends beyond boardrooms and bottom lines. That's why we bring together exceptional minds not just to exchange ideas, but to share unforgettable experiences—ones that nurture the soul, spark inspiration, and foster lasting relationships.</li>
              <li>
Whether it’s a retreat in nature, a mastermind session with thought leaders, or a curated lifestyle experience, everything we do is designed to elevate both personal growth and collective impact. Here, business meets balance. Strategy meets soul. And ambition meets alignment.</li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <img
              src= {event}
              alt="Event Graphic"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

            {/* Left Image */}
            <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <img
              src= {about}
              alt="Event Graphic"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
          
          {/* Right Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-4xl font-bold text-gray-800 text-center">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg">Dream Chasers is more than a network—it’s a movement.</p>
            <ul className="list-inside space-y-6 text-gray-700 list-none">
              <li>We are a curated community of visionaries from across industries who understand that growth isn’t just about numbers—it’s about people, purpose, and perspective.</li>
              <li>We bring together inspiring professionals to share experiences, spark meaningful conversations, and foster lasting relationships through curated activities, immersive events, and vibrant gatherings.</li>
              <li>Whether you’re a founder, an executive, or a passionate leader—if you believe in dreaming big and building together, you belong here.</li>
            </ul>
            <div className="text-center pt-8"><a 
            href="/contact"
            className=" px-6 py-3 bg-pink-500 text-white text-center font-semibold rounded-lg hover:bg-pink-700 hover:text-white"
          >
            Join Our Community
          </a></div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto pb-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Explore What We Do</h2>
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
              className="bg-white p-6 rounded-xl shadow hover:shadow-pink-600 hover:shadow-md transition"
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              variants={fadeUp}
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className="w-8 h-8 text-pink-600" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.desc}</p>
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
        <div className="text-center pt-8"><a 
            href="/contact"
            className=" px-6 py-3 bg-pink-500 text-white text-center font-semibold rounded-lg hover:bg-pink-700 hover:text-white"
          >
            Join Our Community
          </a></div>
        </motion.div>
      </section>
    </div>
  );
};

export default EventConsulting;
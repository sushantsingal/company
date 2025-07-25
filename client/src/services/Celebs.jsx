import { motion } from "framer-motion";
import CTA from "../components/CTA";
import event from "../assets/celebs.jpg";
import { GiMicrophone, GiNewspaper } from "react-icons/gi";
import { BsCameraReelsFill, BsCameraFill, BsHearts, BsInstagram } from "react-icons/bs";


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
          Celebs Now
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Where Fame Meets the Frame
        </motion.p>
      </section>

      {/* Image Only */}
        <section className="w-full">
            <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            >
                <img
                src={event}
                alt="Event Graphic"
                className="w-screen h-auto object-cover block"
                />
            </motion.div>
        </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto pb-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Explore What We Do</h2>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Celebrity Interviews: Star Talks",
              desc: "Where celebs speak, and you hear the story behind the stardom.",
              icon: GiMicrophone,
            },
            {
              title: "Reels & Short: Flicks of Fame",
              desc: "Trending moments, viral smiles, and stardust-packed edits",
              icon: BsCameraReelsFill,
            },
            {
              title: "News & Buzz: Bollywood Buzz",
              desc: "News you actually care about — served with style and spice",
              icon: GiNewspaper,
            },
            {
              title: "Behind The Scenes: Off-Camera Vibes",
              desc: "Catch the candid, the goofy, and the unexpected",
              icon: BsCameraFill,
            },
            {
              title: "Instagram Features / Fan Reactions: Fan Faves",
              desc: "Trending reels, fan edits, and viral celeb drops",
              icon: BsHearts,
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
        <div className="flex justify-center pt-8"><a 
            href="https://www.instagram.com/_celebsnow/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-white font-semibold rounded-md transition-all duration-300
               bg-pink-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white"
          >
            <BsInstagram className="text-base" />
            Join Our Now
          </a></div>
        </motion.div>
      </section>
    </div>
  );
};

export default EventConsulting;
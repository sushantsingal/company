import { motion } from "framer-motion";
import { GiMicrophone, GiNewspaper } from "react-icons/gi";
import { BsCameraReelsFill, BsCameraFill, BsHearts, BsInstagram } from "react-icons/bs";
import PhotographerFloat from "../components/PhotographerFloat";
import logo from "../assets/celebsnow.jpg";
import img1 from "../assets/celeb/celeb6.jpg";
import img2 from "../assets/celeb/celeb5.jpg";
import img3 from "../assets/celeb/celeb2.jpg";
import img4 from "../assets/celeb/celeb3.jpg";
import img5 from "../assets/celeb/celeb4.jpg";
import img6 from "../assets/celeb/celeb1.jpg";
import img7 from "../assets/celeb/celeb7.jpg";
import img8 from "../assets/celeb/celeb8.jpg";

const celebs = [
  { src: img1, height: "h-72" },
  { src: img2, height: "h-64" },
  { src: img3, height: "h-80" },
  { src: img4, height: "h-72" },
  { src: img5, height: "h-64" },
  { src: img6, height: "h-80" },
  { src: img7, height: "h-72" },
  { src: img8, height: "h-64" },
];

const CelebrityLandingPage = () => {
  return (
    <div className="font-sans text-red-500 bg-white">
      {/* Hero Section */}
      <section className="bg-white py-8 text-center">
        <div className="flex flex-col items-center gap-10">

          {/* Main horizontal row */}
          <div className="flex flex-row items-center justify-center gap-6 flex-wrap">

            {/* Left 4 celebs */}
            <div className="hidden md:flex gap-4">
              {celebs.slice(0, 4).map((celeb, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden w-[80px] md:w-[100px] ${celeb.height} transition-all duration-300 transform hover:scale-110`}
                  style={{
                    clipPath: "polygon(0% 8%, 100% 0%, 100% 85%, 0% 100%)",
                  }}
                >
                  <img
                    src={celeb.src}
                    alt={`celeb-${index}`}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Center logo + heading + text */}
            <div className="flex flex-col items-center max-w-md px-4">
              <h1 className="text-5xl font-bold mb-2">
                <span className="text-red-500">Celebs</span>
                <span className="text-gray-700">Now</span>
              </h1>
              <img
                src={logo}
                alt="Company Logo"
                className="h-36 mx-auto rounded-full shadow-lg mb-4"
              />
              <p className="text-lg text-gray-700">
                From red carpet rumors to real-time Insta Lives — stay in the loop with the latest celebrity gossip, entertainment news, and exclusive star interviews.
              </p>
            </div>

            {/* Right 4 celebs */}
            <div className="flex gap-4">
              {(celebs.slice(4)).map((celeb, index) => (
                <div
                  key={index + 4}
                  className={`relative overflow-hidden w-[70px] md:w-[100px] ${celeb.height} transition-all duration-300 transform hover:scale-110`}
                  style={{
                    clipPath: "polygon(0% 8%, 100% 0%, 100% 85%, 0% 100%)",
                  }}
                >
                  <img
                    src={celeb.src}
                    alt={`celeb-${index + 4}`}
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Star of the Week */}
      {/* <section className="bg-white py-16 relative overflow-hidden">
        <h2 className="text-red-500 text-4xl font-bold text-center mb-10">
          Celebrity Brand Shoutouts
        </h2>

        <div className="flex justify-center items-end gap-2 flex-wrap max-w-[1200px] mx-auto px-6">
          {celebs.map((celeb, index) => (
            <div
              key={index}
              className={`relative overflow-hidden w-[80px] md:w-[130px] ${celeb.height} transition-all duration-300 transform hover:scale-125 hover:z-10`}
              style={{
                clipPath: "polygon(0% 8%, 100% 0%, 100% 85%, 0% 100%)",
              }}
            >
              <img
                src={celeb.src}
                alt={`celeb-${index}`}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section> */}


      {/* Quote */}
      <section className="bg-white py-6">
        <p className="text-center italic text-red-500 text-lg font-medium">
          “You don’t need a red carpet to shine. Just a camera and some love.” – 
          <span className="text-red-500 font-bold"> Celebs</span>
          <span className="text-gray-700 font-bold">Now</span>
        </p>
      </section>

      {/* What we Do */}
      <section className="bg-white py-12 px-6 md:px-20">
        <div className="max-w-5xl mx-auto pb-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-700">Explore What We Do</h2>
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
              className="bg-white p-6 rounded-xl shadow hover:shadow-gray-700 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <Icon className="w-8 h-8 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              </div>
              <p className="text-red-500">{item.desc}</p>
            </motion.div>
            );
          })}
        </div>
        <div className="flex justify-center pt-8"><a 
            href="https://www.instagram.com/_celebsnow/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 text-xl text-red-500 font-semibold rounded-md transition-all duration-300
               bg-gray-700 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white"
          >
            <BsInstagram className="text-xl" />
            Follow Us
          </a></div>
      </section>
    </div>
  );
};

export default CelebrityLandingPage;

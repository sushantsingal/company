import { useRef } from "react";
import { motion } from "framer-motion";
import test from "../assets/team5.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan (USA)",
    designation: "Startup Founder",
    title: "Unrivalled",
    feedback:
      "Marketing Crawlers gets startup hustle. Fast strategy, clean execution, real growth. No fluff, only results.",
    image: test,
  },
  {
    name: "Daniel Wright (UK)",
    designation: "Tech Product Manager",
    title: "Indeed the Best!!",
    feedback:
      "They understand tech + marketing perfectly. Smart targeting, strong creatives, and performance that actually scales.",
    image: test,
  },
  {
    name: "Sophia Martinez (Spain)",
    designation: "Event Curator",
    title: "Incredible !!",
    feedback:
      "Our event buzz exploded online. From pre-launch to post-event hype, Marketing Crawlers nailed every touchpoint.",
    image: test,
  },
  {
    name: "Aisha Khan (UAE)",
    designation: "Education Consultant",
    title: "Amazing Work",
    feedback:
      "They simplified digital marketing for our institution and boosted enrollments organically and through ads. Super smooth collaboration.",
    image: test,
  },
  {
    name: "Michael Chen (Singapore)",
    designation: "Healthcare Operations Lead",
    title: "Amazing Work",
    feedback:
      "Professional, compliant, and growth-focused. Marketing Crawlers helped us build trust while increasing patient inquiries.",
    image: test,
  },
];

export default function Testimonials() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320; // width of each card + gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">
          Hear It from Them
        </h2>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-pink-600 text-white p-2 rounded-full shadow-md z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Container (no manual scroll) */}
        <div
          ref={carouselRef}
          className="flex gap-24 overflow-hidden scroll-smooth px-12 select-none"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center relative min-w-[20rem] min-h-[22rem]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Header Box */}
              {/* <div className="bg-pink-600 text-white text-center rounded-md px-4 py-2 w-full shadow-md">
                <h3 className="font-bold">{t.name}</h3>
                <p className="text-sm">{t.designation}</p>
              </div> */}

              {/* Line */}
              {/* <div className="relative w-px h-14 bg-pink-600 z-10"></div> */}

              {/* Hexagon + Content */}
              <div className="relative flex flex-col min-h-[20rem] items-center">
                {/* Hexagon */}
                <div className="w-28 h-28 relative z-10">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover clip-hex shadow-md"
                  />
                </div>

                {/* Content Box */}
                <div className="bg-white -mt-8 pt-16 h-full rounded-lg shadow-lg text-center relative z-0 w-64 ">
                  <h4 className="font-bold text-lg mb-2 bg-pink-600 text-white">
                    {t.name}
                  </h4>
                  <p className="text-gray-600 p-4 text-sm">{t.feedback}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

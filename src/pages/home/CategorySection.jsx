import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import imgCases from "../../assets/image 14.png";
import imgProtectors from "../../assets/image 14 (1).png";
import imgChargers from "../../assets/image 14 (2).png";
import imgAudio from "../../assets/image 14 (3).png";
import imgPowerBanks from "../../assets/image 14 (4).png";
import imgGadgets from "../../assets/image 14 (5).png";
import { SparklesIcon, ArrowRightIcon } from "../../icons/index.jsx";
import { fadeInUp, staggerContainer } from "../../animations/animation.js";

const categoriesData = [
  {
    id: "cases",
    title: "Phone Cases",
    sub: "Style meets protection.",
    image: imgCases,
    path: "/products?category=cases",
  },
  {
    id: "protectors",
    title: "Screen Protectors",
    sub: "Flawless protection.",
    image: imgProtectors,
    path: "/products?category=screen-protectors",
  },
  {
    id: "chargers",
    title: "Chargers & Cables",
    sub: "Power up faster.",
    image: imgChargers,
    path: "/products?category=charging",
  },
  {
    id: "audio",
    title: "Audio & Earbuds",
    sub: "Sound that moves you.",
    image: imgAudio,
    path: "/products?category=audio",
  },
  {
    id: "powerbanks",
    title: "Power Banks",
    sub: "Power on the go.",
    image: imgPowerBanks,
    path: "/products?category=power-banks",
  },
  {
    id: "gadgets",
    title: "Tech Gadgets",
    sub: "Smart things. Better living.",
    image: imgGadgets,
    path: "/products?category=gadgets",
  },
];

export const CategorySection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1ebff] text-[#6c38ff] text-[11px] font-bold tracking-wider uppercase mb-3">
            <SparklesIcon size={12} className="text-[#6c38ff]" />
            <span>SHOP BY CATEGORY</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-[42px] font-black text-gray-900 tracking-tight leading-tight">
            Find Your Perfect <span className="text-[#6c38ff]">Tech Essential</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-sm sm:text-base text-gray-500 font-normal mt-3">
            Everything you need to protect, power and personalize your devices.
          </motion.p>
        </motion.div>

        {/* 6 Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categoriesData.map((cat) => (
            <motion.div key={cat.id} variants={fadeInUp}>
              <Link
                to={cat.path}
                className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden bg-cover bg-center h-48 sm:h-52 p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundImage: `url("${cat.image}")` }}
              >
                {/* Content Overlay on Left Side */}
                <div className="relative z-10 flex flex-col justify-between h-full max-w-[55%]">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight leading-snug group-hover:text-[#6c38ff] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium mt-1 leading-relaxed">
                      {cat.sub}
                    </p>
                  </div>

                  {/* Circular Action Button with Lucide Animated Arrow (White normally, Purple on hover) */}
                  <div>
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-gray-800 border border-gray-100/80 shadow-xs transition-all duration-300 group-hover:bg-[#6c38ff] group-hover:text-white group-hover:border-[#6c38ff] group-hover:scale-110 group-hover:shadow-md">
                      <ArrowRightIcon size={15} animateOnHover={true} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

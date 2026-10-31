import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import setupBg from "../../assets/e0ea42046c0c86e4102af867317b66bd823276db.png";
import { ArrowRightIcon } from "../../icons/index.jsx";
import { fadeInUp, staggerContainer } from "../../animations/animation.js";

export const SetupBanner = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#FCFAFF]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div
          style={{ backgroundImage: `url(${setupBg})` }}
          className="relative bg-[#f4edff] bg-cover bg-right md:bg-center bg-no-repeat rounded-[20px] sm:rounded-[32px] lg:rounded-[36px] overflow-hidden min-h-[340px] sm:min-h-[440px] lg:min-h-[500px] flex items-center shadow-sm"
        >
          {/* Subtle mobile overlay for crystal-clear readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ede5ff]/95 via-[#ede5ff]/75 to-transparent sm:from-transparent sm:via-transparent sm:to-transparent pointer-events-none" />

          {/* Left Content Area */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative z-10 max-w-lg lg:max-w-xl py-6 px-4 sm:py-12 sm:px-10 lg:py-16 lg:px-14 flex flex-col justify-center items-start"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#6c38ff] tracking-[0.18em] uppercase mb-2.5 sm:mb-4"
            >
              <span>— Technology for your life —</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-4xl lg:text-[54px] font-black text-gray-950 tracking-tight leading-[1.1] mb-2.5 sm:mb-4"
            >
              Your Setup.
              <br />
              <span className="text-[#6c38ff]">Your Style.</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium max-w-xs sm:max-w-md leading-relaxed mb-5 sm:mb-7"
            >
              Find the little upgrades that make a big difference to your everyday tech.
            </motion.p>

            {/* Action Button */}
            <motion.div variants={fadeInUp}>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 sm:gap-3.5 pl-4 sm:pl-7 pr-1.5 sm:pr-2.5 py-1.5 sm:py-2.5 rounded-full bg-[#6c38ff] hover:bg-[#5825eb] text-white text-[11px] sm:text-sm font-semibold shadow-lg shadow-[#6c38ff]/25 transition-all duration-300 hover:scale-105"
              >
                <span>Explore the Collection</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#6c38ff] transition-transform duration-300 group-hover:translate-x-0.5 shadow-xs">
                  <ArrowRightIcon size={14} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SetupBanner;


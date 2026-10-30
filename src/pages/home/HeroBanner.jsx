import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import heroBg from "../../assets/2b60f377ff83ce696a610209fc4f65f12c2bf261.png";
import {
  fadeInUp,
  slideInBottom,
  floatingBadge,
  staggerContainer,
} from "../../animations/animation.js";
import {
  SparklesIcon,
  TruckIcon,
  ShieldCheckIcon,
  RotateCcwIcon,
  HeadphonesIcon,
  ArrowRightIcon,
} from "../../icons/index.jsx";

const avatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
];

const features = [
  {
    icon: <TruckIcon size={20} className="text-[#6c38ff]" />,
    title: "Fast Shipping",
    sub: "On orders over €50",
  },
  {
    icon: <ShieldCheckIcon size={20} className="text-[#6c38ff]" />,
    title: "Secure Payments",
    sub: "Safe and easy checkout",
  },
  {
    icon: <RotateCcwIcon size={20} className="text-[#6c38ff]" />,
    title: "Easy Returns",
    sub: "30-day hassle-free returns",
  },
  {
    icon: <HeadphonesIcon size={20} className="text-[#6c38ff]" />,
    title: "24/7 Support",
    sub: "We're here to help",
  },
];

export const HeroBanner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBg})` }}
      className="relative bg-cover bg-right lg:bg-center bg-fixed bg-no-repeat overflow-hidden pt-10 sm:pt-16 pb-12 sm:pb-20"
    >
      {/* Light gradient overlay for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent lg:from-transparent lg:via-transparent lg:to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[520px] lg:min-h-[580px]">
          {/* Left Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            {/* Pill Tag */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ede5ff]/90 backdrop-blur-xs text-[#6c38ff] text-[11px] sm:text-xs font-bold tracking-wide"
            >
              <SparklesIcon size={14} className="text-[#6c38ff]" />
              <span>PREMIUM EVERYDAY ESSENTIALS</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl lg:text-[56px] font-black text-gray-900 tracking-tight leading-[1.12]"
            >
              Upgrade Your Tech. <br />
              <span className="text-[#6c38ff]">Elevate Your Everyday.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base text-gray-700 lg:text-gray-600 max-w-lg leading-relaxed font-normal"
            >
              Cases, chargers, crystal-clear sound, and smart accessories. Find the perfect match for your devices and your lifestyle.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/products"
                className="group px-6 py-3 rounded-full bg-[#6c38ff] hover:bg-[#5a27eb] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#6c38ff]/25 transition-all flex items-center gap-3 hover:scale-105"
              >
                <span>Shop Now</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#6c38ff] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRightIcon size={13} animateOnHover={true} />
                </span>
              </Link>

              <Link
                to="/products?category=new"
                className="group px-6 py-3 rounded-full bg-white/95 hover:bg-white border border-gray-200 text-gray-900 text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center gap-3 hover:scale-105 backdrop-blur-xs"
              >
                <span>Explore New Arrivals</span>
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRightIcon size={13} animateOnHover={true} />
                </span>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 pt-3">
              <div className="flex -space-x-2.5">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Customer ${i + 1}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
              </div>
              <div>
                <div className="text-sm sm:text-base font-extrabold text-gray-900 leading-none">10K+</div>
                <div className="text-xs text-gray-600 lg:text-gray-500 font-medium mt-0.5">Happy customers</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Badge Space over Background Image */}
          <div className="lg:col-span-6 relative h-48 sm:h-64 lg:h-full flex items-start justify-end">
            <motion.div
              variants={floatingBadge}
              animate="animate"
              className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl shadow-purple-900/10 border border-purple-100 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#6c38ff] text-white flex items-center justify-center shadow-xs shrink-0">
                <ShieldCheckIcon size={16} />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 leading-tight">Trusted Quality</div>
                <div className="text-[10px] text-gray-500">Built for your everyday</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Floating Feature Bar */}
        <motion.div
          variants={slideInBottom}
          initial="hidden"
          animate="visible"
          className="mt-12 sm:mt-16 bg-white/95 backdrop-blur-md rounded-xl shadow-xl shadow-purple-900/5 border border-purple-100 p-4 sm:px-8 sm:py-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {features.map((item, i) => (
              <div key={i} className={`flex items-center gap-3.5 ${i !== 0 ? "pt-3 sm:pt-0 sm:pl-4" : ""}`}>
                <div className="w-10 h-10 rounded-full bg-[#f4efff] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 font-medium">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

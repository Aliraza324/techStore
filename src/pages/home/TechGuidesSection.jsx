import React from "react";
import { Link } from "react-router-dom";
import imgCharger from "../../assets/Product photography (1).png";
import imgCases from "../../assets/Product photography.png";

const articles = [
  {
    id: "guide-1",
    badge: "BUYING GUIDE",
    title: "How to Choose the Right Fast Charger",
    desc: "Understand charging speeds, wattage and compatibility.",
    image: imgCharger,
    link: "/products?category=chargers",
  },
  {
    id: "guide-2",
    badge: "PHONE TIPS",
    title: "Protect Your Phone Without Compromise",
    desc: "Find stylish cases and reliable protection that lasts.",
    image: imgCases,
    link: "/products?category=phone-cases",
  },
];

export const TechGuidesSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FCFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#f4efff] text-[#6c38ff] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2">
            <span className="font-extrabold text-[12px]">#</span>
            <span>HELPFUL TIPS & BUYING GUIDES</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-gray-950 tracking-tight leading-tight">
            Get More From <span className="text-[#6c38ff]">Your Tech</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 max-w-md mx-auto">
            Helpful tips, practical guides and advice to make smarter accessory choices.
          </p>
        </div>

        {/* 2-Column Article Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] sm:rounded-[36px] border border-gray-100 shadow-xs hover:shadow-xl hover:shadow-purple-900/8 transition-all duration-300 relative overflow-hidden min-h-[320px] sm:min-h-[350px] lg:min-h-[370px] flex flex-col justify-between group hover:-translate-y-1 p-7 sm:p-9 lg:p-11"
            >
              {/* Left Content Area (Matches Figma layout, margins, and typography) */}
              <div className="relative z-10 max-w-[50%] sm:max-w-[48%] flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-[#f4efff] text-[#6c38ff] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-5 sm:mb-6">
                    {item.badge}
                  </span>
                  <h3 className="text-xl sm:text-[28px] lg:text-[32px] text-gray-950 tracking-tight leading-[1.2] mb-3 sm:mb-4 group-hover:text-[#6c38ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-gray-500 font-normal leading-relaxed max-w-[280px]">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 sm:mt-10">
                  <Link
                    to={item.link}
                    className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#6c38ff] hover:bg-[#5825eb] text-white text-xs sm:text-sm font-semibold shadow-xs shadow-[#6c38ff]/25 hover:shadow-md transition-all active:scale-95"
                  >
                    Read Article
                  </Link>
                </div>
              </div>

              {/* Right Side Device 3D Render Image (Flushed to bottom-right corner) */}
              <div className="absolute right-0 bottom-0 top-0 w-[50%] sm:w-[52%] pointer-events-none overflow-hidden flex items-end justify-end z-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGuidesSection;

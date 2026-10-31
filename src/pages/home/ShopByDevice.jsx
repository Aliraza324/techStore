import React from "react";
import { Link } from "react-router-dom";
import imgApple from "../../assets/Device photography (2).png";
import imgSamsung from "../../assets/r.png";
import imgPixel from "../../assets/Device photography (1).png";
import imgTablets from "../../assets/Device photography.png";

const devices = [
  {
    id: "apple",
    title: "Apple iPhone",
    cta: "Shop iPhone Accessories",
    link: "/products?brand=apple",
    image: imgApple,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-900"
      >
        <path d="M12 20.94c1.5 0 2.75-.75 4-.75s2.3.75 3.8.75c1.8 0 3.75-2.2 4.2-3.15-2.2-1.15-2.6-4.1-.3-5.75-.9-2.1-2.9-3.3-4.8-3.3-1.6 0-2.8.9-3.8.9s-2.5-.9-4-.9C8 8.7 5.5 10.4 4.5 13c-1.4 3.7.6 7.94 2.5 7.94 1.1 0 2.2-.7 3.5-.7 1.2 0 2.2.7 3.5.7z" />
        <path d="M14.5 6.5c1-1.3 1.5-2.7 1.5-4.5-1.5.1-3 1-3.8 2.1-.9 1.1-1.4 2.6-1.3 4.2 1.6.1 2.8-.7 3.6-1.8z" />
      </svg>
    ),
  },
  {
    id: "samsung",
    title: "Samsung Galaxy",
    cta: "Shop Samsung Accessories",
    link: "/products?brand=samsung",
    image: imgSamsung,
    icon: (
      <span className="text-[12px] sm:text-[13px] font-black italic tracking-widest text-[#0c4da2]">
        SAMSUNG
      </span>
    ),
  },
  {
    id: "pixel",
    title: "Google Pixel",
    cta: "Shop Pixel Accessories",
    link: "/products?brand=google",
    image: imgPixel,
    icon: (
      <span className="w-5 h-5 flex items-center justify-center text-[#1a73e8] font-black text-lg leading-none">
        G
      </span>
    ),
  },
  {
    id: "tablets",
    title: "Tablets & More",
    cta: "Explore More Accessories",
    link: "/products?category=accessories",
    image: imgTablets,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-900"
      >
        <rect width="16" height="20" x="4" y="2" rx="3" />
        <line x1="12" x2="12.01" y1="18" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export const ShopByDevice = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FCFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#f4efff] text-[#6c38ff] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2">
            <span className="font-extrabold text-[12px]">#</span>
            <span>SHOP BY DEVICE</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-gray-950 tracking-tight leading-tight">
            Find Accessories That Fit <span className="text-[#6c38ff]">Your Device</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 max-w-md">
            Choose your device to discover compatible accessories.
          </p>
        </div>

        {/* 2x2 Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {devices.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="bg-[#F4F0FF] rounded-[24px] sm:rounded-[32px] overflow-hidden relative p-6 sm:p-8 flex flex-col justify-between min-h-[200px] sm:min-h-[230px] group hover:shadow-xl hover:shadow-purple-900/8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Left Text & Brand Icon */}
              <div className="relative z-10 max-w-[55%] flex flex-col justify-between h-full">
                <div>
                  <div className="h-6 flex items-center">{item.icon}</div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-950 mt-4 group-hover:text-[#6c38ff] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 sm:mt-6">
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6c38ff] group-hover:text-[#5825eb] transition-colors">
                    <span>{item.cta}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </div>

              {/* Right Device 3D Render Image */}
              <div className="absolute right-0 bottom-0 top-0 w-1/2 sm:w-[52%] flex items-end justify-end pointer-events-none overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByDevice;

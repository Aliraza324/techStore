import React from "react";
import { StarIcon } from "../../icons/index.jsx";

export const TestimonialCard = ({ item, cardRef, isActive = false }) => {
  return (
    <div
      ref={cardRef}
      className={`w-[270px] sm:w-[330px] lg:w-[340px] shrink-0 bg-white rounded-[24px] sm:rounded-[32px] border transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden min-h-[310px] sm:min-h-[340px] ${
        isActive
          ? "border-purple-200 shadow-xl shadow-purple-900/10 scale-[1.01]"
          : "border-gray-100 shadow-xs opacity-90 sm:opacity-100"
      }`}
    >
      <div>
        {/* Top Row: 5 Stars + Purple Quote Bubble */}
        <div className="flex items-center justify-between">
          <div className="flex text-amber-400 gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <StarIcon key={i} size={16} color="#e5a83b" fill="#e5a83b" />
            ))}
          </div>

          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f4efff] flex items-center justify-center text-[#6c38ff] shadow-2xs">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#6c38ff]"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        {/* Customer Review Quote */}
        <p className="text-[13px] sm:text-sm text-gray-800 font-semibold leading-relaxed mt-4 sm:mt-5 mb-6 z-10 relative">
          {item.quote}
        </p>
      </div>

      {/* Bottom Row: Customer Avatar & Name (Left Side) */}
      <div className="flex items-center gap-2.5 sm:gap-3 z-20 relative mt-auto max-w-[55%]">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-2xs shrink-0"
          loading="lazy"
        />
        <div className="min-w-0">
          <h4 className="text-xs sm:text-[13px]  text-gray-950 leading-tight">
            {item.name}
          </h4>
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-gray-500 font-medium mt-0.5 whitespace-nowrap">
            <span className="w-3.5 h-3.5 rounded-full bg-[#6c38ff] flex items-center justify-center shrink-0">
              <svg
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>Verified customer</span>
          </div>
        </div>
      </div>

      {/* Device Graphic Attached Directly to Card Outer Right & Bottom (Zero Padding) */}
      <div className="absolute right-0 bottom-0 w-[145px] sm:w-[160px] h-[115px] sm:h-[130px] pointer-events-none flex items-end justify-end overflow-hidden z-10">
        <img
          src={item.deviceImg}
          alt="Device"
          className="w-full h-full object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;

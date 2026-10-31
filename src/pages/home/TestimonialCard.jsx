import React from "react";
import { StarIcon } from "../../icons/index.jsx";

export const TestimonialCard = ({ item }) => {
  return (
    <div className="w-[285px] sm:w-[315px] lg:w-[335px] shrink-0 bg-white rounded-[28px] sm:rounded-[32px] border border-gray-100 shadow-xs hover:shadow-xl hover:shadow-purple-900/8 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden min-h-[300px] sm:min-h-[320px]">
      <div>
        {/* Top Row: 5 Stars + Purple Quote Bubble */}
        <div className="flex items-center justify-between">
          <div className="flex text-amber-400 gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <StarIcon key={i} size={15} color="#f59e0b" fill="#f59e0b" />
            ))}
          </div>

          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#f4efff] flex items-center justify-center text-[#6c38ff] shadow-2xs">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#6c38ff]"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        {/* Customer Review Quote */}
        <p className="text-sm sm:text-[15px] text-gray-900 font-semibold leading-relaxed mt-5 sm:mt-6 mb-6 z-10 relative">
          {item.quote}
        </p>
      </div>

      {/* Bottom Row: Customer Avatar & Corner-Clipped Device Graphic */}
      <div className="flex items-end justify-between z-20 relative mt-auto pt-2">
        <div className="flex items-center gap-2.5 sm:gap-3 z-20 relative max-w-[58%]">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-xs shrink-0"
            loading="lazy"
          />
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-gray-950 leading-tight truncate">
              {item.name}
            </h4>
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-gray-500 font-medium mt-1 whitespace-nowrap">
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

        {/* Device Graphic: Clipped to show ONLY right side devices, 0% overlap with text */}
        <div className="absolute right-0 bottom-0 w-[125px] sm:w-[145px] h-[95px] sm:h-[110px] pointer-events-none overflow-hidden flex items-end justify-end z-10">
          <img
            src={item.deviceImg}
            alt="Device"
            className="w-[165%] max-w-none h-full object-contain object-right-bottom transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

import React from "react";
import { StarIcon } from "../../icons/index.jsx";

export const TestimonialCard = ({ item }) => {
  return (
    <div className="w-[260px] sm:w-[280px] shrink-0 bg-white rounded-3xl border border-gray-100/90 shadow-xs hover:shadow-xl hover:shadow-purple-900/8 transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden min-h-[220px]">
      <div>
        {/* Top Row: 5 Stars + Quote Bubble */}
        <div className="flex items-center justify-between">
          <div className="flex text-amber-400 gap-0.5">
            {[...Array(item.rating)].map((_, i) => (
              <StarIcon key={i} size={12} color="#f59e0b" fill="#f59e0b" />
            ))}
          </div>

          <div className="w-7 h-7 rounded-full bg-[#f4efff] flex items-center justify-center text-[#6c38ff] shadow-2xs">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[#6c38ff]"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        {/* Customer Review Quote */}
        <p className="text-xs sm:text-[13px] text-gray-800 font-medium leading-relaxed mt-4 mb-6 z-10 relative">
          {item.quote}
        </p>
      </div>

      {/* Bottom Row: Customer Avatar & Device Graphic */}
      <div className="flex items-end justify-between pt-2 border-t border-gray-50 z-10 relative">
        <div className="flex items-center gap-2.5">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover border border-purple-100 shadow-2xs"
            loading="lazy"
          />
          <div>
            <h4 className="text-xs font-bold text-gray-900 leading-tight">
              {item.name}
            </h4>
            <span className="flex items-center gap-1 text-[10px] text-gray-400 font-medium mt-0.5">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6c38ff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Verified customer</span>
            </span>
          </div>
        </div>

        {/* Device Graphic in bottom right */}
        <div className="absolute right-0 bottom-0 w-24 sm:w-28 h-16 sm:h-20 pointer-events-none flex items-end justify-end overflow-hidden">
          <img
            src={item.deviceImg}
            alt="Device"
            className="w-full h-full object-contain object-bottom-right opacity-90 transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

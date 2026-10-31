import React, { useState, useRef, useEffect } from "react";
import { testimonials } from "../../mock/testimonials.js";
import { TestimonialCard } from "./TestimonialCard.jsx";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons/index.jsx";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4;
    const w = window.innerWidth;
    if (w >= 1280) return 4;
    if (w >= 1024) return 3;
    if (w >= 640) return 2;
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#f4efff] text-[#6c38ff] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2">
            <span className="font-extrabold text-[12px]">#</span>
            <span>LOVED BY OUR CUSTOMERS</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-gray-950 tracking-tight leading-tight">
            Good Tech. <span className="text-[#6c38ff]">Great Experiences.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 max-w-md mx-auto">
            See what customers have to say about shopping with us.
          </p>
        </div>

        {/* Testimonials Slider Track */}
        <div
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (diff > 50) nextSlide();
            if (diff < -50) prevSlide();
          }}
          className="relative w-full overflow-hidden py-4 -my-4 px-1 -mx-1"
        >
          <div
            className="flex gap-4 sm:gap-5 transition-transform duration-500 ease-out py-2 px-1"
            style={{
              transform: `translateX(-${currentIndex * (visibleCount === 1 ? 301 : 355)}px)`,
            }}
          >
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Pagination & Prev/Next Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          {/* Prev Button */}
          <button
            type="button"
            disabled={currentIndex === 0}
            onClick={prevSlide}
            className={`w-9 h-9 rounded-full border bg-white flex items-center justify-center shadow-xs transition-all ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed border-gray-200 text-gray-300"
                : "border-gray-200 hover:border-[#6c38ff] text-gray-700 hover:text-[#6c38ff] cursor-pointer"
            }`}
            aria-label="Previous testimonials"
          >
            <ChevronLeftIcon size={16} />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i
                    ? "w-6 h-2 bg-[#6c38ff]"
                    : "w-2 h-2 bg-[#ede5ff] hover:bg-purple-200"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            type="button"
            disabled={currentIndex >= maxIndex}
            onClick={nextSlide}
            className={`w-9 h-9 rounded-full border bg-white flex items-center justify-center shadow-xs transition-all ${
              currentIndex >= maxIndex
                ? "opacity-30 cursor-not-allowed border-gray-200 text-gray-300"
                : "border-gray-200 hover:border-[#6c38ff] text-gray-700 hover:text-[#6c38ff] cursor-pointer"
            }`}
            aria-label="Next testimonials"
          >
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


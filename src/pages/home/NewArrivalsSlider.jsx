import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { newArrivals } from "../../mock/newArrivals.js";
import {
  ShoppingCartIcon,
  HeartIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../icons/index.jsx";
import { toast } from "../../utils/toast.jsx";

export const NewArrivalsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const maxIndex = newArrivals.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
  };

  return (
    <section className="py-8 sm:py-12 bg-[#FCFAFF] border-t border-[#f0ebf8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header with Title and Slider Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f1ebff] text-[#6c38ff] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-1.5">
              <SparklesIcon size={12} className="text-[#6c38ff]" />
              <span>NEW ARRIVALS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Fresh Finds, <span className="text-[#6c38ff]">Just Dropped</span>
            </h2>
            <p className="text-xs text-gray-400 font-normal mt-0.5">
              Discover the latest additions to your everyday tech lineup.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <Link
              to="/products?category=new"
              className="px-5 py-2 rounded-full bg-[#6c38ff] hover:bg-[#5a27eb] text-white font-bold text-xs shadow-xs transition-all hover:scale-105"
            >
              View All
            </Link>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={prevSlide}
                className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeftIcon size={15} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-8 h-8 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 shadow-xs transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRightIcon size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Track with padding so card hover/shadow never clips */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full overflow-hidden py-4 -my-4 px-1 -mx-1"
        >
          <div
            className="flex gap-4 sm:gap-5 transition-transform duration-500 ease-out py-2 px-1"
            style={{
              transform: `translateX(-${currentIndex * 280}px)`,
            }}
          >
            {newArrivals.map((item) => (
              <div
                key={item.id}
                className="w-[260px] sm:w-[275px] shrink-0 bg-white rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Image Stage: NO PADDING, OBJECT-COVER */}
                  <div className="relative rounded-2xl overflow-hidden aspect-square w-full bg-[#f6f2ff] p-0">
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-[#6c38ff] text-white text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider z-10 shadow-xs">
                        {item.badge}
                      </span>
                    )}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        toast.info(`Saved "${item.name}" to wishlist!`);
                      }}
                      className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white text-gray-700 hover:text-[#6c38ff] flex items-center justify-center shadow-xs transition-colors z-10 cursor-pointer"
                      aria-label="Add to wishlist"
                    >
                      <HeartIcon size={13} />
                    </button>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 block"
                      loading="lazy"
                    />
                  </div>

                  {/* Info: Purple truncated title & purple price */}
                  <div className="mt-2.5 space-y-0.5">
                    <h3 className="text-sm sm:text-base font-extrabold text-[#6c38ff] truncate leading-snug">
                      {item.name}
                    </h3>
                    <div className="text-lg sm:text-xl font-black text-[#6c38ff]">
                      {item.price}
                    </div>
                    <p className="text-[11px] text-gray-400 font-normal truncate">
                      {item.desc}
                    </p>
                  </div>

                  {/* Color Swatches */}
                  <div className="flex items-center gap-1.5 mt-2">
                    {item.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-3 h-3 rounded-full border border-gray-200/90 shadow-2xs"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={() => toast.success(`Added "${item.name}" to cart!`)}
                    className="w-full py-2.5 px-3 rounded-full bg-[#6c38ff] hover:bg-[#5a27eb] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <ShoppingCartIcon size={14} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

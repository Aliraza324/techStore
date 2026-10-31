import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { bestSellers } from "../../mock/bestSellers.js";
import {
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../icons/index.jsx";
import { toast } from "../../utils/toast.jsx";

export const CustomerFavoritesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState({});
  const touchStartX = useRef(0);
  const maxIndex = bestSellers.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const toggleWishlist = (e, id, name) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => {
      const isFav = !prev[id];
      if (isFav) toast.success(`Saved "${name}" to Wishlist!`);
      return { ...prev, [id]: isFav };
    });
  };

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`Added "${item.name}" to cart!`);
  };

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header with Top-Right Nav Controls */}
        <div className="relative flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#f4efff] text-[#6c38ff] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase mb-2">
            <span className="font-extrabold text-[12px]">#</span>
            <span>BEST SELLERS</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-gray-950 tracking-tight leading-tight">
            Customer <span className="text-[#6c38ff]">Favorites</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-2 max-w-md">
            The everyday essentials our customers keep coming back for.
          </p>

          {/* Slider Prev / Next Controls */}
          <div className="flex sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 items-center gap-2 mt-4 sm:mt-0">
            <button
              type="button"
              onClick={prevSlide}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-[#6c38ff] text-gray-700 hover:text-[#6c38ff] flex items-center justify-center shadow-xs transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon size={16} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-[#6c38ff] text-gray-700 hover:text-[#6c38ff] flex items-center justify-center shadow-xs transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </div>

        {/* Slider Track with padding so shadow and hover lift never clip */}
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
              transform: `translateX(-${currentIndex * 285}px)`,
            }}
          >
            {bestSellers.map((item) => (
              <div
                key={item.id}
                className="w-[260px] sm:w-[280px] shrink-0 bg-white rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:shadow-purple-900/8 transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Card Image Area (No outer padding inside this container) */}
                  <div className="h-[190px] sm:h-[210px] w-full rounded-2xl overflow-hidden relative bg-[#f6f2fc]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#6c38ff] text-white text-[9px] font-bold tracking-wide uppercase shadow-xs">
                        {item.badge}
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(e, item.id, item.name)}
                      className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs transition-colors cursor-pointer ${
                        wishlist[item.id] ? "text-red-500" : "text-gray-400 hover:text-red-500"
                      }`}
                      aria-label="Save to Wishlist"
                    >
                      <HeartIcon
                        size={14}
                        className={wishlist[item.id] ? "fill-red-500 text-red-500" : ""}
                      />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="pt-3 px-1">
                    <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 truncate group-hover:text-[#6c38ff] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5 truncate">
                      {item.eyebrow}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-1.5">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} size={11} className="fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold text-gray-700">{item.rating}</span>
                      <span className="text-[10px] text-gray-400">({item.reviews} reviews)</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="text-base sm:text-lg font-black text-[#6c38ff]">
                        {item.price}
                      </span>
                      <span className="text-xs text-gray-400 line-through font-medium">
                        {item.originalPrice}
                      </span>
                    </div>

                    {/* Color Dots */}
                    <div className="flex items-center gap-1.5 mt-2.5">
                      {item.colors.map((color, i) => (
                        <span
                          key={i}
                          style={{ backgroundColor: color }}
                          className="w-3.5 h-3.5 rounded-full border border-gray-200/80 shadow-2xs"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="pt-3 px-1">
                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(e, item)}
                    className="w-full py-2.5 rounded-full bg-[#6c38ff] hover:bg-[#5825eb] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm shadow-[#6c38ff]/20 hover:shadow-md transition-all active:scale-95 cursor-pointer"
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

export default CustomerFavoritesSlider;

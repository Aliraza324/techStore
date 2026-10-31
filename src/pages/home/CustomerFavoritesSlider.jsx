import React, { useState, useRef, useEffect } from "react";
import { bestSellers } from "../../mock/bestSellers.js";
import { FavoriteCard } from "./FavoriteCard.jsx";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons/index.jsx";
import { toast } from "../../utils/toast.jsx";

export const CustomerFavoritesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState({});
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

  const maxIndex = Math.max(0, bestSellers.length - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
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

          {/* Slider Controls with disabled state at boundaries */}
          <div className="flex sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 items-center gap-2 mt-4 sm:mt-0">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={prevSlide}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border bg-white flex items-center justify-center shadow-xs transition-all ${
                currentIndex === 0
                  ? "opacity-30 cursor-not-allowed border-gray-200 text-gray-300"
                  : "border-gray-200 hover:border-[#6c38ff] text-gray-700 hover:text-[#6c38ff] cursor-pointer"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeftIcon size={16} />
            </button>
            <button
              type="button"
              disabled={currentIndex >= maxIndex}
              onClick={nextSlide}
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border bg-white flex items-center justify-center shadow-xs transition-all ${
                currentIndex >= maxIndex
                  ? "opacity-30 cursor-not-allowed border-gray-200 text-gray-300"
                  : "border-gray-200 hover:border-[#6c38ff] text-gray-700 hover:text-[#6c38ff] cursor-pointer"
              }`}
              aria-label="Next slide"
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </div>

        {/* Slider Track with zero padding on image and shadow-friendly bounds */}
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
              transform: `translateX(-${currentIndex * (visibleCount === 1 ? 276 : 296)}px)`,
            }}
          >
            {bestSellers.map((item) => (
              <FavoriteCard
                key={item.id}
                item={item}
                isFav={wishlist[item.id]}
                onToggleWishlist={toggleWishlist}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFavoritesSlider;

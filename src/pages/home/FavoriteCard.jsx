import React from "react";
import { ShoppingCartIcon, HeartIcon, StarIcon } from "../../icons/index.jsx";

export const FavoriteCard = ({ item, isFav, onToggleWishlist, onAddToCart }) => {
  return (
    <div className="w-[260px] sm:w-[276px] shrink-0 bg-white rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:shadow-purple-900/8 transition-all duration-300 p-2.5 sm:p-3 flex flex-col justify-between group hover:-translate-y-1.5">
      <div>
        {/* Card Image Area (Zero padding, cover image) */}
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
            onClick={(e) => onToggleWishlist(e, item.id, item.name)}
            className={`absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs transition-colors cursor-pointer ${
              isFav ? "text-red-500" : "text-gray-400 hover:text-red-500"
            }`}
            aria-label="Save to Wishlist"
          >
            <HeartIcon size={14} className={isFav ? "fill-red-500 text-red-500" : ""} />
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

          {/* Rating with solid golden star fills */}
          <div className="flex items-center gap-1 mt-1.5">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} size={11} color="#f59e0b" fill="#f59e0b" />
              ))}
            </div>
            <span className="text-[11px] font-bold text-gray-700">{item.rating}</span>
            <span className="text-[10px] text-gray-400">({item.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1.5 mt-2">
            <span className="text-base sm:text-lg font-black text-[#6c38ff]">{item.price}</span>
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
          onClick={(e) => onAddToCart(e, item)}
          className="w-full py-2.5 rounded-full bg-[#6c38ff] hover:bg-[#5825eb] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm shadow-[#6c38ff]/20 hover:shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <ShoppingCartIcon size={14} />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;


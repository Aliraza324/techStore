import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../../mock/index.js";
import { ShoppingCartIcon, StarIcon, ArrowRightIcon } from "../../icons/index.jsx";
import { toast } from "../../utils/toast.jsx";

export const FeaturedProducts = () => {
  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`Added "${product.name}" to cart!`);
  };

  return (
    <section className="py-16 bg-gray-50/60 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6c38ff]">
              Hand-Picked Selection
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Featured Flagships
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6c38ff] hover:text-[#5a27eb] transition-colors"
          >
            <span>See full store collection</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white border border-gray-200/80 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/5 flex flex-col overflow-hidden"
            >
              <Link to={`/product/${item.id}`} className="block relative overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-[#6c38ff] shadow-sm border border-purple-100">
                    {item.badge}
                  </span>
                )}
                {!item.inStock && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-50 text-rose-600 border border-rose-200">
                    Backorder
                  </span>
                )}
              </Link>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span className="text-[11px] uppercase font-bold text-gray-400">{item.brand}</span>
                    <div className="flex items-center gap-1 text-amber-500">
                      <StarIcon size={13} />
                      <span className="font-bold text-gray-800">{item.rating}</span>
                      <span className="text-gray-400 text-[10px]">({item.reviewsCount})</span>
                    </div>
                  </div>

                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-sm font-bold text-gray-900 hover:text-[#6c38ff] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-base font-black text-gray-900">
                      ${item.price.toLocaleString()}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-gray-400 line-through ml-1.5 font-medium">
                        ${item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(e, item)}
                    className="p-2.5 rounded-xl bg-purple-50 hover:bg-[#6c38ff] text-[#6c38ff] hover:text-white transition-colors cursor-pointer"
                    title="Add to cart"
                  >
                    <ShoppingCartIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

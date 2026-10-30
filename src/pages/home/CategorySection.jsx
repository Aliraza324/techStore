import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../mock/index.js";
import {
  LaptopIcon,
  SmartphoneIcon,
  HeadphonesIcon,
  WatchIcon,
  CpuIcon,
  ArrowRightIcon,
} from "../../icons/index.jsx";

const iconMap = {
  LaptopIcon: <LaptopIcon size={26} className="text-[#6c38ff]" />,
  SmartphoneIcon: <SmartphoneIcon size={26} className="text-[#6c38ff]" />,
  HeadphonesIcon: <HeadphonesIcon size={26} className="text-[#6c38ff]" />,
  WatchIcon: <WatchIcon size={26} className="text-[#6c38ff]" />,
  CpuIcon: <CpuIcon size={26} className="text-[#6c38ff]" />,
};

export const CategorySection = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#6c38ff]">
              Department Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              Browse By Hardware Type
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6c38ff] hover:text-[#5a27eb] transition-colors"
          >
            <span>View all inventory</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.slug}`}
              className="group p-5 rounded-2xl bg-gray-50/70 hover:bg-white border border-gray-200/80 hover:border-purple-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[cat.icon] || <CpuIcon size={26} className="text-[#6c38ff]" />}
                </div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#6c38ff] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <span>{cat.itemCount} Devices</span>
                <span className="text-[#6c38ff] group-hover:translate-x-1 transition-transform inline-flex items-center">
                  <ArrowRightIcon size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

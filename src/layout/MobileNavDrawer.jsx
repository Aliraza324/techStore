import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, HeartIcon } from "../icons/index.jsx";

export const MobileNavDrawer = ({ isOpen, onClose, categories }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-4 shadow-lg animate-in slide-in-from-top-2">
      <div>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
          Quick Access
        </span>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Link
            to="/products"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 text-xs font-semibold text-gray-800 hover:bg-violet-50 hover:text-[#6c38ff]"
          >
            <UserIcon size={16} />
            <span>My Account</span>
          </Link>
          <Link
            to="/products"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 text-xs font-semibold text-gray-800 hover:bg-violet-50 hover:text-[#6c38ff]"
          >
            <HeartIcon size={16} />
            <span>Wishlist</span>
          </Link>
        </div>
      </div>

      <div>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">
          All Categories
        </span>
        <div className="flex flex-col gap-1 mt-2">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.path}
              onClick={onClose}
              className="px-3 py-2 text-xs font-bold text-gray-700 hover:bg-violet-50 hover:text-[#6c38ff] rounded-lg transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavDrawer;

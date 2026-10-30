import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheckIcon, TruckIcon } from "../icons/index.jsx";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-xl bg-[#6c38ff] flex items-center justify-center text-white shadow-xs">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="20" x="5" y="2" rx="3" ry="3" />
                  <circle cx="12" cy="18" r="0.5" fill="currentColor" />
                </svg>
              </span>
              <span className="text-xl font-black tracking-tight text-gray-900">
                Tech<span className="text-[#6c38ff]">Store.</span>
              </span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed">
              Premium everyday essentials, crystal-clear audio, fast chargers, and smart lifestyle gear.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#6c38ff] font-semibold">
              <span className="inline-flex items-center gap-1">
                <ShieldCheckIcon size={14} /> Official Warranty
              </span>
              <span className="inline-flex items-center gap-1">
                <TruckIcon size={14} /> Free Express Delivery
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
              Explore Catalog
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/products?category=cases" className="hover:text-[#6c38ff] transition-colors">
                  Phone Cases
                </Link>
              </li>
              <li>
                <Link to="/products?category=screen-protectors" className="hover:text-[#6c38ff] transition-colors">
                  Screen Protectors
                </Link>
              </li>
              <li>
                <Link to="/products?category=charging" className="hover:text-[#6c38ff] transition-colors">
                  Charging Solutions
                </Link>
              </li>
              <li>
                <Link to="/products?category=audio" className="hover:text-[#6c38ff] transition-colors">
                  Audio & Headphones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/cart" className="hover:text-[#6c38ff] transition-colors">
                  View Shopping Cart
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#6c38ff] transition-colors">
                  Track Delivery
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#6c38ff] transition-colors">
                  30-Day Returns Policy
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#6c38ff] transition-colors">
                  24/7 Tech Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
              Stay in the Loop
            </h4>
            <p className="text-xs text-gray-500 mb-3">
              Get special releases and discounts right into your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address..."
                className="bg-gray-50 border border-gray-200 rounded-full px-3.5 py-1.5 text-xs text-gray-800 placeholder-gray-400 w-full focus:outline-none focus:border-[#6c38ff]"
              />
              <Link
                to="/products"
                className="px-4 py-1.5 bg-[#6c38ff] hover:bg-[#5a27eb] text-white rounded-full text-xs font-bold shrink-0 transition-colors"
              >
                Join
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} TechStore Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/products" className="hover:text-gray-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/products" className="hover:text-gray-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

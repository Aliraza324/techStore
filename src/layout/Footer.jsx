import React from "react";
import { Link } from "react-router-dom";
import footerDevices from "../assets/555617fcc17d6d9198d4c5555b96bfe7dde4e66c.png";
import { TruckIcon, ShieldCheckIcon, RotateCcwIcon, HeadphonesIcon } from "../icons/index.jsx";

const features = [
  { icon: <TruckIcon size={22} className="text-[#6c38ff]" />, title: "Fast & Reliable Shipping", sub: "Delivered to your door" },
  { icon: <ShieldCheckIcon size={22} className="text-[#6c38ff]" />, title: "Secure Payments", sub: "Safe checkout every time" },
  { icon: <RotateCcwIcon size={22} className="text-[#6c38ff]" />, title: "Easy Returns", sub: "Shop with confidence" },
  { icon: <HeadphonesIcon size={22} className="text-[#6c38ff]" />, title: "Dedicated Support", sub: "We're here to help" },
];

const navGroups = [
  {
    title: "Shop",
    links: [
      { label: "All Products", to: "/products" },
      { label: "Phone Cases", to: "/products?category=phone-cases" },
      { label: "Screen Protectors", to: "/products?category=screen-protectors" },
      { label: "Chargers & Cables", to: "/products?category=chargers" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Shipping & Delivery", to: "/shipping" },
      { label: "Returns & Exchanges", to: "/returns" },
      { label: "FAQs", to: "/faq" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Why Choose Us", to: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms & Conditions", to: "/terms" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[#111126] text-gray-300 text-sm overflow-hidden pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Section: Brand & Nav Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 sm:pb-16 border-b border-white/5">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl sm:text-[28px] font-black tracking-tight text-white">
                TechStore<span className="text-[#6c38ff]">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-xs">
              Premium tech accessories for your devices. Smart essentials. Everyday convenience.
            </p>

            {/* Social Buttons */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { label: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Email", d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" },
              ].map((s, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full bg-[#1b1a32] hover:bg-[#6c38ff] text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs"
                >
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.d} />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* 4 Nav Columns */}
          {navGroups.map((g, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-tight">{g.title}</h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                {g.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link to={link.to} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Bottom-Left Device Image + 4 Features */}
        <div className="py-10 sm:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Bottom-Left Device Image */}
          <div className="shrink-0 w-48 sm:w-56 flex items-center justify-center">
            <img
              src={footerDevices}
              alt="TechStore Devices & Accessories"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* 4 Feature Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 flex-1 w-full">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3.5">
                <div className="shrink-0">{f.icon}</div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {f.title}
                  </h5>
                  <p className="text-[11px] text-gray-400 font-normal mt-0.5">
                    {f.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-normal">
            &copy; 2025 TechStore. All rights reserved.
          </p>

          {/* Payment Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 sm:gap-2">
            {[
              { label: "VISA", el: <span className="text-[10px] font-black italic text-[#1a1f71]">VISA</span> },
              {
                label: "Mastercard",
                el: (
                  <div className="flex items-center -space-x-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#eb001b]" />
                    <span className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] opacity-85" />
                  </div>
                ),
              },
              { label: "AMEX", el: <span className="text-[9px] font-black text-[#006fcf]">AMEX</span> },
              { label: "Apple Pay", el: <span className="text-[9px] font-bold text-gray-900">Apple Pay</span> },
              { label: "PayPal", el: <span className="text-[9px] font-black italic text-[#003087]">PayPal</span> },
            ].map((p, i) => (
              <span key={i} className="h-6 px-2.5 rounded-sm bg-white flex items-center justify-center shadow-xs">
                {p.el}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

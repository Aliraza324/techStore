import React, { useState } from "react";
import newsletterBg from "../../assets/78250926f34d728b729d9bf07109fa82a2921106.png";
import { MailIcon } from "../../icons/index.jsx";
import { toast } from "../../utils/toast.jsx";

export const NewsletterBanner = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Thank you for subscribing! Check your inbox for exclusive perks.");
    setEmail("");
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FCFAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{ backgroundImage: `url(${newsletterBg})` }}
          className="relative bg-[#efe7ff] bg-cover bg-right md:bg-center bg-no-repeat rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[390px] flex items-center p-6 sm:p-12 lg:p-16 shadow-xs"
        >
          {/* Subtle overlay for smaller screens for crystal-clear readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:from-transparent md:via-transparent md:to-transparent pointer-events-none" />

          {/* Left Content Area */}
          <div className="relative z-10 max-w-lg lg:max-w-xl flex flex-col items-start">
            {/* Eyebrow */}
            <span className="text-xs sm:text-[13px] font-bold text-[#6c38ff] tracking-[0.16em] uppercase mb-2 sm:mb-2.5 block">
              JOIN OUR COMMUNITY
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-gray-950 tracking-tight leading-[1.1] mb-2 sm:mb-3">
              Stay In the <span className="text-[#6c38ff]">Loop</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-gray-600 font-normal max-w-sm sm:max-w-md mb-6 sm:mb-8 leading-relaxed">
              Get exclusive offers, new product launches and tech essentials.
            </p>

            {/* Email Subscription Form */}
            <form
              onSubmit={handleSubscribe}
              className="relative flex items-center bg-white rounded-full shadow-lg shadow-purple-900/5 p-1.5 max-w-md w-full border border-purple-100/60"
            >
              <span className="pl-3 sm:pl-3.5 text-gray-400 shrink-0">
                <MailIcon size={18} className="text-gray-400" />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full bg-transparent pl-2.5 pr-2 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#6c38ff] hover:bg-[#5825eb] text-white text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-sm shadow-[#6c38ff]/25 cursor-pointer"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;


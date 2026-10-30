import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCartIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "../icons/index.jsx";

const navCategories = [
  { name: "PHONE CASES", path: "/products?category=cases" },
  { name: "SCREEN PROTECTORS", path: "/products?category=screen-protectors" },
  { name: "CHARGING SOLUTIONS", path: "/products?category=charging" },
  { name: "AUDIO", path: "/products?category=audio" },
  { name: "POWER BANKS", path: "/products?category=power-banks" },
  { name: "NEW ARRIVALS", path: "/products?category=new" },
  { name: "GADGETS", path: "/products?category=gadgets" },
  { name: "DEALS", path: "/products?category=deals" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileOpen(false);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-xs sticky top-0 z-50">
      {/* Top Header Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
            <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#6c38ff] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="20" x="5" y="2" rx="3" ry="3" />
                <circle cx="12" cy="18" r="0.5" fill="currentColor" />
              </svg>
            </span>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-gray-900">
              Tech<span className="text-[#6c38ff]">Store.</span>
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-2xl items-center border border-gray-200 rounded-full pl-4 pr-1.5 py-1 bg-white hover:border-gray-300 focus-within:border-[#6c38ff] focus-within:ring-2 focus-within:ring-[#6c38ff]/15 transition-all shadow-xs"
          >
            <SearchIcon size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for your perfect tech upgrade"
              className="w-full px-3 py-1.5 text-xs lg:text-sm text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-[#6c38ff] hover:bg-[#5a27eb] text-white text-xs lg:text-sm font-semibold transition-colors shrink-0 shadow-sm"
            >
              Search
            </button>
          </form>

          {/* Right Action Icons (Account, Wishlist, Cart) */}
          <div className="flex items-center gap-3 sm:gap-5 lg:gap-7 shrink-0">
            <Link to="/products" className="hidden sm:flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#6c38ff] transition-colors group">
              <UserIcon size={20} className="text-gray-700 group-hover:text-[#6c38ff] transition-colors" />
              <span className="text-[11px] font-medium text-gray-600 group-hover:text-[#6c38ff]">Account</span>
            </Link>

            <Link to="/products" className="hidden sm:flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#6c38ff] transition-colors group">
              <HeartIcon size={20} className="text-gray-700 group-hover:text-[#6c38ff] transition-colors" />
              <span className="text-[11px] font-medium text-gray-600 group-hover:text-[#6c38ff]">Wishlist</span>
            </Link>

            <Link to="/cart" className="flex flex-col items-center gap-0.5 text-gray-700 hover:text-[#6c38ff] transition-colors group relative">
              <span className="relative">
                <ShoppingCartIcon size={20} className="text-gray-700 group-hover:text-[#6c38ff] transition-colors" />
                <span className="absolute -top-1.5 -right-2 bg-[#6c38ff] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  2
                </span>
              </span>
              <span className="text-[11px] font-medium text-gray-600 group-hover:text-[#6c38ff]">Cart</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (visible on < md) */}
        <form onSubmit={handleSearch} className="md:hidden mt-2.5 flex items-center border border-gray-200 rounded-full pl-3 pr-1 py-1 bg-gray-50/60 focus-within:bg-white focus-within:border-[#6c38ff]">
          <SearchIcon size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech upgrade..."
            className="w-full px-2 py-1 text-xs text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none"
          />
          <button type="submit" className="px-4 py-1.5 rounded-full bg-[#6c38ff] text-white text-xs font-semibold shrink-0">
            Search
          </button>
        </form>
      </div>

      {/* Bottom Category Navigation Bar (Desktop) */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-6 lg:gap-8">
          {/* Browse Categories Button with Dropdown */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#6c38ff] hover:bg-[#5a27eb] text-white text-xs font-bold tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <MenuIcon size={15} />
              <span>Browse Categories</span>
            </button>

            {categoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                {navCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    onClick={() => setCategoriesOpen(false)}
                    className="block px-4 py-2 text-xs text-gray-700 hover:bg-violet-50 hover:text-[#6c38ff] transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-4 lg:gap-6 overflow-x-auto scrollbar-none py-1">
            {navCategories.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-[11px] lg:text-xs  tracking-wider whitespace-nowrap transition-colors ${
                    isActive ? "text-[#6c38ff]" : "text-gray-600 hover:text-[#6c38ff]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation (320px responsive) */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">Quick Access</span>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <Link
                to="/products"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 text-xs font-semibold text-gray-800 hover:bg-violet-50 hover:text-[#6c38ff]"
              >
                <UserIcon size={16} />
                <span>My Account</span>
              </Link>
              <Link
                to="/products"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 text-xs font-semibold text-gray-800 hover:bg-violet-50 hover:text-[#6c38ff]"
              >
                <HeartIcon size={16} />
                <span>Wishlist</span>
              </Link>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-2">All Categories</span>
            <div className="flex flex-col gap-1 mt-2">
              {navCategories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-xs font-bold text-gray-700 hover:bg-violet-50 hover:text-[#6c38ff] rounded-lg transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

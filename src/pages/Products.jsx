import React, { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { products, categories } from "../mock/index.js";
import { ShoppingCartIcon, StarIcon, SlidersHorizontalIcon } from "../icons/index.jsx";
import { toast } from "../utils/toast.jsx";

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        const matchesCategory = currentCategory === "all" || p.category === currentCategory;
        const matchesQuery =
          !searchQuery ||
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [currentCategory, searchQuery, sortBy]);

  const handleCategoryChange = (slug) => {
    const next = new URLSearchParams(searchParams);
    if (slug === "all") next.delete("category");
    else next.set("category", slug);
    setSearchParams(next);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white">All Tech Hardware</h1>
          <p className="text-xs text-slate-400 mt-1">
            Showing {filteredProducts.length} devices {searchQuery && `matching "${searchQuery}"`}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sort-by" className="text-xs text-slate-400 flex items-center gap-1.5">
            <SlidersHorizontalIcon size={14} />
            <span>Sort:</span>
          </label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-900 border border-slate-800 text-xs text-slate-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-500"
          >
            <option value="featured">Featured First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        <button
          type="button"
          onClick={() => handleCategoryChange("all")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors ${currentCategory === "all"
              ? "bg-cyan-500 text-slate-950"
              : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
        >
          All Hardware
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => handleCategoryChange(cat.slug)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors ${currentCategory === cat.slug
                ? "bg-cyan-500 text-slate-950"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-slate-800 rounded-2xl">
          <p className="text-slate-400 text-sm">No hardware matched your criteria.</p>
          <button
            type="button"
            onClick={() => setSearchParams({})}
            className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col overflow-hidden"
            >
              <Link to={`/product/${item.id}`} className="block relative aspect-square bg-slate-950">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {item.badge && (
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {item.badge}
                  </span>
                )}
              </Link>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>{item.brand}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <StarIcon size={12} />
                      <span className="text-slate-200">{item.rating}</span>
                    </div>
                  </div>
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-sm font-bold text-white hover:text-cyan-400 line-clamp-1">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-base font-bold text-white">
                    ${item.price.toLocaleString()}
                  </span>
                  <button
                    type="button"
                    onClick={() => toast.success(`Added "${item.name}" to cart!`)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-cyan-600 text-slate-200 hover:text-white transition-colors"
                  >
                    <ShoppingCartIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;


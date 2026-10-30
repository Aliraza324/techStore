import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../mock/index.js";
import {
  ShoppingCartIcon,
  StarIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowRightIcon,
  CheckIcon,
} from "../icons/index.jsx";
import { toast } from "../utils/toast.jsx";

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id) || products[0];

  const handleAdd = () => {
    toast.success(`Added ${quantity}x "${product.name}" to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/products" className="hover:text-white transition-colors">
          Products
        </Link>
        <span>/</span>
        <span className="text-slate-200 font-medium truncate max-w-xs">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 aspect-square shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {product.brand} · {product.category}
            </span>
            <h1 className="text-3xl font-extrabold text-white mt-1">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1 text-amber-400">
                <StarIcon size={14} />
                <span className="font-bold text-white">{product.rating}</span>
                <span>({product.reviewsCount} verified reviews)</span>
              </div>
              <span>·</span>
              <span className={product.inStock ? "text-emerald-400 font-semibold" : "text-rose-400 font-semibold"}>
                {product.inStock ? "In Stock (Ready to dispatch)" : "Backorder available"}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-baseline gap-3">
            <span className="text-3xl font-extrabold text-white">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
            <span className="text-xs text-cyan-400 ml-auto font-medium">Free Express Shipping</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Core Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.specs?.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                  <CheckIcon size={14} className="text-cyan-400 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center rounded-xl border border-slate-800 bg-slate-900 p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-slate-300 hover:text-white text-sm"
              >
                -
              </button>
              <span className="px-4 text-sm font-bold text-white">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 text-slate-300 hover:text-white text-sm"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingCartIcon size={18} />
              <span>Add To Cart</span>
            </button>

            <Link
              to="/cart"
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
            >
              View Cart
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon size={18} className="text-cyan-400" />
              <span>2-Year Comprehensive Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <TruckIcon size={18} className="text-cyan-400" />
              <span>Next Day Free Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


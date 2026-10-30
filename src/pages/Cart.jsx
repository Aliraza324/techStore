import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../mock/index.js";
import { Trash2Icon, ArrowRightIcon, ShieldCheckIcon } from "../icons/index.jsx";
import { toast } from "../utils/toast.jsx";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { product: products[0], quantity: 1 },
    { product: products[2], quantity: 1 },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id, name) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== id));
    toast.info(`Removed "${name}" from cart`);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-white mb-2">Your Shopping Cart</h1>
      <p className="text-xs text-slate-400 mb-8">
        {cartItems.length} items reserved for you with free expedited shipping.
      </p>

      {cartItems.length === 0 ? (
        <div className="text-center py-20 rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-slate-300 text-sm">Your cart is currently empty.</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors"
          >
            <span>Explore Devices</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center gap-4 justify-between"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-xl object-cover bg-slate-950 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-cyan-400">{product.brand}</span>
                    <Link to={`/product/${product.id}`} className="block text-sm font-bold text-white hover:text-cyan-400">
                      {product.name}
                    </Link>
                    <span className="text-xs text-slate-400 font-semibold">
                      ${product.price.toLocaleString()} each
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                  <div className="flex items-center border border-slate-700 bg-slate-950 rounded-lg p-0.5 text-xs">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, -1)}
                      className="px-2.5 py-1 text-slate-300 hover:text-white"
                    >
                      -
                    </button>
                    <span className="px-2 font-bold text-white">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, 1)}
                      className="px-2.5 py-1 text-slate-300 hover:text-white"
                    >
                      +
                    </button>
                  </div>

                  <span className="text-sm font-extrabold text-white w-20 text-right">
                    ${(product.price * quantity).toLocaleString()}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeItem(product.id, product.name)}
                    className="p-2 text-slate-400 hover:text-rose-400 transition-colors"
                    title="Remove item"
                  >
                    <Trash2Icon size={16} />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-2">
              <Link to="/products" className="text-xs font-semibold text-cyan-400 hover:underline">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-base font-bold text-white">Order Summary</h2>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white font-semibold">${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Sales Tax (8%)</span>
                <span className="text-white font-semibold">${tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-emerald-400 font-semibold">FREE</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline">
              <span className="text-sm font-bold text-white">Total</span>
              <span className="text-xl font-extrabold text-white">${total.toLocaleString()}</span>
            </div>

            <button
              type="button"
              onClick={() => toast.success("Proceeding to secure checkout...")}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] cursor-pointer"
            >
              Checkout Now
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
              <ShieldCheckIcon size={14} className="text-cyan-400" />
              <span>256-bit Encrypted Checkout</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


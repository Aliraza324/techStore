import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../icons/index.jsx";

export const NotFound = () => {
  return (
    <div className="max-w-md mx-auto text-center py-24 px-4">
      <span className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
        404
      </span>
      <h1 className="text-2xl font-bold text-white mt-4">Hardware Not Found</h1>
      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
        The device specification or destination you are seeking has been moved or does not exist in our catalog.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors"
        >
          <span>Return to Homepage</span>
          <ArrowRightIcon size={14} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;


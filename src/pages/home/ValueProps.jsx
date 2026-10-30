import React from "react";
import { valuePropositions } from "../../mock/index.js";
import {
  TruckIcon,
  ShieldCheckIcon,
  RotateCcwIcon,
  SparklesIcon,
} from "../../icons/index.jsx";

const iconMap = {
  TruckIcon: <TruckIcon size={24} className="text-cyan-400" />,
  ShieldCheckIcon: <ShieldCheckIcon size={24} className="text-indigo-400" />,
  RotateCcwIcon: <RotateCcwIcon size={24} className="text-emerald-400" />,
  SparklesIcon: <SparklesIcon size={24} className="text-amber-400" />,
};

export const ValueProps = () => {
  return (
    <section className="py-14 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropositions.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4 hover:border-slate-700 transition-colors"
            >
              <div className="p-3 rounded-xl bg-slate-800/80 shrink-0">
                {iconMap[item.icon] || <ShieldCheckIcon size={24} className="text-cyan-400" />}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


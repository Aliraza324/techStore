import React from "react";
import { motion } from "motion/react";

const STATUS_MESSAGES = [
  "Initializing smart inventory...",
  "Syncing premium device accessories...",
  "Calibrating high-speed fast charging...",
  "Powering up your tech experience...",
  "Welcome to TechStore",
];

export const LoaderProgress = ({ progress = 0 }) => {
  // Determine which status to show based on progress percentage
  const statusIndex = Math.min(
    Math.floor((progress / 100) * STATUS_MESSAGES.length),
    STATUS_MESSAGES.length - 1
  );

  return (
    <div className="w-full max-w-xs sm:max-w-sm flex flex-col items-center">
      {/* Percentage and Badge */}
      <div className="w-full flex items-center justify-between text-xs mb-2">
        <span className="font-mono text-[#a855f7] tracking-wider text-[11px] font-semibold flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
          SYS // 2.5
        </span>
        <span className="font-mono text-white/90 font-bold text-sm">
          {Math.round(progress)}%
        </span>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2 rounded-full bg-white/10 p-0.5 backdrop-blur-md overflow-hidden relative border border-white/5 shadow-inner">
        {/* Glow fill bar */}
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#6c38ff] via-[#a855f7] to-[#38bdf8] relative shadow-[0_0_12px_rgba(108,56,255,0.7)]"
          style={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          {/* Leading highlight dot */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
        </motion.div>
      </div>

      {/* Dynamic Status Text */}
      <div className="h-6 mt-3 flex items-center justify-center">
        <motion.p
          key={statusIndex}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-gray-400 font-medium text-center tracking-wide"
        >
          {STATUS_MESSAGES[statusIndex]}
        </motion.p>
      </div>
    </div>
  );
};

export default LoaderProgress;


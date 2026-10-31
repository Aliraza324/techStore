import React from "react";
import { motion } from "motion/react";

export const LoaderOrb = ({ size = 160 }) => {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Ambient background bloom */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6c38ff]/30 via-[#a855f7]/20 to-[#38bdf8]/20 blur-2xl animate-pulse" />

      {/* High-tech Multi-ring Gyroscope SVG */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <defs>
          <linearGradient id="orbGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6c38ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          <linearGradient id="orbGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>

          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ring 1: Outer dashed tracking ring */}
        <motion.circle
          cx="80"
          cy="80"
          r="70"
          stroke="url(#orbGrad1)"
          strokeWidth="2"
          strokeDasharray="6 8"
          strokeLinecap="round"
          opacity="0.6"
          filter="url(#neonGlow)"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 80px" }}
        />

        {/* Ring 2: Counter-rotating segmented cyber ring */}
        <motion.circle
          cx="80"
          cy="80"
          r="56"
          stroke="url(#orbGrad2)"
          strokeWidth="3"
          strokeDasharray="65 35"
          strokeLinecap="round"
          filter="url(#neonGlow)"
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 80px" }}
        />

        {/* Ring 3: Fast inner particle pulse ring */}
        <motion.circle
          cx="80"
          cy="80"
          r="42"
          stroke="#6c38ff"
          strokeWidth="1.5"
          strokeDasharray="20 40 10 30"
          opacity="0.8"
          animate={{ rotate: 360 }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 80px" }}
        />

        {/* Orbiting Satellite Dots */}
        <motion.circle
          cx="80"
          cy="24"
          r="3.5"
          fill="#38bdf8"
          filter="url(#neonGlow)"
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 80px" }}
        />
        <motion.circle
          cx="80"
          cy="136"
          r="3"
          fill="#c084fc"
          filter="url(#neonGlow)"
          animate={{ rotate: -360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "80px 80px" }}
        />
      </svg>

      {/* Central Glowing Tech Core */}
      <motion.div
        className="absolute z-20 w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#6c38ff] to-[#a855f7] p-0.5 shadow-lg shadow-[#6c38ff]/40 flex items-center justify-center"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 90, 180, 270, 360] }}
        transition={{
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      >
        <div className="w-full h-full rounded-[14px] bg-[#0c0c17] flex items-center justify-center">
          {/* Futuristic Monogram / Circuit Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#orbGrad1)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default LoaderOrb;

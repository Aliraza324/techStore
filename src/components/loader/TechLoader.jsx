import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { LoaderOrb } from "./LoaderOrb.jsx";
import { LoaderProgress } from "./LoaderProgress.jsx";
import { loaderFadeOut } from "../../animations/animation.js";

export const TechLoader = ({
  fullScreen = true,
  duration = 1800,
  onComplete,
  showBrand = true,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const update = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(update);
      } else if (onComplete) {
        setTimeout(onComplete, 350);
      }
    };

    const frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [duration, onComplete]);

  const content = (
    <div className="relative flex flex-col items-center justify-center p-6 select-none z-10">
      {/* Ambient background aura */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#6c38ff]/20 via-[#a855f7]/15 to-transparent blur-3xl pointer-events-none" />

      {/* Futuristic Gyroscope Orb */}
      <div className="mb-6 sm:mb-8">
        <LoaderOrb size={150} />
      </div>

      {/* Brand Title with Gradient Highlight */}
      {showBrand && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            TechStore<span className="text-[#6c38ff]">.</span>
          </h2>
          <p className="text-xs text-gray-400 font-medium tracking-wide mt-1">
            Premium Tech Accessories & Essentials
          </p>
        </motion.div>
      )}

      {/* Animated Dynamic Progress & Status Indicator */}
      <LoaderProgress progress={progress} />
    </div>
  );

  if (!fullScreen) {
    return (
      <div className="w-full py-12 flex items-center justify-center bg-[#090912] rounded-3xl">
        {content}
      </div>
    );
  }

  return (
    <motion.div
      variants={loaderFadeOut}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-[#090912] flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Grid Mesh */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {content}
    </motion.div>
  );
};

export default TechLoader;

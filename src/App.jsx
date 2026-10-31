import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { router } from "./router/index.jsx";
import { ToastProvider } from "./utils/toast.jsx";
import { TechLoader } from "./components/loader/TechLoader.jsx";

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ToastProvider>
      {/* Amazing Tech Loader with smooth exit transition */}
      <AnimatePresence>
        {isLoading && (
          <TechLoader
            duration={1800}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <RouterProvider router={router} />

      {/* Floating Demo Trigger to Replay Loader Anytime */}
      <div className="fixed bottom-5 left-5 z-50">
        <button
          onClick={() => setIsLoading(true)}
          title="Click to replay the loader animation"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111126]/90 hover:bg-[#1b1b36] text-white text-xs font-semibold backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-900/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse group-hover:bg-[#38bdf8]" />
          <span>Preview Loader</span>
        </button>
      </div>
    </ToastProvider>
  );
}

export default App;

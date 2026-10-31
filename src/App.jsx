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
    </ToastProvider>
  );
}

export default App;

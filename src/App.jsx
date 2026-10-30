import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { ToastProvider } from "./utils/toast.jsx";

export function App() {
  return (
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  );
}

export default App;

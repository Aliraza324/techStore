import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import { Footer } from "./Footer.jsx";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 text-gray-900 selection:bg-[#6c38ff] selection:text-white font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

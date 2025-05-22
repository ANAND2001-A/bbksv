// layouts/MainLayout.jsx

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FloatingActionButton from "../components/FloatingActionButton.jsx";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* Apply padding only here to offset the fixed navbar */}
      <main > {/* 96px = 24 * 4px (adjust if needed) */}
        <Outlet />
      </main>
      <FloatingActionButton />
      <Footer />
    </>
  );
};

export default MainLayout;

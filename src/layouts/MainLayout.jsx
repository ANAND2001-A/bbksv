import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FloatingActionButton from "../components/FloatingActionButton.jsx";

const MainLayout = ({ children }) => {  // Corrected prop name here
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        {children} {/* This renders the nested child route like Home */}
      </main>
      <FloatingActionButton />
      <Footer />
    </>
  );
};

export default MainLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FloatingActionButton from "../components/FloatingActionButton.jsx";

const MainLayout = ({childern}) => {
  return (
    <>
      <Navbar />
      <main >
        <Outlet /> 
        {childern}{/* Renders the nested child route like Home */}
      </main>
      <FloatingActionButton />
      <Footer />
    </>
  );
};

export default MainLayout;

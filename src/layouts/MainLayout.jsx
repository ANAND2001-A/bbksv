import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
// import Footer from "../component/Footer.jsx";
// import FloatingActionButton from "../pages/FloatingActionButton.jsx";

const Layout = ({childern}) => {
  return (
    <>
      <Navbar />
      <main >
        <Outlet /> 
        {childern}{/* Renders the nested child route like Home */}
      </main>
      {/* <FloatingActionButton /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

import React from "react";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import TestimonialPage from "../components/TestimonialPage.jsx";
import OverFacilities from "../components/OverFacilities.jsx";
import Frequently from "../components/Frequently.jsx";
import GallarySection from "../pages/GallarySection.jsx";





function MainRoute() {
    return (
      <>
      <div >
      {/* Gradient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#52BDAA] opacity-40 rounded-full blur-3xl z-0" />
      <div className="absolute top-[30%] left-[30%] w-[350px] h-[350px] bg-[#FFFFFF] opacity-50 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-[#54BE96] opacity-40 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-[#FFD6D6] opacity-30 rounded-full blur-3xl z-0" />
      <Home />
      <GallarySection />
      </div>
      
      <OverFacilities />
      <Contact />
      <Frequently />
      <TestimonialPage />
        </>
  );
}

export default MainRoute;

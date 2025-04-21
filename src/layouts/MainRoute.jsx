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
      <Home />
      <GallarySection />
      
      <OverFacilities />
      <Contact />
      <Frequently />
      <TestimonialPage />
        </>
  );
}

export default MainRoute;

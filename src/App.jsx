import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import MainLayout from "./layouts/MainLayout.jsx";
import MainRoute from "./layouts/MainRoute.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
        <Route index element={<MainRoute />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

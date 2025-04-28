import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';

import MainLayout from "./layouts/MainLayout.jsx";
import MainRoute from "./layouts/MainRoute.jsx";
import About from "./pages/About.jsx";
import Teacher from "./pages/Teacher.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import GallarySection from "./pages/GallarySection.jsx";
import Courses from "./pages/Courses.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
        <Route index element={<MainRoute />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="teacher" element={<Teacher/>} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/gallary" element={<GallarySection />} />
        <Route path="/courses" element= {<Courses />}    />   
       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Layouts
import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

// Pages
import MainRoute from "./layouts/MainRoute.jsx";
import About from "./pages/About.jsx";
import Teacher from "./pages/Teacher.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import GallarySection from "./pages/GallarySection.jsx";
import Courses from "./pages/Courses.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";

// Auth Components
import Login from "./components/auth/Login.jsx";
import Signup from "./components/auth/Signin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main site layout - Navbar + Footer */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainRoute />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallary" element={<GallarySection />} />
          <Route path="successstories" element={<SuccessStories />} />
        </Route>

        {/* Auth layout - no Navbar or Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

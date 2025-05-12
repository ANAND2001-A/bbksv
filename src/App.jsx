import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Layouts
import AuthLayout from "./layouts/AuthLayout"; // Wrapper that syncs Firebase auth state
import MainLayout from "./layouts/MainLayout.jsx";

// Pages
import MainRoute from "./layouts/MainRoute.jsx";
import About from "./pages/About.jsx";
import Teacher from "./pages/Teacher.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import GallarySection from "./pages/GallarySection.jsx";
import Courses from "./pages/Courses.jsx";
import SuccessStories from "./pages/SuccessStories.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthLayout>
        <Routes>
          {/* Main site layout with Navbar + Footer */}
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

          {/* Auth pages - shown without MainLayout */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthLayout>
    </BrowserRouter>
  );
}

export default App;

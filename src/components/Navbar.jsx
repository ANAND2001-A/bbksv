// Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logos/bbksv.png';
import CustomButton from './CustomButton';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { GiTeacher } from "react-icons/gi";
import whatsappAnimation from '../assets/icon/whatsapp.json';
import Lottie from "lottie-react";
import useAuthStore from '../store/useAuthStore';
import { logoutUser } from '../firebase';
import img from '../assets/icon/logout.svg';
import loginImg from '../assets/icon/log-in.png';

export default function Navbar({ children }) {
  const [showLandings, setShowLandings] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const landingsRef = useRef(null);
  const pagesRef = useRef(null);
  const navigate = useNavigate();
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    navigate('/');
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (landingsRef.current && !landingsRef.current.contains(event.target)) {
        setShowLandings(false);
      }
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setShowPages(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const linkClass = (hash) =>
    `bg-transparent p-3 rounded-full flex text-[1.1rem] text-white hover:bg-black/30 transition-all duration-300 ${activeNav === hash ? 'bg-[#005B96] text-white' : ''}`;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="px-4 py-3 hidden lg:block fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img className="w-15 h-15 object-cover rounded-full cursor-pointer" src={logo} alt="logo" />
              <span className="text-2xl font-bold text-[#005B96]">बाबा बी.के. स्मारक विद्यालय</span>
            </div>
          </Link>

          <div className="backdrop-blur-md bg-white/30 text-[#005B96] rounded-full px-8 py-3 flex items-center gap-6 shadow-lg border border-white/40 transition-all duration-300">
            <Link to="/" className="font-medium">Home</Link>
            <div className="relative" ref={landingsRef}>
              <div
                onClick={() => setShowLandings(!showLandings)}
                className="flex items-center gap-1 cursor-pointer font-medium text-[#005B96] hover:text-blue-700 transition-colors duration-200"
              >
                <span>Courses</span>
                <IoChevronDown
                  className={`text-sm transform transition-transform duration-300 ${showLandings ? "rotate-180" : ""}`}
                />
              </div>

              {showLandings && (
                <div className="absolute left-0 top-full mt-3 z-30 w-56 animate-dropdown-fade">
                  {/* Dropdown Arrow */}
                  <div className="absolute top-0 left-6 w-3 h-3 bg-white/70 rotate-45 shadow -translate-y-1/2 backdrop-blur-md border border-white/30"></div>

                  {/* Dropdown Menu */}
                  <div className="rounded-xl bg-white/60 backdrop-blur-md shadow-2xl border border-white/30 py-3 px-2 transition-all duration-300">
                    <Link
                      to="/courses"
                      className="block px-4 py-2 rounded-lg hover:bg-blue-100/50 hover:text-blue-900 transition duration-200"
                    >
                      Courses 1
                    </Link>
                    <Link
                      to="/courses-advanced"
                      className="block px-4 py-2 rounded-lg hover:bg-blue-100/50 hover:text-blue-900 transition duration-200"
                    >
                      Advanced Courses
                    </Link>
                    <Link
                      to="/workshops"
                      className="block px-4 py-2 rounded-lg hover:bg-blue-100/50 hover:text-blue-900 transition duration-200"
                    >
                      Workshops
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/teacher">Teacher</Link>
            <Link to="/gallary">Gallary</Link>
            <Link to="/successstories">Dashboard</Link>
            <div className="relative" ref={pagesRef}>
              <div
                onClick={() => setShowPages(!showPages)}
                className="flex items-center gap-1 cursor-pointer font-medium text-[#005B96] hover:text-blue-700 transition-colors duration-200"
              >
                <span>Pages</span>
                <IoChevronDown
                  className={`text-sm transform transition-transform duration-300 ${showPages ? "rotate-180" : ""}`}
                />
              </div>

              {showPages && (
                <div className="absolute left-0 top-full mt-3 z-30 w-56 animate-dropdown-fade">
                  {/* Dropdown arrow */}
                  <div className="absolute top-0 left-6 w-3 h-3 bg-white/70 rotate-45 shadow -translate-y-1/2 backdrop-blur-md border border-white/30"></div>

                  {/* Dropdown menu */}
                  <div className="rounded-xl bg-white/60 backdrop-blur-md shadow-2xl border border-white/30 py-3 px-2 transition-all duration-300">
                    <Link
                      to="/about"
                      className="block px-4 py-2 rounded-lg hover:bg-blue-100/50 hover:text-blue-900 transition duration-200"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 rounded-lg hover:bg-blue-100/50 hover:text-blue-900 transition duration-200"
                    >
                      Contact
                    </Link>
                    <Link
                      to="/blog"
                      className="block px-4 py-2 rounded-lg hover:bg-blue-100/50 hover:text-blue-900 transition duration-200"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>

          <div className="flex items-center gap-3">
            <a href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!" target="_blank" rel="noopener noreferrer">
              <Lottie animationData={whatsappAnimation} loop autoplay className="w-20 h-20" />
            </a>
            {user ? (
              <img src={img} className='h-6 w-6 cursor-pointer' onClick={handleLogout} alt="Logout" />
            ) : (
              <Link to="/signup"><CustomButton>Signup</CustomButton></Link>
            )}
            <Link to="/contact">
              <CustomButton>Contact</CustomButton>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="px-4 py-2 flex items-center justify-between lg:hidden fixed top-0 left-0 right-0 z-50 bg-transparent">
        <img className="w-10 h-10 object-cover rounded-full" src={logo} alt="logo" />
        <div className="flex items-center gap-3">
          {user ? (
            <img src={img} className='h-6 w-6 cursor-pointer' onClick={handleLogout} alt="Logout" />
          ) : (
            <Link to="/signup"><CustomButton>Signup</CustomButton></Link>
          )}
          <Link to="/contact">
            <CustomButton>Contact</CustomButton>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="bg-black/20 w-max px-6 py-3 fixed left-1/2 bottom-4 -translate-x-1/2 z-40 flex gap-3 rounded-full backdrop-blur-md lg:hidden">
        <a href="/" onClick={() => setActiveNav('/')} className={linkClass('#home')}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('/teacher')} className={linkClass('#about')}><AiOutlineUser /></a>
        <a href="/gallary" onClick={() => setActiveNav('/gallary')} className={linkClass('#experience')}><BiBook /></a>
        <a href="/gallary" onClick={() => setActiveNav('/gallary')} className={linkClass('#portfolio')}><RiServiceLine /></a>
        <a href="/teacher" onClick={() => setActiveNav('/teacher')} className={linkClass('#contact')}><GiTeacher /></a>
      </nav>

      <div className="pt-[80px] lg:pt-0">{children}</div>
    </>
  );
}
import React, { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/bbksv.png';
import CustomButton from './CustomButton';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { GiTeacher } from "react-icons/gi";

export default function Navbar({ children }) {
  const [showLandings, setShowLandings] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const landingsRef = useRef(null);
  const pagesRef = useRef(null);

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
    `bg-transparent p-3 rounded-full flex text-[1.1rem] text-white 
    hover:bg-black/30 transition-all duration-300 ${
      activeNav === hash ? 'bg-[#005B96] text-white' : ''
    }`;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white px-4 py-3 shadow-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 object-cover rounded-full" src={logo} alt="logo" />
            <span className="text-2xl font-bold text-[#005B96]">बाबा बी.के. स्मारक विद्यालय</span>
          </div>

          {/* Menu */}
          <div className="bg-blue-50 text-[#005B96] rounded-full px-6 py-2 flex items-center gap-6 shadow-sm relative">
            <Link to="/" className="font-medium">Home</Link>

            {/* Courses Dropjdnjdown */}
            <div className="relative" ref={landingsRef}>
              <div onClick={() => setShowLandings(!showLandings)} className="flex items-center gap-1 cursor-pointer">
                <span>Courses</span>
                <IoChevronDown className="text-sm" />
              </div>
              {showLandings && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-md w-40 py-2 z-20 text-[#005B96] flex flex-col">
                  <Link to="/courses/1" className="block px-4 py-2 hover:bg-gray-100">Courses 1</Link>
                  <Link to="/courses/2" className="block px-4 py-2 hover:bg-gray-100">Courses 2</Link>
                  <Link to="/courses/3" className="block px-4 py-2 hover:bg-gray-100">Courses 3</Link>
                </div>
              )}
            </div>

            <Link to="/teacher">Teacher</Link>
            <Link to="/gallary">Gallary</Link>
            <Link to="/admin">Dashboard</Link>

            {/* Pages Dropdown */}
            <div className="relative" ref={pagesRef}>
              <div onClick={() => setShowPages(!showPages)} className="flex items-center gap-1 cursor-pointer">
                <span>Pages</span>
                <IoChevronDown className="text-sm" />
              </div>
              {showPages && (
                <div className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-md w-40 py-2 z-20 text-[#005B96] flex flex-col">
                  <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About</Link>
                  <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link>
                  <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!" target="_blank" rel="noopener noreferrer">
              <button className="border border-[#005B96] rounded-full p-2">
                <FaWhatsapp className="text-[#005B96]" />
              </button>
            </a>
            <Link to="/contact">
              <CustomButton type="submit">Contact</CustomButton>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Top Nav */}
      <div className="bg-white shadow-sm px-4 py-3 flex items-center justify-between lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 object-cover rounded-full" src={logo} alt="logo" />
          <span className="text-base font-semibold text-[#005B96]">BBKSV</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!" target="_blank" rel="noopener noreferrer">
            <button className="border border-[#005B96] rounded-full p-2">
              <FaWhatsapp className="text-[#005B96]" />
            </button>
          </a>
          <Link to="/contact">
            <CustomButton type="submit">Contact</CustomButton>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Nav ghjuytrghjtrtyjn*/}
      <nav className="bg-black/30 w-max px-6 py-3 fixed left-1/2 bottom-4 -translate-x-1/2 z-40 flex gap-3 rounded-full backdrop-blur-md lg:hidden">
        <a href="/" onClick={() => setActiveNav('/')} className={linkClass('#home')}>
          <AiOutlineHome />
        </a>
        <a href="#about" onClick={() => setActiveNav('/teacher')} className={linkClass('#about')}>
          <AiOutlineUser />
        </a>
        <a href="/gallary" onClick={() => setActiveNav('/gallary')} className={linkClass('#experience')}>
          <BiBook />
        </a>
        <a href="/gallary" onClick={() => setActiveNav('/gallary')} className={linkClass('#portfolio')}>
          <RiServiceLine />
        </a>
        <a href="/teacher" onClick={() => setActiveNav('/teacher')} className={linkClass('#contact')}>
          <GiTeacher />
        </a>
      </nav>

      {/* 👇 Page content wrapper with padding ajbhjhbdgbh ef*/}
      <div className="pt-[70px] lg:pt-0">
        {children}
      </div>
    </>
  );
}

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
    `bg-transparent p-3 rounded-full flex text-[1.1rem] text-white 
    hover:bg-black/30 transition-all duration-300 ${activeNav === hash ? 'bg-[#005B96] text-white' : ''}`;

  return (
    <>
      {/* Desktop Navbar */}
      {/* <nav className="bg-white px-4 py-3 shadow-sm hidden lg:block"> */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-2">
              <img className="w-15 h-15 object-cover rounded-full cursor-pointer" src={logo} alt="logo" />
              <span className="text-2xl font-bold text-[#005B96]">बाबा बी.के. स्मारक विद्यालय</span>
            </div>
          </Link>

          {/* Menu */}
          <div className="bg-blue-50 text-[#005B96] rounded-full px-6 py-2 flex items-center gap-6 shadow-sm relative">
            <Link to="/" className="font-medium">Home</Link>

            <div className="relative" ref={landingsRef}>
              <div onClick={() => setShowLandings(!showLandings)} className="flex items-center gap-1 cursor-pointer">
                <span>Courses</span>
                <IoChevronDown className="text-sm" />
              </div>
              {showLandings && (
                <div className="absolute left-0 top-full mt-2 z-20">
                  <div className="absolute top-0 left-4 w-3 h-3 bg-white rotate-45 shadow-md -translate-y-1/2"></div>
                  <div className="bg-blue-50 rounded-md shadow-md w-40 py-2 text-[#005B96] flex flex-col">
                    <Link to="/courses" className="block px-4 py-2 hover:bg-gray-100">Courses 1</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/teacher">Teacher</Link>
            <Link to="/gallary">Gallary</Link>
            <Link to="/successstories">Dashboard</Link>

            <div className="relative" ref={pagesRef}>
              <div onClick={() => setShowPages(!showPages)} className="flex items-center gap-1 cursor-pointer">
                <span>Pages</span>
                <IoChevronDown className="text-sm" />
              </div>
              {showPages && (
                <div className="absolute left-0 top-full mt-2 z-20">
                  <div className="absolute top-0 left-4 w-3 h-3 bg-white rotate-45 shadow-md -translate-y-1/2"></div>
                  <div className="bg-blue-50 rounded-md shadow-md w-40 py-2 text-[#005B96] flex flex-col">
                    <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">About</Link>
                    <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</Link>
                    <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full hover:bg-[#25D366]/10 transition duration-200"
              aria-label="Chat with us on WhatsApp"
            >
              <Lottie animationData={whatsappAnimation} loop autoplay className="w-20 h-20" />
            </a>

            {user ? (
              <img src={img} className='h-6 w-6' onClick={handleLogout}></img>
            ) : (
              <>
                <Link to="/login">
                  <img src={loginImg} alt="Login" className="w-6 h-6 object-contain cursor-pointer" />
                </Link>

                <Link to="/signup"><CustomButton>Signup</CustomButton></Link>
              </>
            )}

            <Link to="/contact">
              <CustomButton type="submit" className="mt-3">Contact</CustomButton>
            </Link>
          </div>
        </div>
      {/* </nav> */}

      {/* Mobile Top Nav */}
      <div className="bg-white shadow-sm px-4 py-2 flex items-center justify-between lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 object-cover rounded-full" src={logo} alt="logo" />
          <span className="text-base font-semibold text-[#005B96]">BBKSV</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full hover:bg-[#25D366]/10 transition duration-200"
            aria-label="Chat with us on WhatsApp"
          >
            <Lottie animationData={whatsappAnimation} loop autoplay className="w-20 h-20" />
          </a>

          {user ? (
            <img src={img} className='h-6 w-6' onClick={handleLogout}></img>

          ) : (
            <>
              <Link to="/login">
                <img src={loginImg} alt="Login" className="w-6 h-6 object-contain cursor-pointer" />
              </Link>              
              <Link to="/signup"><CustomButton>Signup</CustomButton></Link>
            </>
          )}

          <Link to="/contact">
            <CustomButton type="submit">Contact</CustomButton>
          </Link>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
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

      {/* Page content wrapper with padding */}
      <div className="pt-[70px] lg:pt-0">
        {children}
      </div>
    </>
  );
}
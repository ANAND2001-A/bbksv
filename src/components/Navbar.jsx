import React, { useEffect, useRef, useState } from 'react';
import { FaPersonBooth, FaWhatsapp } from 'react-icons/fa';
import { IoChevronDown, IoLogIn } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/bbksv.png';
import CustomButton from './CustomButton';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { GiTeacher } from "react-icons/gi";
import whatsappAnimation from '../assets/icon/whatsapp.json';
import Lottie from "lottie-react";
import useAuthStore from '../store/authStore'; // Named import
import img from '../assets/icon/log-in.png';


export default function Navbar({ children }) {
  const [showLandings, setShowLandings] = useState(false);
  const [showPages, setShowPages] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const { user, clearUser } = useAuthStore(); // Getting user state from zustand store


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
    hover:bg-black/30 transition-all duration-300 ${activeNav === hash ? 'bg-[#005B96] text-white' : ''
    }`;

  const handleLogout = () => {
    clearUser();  // Clear the user data on logout
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white px-4 py-3 shadow-sm hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-2">

              <img
                className="w-15 h-15 object-cover rounded-full cursor-pointer"
                src={logo}
                alt="logo"
              />

              <span className="text-2xl font-bold text-[#005B96]">
                बाबा बी.के. स्मारक विद्यालय
              </span>
            </div>
          </Link>

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
                <div className="absolute left-0 top-full mt-2 z-20">
                  {/* Pointer */}
                  <div className="absolute top-0 left-4 w-3 h-3 bg-white rotate-45 shadow-md -translate-y-1/2"></div>

                  {/* Dropdown Box */}
                  <div className="bg-blue-50 rounded-md shadow-md w-40 py-2 text-[#005B96] flex flex-col">
                    <Link to="/courses" className="block px-4 py-2 hover:bg-gray-100">Courses 1</Link>
                    {/* <Link to="/courses" className="block px-4 py-2 hover:bg-gray-100">Courses 2</Link>
                    <Link to="/courses" className="block px-4 py-2 hover:bg-gray-100">Courses 3</Link> */}
                  </div>
                </div>

              )}
            </div>

            <Link to="/teacher">Teacher</Link>
            <Link to="/gallary">Gallary</Link>
            <Link to="/successstories">Dasbord</Link>

            {/* Pages Dropdown */}
            <div className="relative" ref={pagesRef}>
              <div onClick={() => setShowPages(!showPages)} className="flex items-center gap-1 cursor-pointer">
                <span>Pages</span>
                <IoChevronDown className="text-sm" />
              </div>
              {showPages && (
                <div className="absolute left-0 top-full mt-2 z-20">
                  {/* Pointer */}
                  <div className="absolute top-0 left-4 w-3 h-3 bg-white rotate-45 shadow-md -translate-y-1/2"></div>

                  {/* Dropdown Box */}
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
              // User is logged in, show logout and dashboard
              <>
                <Link to="/dashboard">
                  <CustomButton>Dashboard</CustomButton>
                </Link>
                <button onClick={handleLogout} className="text-4xl text-[#005B96] hover:text-blue-500 transition duration-200">
                  Logout
                </button>
              </>
            ) : (
              // User is not logged in, show login and signup
              <>
                <Link to="/login">
                <img className="h-6 w-6 transition duration-200" src={img} alt="Login" />
             </Link>
                {/* <Link to="/signup">
                  <FaPersonBooth className="text-4xl text-[#005B96] hover:text-blue-500 transition duration-200" />
                </Link> */}
              </>
            )}


            <Link to="/contact">
              <CustomButton type="submit" className='mt-3'>Contact</CustomButton>
            </Link>
          </div>
        </div>
      </nav>

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
              // User is logged in, show logout and dashboard
              <>
                <Link to="/dashboard">
                  <CustomButton>Dashboard</CustomButton>
                </Link>
                <button onClick={handleLogout} className="text-4xl text-[#005B96] hover:text-blue-500 transition duration-200">
                  Logout
                </button>
              </>
            ) : (
              // User is not logged in, show login and signup
              <>
                <Link to="/login">
                <img className="h-6 w-6 transition duration-200" src={img} alt="Login" />
             </Link>
                {/* <Link to="/signup">
                  <FaPersonBooth className="text-4xl text-[#005B96] hover:text-blue-500 transition duration-200" />
                </Link> */}
              </>
            )}




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





// import React, { useEffect, useRef, useState } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
// import { IoChevronDown } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import logo from '../assets/logos/bbksv.png';
// import CustomButton from './CustomButton';
// import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
// import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
// import { RiServiceLine } from 'react-icons/ri';
// import { GiTeacher } from "react-icons/gi";
// import whatsappAnimation from '../assets/icon/whatsapp.json';
// import Lottie from "lottie-react";

// export default function Navbar({ children }) {
//   const [showLandings, setShowLandings] = useState(false);
//   const [showPages, setShowPages] = useState(false);
//   const [activeNav, setActiveNav] = useState('#home');

//   const landingsRef = useRef(null);
//   const pagesRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (landingsRef.current && !landingsRef.current.contains(event.target)) {
//         setShowLandings(false);
//       }
//       if (pagesRef.current && !pagesRef.current.contains(event.target)) {
//         setShowPages(false);
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const linkClass = (hash) =>
//     `bg-transparent p-3 rounded-full flex text-[1.1rem] text-white 
//     hover:bg-black/30 transition-all duration-300 ${activeNav === hash ? 'bg-[#005B96] text-white' : ''
//     }`;

//   // Handle keyboard navigation for accessibility
//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' || e.key === ' ') {
//       setShowLandings(!showLandings);
//     } else if (e.key === 'Escape') {
//       setShowLandings(false);
//     }
//   };

//   return (
//     <>
//       {/* Desktop Navbar */}
//       <nav className="bg-white px-4 py-3 shadow-sm hidden lg:block">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/">
//             <div className="flex items-center gap-2">
//               <img
//                 className="w-15 h-15 object-cover rounded-full cursor-pointer"
//                 src={logo}
//                 alt="logo"
//               />
//               <span className="text-2xl font-bold text-[#005B96]">
//                 बाबा बी.के. स्मारक विद्यालय
//               </span>
//             </div>
//           </Link>

//           {/* Menu */}
//           <div className="bg-blue-50 text-[#005B96] rounded-full px-6 py-2 flex items-center gap-6 shadow-sm relative">
//             <Link to="/" className="font-medium">Home</Link>

//             {/* Courses Dropdown */}
//             <div className="relative" ref={landingsRef}>
//               <motion.div
//                 onClick={() => setShowLandings(!showLandings)}
//                 onKeyDown={handleKeyDown}
//                 tabIndex={0}
//                 className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }}
//                 whileTap={{ scale: 0.95 }}
//                 role="button"
//                 aria-expanded={showLandings}
//                 aria-haspopup="true"
//               >
//                 <span className="font-semibold">Courses</span>
//                 <motion.span
//                   animate={{ rotate: showLandings ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </motion.span>
//               </motion.div>
//               <AnimatePresence>
//                 {showLandings && (
//                   <motion.div
//                     className="absolute left-0 top-full mt-4 z-20"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3, type: 'spring', damping: 20 }}
//                   >
//                     <motion.div
//                       className="absolute top-0 left-8 w-4 h-4 bg-gradient-to-br from-white to-blue-100 rotate-45 shadow-lg -translate-y-1/2"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       exit={{ scale: 0 }}
//                       transition={{ duration: 0.2 }}
//                     ></motion.div>
//                     <motion.div
//                       className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl w-40 py-3 text-gray-800 flex flex-col border border-blue-100"
//                       style={{ filter: 'url(#gooey)' }}
//                     >
//                       <Link
//                         to="/courses"
//                         className="block px-5 py-3 hover:bg-blue-100 hover:text-blue-700 font-medium transition-all duration-200"
//                         onClick={() => setShowLandings(false)}
//                       >
//                         All Courses
//                       </Link>
//                       <Link
//                         to="/courses/web"
//                         className="block px-5 py-3 hover:bg-blue-100 hover:text-blue-700 font-medium transition-all duration-200"
//                         onClick={() => setShowLandings(false)}
//                       >
//                         Web Development
//                       </Link>
//                       <Link
//                         to="/courses/data"
//                         className="block px-5 py-3 hover:bg-blue-100 hover:text-blue-700 font-medium transition-all duration-200"
//                         onClick={() => setShowLandings(false)}
//                       >
//                         Data Science
//                       </Link>
//                     </motion.div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link to="/teacher">Teacher</Link>
//             <Link to="/gallary">Gallary</Link>
//             <Link to="/dasbord">Dasbord</Link>

//             {/* Pages Dropdown */}
//             <div className="relative" ref={pagesRef}>
//               <div onClick={() => setShowPages(!showPages)} className="flex items-center gap-1 cursor-pointer">
//                 <span>Pages</span>
//                 <IoChevronDown className="text-sm" />
//               </div>
//               {showPages && (
//                 <div className="absolute left-0 top-full mt-2 z-20">
//                   {/* Pointer */}
//                   <div className="absolute top-0 left-4 w-3 h-3 bg-white rotate-45 shadow-md -translate-y-1/2"></div>

//                   {/* Dropdown Box */}
//                   <div className="bg-blue-50 rounded-md shadow-md w-40 py-2 text-[#005B96] flex flex-col">
//                     <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">About</Link>
//                     <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact</Link>
//                     <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</Link>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex items-center gap-3">
//             <a
//               href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center rounded-full hover:bg-[#25D366]/10 transition duration-200"
//               aria-label="Chat with us on WhatsApp"
//             >
//               <Lottie animationData={whatsappAnimation} loop autoplay className="w-20 h-20" />
//             </a>
//             <Link to="/contact">
//               <CustomButton type="submit" className='mt-3'>Contact</CustomButton>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Top Nav */}
//       <div className="bg-white shadow-sm px-4 py-2 flex items-center justify-between lg:hidden fixed top-0 left-0 right-0 z-50">
//         <div className="flex items-center gap-2">
//           <img className="w-10 h-10 object-cover rounded-full" src={logo} alt="logo" />
//           <span className="text-base font-semibold text-[#005B96]">BBKSV</span>
//         </div>

//         <div className="flex items-center gap-3">
//           <a
//             href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center justify-center rounded-full hover:bg-[#25D366]/10 transition duration-200"
//             aria-label="Chat with us on WhatsApp"
//           >
//             <Lottie animationData={whatsappAnimation} loop autoplay className="w-20 h-20" />
//           </a>
//           <Link to="/contact">
//             <CustomButton type="submit">Contact</CustomButton>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Bottom Nav */}
//       <nav className="bg-black/30 w-max px-6 py-3 fixed left-1/2 bottom-4 -translate-x-1/2 z-40 flex gap-3 rounded-full backdrop-blur-md lg:hidden">
//         <a href="/" onClick={() => setActiveNav('/')} className={linkClass('#home')}>
//           <AiOutlineHome />
//         </a>
//         <a href="#about" onClick={() => setActiveNav('/teacher')} className={linkClass('#about')}>
//           <AiOutlineUser />
//         </a>
//         <a href="/gallary" onClick={() => setActiveNav('/gallary')} className={linkClass('#experience')}>
//           <BiBook />
//         </a>
//         <a href="/gallary" onClick={() => setActiveNav('/gallary')} className={linkClass('#portfolio')}>
//           <RiServiceLine />
//         </a>
//         <a href="/teacher" onClick={() => setActiveNav('/teacher')} className={linkClass('#contact')}>
//           <GiTeacher />
//         </a>
//       </nav>

//       {/* Page content wrapper with padding */}
//       <div className="pt-[70px] lg:pt-0">
//         {children}
//       </div>

//       {/* Gooey Filter for Dropdown */}
//       <svg style={{ position: 'absolute', width: 0, height: 0 }}>
//         <filter id="gooey">
//           <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
//           <feColorMatrix
//             in="blur"
//             mode="matrix"
//             values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
//             result="gooey"
//           />
//           <feBlend in="SourceGraphic" in2="gooey" />
//         </filter>
//       </svg>
//     </>
//   );
// }
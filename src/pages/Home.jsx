import React from 'react';
import studentImg from '../assets/logos/home_img/homeimg.svg';
import bgTopLeft from '../assets/logos/home_img/greencircle.svg';
import bgCenter from '../assets/logos/home_img/whitecircle.svg';
import bgRightCenter from '../assets/logos/home_img/greencircle.svg';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import line from '../assets/logos/home_img/line.svg';

const Home = () => {
  return (
    <div className="relative max-w-[1360px] mx-auto px-6 py-12 grid md:grid-cols-2 items-center gap-6 overflow-hidden">
      {/* Background Images */}
      <img
        src={bgTopLeft}
        alt="Decoration"
        className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 opacity-30 pointer-events-none"
      />
      <img
        src={bgCenter}
        alt="Decoration"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-20 pointer-events-none"
      />
      <img
        src={bgRightCenter}
        alt="Decoration"
        className="absolute right-0 top-1/3 w-32 h-32 md:w-40 md:h-40 opacity-30 pointer-events-none"
      />

      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#191A15] mb-6">
          Education for <br /> a Better Tomorrow
          <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img
          src={line}
          alt="Student"
          className="w-72 h-auto object-cover"
        />
      </motion.div>
        </h1>

        <p className="text-lg text-[#A6A6A6] mb-8">
          "Organize Smarter, Learn Better — Simplify Everyday Tasks with the Taskio Dashboard at <span className="text-[#54BD95] font-medium">बाबा बी.के. स्मारक विद्यालय</span>"
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-[#54BD95] text-white px-6 py-3 rounded-full font-medium transition">
            Enroll Now
          </button>
          <button className="flex items-center gap-2 px-5 py-3 rounded-full text-[#191A15] transition">
          <div className="p-2 rounded-full border border-[#191A15] inline-flex items-center justify-center">
      <FaPlay size={14} />
    </div>
            View Videos
          </button>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img
          src={studentImg}
          alt="Student"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Home;

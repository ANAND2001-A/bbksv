import React from 'react';
import studentImg from '../assets/logos/home_img/homeimg.svg';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import line from '../assets/logos/home_img/line.svg';

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#52BDAA] opacity-40 rounded-full blur-3xl z-0" />
      <div className="absolute top-[30%] left-[30%] w-[350px] h-[350px] bg-[#FFFFFF] opacity-50 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-[#54BE96] opacity-40 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-[#FFD6D6] opacity-30 rounded-full blur-3xl z-0" />

      {/* Content Section */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 pt-28 pb-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#191A15] mb-6">
            Education for <br /> a Better Tomorrow
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mt-2"
            >
              <img
                src={line}
                alt="Line Decoration"
                className="w-52 sm:w-72 h-auto object-cover mx-auto md:mx-0"
              />
            </motion.div>
          </h1>

          <p className="text-base sm:text-lg text-[#A6A6A6] mb-8 max-w-lg mx-auto md:mx-0">
            "Organize Smarter, Learn Better — Simplify Everyday Tasks with the Taskio Dashboard at{' '}
            <span className="text-[#54BD95] font-medium">बाबा बी.के. स्मारक विद्यालय</span>"
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
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
    </div>
  );
};

export default Home;

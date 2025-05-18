import React from 'react';
import studentImg from '../assets/logos/home_img/homeimg.svg'; // Replace with actual walking boy image
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="max-w-[1360px] mx-auto px-6 py-12 grid md:grid-cols-2 items-center gap-6">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
          Education for <br /> a Better Tomorrow
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          "Organize Smarter, Learn Better — Simplify Everyday Tasks with the Taskio Dashboard at <span className="text-[#54BD95] font-medium">बाबा बी.के. स्मारक विद्यालय</span>"
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-[#54BD95] hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition">
            Enroll Now
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-full text-gray-700 hover:bg-gray-100 transition">
            <FaPlay size={14} />
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

import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from "../assets/logos/bbksv.png";
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 px-22 py-15">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <div className="flex items-center gap-2">
            <img className="w-15 h-15 object-cover rounded-fulls" src={logo} alt="logo.jpg" />
            <span className="text-2xl font-bold text-[#005B96]">बाबा बी.के. स्मारक विद्यालय</span>
          </div>


          <p className="mb-4 mt-3 font-semibold">Get In Touch</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-lg">🧩</span>
              <span>Baba B.K. Smarak Vidyalaya</span>
            </li>
            <li className="flex items-center gap-2">
              <a href="tel:+919918341985" target="_blank" rel="noopener noreferrer" className="text-lg">📞</a>
              <span>9918341985</span>
            </li>
            <li className="flex items-center gap-2">
              <a href="mailto:yourbbksv@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg">✉️</a>
              <span>yourbbksv@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="mr-10">
          <h3 className="text-lg font-semibold mb-4">For Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#005B96]">Home</a></li>
            <li><a href="#" className="hover:text-[#005B96]">About</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Carear</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#005B96]">Physics</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Chemistry</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Mathmatics</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Biology</a></li>
            <li><a href="#" className="hover:text-[#005B96]">History</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#005B96]">Freebies</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Documentation</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Red our Blog</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Over newslatter</a></li>
            <li><a href="#" className="hover:text-[#005B96]">Free ingury guides</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 bg-blue-50 py-1 px-3 rounded-full flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">Copyright © 2025 Difmo</p>
        <div className="flex items-center gap-3 mt-2 md:mt-6 mb-3">
          <a
            href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-[#005B96] rounded-full p-2">
              <FaWhatsapp className="text-[#005B96]" />
            </button>
          </a>
          <a href="#" aria-label="Facebook" className="text-[#005B96] text-lg"><FaFacebookF /></a>
          <a href="#" aria-label="YouTube" className="text-[#005B96] text-lg"><FaYoutube /></a>
          <a href="#" aria-label="Instagram" className="text-[#005B96] text-lg"><FaInstagram /></a>
          {/* <a href="#" aria-label="Teligram" className="text-[#005B96] text-lg"><FaTeligram /></a> */}

        </div>
      </div>
    </footer>
  );
}

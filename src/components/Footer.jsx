import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaSchool,
  FaPhone,
  FaMailBulk,
} from 'react-icons/fa';
import logo from "../assets/logos/bbksv.png";
import React from 'react';
import { Link } from 'react-router-dom';

const underlineAnimation = "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#005B96] hover:after:w-full after:transition-all after:duration-300 after:rounded";

export default function Footer() {
  return (
    <footer className="bg-blue-50 text-gray-700 sm:text-center px-6 py-12 rounded-xl shadow-md  mx-30 my-4 max-w-screen-2xl ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Link to="/">
              <img
                className="w-16 h-16 object-cover rounded-full"
                src={logo}
                alt="logo"
              />
            </Link>
            <a
              href="https://www.google.com/maps/place/Baba+Bk+School/@26.1504936,82.7959568,17z"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xl font-bold text-[#005B96] ${underlineAnimation}`}
            >
              बाबा बी.के. स्मारक विद्यालय
            </a>
          </div>

          <p className="mb-4 mt-4 font-semibold">Get In Touch</p>
          <ul className="space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <FaSchool />
              <a
                href="https://www.google.com/maps/place/Baba+Bk+School"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg text-[#005B96] ${underlineAnimation}`}
              >
                बाबा बी.के. स्मारक विद्यालय
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <a
                href="tel:+919918341985"
                className={`text-lg flex items-center gap-2 ${underlineAnimation}`}
              >
                <FaPhone />
                <span>9918341985</span>
              </a>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <a
                href="mailto:yourbbksv@gmail.com"
                className={`text-lg flex items-center gap-2 ${underlineAnimation}`}
              >
                <FaMailBulk />
                <span>yourbbksv@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">For Us</h3>
          <ul className="space-y-2">
            <li><Link to="/" className={underlineAnimation}>Home</Link></li>
            <li><Link to="/about" className={underlineAnimation}>About</Link></li>
            <li><Link to="/carear" className={underlineAnimation}>Career</Link></li>
            <li><Link to="/contact" className={underlineAnimation}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className={underlineAnimation}>Physics</a></li>
            <li><a href="#" className={underlineAnimation}>Chemistry</a></li>
            <li><a href="#" className={underlineAnimation}>Mathematics</a></li>
            <li><a href="#" className={underlineAnimation}>Biology</a></li>
            <li><a href="#" className={underlineAnimation}>History</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className={underlineAnimation}>Freebies</a></li>
            <li><a href="#" className={underlineAnimation}>Documentation</a></li>
            <li><a href="#" className={underlineAnimation}>Read our Blog</a></li>
            <li><a href="#" className={underlineAnimation}>Our Newsletter</a></li>
            <li><a href="#" className={underlineAnimation}>Free Inquiry Guides</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 bg-blue-50 py-2 px-4 rounded-full flex flex-col md:flex-row items-center md:justify-between text-center">
        <p className="text-sm">© 2025 Difmo. All rights reserved.</p>
        <div className="flex items-center justify-center gap-4 mt-3 md:mt-0">
          <a
            href="https://wa.me/918948557071?text=Hi%20there%2C%20I%20want%20to%20know%20more!"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#005B96] rounded-full p-1"
          >
            <FaWhatsapp className="text-[#005B96]" />
          </a>
          <a href="https://www.facebook.com/share/1BH3JosKM5/" className="text-[#005B96] text-lg" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/@BabaBkSchool" className="text-[#005B96] text-lg" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=p834aks" className="text-[#005B96] text-lg" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

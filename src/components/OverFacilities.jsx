import React from 'react';
import {
  Bus,
  Dribbble, // We'll use Dribbble as the Playground icon
  BookOpen, // For Libraries
} from 'lucide-react'; 
import { IoWater } from 'react-icons/io5';
import { FaRestroom } from 'react-icons/fa';

const features = [
  {
    icon: <Bus className="w-6 h-6 text-blue-900" />,
    title: "College Bus Service",
    description: "Safe and comfortable transport for daily commute.",
  },
  {
    icon: <Dribbble className="w-6 h-6 text-blue-900" />,  // Playground icon
    title: "Playground",
    description: "Spacious playground for sports and physical activities.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-900" />,
    title: "Best Teachers",
    description: "Highly qualified and experienced teaching staff for exceptional learning.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-900" />,  // Libraries icon
    title: "Libraries",
    description: "A vast collection of books and digital resources for comprehensive learning.",
  },
  {
    icon: <IoWater className="w-6 h-6 text-blue-900" />,  // Fresh Water icon
    title: "Cold & Fresh Water",
    description: "Clean and refreshing water dispensers across the campus.",
  },
  {
    icon: <FaRestroom className="w-6 h-6 text-blue-900" />,  // Classrooms and Labs icon
    title: "Classrooms & Labs",
    description: "State-of-the-art classrooms and well-equipped labs for practical learning.",
  },
];

const OverFacilities = () => {
  return (
    <div className="px-6 py-12 text-center bg-white">
      <h2 className="text-3xl font-semibold mb-12">
      Over Facilities
      </h2>

      <div className="grid md:grid-cols-3 gap-6 bg-blue-50 p-6 rounded-3xl max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm text-left hover:shadow-md transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* <p className="mt-12 text-gray-800 text-lg">
        Ready to explore the facilities that shape your future?
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="px-6 py-2 rounded-full border border-blue-900 text-blue-800 hover:bg-blue-50 transition">
          Explore More
        </button>
        <button className="px-6 py-2 rounded-full bg-blue-800 text-white hover:bg-blue-900 transition">
          Contact Us
        </button>
      </div> */}
    </div>
  );
};

export default OverFacilities;

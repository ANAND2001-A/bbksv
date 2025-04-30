import React from 'react';
import {
  Bus,
<<<<<<< HEAD
  Dribbble, // We'll use Dribbble as the Playground icon
  BookOpen, // For Libraries
=======
  Dribbble,
  BookOpen,
>>>>>>> astha
} from 'lucide-react';
import { IoWater } from 'react-icons/io5';
import { FaRestroom } from 'react-icons/fa';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Bus className="w-6 h-6" />,
    title: "कॉलेज बस सेवा",
    description: "दैनिक आवागमन के लिए सुरक्षित और आरामदायक परिवहन सुविधा।",
    color: "text-yellow-400",
    border: "border-yellow-400",
  },
  {
    icon: <Dribbble className="w-6 h-6" />,
    title: "खेल का मैदान",
    description: "खेल और शारीरिक गतिविधियों के लिए विशाल मैदान।",
    color: "text-green-300",
    border: "border-green-300",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "श्रेष्ठ शिक्षक",
    description: "उच्च योग्यताप्राप्त और अनुभवी शिक्षकों द्वारा उत्कृष्ट शिक्षा।",
    color: "text-pink-300",
    border: "border-pink-300",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "पुस्तकालय",
    description: "व्यापक अध्ययन के लिए पुस्तकों और डिजिटल संसाधनों का विशाल संग्रह।",
    color: "text-red-300",
    border: "border-red-300",
  },
  {
    icon: <IoWater className="w-6 h-6" />,
    title: "ठंडा और ताज़ा पानी",
    description: "कैम्पस में स्वच्छ और ताज़ा पानी के डिस्पेंसर उपलब्ध।",
    color: "text-lime-300",
    border: "border-lime-300",
  },
  {
    icon: <FaRestroom className="w-6 h-6" />,
    title: "कक्षाएँ और प्रयोगशालाएँ",
    description: "व्यावहारिक शिक्षा के लिए अत्याधुनिक कक्षाएँ और सुसज्जित प्रयोगशालाएँ।",
    color: "text-blue-300",
    border: "border-blue-300",
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
            className={`bg-white rounded-2xl p-6 shadow-sm text-left hover:shadow-md transition border-l-4 ${feature.border}`}
          >
            <div className={`mb-4 ${feature.color}`}>{feature.icon}</div>
            <h3 className={`font-semibold text-lg mb-2 ${feature.color}`}>{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-gray-800 text-lg">
        Ready to explore the facilities that shape your future?
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <Link to={"/courses"}>
        <CustomButton>
          Explore More
        </CustomButton>
          </Link>
        <Link to={"/contact"}>
        <CustomButton >
          Contact Us
<<<<<<< HEAD
        </CustomButton>
        </Link>
=======
        </button>
>>>>>>> astha
      </div>
    </div>
  );
};

export default OverFacilities;

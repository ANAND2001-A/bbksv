import React from 'react';
import {
  Bus,
  Dribbble, // We'll use Dribbble as the Playground icon
  BookOpen, // For Libraries
} from 'lucide-react';
import { IoWater } from 'react-icons/io5';
import { FaRestroom } from 'react-icons/fa';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Bus className="w-6 h-6 text-blue-900" />,
    title: "कॉलेज बस सेवा",
    description: "दैनिक आवागमन के लिए सुरक्षित और आरामदायक परिवहन सुविधा।",
  },
  {
    icon: <Dribbble className="w-6 h-6 text-blue-900" />,  // Playground icon
    title: "खेल का मैदान",
    description: "खेल और शारीरिक गतिविधियों के लिए विशाल मैदान।",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-900" />,
    title: "श्रेष्ठ शिक्षक",
    description: "उच्च योग्यताप्राप्त और अनुभवी शिक्षकों द्वारा उत्कृष्ट शिक्षा।",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-900" />,  // Libraries icon
    title: "पुस्तकालय",
    description: "व्यापक अध्ययन के लिए पुस्तकों और डिजिटल संसाधनों का विशाल संग्रह।",
  },
  {
    icon: <IoWater className="w-6 h-6 text-blue-900" />,  // Fresh Water icon
    title: "ठंडा और ताज़ा पानी",
    description: "कैम्पस में स्वच्छ और ताज़ा पानी के डिस्पेंसर उपलब्ध।",
  },
  {
    icon: <FaRestroom className="w-6 h-6 text-blue-900" />,  // Classrooms and Labs icon
    title: "कक्षाएँ और प्रयोगशालाएँ",
    description: "व्यावहारिक शिक्षा के लिए अत्याधुनिक कक्षाएँ और सुसज्जित प्रयोगशालाएँ।",
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
        </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default OverFacilities;

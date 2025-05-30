import React from "react";
import { Star } from "lucide-react";
import img2 from "../assets/logos/bbksv.png";

// Testimonial Data
const testimonials = [
  {
    name: "Aarav Sharma",
    avatar: img2,
    rating: 5,
    review: "This college has transformed me both academically and personally. The professors are excellent, and the campus is full of opportunities.",
  },
  {
    name: "Priya Singh",
    avatar: img2,
    rating: 4,
    review: "I have learned so much here. The college has great facilities and a wonderful community that makes learning enjoyable.",
  },
  {
    name: "Rohan Verma",
    avatar: img2,
    rating: 5,
    review: "Best decision of my life! The industry exposure and the strong alumni network helped me land my dream job.",
  },
  {
    name: "Neha Gupta",
    avatar: img2,
    rating: 5,
    review: "The college's focus on practical learning and the support system is exceptional. I feel ready to face the real world after graduation.",
  },
  {
    name: "Vikas Yadav",
    avatar: img2,
    rating: 4,
    review: "A great place to grow both professionally and personally. The campus is beautiful, and the environment is welcoming.",
  },
  {
    name: "Sanya Mehta",
    avatar: img2,
    rating: 5,
    review: "I'm proud to be part of this college. The faculty is top-notch, and the extracurricular activities helped me build valuable skills.",
  },
];

// Light color backgrounds to rotate through
const bgColors = [
  "bg-blue-50",
  "bg-green-50",
  "bg-pink-50",
  "bg-yellow-50",
  "bg-purple-50",
  "bg-orange-50",
];

const TestimonialPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
        What Our Students Say
        <div className="w-full flex justify-center mb-6">
          <svg className="w-32 h-6 text-red-500" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,10 C25,20 75,0 100,10" fill="none" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105 ${
              bgColors[index % bgColors.length]
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="h-16 w-16 rounded-full ring-2 ring-blue-200"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialPage;

import React from "react";

const courses = [
  {
    title: "Science",
    description:
      "Dive into the wonders of biology, chemistry, and physics through hands-on experiments, engaging visuals, and real-world examples that make science fun and exciting.",
    icon: "🔬",
  },
  {
    title: "English",
    description:
      "Enhance grammar, vocabulary, reading, and writing skills with creative lessons and interactive storytelling for confident communication.",
    icon: "📘",
  },
  {
    title: "Mathematics",
    description:
      "Develop a strong foundation in arithmetic, algebra, geometry, and logic through fun puzzles and practical problem-solving techniques.",
    icon: "➗",
  },
  {
    title: "Computer Basics",
    description:
      "Get introduced to computers, typing, MS Office, internet browsing, and basic coding in a student-friendly format.",
    icon: "💻",
  },
  {
    title: "Moral Education",
    description:
      "Learn values, ethics, and life skills through real-life examples, moral stories, and class discussions that build strong character.",
    icon: "🧠",
  },
  {
    title: "Environmental Studies",
    description:
      "Understand our planet, sustainability, and the importance of nature through fun facts, outdoor tasks, and engaging activities.",
    icon: "🌍",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every subject is carefully designed to inspire curiosity, deepen understanding, and build confidence in every student from class 1 to 12.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-200 hover:scale-[1.02] transition"
            >
              <div className="text-5xl mb-3">{course.icon}</div>
              <h2 className="text-2xl font-semibold text-indigo-800 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-700 text-sm">{course.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-indigo-100 p-8 rounded-2xl text-center shadow-inner">
          <h3 className="text-2xl font-semibold text-indigo-900">
            Ready to Learn?
          </h3>
          <p className="text-gray-700 mt-2 mb-4">
            Contact Mr. Raj Bhadhur Yadav to enroll in any course or for a consultation.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-800 transition"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;

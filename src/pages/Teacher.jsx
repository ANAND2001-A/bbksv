import React from "react";
import img1 from "../assets/logos/home_img/kids.jpg";
import img2 from "../assets/logos/home_img/kids.jpg";
import img3 from "../assets/logos/home_img/kids.jpg";
import img4 from "../assets/logos/home_img/kids.jpg";

const Teacher = () => {
  const courses = ["Science", "English", "Mathematics"];
  const teacherImages = [img1, img2, img3, img4];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-900">
            Mr. Raj Bhadhur Yadav
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            A good teacher not only shares knowledge, but also inspires curiosity and confidence.
          </p>
        </div>

        {/* About Section */}
        <section className="bg-white p-6 rounded-2xl shadow flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Teacher"
            className="w-32 h-32 object-cover rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              Mr. Raj Bhadhur Yadav is a passionate and experienced school teacher who has been guiding students
              from class 1 to 12 with dedication and care. He believes in nurturing young minds with patience,
              creativity, and strong moral values. His teaching methods are interactive and student-friendly,
              making learning a joyful experience. He aims to not just teach subjects, but to inspire curiosity,
              discipline, and confidence in every child.
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Courses Offered</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-indigo-100 p-4 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-indigo-900">{course}</h3>
                <p className="text-sm text-gray-700 mt-2">
                  Learn {course.toLowerCase()} with practical examples and live projects.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teacherImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Teacher ${idx + 1}`}
                className="w-full h-40 object-cover rounded-lg shadow hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teacher;

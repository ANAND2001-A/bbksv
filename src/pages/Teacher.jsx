import React from "react";
import img1 from "../assets/logos/home_img/kids.jpg";
import img2 from "../assets/logos/home_img/kids.jpg";
import img3 from "../assets/logos/home_img/kids.jpg";
import img4 from "../assets/logos/home_img/kids.jpg"
import teacherImage from "../assets/logos/home_img/sir.jpg";
import ProfileCard from "./ProfileCard";
const Teacher = () => {
  const courses = ["Science", "English", "Mathematics", "Hinde", "Socail science", "Physics",];
  const teacherImages = [img1, img2, img3, img4];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-900">
            Mr. Raj Bahadur Yadav
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            A good teacher not only shares knowledge, but also inspires curiosity and confidence.
          </p>
        </div>

        {/* About Section */}
        <section className="bg-white p-6 rounded-2xl shadow flex flex-col md:flex-row items-center gap-6">
          <img
            src={teacherImage}  // Use the imported image
            alt="Sir"
            className="w-50 h-50 rounded-2xl shadow-md  object-cover ease-in-out group-hover:scale-110 duration-500 hover:scale-110 hover:opacity-80"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>Sir राज बहादुर यादव एक प्रेरणादायक और अनुभवी शिक्षक हैं, जो वर्षों से कक्षा 1 से 8 तक के छात्रों का स्नेहपूर्वक मार्गदर्शन कर रहे हैं। वे यह विश्वास रखते हैं कि धैर्य, रचनात्मकता और दृढ़ नैतिक मूल्यों के साथ ही बाल मस्तिष्क का सच्चा विकास संभव है। उनकी शिक्षण शैली संवादात्मक, रचनात्मक और विद्यार्थियों के अनुकूल है, जो पढ़ाई को एक आनंदमयी यात्रा बना देती है। Sir राज बहादुर यादव का लक्ष्य प्रत्येक बच्चे के भीतर जिज्ञासा, अनुशासन, आत्मविश्वास और उत्कृष्टता की भावना को जगाना है, ताकि वे जीवन में सफल और संवेदनशील नागरिक बन सकें।
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

       <ProfileCard />

      </div>
    </div>
  );
};

export default Teacher;

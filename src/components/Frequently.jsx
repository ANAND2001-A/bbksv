import React, { useState } from "react";

const faqData = {
  All: [
    {
      question: "Write a short description of your school?",
      answer:
        "[BaBa B.K School] is a reputed educational institution that offers quality education from Primary (Class 1) to Intermediate (Class 12). Our mission is to provide a holistic learning environment that nurtures academic excellence, moral values, discipline, and all-round development of students.",
    },
    {
      question: "Give a brief overview of your school from primary to intermediate level?",
      answer:
        "[BaBa B.K] is a well-established educational institution that offers comprehensive education from Primary (Class 1) to Intermediate (Class 12). The school is committed to academic excellence, character building, and overall development of students. With qualified and experienced teachers, modern classrooms, a well-equipped library, computer and science labs, and various co-curricular activities, the school provides a balanced environment for learning and growth. The focus is not only on academics but also on nurturing discipline, creativity, leadership, and social responsibility among students. Regular workshops, sports events, and cultural programs contribute to the all-round development of every child. The school aims to shape confident, capable, and responsible citizens ready to meet the challenges of the future.",
    },
    {
      question: "Describe your school in about 100–150 words?",
      answer:
        "[BaBa B.K School] is a premier educational institution dedicated to providing quality education from Primary (Class 1) to Intermediate (Class 12). Our mission is to foster a nurturing and stimulating environment that promotes academic excellence, character development, and holistic growth. With a team of highly qualified and experienced educators, we offer a well-rounded curriculum that emphasizes not only academic achievement but also the development of life skills, creativity, and leadership qualities. Our state-of-the-art facilities include modern classrooms, well-equipped laboratories, a comprehensive library, and ample opportunities for extracurricular activities. We believe in instilling values such as discipline, respect, and social responsibility in our students. Through regular workshops, sports events, and cultural programs, we aim to prepare our students to become confident, capable individuals ready to face the challenges of the future.",
    },
    {
      question: "Write a paragraph on your school highlighting its key features?",
      answer:
        "[BaBa B.K School] is a renowned institution that focuses on providing quality education along with a strong foundation of values and discipline. The school is equipped with smart classrooms, well-maintained laboratories, a rich library, and spacious playgrounds, ensuring a balanced academic and extracurricular environment. Our dedicated and qualified teachers foster an atmosphere of curiosity and creativity, encouraging students to achieve academic excellence. Regular cultural programs, sports events, and workshops help in the all-round development of students. The school also emphasizes digital learning and personality development, making it a place where students are prepared not just for exams, but for life.",
    },
  ],
  General: [
    {
      question: "What are the unique features of your school?",
      answer:
        "[BaBa B.K School] stands out for its strong commitment to providing a well-rounded education that goes beyond just academics. One of its key unique features is the integration of modern technology into classrooms, making learning interactive and engaging for students. The school boasts state-of-the-art science and computer labs, ensuring that students are equipped with hands-on experience. Additionally, it offers a well-stocked library with a wide range of academic and recreational books to promote reading habits.",
    },
  ],
  "Pricing & Licenses": [
    {
      question: "What facilities does your school offer to students?",
      answer:
        "[BaBa B.K School] provides a wide range of modern facilities to ensure a holistic educational experience for its students. The school is equipped with smart classrooms that facilitate interactive learning through the use of technology, making lessons more engaging and dynamic. We have well-maintained science and computer labs to support practical learning and enhance the students’ technical skills. Our library is stocked with a vast collection of books, periodicals, and online resources, encouraging students to develop a reading habit and expand their knowledge. For physical development, the school offers expansive sports facilities, including playgrounds for football, basketball, cricket, and other activities. We also have dedicated arts and music rooms where students can explore their creativity through various forms of artistic expression. Additionally, the school provides transportation facilities and health services with regular medical check-ups to ensure students' safety and well-being. At [BaBa B.K School], we believe in nurturing not just academic excellence but also the emotional and physical growth of each student, making it a truly well-rounded learning environment.",
    },
    {
      question: "Can you describe the overall atmosphere at your school?",
      answer:"The overall atmosphere at [BaBa B.K School] is one of warmth, encouragement, and intellectual stimulation. It fosters a welcoming environment where students feel valued and motivated to achieve their best. The school promotes a culture of mutual respect among students and teachers, ensuring that every individual is supported in their academic and personal growth.",
      
    },
  ],
  "Support & Updates": [
    {
      question: "Do I get access to future updates?",
      answer: "The learning environment is also nurturing, with qualified and dedicated teachers who are committed to guiding students not only in their studies but also in building critical life skills. Co-curricular activities, including sports, arts, and cultural programs, complement academic learning, fostering creativity, teamwork, and leadership skills.",
    },
    {
      question: "What kind of learning environment does your school provide?",
      answer: "Yes, 6-month free support is included.",
    },
  ],
};

const Frequently = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
      <p className="text-gray-600 mb-6">
        Answers to common queries about SaasAble.
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {Object.keys(faqData).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full border ${
              selectedTab === tab ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => {
              setSelectedTab(tab);
              setOpenIndex(null);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {faqData[selectedTab].map((item, index) => (
          <div
            key={index}
            className="bg-blue-50 px-6 py-4 rounded-lg cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{item.question}</h4>
              <span className="text-xl font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-700 mt-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequently;

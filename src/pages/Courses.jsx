// // src/pages/Courses.jsx

// import React, { useState } from "react";
import img from "../assets/logos/home_img/kids.jpg"

// const Courses = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Page Header */}
//       <header className="bg-blue-800 px-6 py-4 md:px-16">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-white">Courses</h1>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-blue-800">
//         <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 z-10">
//             <span className="text-blue-300 font-medium">Explore Now</span>
//             <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
//               COURSES OF EXCELLENT QUALITY
//             </h2>
//             <p className="text-blue-100 mt-6 text-lg max-w-md">
//               Learn from the best in the field with courses tailored for your
//               future success.
//             </p>
//             <div className="mt-8 flex gap-4">
//               <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition">
//                 Get Started
//               </button>
//               <button className="border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-blue-800 transition">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           <div className="md:w-1/2 mt-12 md:mt-0 relative">
//             <img
//               src={img}
//               alt="Student"
//               className="relative z-10 object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Category Tabs */}
//       <section className="py-16 px-6 md:px-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">
//             Our Popular Courses
//           </h2>
//           <p className="text-gray-600 mb-8">
//             Discover in-demand courses that help students gain real-world skills.
//           </p>

//           <div className="flex overflow-x-auto pb-4 justify-center space-x-4 mb-12">
//             {["all", "design", "development", "marketing", "business"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-6 py-2 rounded-full border transition ${
//                   activeTab === tab
//                     ? "bg-blue-800 text-white"
//                     : "bg-white text-gray-700 border-gray-300"
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>

//           {/* Course Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {/* Course Card Example */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//               <img
//                 src={img}
//                 alt="Course"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Full Stack Web Development
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   Build dynamic websites and APIs using JavaScript, React, Node.js & more.
//                 </p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-blue-700 font-bold">$89.99</span>
//                   <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition">
//                     Enroll
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* You can duplicate this block for more courses */}
//           </div>

//           <div className="text-center mt-12">
//             <button className="bg-blue-800 text-white px-8 py-3 rounded hover:bg-blue-900 transition">
//               View All Courses
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Courses;




// Tailwind CSS required
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";


const Courses = () => {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute right-0 top-0 w-3/4 h-full bg-blue-800 z-0"></div>
                <div className="absolute right-0 top-1/4 w-2/5 h-3/5 bg-yellow-400 rounded-full z-0"></div>
                <div className="container mx-auto px-8 py-16 flex flex-col md:flex-row items-center relative z-10">
                    <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0">
                        <div className="text-blue-400 mb-4">Excellence in Education</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            NURTURING MINDS, SHAPING FUTURES
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Providing quality education from Lower Kindergarten to Grade 12
                            with a perfect blend of academic excellence and holistic development
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <CustomButton type="submit">Get Quote Now</CustomButton>
                            {/* <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded cursor-pointer">
                                Get Quote Now
                            </button> */}
                            <button className="border border-blue-400 text-blue-400 hover:bg-blue-50 px-6 py-3 rounded cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={img}
                            alt="A young student wearing mint green shirt and light blue headphones working on a laptop"
                            className="relative z-10 max-w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Course Categories */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Our Academic Programs
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our comprehensive educational programs designed to nurture young minds from kindergarten through senior secondary
                        </p>
                    </div>
                    <div className="flex mb-8 justify-center">
                        <div className="flex flex-wrap bg-white rounded-lg shadow-sm">
                            {["all", "primary", "middle", "secondary", "kindergarten"].map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-4 py-2 cursor-pointer w-full sm:w-auto ${activeTab === tab
                                            ? "bg-blue-400 text-white"
                                            : "text-gray-600 hover:bg-gray-100"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                    aria-selected={activeTab === tab}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Kindergarten */}
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="bg-blue-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-tag text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Kindergarten (LKG-UKG)</h3>
                            <div className="w-12 h-1 bg-red-400 mb-4"></div>
                            <p className="text-gray-600">
                                Early childhood education focusing on foundational learning, creative activities, and social development
                            </p>
                        </div>
                        {/* Primary */}
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-id-card text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Primary (Grade 1-5)</h3>
                            <div className="w-12 h-1 bg-red-400 mb-4"></div>
                            <p className="text-gray-600">
                                Comprehensive primary education with focus on core subjects, extra-curricular activities, and personality development
                            </p>
                        </div>
                        {/* Secondary */}
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="bg-gray-700 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                                <i className="fas fa-book text-white text-2xl"></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Secondary (Grade 6-12)</h3>
                            <div className="w-12 h-1 bg-red-400 mb-4"></div>
                            <p className="text-gray-600">
                                Advanced academic programs preparing students for higher education with specialized streams in Science, Commerce, and Arts
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Programs */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-8">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Programs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover our specialized academic programs and extra-curricular activities
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={img}
                                        alt={`Course thumbnail ${item}`}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute top-4 left-4 bg-blue-400 text-white px-2 py-1 text-sm rounded">Popular</div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-blue-400 text-sm">Grade Level</span>
                                        <div className="flex items-center">
                                            <i className="fas fa-users text-yellow-400"></i>
                                            <span className="text-gray-600 text-sm ml-1">25 per class</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">STEM Education Program</h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Innovative approach to Science, Technology, Engineering, and Mathematics
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <i className="fas fa-chalkboard-teacher text-gray-400 mr-1"></i>
                                            <span className="text-gray-500 text-sm">Expert Faculty</span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-flask text-gray-400 mr-1"></i>
                                            <span className="text-gray-500 text-sm">Practical Labs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <CustomButton type="submit">View All Courses</CustomButton>
                        {/* <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded cursor-pointer">
                            View All Courses
                        </button> */}
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default Courses;

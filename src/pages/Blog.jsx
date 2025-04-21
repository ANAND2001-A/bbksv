// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/logos/home_img/kids.jpg";
import img2 from "../assets/logos/bbksv.png";
import CustomButton from "../components/CustomButton";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Academic",
    "Campus Life",
    "Research",
    "Events",
    "Student Stories",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Breakthrough Research in Quantum Computing",
      category: "Research",
      date: "April 15, 2025",
      author: "Dr. Sarah Chen",
      readTime: "5 min read",
      image:
       img1,
      excerpt:
        "Our quantum computing team has made significant strides in quantum error correction, bringing us closer to practical quantum computers.",
      authorImage:
      img2,
    },
    {
      id: 2,
      title: "Student Life: A Day in the Residence Halls",
      category: "Campus Life",
      date: "April 14, 2025",
      author: "Emma Rodriguez",
      readTime: "4 min read",
      image:
      img1,
      excerpt:
        "Experience the vibrant community and daily life in our newly renovated residence halls through the eyes of our students.",
      authorImage:
      img2,
    },
    {
      id: 3,
      title: "New Environmental Science Program Launch",
      category: "Academic",
      date: "April 13, 2025",
      author: "Prof. James Wilson",
      readTime: "6 min read",
      image:
      img1,
      excerpt:
        "Introducing our new Environmental Science program, designed to address the growing challenges of climate change.",
      authorImage:
      img2,
    },
  ];

  const featuredPost = {
    title: "Latest Blogs and News",
    image:
    img1,
    excerpt:
             " Stay updated with the latest trends, insights, and updates from our team. We bring you fresh stories and expert opinions every week.",
    authorImage:
    img2,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="relative h-[500px]">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-900 text-white text-sm font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h1>
                  <p className="text-gray-200 text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="text-white font-medium">
                        {featuredPost.author}
                      </p>
                      <div className="text-gray-300 text-sm">
                        {featuredPost.date} · {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 cursor-pointer whitespace-nowrap !rounded-button ${
                activeCategory === category
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-900 text-white text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-900 transition duration-300">
                  <a href="#" className="cursor-pointer">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <div className="text-xs text-gray-500">{post.date}</div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
         <Link to="/allblog">
         <CustomButton type="submit" >
              View More
            </CustomButton> 
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Blog;











//////////////////////this all of the second bolg page code/////////




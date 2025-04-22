import React, { useState, useEffect } from "react";
import {
  Image as ImageIcon,
  Grid,
  List,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import img1 from "../assets/logos/home_img/kids.jpg";
import CustomButton from "../components/CustomButton";

const GallarySection = () => {
  const [activeCategory, setActiveCategory] = useState("All Photos");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [viewMode, setViewMode] = useState("grid");
  const [sortOption, setSortOption] = useState("Latest");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: "Modern Library Interior",
      category: "Academic Buildings",
      date: "2025-03-15",
      description: "Library with digital resources and collaborative space.",
      imageUrl: img1,
    },
    {
      id: 2,
      title: "Student Fun Day",
      category: "Student Life",
      date: "2025-03-20",
      description: "Games and activities organized for student engagement.",
      imageUrl: img1,
    },
    {
      id: 3,
      title: "Science Building",
      category: "Academic Buildings",
      date: "2025-01-10",
      description: "Newly opened science facility with modern labs.",
      imageUrl: img1,
    },
    {
      id: 4,
      title: "Annual Sports Meet",
      category: "Athletics",
      date: "2025-02-05",
      description: "Track and field events across all classes.",
      imageUrl: img1,
    },
    {
      id: 5,
      title: "Cultural Fest",
      category: "Events",
      date: "2025-04-01",
      description: "Dance, music, and drama from various clubs.",
      imageUrl: img1,
    },
    {
      id: 6,
      title: "Sunset from Campus",
      category: "Campus Views",
      date: "2025-03-30",
      description: "Serene view of the sunset from the main lawn.",
      imageUrl: img1,
    },
  ];

  const categories = [
    "All Photos",
    "Academic Buildings",
    "Student Life",
    "Athletics",
    "Events",
    "Campus Views",
  ];

  const filteredImages =
    activeCategory === "All Photos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const sortedImages = [...filteredImages].sort((a, b) => {
    if (sortOption === "Latest") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "Oldest") {
      return new Date(a.date) - new Date(b.date);
    } else {
      return a.id - b.id;
    }
  });

  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = 0;
  const currentImages = sortedImages.slice(indexOfFirstImage, indexOfLastImage);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (currentImage < sortedImages.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, currentImage]);

  useEffect(() => {
    setCurrentPage(1); // Reset page on category or sort change
  }, [activeCategory, sortOption]);

  return (
    <div className="bg-blue-50 min-h-screen py-12 px-4 container mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">Campus Gallery</h1>
      <p className="text-gray-600 mb-6 max-w-2xl">
        Explore our campus through photographs showcasing student life,
        facilities, and more.
      </p>

      {/* Filter and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === category
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <ImageIcon size={16} />
              {category}
            </button>
          ))}
        </div>

        <div className="flex space-x-3 items-center">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border rounded px-3 py-2 text-sm"
          >
            <option>Latest</option>
            <option>Oldest</option>
            <option>Most Popular</option>
          </select>

          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-900 text-white" : "bg-white"
              }`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${viewMode === "list" ? "bg-blue-900 text-white" : "bg-white"
              }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Gallery Display */}
      {viewMode === "grid" ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentImages.map((img, index) => (
            <div
              key={img.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform"
                onClick={() => openLightbox(index)}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900">{img.title}</h3>
                <p className="text-sm text-gray-600">{img.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {currentImages.map((img, index) => (
            <div
              key={img.id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full md:w-1/3 h-56 object-cover cursor-pointer"
                onClick={() => openLightbox(index)}
              />
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold text-blue-900">{img.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{img.date}</p>
                <p className="text-gray-700 mb-4">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show More Button */}
      {currentPage * itemsPerPage < sortedImages.length && (
        <div className="flex justify-center mt-8">
          <CustomButton type="submit">View More</CustomButton>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && currentImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
            onClick={prevImage}
            disabled={currentImage === 0}
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={sortedImages[currentImage].imageUrl}
            alt={sortedImages[currentImage].title}
            className="max-w-full max-h-[80vh] object-contain"
          />

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
            onClick={nextImage}
            disabled={currentImage === sortedImages.length - 1}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GallarySection;

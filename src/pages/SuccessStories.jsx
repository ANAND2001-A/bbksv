import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/logos/home_img/kids.jpg"; // Replace with your image path

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const SuccessStory = () => {
  const [expanded, setExpanded] = useState("left");
  const isMobile = useIsMobile();

  const cards = [
    {
      id: "left",
      title: "Operational Gains",
      text: "Cut costs by 30% and improved patient throughput by 20%",
    },
    {
      id: "middle",
      title: "Data Integration Success",
      text: "Boosted workflow efficiency using integrated health systems",
    },
    {
      id: "right",
      title: "Tech Empowerment",
      text: "Empowered technicians with real-time data tools and insights",
    },
  ];

  const handleClick = (id) => {
    if (isMobile || expanded === id) return;
    setExpanded(id);
  };

  const springTransition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
    mass: 0.5,
  };

  const renderCard = ({ id, title, text }) => {
    const isExpanded = isMobile || expanded === id;

    return (
      <motion.div
        key={id}
        layout
        transition={springTransition}
        onClick={() => handleClick(id)}
        className={`cursor-pointer rounded-[70px] overflow-hidden flex flex-col lg:flex-row
          transition-all duration-300 ease-in-out 
          w-full ${!isMobile && isExpanded ? "lg:w-[685px]" : "lg:w-[137px]"} 
          h-[500px] bg-white`}
      >
        <motion.img
          src={img}
          alt={title}
          loading="lazy"
          layout
          transition={springTransition}
          className={`object-cover transition-all duration-300
            ${isExpanded && !isMobile ? "lg:w-1/2 h-full" : "w-full h-[250px] lg:h-full"}
            rounded-[full]`}
        />

        {/* Text Section */}
        <div
          className={`flex flex-col justify-center items-center px-4 py-4 text-center
            ${isExpanded && !isMobile ? "lg:w-1/2" : ""}
            h-full`}
        >
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="max-h-[250px] flex flex-col justify-center"
              >
                <h3 className="text-2xl font-semibold text-[#c76a2e] mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-700 text-base">{text}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  return (
    <div className=" py-12">
      <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">
        OUR CAMPAS
      </h2>

      <div className="w-[1024px] mx-auto px-2 flex flex-col lg:flex-row items-stretch gap-2 min-h-[500px]">
        {cards.map(renderCard)}
      </div>
    </div>
  );
};

export default SuccessStory;

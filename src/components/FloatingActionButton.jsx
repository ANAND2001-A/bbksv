import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import React from "react";
import CustomButton from "./CustomButton"; // Import CustomButton

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <CustomButton
          onClick={scrollToTop}
          bgColor="#005B96" // Set the color you want for the floating button
          className="p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out animate-bounce"
        >
          <ArrowUp size={24} />
        </CustomButton>
      )}
    </div>
  );
}

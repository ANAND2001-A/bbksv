import React from 'react';

const CustomButton = ({
  type = "button",
  onClick,
  children,
  className = "",
  bgColor,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white bg-[#54BD95] focus:ring-0 border-0 
        font-medium rounded-4xl text-sm px-5 py-2.5 text-center me-2 mb-2 ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </button>
  );
};

export default CustomButton;

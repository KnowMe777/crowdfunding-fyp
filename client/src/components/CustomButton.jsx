import React from "react";

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`font-poppins bg-black text-white px-8 py-2 rounded-lg hover:opacity-90 transition-transform duration-300 hover:scale-105 ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;

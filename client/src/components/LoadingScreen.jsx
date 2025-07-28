import React from "react";
import logo from "../assets/hero-image.png"; // Update path as needed

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <img
        src={logo}
        alt="Company Logo"
        className="w-80 h-auto animate-pulse"
      />
    </div>
  );
};

export default LoadingScreen;

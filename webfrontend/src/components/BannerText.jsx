// BannerText.jsx
import React from "react";

const BannerText = ({ text }) => {
  return (
    <div className="text-center text-gray-500">
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default BannerText;

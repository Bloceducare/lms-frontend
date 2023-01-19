import React from "react";

const ProgressBar = ({ value = 50, className = "w-24" }) => {
  return (
    <div className={` h-2 bg-gray-300 border rounded-lg  ${className}`}>
      <div
        className={`bg-brand-green h-2 rounded-lg`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;

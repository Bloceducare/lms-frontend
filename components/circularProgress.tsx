import React, { useState, useEffect } from "react";

const CircularProgressBar = ({ progress = 0 }) => {
  const [strokeDasharray, setStrokeDasharray] = useState(`0 ${100}`);

  useEffect(() => {
    let interval: any;
    let current = 0;
    if (progress !== 0) {
      interval = setInterval(() => {
        current++;
        setStrokeDasharray(`${current} ${100 - current}`);
        if (current >= progress) {
          clearInterval(interval);
        }
      }, 10);
    }
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="grid place-items-center ">
      <svg viewBox="0 0 36 36" className=" circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={strokeDasharray}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="font-bold percentage">
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;

import React, { useState, useEffect } from "react";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [zoomIn, setZoomIn] = useState(false);
  const [scale, setScale] = useState(false); // New state for scaling

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          setZoomIn(true); // Start zoom-in animation
          setTimeout(() => onComplete(), 800); // Wait for animation to finish
          return prevCount;
        }
      });
    }, 15);

    return () => clearInterval(interval); // Cleanup
  }, [onComplete]);

  useEffect(() => {
    if (zoomIn) {
      setScale(true); // Activate scaling when zoomIn is true
    }
  }, [zoomIn]);

  return (
    <div
      className={`flex justify-center lg:justify-end lg:items-end items-center h-screen bg-inherit relative overflow-hidden bg-cover transition-transform duration-1000 ease-in-out ${scale ? "transform scale-75" : "scale-100"}`}
      style={{
        backgroundImage: `url("https://png.pngtree.com/png-vector/20240612/ourmid/pngtree-elegant-white-and-grey-paper-texture-background-png-image_12316011.png")`
      }}
    >
      <div className={`text-center w-[50vh] h-[30vh] flex justify-center items-center lg:justify-end lg:items-center text-white text-[10vh] lg:text-[30vh] font-bold font-tiny transition-transform duration-500 ease-in-out ${zoomIn ? "scale-150" : "scale-100"}`}>
        <h1 className="text-center">{count}</h1>
      </div>
    </div>
  );
};

export default Preloader;

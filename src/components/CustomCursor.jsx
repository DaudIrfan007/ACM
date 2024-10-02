import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update the cursor's position based on mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX + 50, y: e.clientY + 50 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-12 h-6 bg-[#FF6500] rounded-lg flex items-center justify-center text-black text-sm font-bold pointer-events-none z-50 transition-transform duration-10 ease-out font-code"
      style={{
        transform: `translate3d(${position.x - 40}px, ${position.y - 40}px, 0)`, // Adjust the translate values to center the cursor
      }}
    >
      You
    </div>
  );
};

export default CustomCursor;

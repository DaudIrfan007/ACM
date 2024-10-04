import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false); // Initially hidden

  // Update the cursor's position based on mouse or touch movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setShowCursor(true); // Show cursor when mouse moves
      setPosition({ x: e.clientX + 50, y: e.clientY + 55 });
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      setPosition({ x: touch.clientX + 50, y: touch.clientY + 50 });
    };

    const handleTouchStart = (e) => {
      setShowCursor(true); // Show cursor when the screen is touched
      const touch = e.touches[0];
      setPosition({ x: touch.clientX + 50, y: touch.clientY + 50 });
    };

    const handleTouchEnd = () => {
      setShowCursor(false); // Hide cursor when touch ends
    };

    const handleMouseLeave = () => {
      setShowCursor(false); // Hide cursor when mouse leaves window (desktop only)
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  if (!showCursor) return null; // Do not render cursor if not shown

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

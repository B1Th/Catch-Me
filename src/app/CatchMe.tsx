"use client";
import React, { useState, useEffect } from "react";

const CatchMe = () => {
  const [noPosition, setNoPosition] = useState({ top: 50, left: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const moveNoButton = () => {
    const newTop = Math.random() * (window.innerHeight - 40);
    const newLeft = Math.random() * (window.innerWidth - 80);
    setNoPosition({ top: newTop, left: newLeft });
  };

  useEffect(() => {
    const handleResize = () => {
      moveNoButton();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        CatchMe: The Elusive Answer Game
      </h1>
      <h2 className="text-2xl font-semibold mb-8 text-gray-700">
        Are you stupid?
      </h2>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          onClick={() => alert("We knew it!")}
        >
          Yes
        </button>
        <button
          className={`px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-300 ease-in-out absolute`}
          style={{
            top: `${noPosition.top}px`,
            left: `${noPosition.left}px`,
            transform: isHovering ? "scale(1.1)" : "scale(1)",
          }}
          onMouseEnter={() => {
            setIsHovering(true);
            moveNoButton();
          }}
          onMouseLeave={() => setIsHovering(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default CatchMe;

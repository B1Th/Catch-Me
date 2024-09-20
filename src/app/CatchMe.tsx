"use client";
import React, { useState, useEffect } from "react";

const CatchMe = () => {
  const [noPosition, setNoPosition] = useState({ top: "51.2%", left: "50%" });

  const moveNoButton = () => {
    const newTop = Math.random() * (window.innerHeight - 50);
    const newLeft = Math.random() * (window.innerWidth - 100);
    setNoPosition({ top: newTop, left: newLeft });
  };

  useEffect(() => {
    const handleResize = moveNoButton;
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-bold text-gray-800">Are you stupid?</h2>
        <div>
          <button
            className="px-6 py-3 bg-green-500 relative -left-12 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => alert("I knew it!")}
          >
            Yes
          </button>
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 absolute transition-all"
            style={{
              top: noPosition.top,
              left: noPosition.left,
              transition: "top 0.3s ease, left 0.3s ease",
            }}
            onMouseEnter={moveNoButton}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatchMe;

"use client";

import { useEffect, useState } from "react";

const ButtonBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`group bg-blue-600! hover:bg-blue-700! text-white px-3! py-1 rounded-lg flex flex-col fixed bottom-4 right-2 z-50 transition-all duration-500 ease-in-out transform ${
        isVisible
          ? "opacity-100! translate-y-0! visible!"
          : "opacity-0! translate-y-4! invisible!"
      }`}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 transition-transform duration-300 group-hover:scale-125! group-hover:-translate-y-0.5!"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ButtonBackToTop;

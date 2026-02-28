//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [1, 2, 3, 4, 5];

const Status_Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    if (index < items.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      
      <div className="w-full flex items-center justify-center">
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className={`p-3 rounded-full shadow-md transition
          dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          ${
            index === 0
              ? "bg-gray-300 cursor-not-allowed opacity-50 dark:bg-[#1F2937]"
              : "bg-white hover:scale-110 dark:bg-[#111827] dark:hover:bg-[#1F2937]"
          }`}
        >
          <ChevronLeft className="dark:text-[#E5E7EB]" />
        </button>

        <div className="relative w-100 h-57 mx-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((item, i) => (
              <div key={i} className="min-w-full flex justify-center items-center">
                <div
                  className="w-87 h-50
                  bg-white 
                  rounded-2xl 
                  shadow-md 
                  flex items-center justify-center 
                  text-5xl font-bold
                  dark:bg-[#111827] 
                  dark:text-[#E5E7EB] 
                  dark:border dark:border-[#1F2937]
                  dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          disabled={index === items.length - 1}
          className={`p-3 rounded-full shadow-md transition
          dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          ${
            index === items.length - 1
              ? "bg-gray-300 cursor-not-allowed opacity-50 dark:bg-[#1F2937]"
              : "bg-white hover:scale-110 dark:bg-[#111827] dark:hover:bg-[#1F2937]"
          }`}
        >
          <ChevronRight className="dark:text-[#E5E7EB]" />
        </button>
      </div>

      <div className="mt-6 text-gray-500 text-lg font-medium dark:text-[#9CA3AF]">
        {index + 1} / {items.length}
      </div>

    </div>
  );
};

export default Status_Carousel;
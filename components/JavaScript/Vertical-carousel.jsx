//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const items = [1, 2, 3, 4, 5];

const Vertical_Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (index < items.length - 1) setIndex((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        onClick={prevSlide}
        disabled={index === 0}
        className={`p-3 rounded-full transition-all duration-300 shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        ${
          index === 0
            ? "bg-gray-300 opacity-50 cursor-not-allowed dark:bg-[#1F2937] dark:border-[#1F2937]"
            : "bg-white hover:scale-110 dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]"
        }`}
      >
        <ChevronUp />
      </button>

      <div className="relative w-90 h-55 overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateY(-${index * 220}px)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-full h-55 flex items-center justify-center rounded-2xl"
            >
              <div
                className="w-83 h-47 rounded-2xl flex items-center justify-center text-5xl font-bold
                bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)]
                dark:bg-[#111827] dark:text-[#E5E7EB] dark:border dark:border-[#1F2937]
                dark:shadow-[0_0_10px_rgba(0,0,0,0.6)]"
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
        className={`p-3 rounded-full transition-all duration-300 shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        ${
          index === items.length - 1
            ? "bg-gray-300 opacity-50 cursor-not-allowed dark:bg-[#1F2937] dark:border-[#1F2937]"
            : "bg-white hover:scale-110 dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]"
        }`}
      >
        <ChevronDown />
      </button>
    </div>
  );
};

export default Vertical_Carousel;
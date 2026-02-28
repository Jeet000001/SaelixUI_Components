//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const items = [1, 2, 3, 4, 5, 6, 7];

const Multiple_Sliders_Carousel = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = 3;

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    if (index < items.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-10 py-10">
      <button
        onClick={prevSlide}
        disabled={index === 0}
        className={`p-3 rounded-full shadow-md transition
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        ${
          index === 0
            ? "bg-gray-300 opacity-50 cursor-not-allowed dark:bg-[#1F2937]"
            : "bg-white hover:scale-110 dark:bg-[#111827]"
        }`}
      >
        <ChevronLeft className="dark:text-[#E5E7EB]" />
      </button>

      <div className="relative w-full max-w-5xl mx-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-1/3 shrink-0 flex justify-center my-10"
            >
              <div
                className="w-11/12 h-46 bg-white rounded-2xl shadow-md 
                flex items-center justify-center text-4xl font-bold
                dark:bg-[#111827]
                dark:border dark:border-[#1F2937]
                dark:text-[#E5E7EB]
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
        disabled={index >= items.length - visibleCards}
        className={`p-3 rounded-full shadow-md transition
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        ${
          index >= items.length - visibleCards
            ? "bg-gray-300 opacity-50 cursor-not-allowed dark:bg-[#1F2937]"
            : "bg-white hover:scale-110 dark:bg-[#111827]"
        }`}
      >
        <ChevronRight className="dark:text-[#E5E7EB]" />
      </button>
    </div>
  );
};

export default Multiple_Sliders_Carousel;
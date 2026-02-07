//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Outline_Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-800 shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-3 text-left font-medium"
            >
              {item.title}

              <ChevronDown
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open
                  ? "grid-rows-[1fr] opacity-100 px-6 pb-5"
                  : "grid-rows-[0fr] opacity-0 px-6"
              }`}
            >
              <div className="overflow-hidden text-gray-600 dark:text-gray-300 text-sm">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

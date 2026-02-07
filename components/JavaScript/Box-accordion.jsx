// If you are using Next.js (App Router) → write "use client" on top
// If normal React (CRA/Vite) → not needed
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const BoxAccordion = ({ items, allowMultiple = false }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openMulti, setOpenMulti] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenMulti((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const isOpen = (index) => {
    return allowMultiple ? openMulti.includes(index) : openIndex === index;
  };

  return (
    <div className="w-full max-w-xl mx-auto border border-gray-300 dark:border-gray-800 rounded-xl overflow-hidden">
      {items.map((item, index) => {
        const open = isOpen(index);

        return (
          <div
            key={index}
            className="border-b border-gray-300 dark:border-gray-800 last:border-none"
          >

            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              aria-expanded={open}
            >
              {item.title}

              <ChevronDown
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-300">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

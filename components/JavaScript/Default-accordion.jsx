//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Default_Accordion = ({ items, allowMultiple = false }) => {
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
    <div className="w-full max-w-lg mx-auto overflow-hidden">
      {items.map((item, index) => {
        const open = isOpen(index);

        return (
          <div key={index} className="border-b last:border-none">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center py-4 text-left font-medium hover:underline dark:hover:underline transition"
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

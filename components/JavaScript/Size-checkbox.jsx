//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React from "react";

const Size_Checkbox = ({
  title,
  options,
  selected,
  onChange,
}) => {
  const toggle = (id) => {
    if (selected.includes(id)) {
      // agar same dubara click kare to deselect kar de
      onChange([]);
    } else {
      // sirf ek hi select hoga
      onChange([id]);
    }
  };

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-lg font-medium text-gray-800">
          {title}
        </h2>
      )}

      <div className="rounded-xl flex gap-4">
        {options.map((option) => {
          const isSelected = selected.includes(option.id);

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => toggle(option.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
                ${
                  isSelected
                    ? "bg-black text-white"
                    : "border border-gray-300 text-gray-700 bg-white hover:border-gray-400"
                }
              `}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size_Checkbox;
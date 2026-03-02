//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React from "react";
import { Check } from "lucide-react";

export interface CheckboxOption {
  id: string;
  label: string;
}

interface CheckboxGroupProps {
  title: string;
  options: CheckboxOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const Horizontal_Group: React.FC<CheckboxGroupProps> = ({
  title,
  options,
  selected,
  onChange,
}) => {
  const toggleOption = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-black dark:text-[#E5E7EB]">
        {title}
      </h2>

      <div className="flex gap-6 flex-wrap">
        {options.map((option) => {
          const isChecked = selected.includes(option.id);

          return (
            <div
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
                ${
                  isChecked
                    ? "bg-black border-black dark:bg-[#3B82F6] dark:border-[#3B82F6]"
                    : "border-gray-400 bg-white dark:border-[#1F2937] dark:bg-[#111827]"
                }`}
              >
                {isChecked && (
                  <Check size={14} className="text-white" />
                )}
              </div>

              <span className="text-sm font-medium text-black dark:text-[#9CA3AF]">
                {option.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Horizontal_Group;
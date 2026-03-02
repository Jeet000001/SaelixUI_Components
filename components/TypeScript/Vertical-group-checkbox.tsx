//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React from "react";
import { Check } from "lucide-react";

export interface IconCheckboxOption {
  id: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

interface IconCheckboxListProps {
  title?: string;
  options: IconCheckboxOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const Vertical_Group: React.FC<IconCheckboxListProps> = ({
  title,
  options,
  selected,
  onChange,
}) => {
  const toggleOption = (id: string, disabled?: boolean) => {
    if (disabled) return;

    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="p-6 space-y-4 w-60">
      {title && (
        <h2 className="text-lg font-semibold text-black dark:text-[#E5E7EB] mb-2">
          {title}
        </h2>
      )}

      {options.map((option) => {
        const isChecked = selected.includes(option.id);

        return (
          <div
            key={option.id}
            onClick={() => toggleOption(option.id, option.disabled)}
            className={`flex items-center gap-4 transition-colors duration-200
              ${option.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              `}
          >
            <div
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
              ${
                isChecked
                  ? "bg-black border-black dark:bg-[#3B82F6] dark:border-[#3B82F6]"
                  : "border-gray-300 bg-white dark:border-[#1F2937] dark:bg-[#0B0F19]"
              }`}
            >
              {isChecked && (
                <Check size={14} className="text-white dark:text-white" />
              )}
            </div>

            <div className="dark:text-[#9CA3AF]">{option.icon}</div>

            <span className="text-base font-medium text-black dark:text-[#E5E7EB]">
              {option.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Vertical_Group;

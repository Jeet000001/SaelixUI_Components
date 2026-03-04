//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React, { useState, useRef, useEffect } from "react";

interface MenuItem {
  label: string;
  onClick: () => void;
}

interface DropdownProps {
  buttonLabel: string;
  headerTitle?: string;
  menuItems: MenuItem[];
}

const Default_Dropdown: React.FC<DropdownProps> = ({
  buttonLabel,
  headerTitle,
  menuItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-50 active:scale-95 transition-all duration-200
        dark:bg-[#111827]
        dark:border-[#1F2937]
        dark:text-[#E5E7EB]
        dark:hover:bg-[#1F2937]
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        {buttonLabel}
      </button>

      <div
        className={`absolute -left-10 mt-3 w-52 origin-top-left rounded-xl bg-white border border-gray-200 shadow-xl z-50
        transform transition-all duration-200 ease-out
        dark:bg-[#111827]
        dark:border-[#1F2937]
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="py-2">
          {headerTitle && (
            <div
              className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100
              dark:text-[#9CA3AF]
              dark:border-[#1F2937]"
            >
              {headerTitle}
            </div>
          )}

          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-150
              dark:text-[#E5E7EB]
              dark:hover:bg-[#1F2937]
              dark:hover:text-[#3B82F6]"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Default_Dropdown;
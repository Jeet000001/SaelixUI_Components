//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React from "react";

export interface ToggleIconItem {
  id: string;
  outline: React.ReactNode;
  filled: React.ReactNode;
}

interface IconToggleProps {
  items: ToggleIconItem[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const Icon_Checkbox: React.FC<IconToggleProps> = ({
  items,
  selected,
  onChange,
}) => {
  const toggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="flex items-center gap-8 p-6 w-fit">
      {items.map((item) => {
        const isChecked = selected.includes(item.id);

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => toggle(item.id)}
            className="transition-transform duration-150 hover:scale-110"
          >
            {isChecked ? item.filled : item.outline}
          </button>
        );
      })}
    </div>
  );
};

export default Icon_Checkbox;

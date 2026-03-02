//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React, { useState } from "react";

const Default_Checkbox = ({ label }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="flex items-center space-x-3 p-6">

      <input
        type="checkbox"
        id="terms"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="w-4 h-4 accent-black cursor-pointer
                   dark:accent-[#3B82F6]"
      />

      <label
        htmlFor="terms"
        className="font-medium text-black cursor-pointer
                   dark:text-[#E5E7EB]"
      >
        {label}
      </label>
    </div>
  );
};

export default Default_Checkbox;
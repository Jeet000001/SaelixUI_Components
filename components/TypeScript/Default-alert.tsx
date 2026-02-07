//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import { useState } from "react";

type AlartProps = {
  btntext: string;
  alartHeading: string;
  alartDiscription: string;
};

const Default_Alart = ({ btntext, alartHeading, alartDiscription }: AlartProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="
          px-6 py-3 rounded-lg font-medium
          bg-black text-white hover:bg-gray-800
          dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]
        "
      >
        {btntext}
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div
            className="
              w-105 mx-5 p-6 rounded-2xl
              bg-white shadow-xl
              dark:bg-[#111827]
              dark:border dark:border-[#1F2937]
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
              animate-in fade-in zoom-in duration-200
            "
          >
            <h2 className="text-xl font-semibold mb-2 text-black dark:text-[#E5E7EB]">
              {alartHeading}
            </h2>

            <p className="text-gray-600 text-sm mb-6 dark:text-[#9CA3AF]">
              {alartDiscription}
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="
                  px-5 py-2 rounded-lg border
                  bg-gray-100 hover:bg-gray-200
                  dark:bg-transparent
                  dark:border-[#1F2937]
                  dark:text-[#E5E7EB]
                  dark:hover:bg-[#1F2937]
                "
              >
                Cancel
              </button>

              <button
                onClick={() => setOpen(false)}
                className="
                  px-5 py-2 rounded-lg
                  bg-black text-white hover:bg-gray-800
                  dark:bg-[#3B82F6]
                  dark:hover:bg-[#2563EB]
                "
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Default_Alart;

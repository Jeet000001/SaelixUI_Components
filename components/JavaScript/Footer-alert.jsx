//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

"use client";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

const Footer_Alart = ({ btntext, alartHeading, alartDiscription, icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="
          px-6 py-3 rounded-lg font-medium
          bg-black text-white hover:bg-gray-800
          dark:bg-[#3B82F6] dark:hover:bg-[#2563EB] active:scale-95 transition duration-300
        "
      >
        {btntext}
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div
            className="
              w-[420px] rounded-2xl
              bg-white shadow-xl
              dark:bg-[#111827]
              dark:border dark:border-[#1F2937]
              dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
              animate-in fade-in zoom-in duration-200
            "
          >
            <div className="mx-2 my-4">
              {icon && (
                <div className="flex items-center justify-center mb-2">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400">
                    {icon}
                  </div>
                </div>
              )}

              <h2 className="text-xl font-semibold mb-2 text-center text-black dark:text-[#E5E7EB]">
                {alartHeading}
              </h2>

              <p className="text-gray-600 text-sm mb-6 text-center dark:text-[#9CA3AF]">
                {alartDiscription}
              </p>
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-300 dark:border-[#1F2937]">
              <button className="flex items-center gap-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white text-sm">
                Learn more <ExternalLink size={16} />
              </button>

              <div className="flex gap-3">
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border 
                  bg-gray-100 hover:bg-gray-200 text-black
                  dark:bg-transparent dark:border-[#1F2937] 
                  dark:text-gray-200 dark:hover:bg-[#1F2937]"
                >
                  <X size={16} />
                  Cancel
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-5 py-2 rounded-lg 
                  bg-red-600 text-white hover:bg-red-700"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer_Alart;

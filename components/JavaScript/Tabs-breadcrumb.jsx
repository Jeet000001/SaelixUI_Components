import React from "react";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

const Tab_Breadcrumb = ({ items, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={item.href}>
            <Link href={item.href}>
              <span
                className={`
                px-4 py-1.5 rounded-full text-sm font-medium transition
                ${
                  isLast
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }
              `}
              >
                {item.label}
              </span>
            </Link>

            {!isLast && (
              <span className="text-gray-400 text-lg font-semibold">
                <ChevronsRight />
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Tab_Breadcrumb;

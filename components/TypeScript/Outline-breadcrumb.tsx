import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
};

const TabsOutline_Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-md text-gray-500 dark:text-[#9CA3AF] ${className}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Fragment key={index}>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-gray-900 dark:hover:text-[#3B82F6] transition-colors cursor-pointer"
              >
                <span className="border border-[#1F2937] dark:border-[#1F2937] px-2 py-0.5 rounded-full dark:bg-[#111827]">
                  {item.label}
                </span>
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? "text-gray-900 dark:text-[#E5E7EB] font-medium cursor-pointer"
                    : "dark:text-[#E5E7EB]"
                }
              >
                <span className="text-white bg-[#1F2937] px-2 py-0.5 rounded-full dark:text-black dark:bg-gray-200">
                  {item.label}
                </span>
              </span>
            )}

            {!isLast && (
              <span className="mx-2 text-gray-400 dark:text-[#9CA3AF] select-none">
                <ChevronRight />
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};

export default TabsOutline_Breadcrumb;

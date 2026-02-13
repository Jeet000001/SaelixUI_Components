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

const Default_Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
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
                className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast
                    ? "text-gray-900 dark:text-[#E5E7EB] font-medium cursor-pointer"
                    : "dark:text-[#E5E7EB]"
                }
              >
                {item.label}
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

export default Default_Breadcrumb;

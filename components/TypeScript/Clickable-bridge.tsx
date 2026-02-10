import { Linkedin } from "lucide-react";
import React from "react";

type Props = {
  className?: string;
  url?: string;
  label?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Clickable_badge: React.FC<Props> = ({
  className = "",
  url = "",
  label = "",
  ...props
}) => {
  return (
    <div
      {...props}
      className={`
        inline-flex items-center
        rounded-full
        bg-blue-500
        hover:bg-blue-600
        text-white
        text-sm font-medium
        px-1 py-1
        transition-all duration-200
        shadow-sm hover:shadow-md
        select-none
        ${className}
      `}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <span className="flex items-center justify-center bg-white rounded-full p-1">
          <Linkedin size={14} className="text-blue-600" />
        </span>

        <span className="pr-1">{label}</span>
      </a>
    </div>
  );
};

export default Clickable_badge;

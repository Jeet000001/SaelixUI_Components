type Props = {
  name: string;
  src: string;
  className?: string;
};

const Image_Badge: React.FC<Props> = ({ name, src, className = "" }) => {
  return (
    <div
      className={`
      inline-flex items-center gap-2 
      pl-1 pr-3 py-1 
      rounded-full
      bg-transparent
      border border-gray-300
      dark:border-gray-600
      transition-all duration-200
      cursor-pointer
      ${className}
      `}
    >

      <img
        src={src}
        alt={name}
        className="size-7 object-cover rounded-full border border-gray-300 dark:border-zinc-600"
      />

      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
        {name}
      </p>
    </div>
  );
};

export default Image_Badge;

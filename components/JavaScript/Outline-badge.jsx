const Outline_Badge = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-block border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-950 dark:text-white px-3 py-0.5 font-medium text-sm rounded-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Outline_Badge;

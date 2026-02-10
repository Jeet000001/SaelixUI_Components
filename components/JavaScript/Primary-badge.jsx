const Primary_Badge = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-block bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black px-3 py-0.5 font-medium text-sm rounded-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Primary_Badge;

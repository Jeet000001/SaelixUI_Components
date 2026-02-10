const Secondary_Badge = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-block bg-gray-100 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600  font-medium text-sm px-3 py-0.5 rounded-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Secondary_Badge;

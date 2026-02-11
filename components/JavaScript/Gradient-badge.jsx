const Gradient_Badge = ({ children, className = "" }) => {
  return (
    <div
      className={`inline-block 
      bg-linear-to-r from-blue-400 via-blue-500 to-indigo-500 
      hover:from-blue-500 hover:via-blue-600 hover:to-indigo-600
      text-white 
      px-3 py-0.5 
      font-medium text-sm 
      rounded-full
      transition-all duration-300
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Gradient_Badge;
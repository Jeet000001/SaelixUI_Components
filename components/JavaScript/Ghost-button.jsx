const Ghost_Button = ({ children, className = "", ...functionality }) => {
  return (
    <button
      {...functionality}
      className={`hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-white px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Ghost_Button;

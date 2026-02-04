const Outline_Button = ({ children, className = "", ...functionality }) => {
  return (
    <button
      {...functionality}
      className={`border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-950 dark:text-white px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Outline_Button;

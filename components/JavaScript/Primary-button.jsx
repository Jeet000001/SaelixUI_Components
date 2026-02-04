const Primary_Button = ({ children, className = "", ...functionality }) => {
  return (
    <button
      {...functionality}
      className={`bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black border-b-2 border-gray-600 dark:border-b-2 dark:border-gray-400 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Primary_Button;

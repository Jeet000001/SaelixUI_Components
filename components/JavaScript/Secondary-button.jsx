const Secondary_Button = ({ children, className = "", ...functionality }) => {
  return (
    <button
      {...functionality}
      className={`bg-gray-100 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-black dark:text-white border-b-2 border-gray-200 dark:border-b-2 dark:border-gray-600 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Secondary_Button;

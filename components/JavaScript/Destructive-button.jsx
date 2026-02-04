const Destructive_Button = ({ children, className = "", ...functionality }) => {
  return (
    <button
      {...functionality}
      className={`bg-red-600 dark:bg-red-500 text-white border-b-2 border-red-400 dark:border-b-2 dark:border-red-400 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Destructive_Button;

const Button = ({ children, className, ...functionality }) => {
  return (
    <div
      {...functionality}
      className={`bg-black dark:bg-white text-white dark:text-black border-b-2 border-gray-600 dark:border-b-2 dark:border-gray-500 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default Button;

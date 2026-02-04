const Link_Button = ({ children, className = "", ...functionality }) => {
  return (
    <button
      {...functionality}
      className={`hover:underline dark:text-white dark:hover:underline px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Link_Button;

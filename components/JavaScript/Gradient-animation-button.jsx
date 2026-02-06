const Gradient_Animation_Button = ({
  children,
  className = "",
  ...functionality
}) => {
  return (
    <>
      <button
        {...functionality}
        className={`px-5 py-2 rounded-xl text-white
                   bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500
                   bg-size-[200%_200%] animate-[gradientMove_2s_ease_infinite]
                   transition-transform duration-300 active:scale-95 ${className}`}
      >
        {children}
      </button>

      <style>
        {"@keyframes gradientMove {" +
          "0% { background-position: 0% 50%; }" +
          "50% { background-position: 100% 50%; }" +
          "100% { background-position: 0% 50%; }" +
          "}"}
      </style>
    </>
  );
};

export default Gradient_Animation_Button;

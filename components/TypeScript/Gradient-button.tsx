type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Gradient_Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...functionality
}) => {
  return (
    <button
      {...functionality}
      className={`px-5 py-2 rounded-xl text-white
        bg-linear-to-t from-pink-500 via-purple-500 to-indigo-500
        bg-size-[200%_200%] animate-[gradientMove_2s_ease_infinite]
        transition-transform duration-300 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Gradient_Button;

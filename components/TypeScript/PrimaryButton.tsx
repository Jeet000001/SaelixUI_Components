type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...functionality
}) => {
  return (
      <button
        {...functionality}
        className={`bg-black dark:bg-white text-white dark:text-black border-b-2 border-gray-600 dark:border-b-2 dark:border-gray-500 px-5 py-2 rounded-xl active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
      >
        {children}
      </button>
  );
};

export default Button;

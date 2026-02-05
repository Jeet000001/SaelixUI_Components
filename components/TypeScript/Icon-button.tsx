type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const Icon_Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...functionality
}) => {
  return (
      <button
        {...functionality}
        className={`bg-black hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-black px-3 py-3 rounded-full active:scale-95 transition duration-300 ease-in-out cursor-pointer ${className}`}
      >
        {children}
      </button>
  );
};

export default Icon_Button;

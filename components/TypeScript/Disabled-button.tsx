interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Disabled_Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled = false,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={`
        px-5 py-2 rounded-xl border-b-2 transition duration-300 ease-in-out

        bg-black text-white border-gray-600
        hover:bg-gray-900 active:scale-95

        dark:bg-white dark:text-black dark:border-gray-400
        dark:hover:bg-gray-100

        disabled:bg-gray-400
        disabled:text-gray-700
        disabled:border-gray-300
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:hover:bg-gray-400
        disabled:active:scale-100

        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Disabled_Button;

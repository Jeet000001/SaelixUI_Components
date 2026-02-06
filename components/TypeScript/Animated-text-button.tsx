type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Animated_Text_Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...functionality
}) => {
  return (
    <>
      <style>
        {`
        @keyframes glow {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .glow-text {
          transition: all 0.3s ease-in-out;
        }

        /* Light mode hover */
        .glow-hover:hover .glow-text {
          color: transparent;
          background-image: linear-gradient(to right, #ffffff, #9ca3af);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          animation: glow 2s linear infinite;
        }

        /* Dark mode hover */
        .dark .glow-hover:hover .glow-text {
          background-image: linear-gradient(to right, #000000, #4b5563);
        }
        `}
      </style>

      <button
        {...functionality}
        className={`px-5 py-2 rounded-xl relative overflow-hidden glow-hover
        bg-black text-white hover:bg-gray-950
        dark:bg-white dark:text-black dark:hover:bg-gray-200
        transition-all duration-300 active:scale-95 ${className}`}
      >
        <span className="relative inline-block glow-text">
          {children}
        </span>
      </button>
    </>
  );
};

export default Animated_Text_Button;

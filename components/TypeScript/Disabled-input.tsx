type InputProps = {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
};

const Disabled_input: React.FC<InputProps> = ({
  placeholder = "Enter text...",
  type = "text",
  disabled = false,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`
        w-full max-w-xs
        px-4 py-2.5
        rounded-xl border text-sm
        transition-all duration-200

        bg-neutral-50 border-neutral-200
        text-neutral-800 placeholder-neutral-400
        hover:border-neutral-300
        focus:outline-none focus:ring-2 focus:ring-gray-200
        focus:border-gray-400

        dark:ring-blue-200 
        dark:bg-[#111827] dark:border-[#1F2937]
        dark:text-[#E5E7EB] dark:placeholder-[#4B5563]
        dark:hover:border-[#294268]
        dark:focus:border-[#3B82F6] dark:focus:ring-[#3B82F6]/20

        ${
          disabled
            ? `
          opacity-50 cursor-not-allowed
          bg-neutral-100 border-neutral-200
          dark:bg-[#0B1220] dark:border-[#1F2937]
          dark:text-[#6B7280]
        `
            : ""
        }
      `}
    />
  );
};

export default Disabled_input;

import { Loader2, ArrowRight } from "lucide-react";

type SubscribeProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  placeholder?: string;
  buttonText?: string;
  disabled?: boolean;
  loading?: boolean;
};

const With_button_input: React.FC<SubscribeProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  disabled = false,
  loading = false,
}) => {
  const isDisabled = disabled || loading;

  return (
    <div className="
      inline-flex items-center gap-2
      p-1.5 rounded-2xl border
      bg-white border-neutral-200
      dark:bg-[#111827] dark:border-[#1F2937]
      shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
      w-full max-w-sm
    ">
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        className={`
          flex-1 min-w-0 px-3 py-2
          text-sm bg-transparent border-none outline-none
          text-neutral-800 placeholder-neutral-400
          dark:text-[#E5E7EB] dark:placeholder-[#4B5563]
          transition-colors duration-200
          ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      />

      <button
        onClick={onSubmit}
        disabled={isDisabled}
        className={`
          shrink-0 flex items-center gap-1.5
          px-4 py-2 rounded-xl
          text-sm font-semibold
          transition-all duration-200

          bg-neutral-900 text-white
          dark:bg-[#266ad8] dark:text-white
          dark:shadow-[0_2px_12px_rgba(59,130,246,0.3)]

          ${isDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-neutral-700 dark:hover:bg-[#0051ff] active:scale-95"
          }
        `}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            {buttonText}
            <ArrowRight className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </div>
  );
};

export default With_button_input;
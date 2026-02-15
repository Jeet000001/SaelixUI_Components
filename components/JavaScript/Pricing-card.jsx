import { Check } from "lucide-react";

const Pricing_Card = ({
  plan,
  price,
  duration = "Month",
  features,
  buttonText = "Purchase Plan",
  className = "",
}) => {
  return (
    <div
      className={`
      w-70 rounded-3xl overflow-hidden bg-white
      dark:bg-[#111827]
      border border-transparent dark:border-[#1F2937]
      shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      hover:shadow-xl transition-all duration-300 hover:-translate-y-1
      ${className}
    `}
    >
      <div className="bg-black text-white p-6 dark:bg-[#0B0F19]">
        <p className="text-sm text-gray-300 dark:text-[#9CA3AF]">
          {plan}
        </p>

        <div className="mt-2 flex items-end gap-2">
          <h2 className="text-4xl font-bold dark:text-[#E5E7EB]">
            ${price}
          </h2>
          <span className="text-gray-400 text-sm mb-1 dark:text-[#9CA3AF]">
            / {duration}
          </span>
        </div>
      </div>

      <div className="p-6 dark:text-[#E5E7EB]">
        <div className="space-y-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-sm text-black dark:text-[#E5E7EB]"
            >
              <div className="border rounded-full p-1 dark:border-[#1F2937] dark:text-[#3B82F6]">
                <Check size={14} />
              </div>
              {item}
            </div>
          ))}
        </div>

        <button
          className="
          mt-6 w-full bg-gray-200 text-black py-3 rounded-full text-sm font-semibold
          hover:bg-black hover:text-white
          dark:bg-[#3B82F6] dark:text-white
          dark:hover:bg-[#2563EB]
          transition-all duration-300 active:scale-95
          "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Pricing_Card;

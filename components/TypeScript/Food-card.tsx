type FoodCardProps = {
  title: string;
  description: string;
  price: number;
  image: string;
  currency?: string;
  buttonText?: string;
  onAdd?: () => void;
  className?: string;
};

const Food_Card: React.FC<FoodCardProps> = ({
  title,
  description,
  price,
  image,
  currency = "₹",
  buttonText = "Add to Cart",
  className = "",
}) => {
  return (
    <div
      className={`
      w-80 bg-[#f3f4f6] dark:bg-[#111827]
      rounded-2xl
      shadow-md hover:shadow-2xl
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      transition-all duration-300 hover:scale-[1.01]
      border border-transparent dark:border-[#1F2937]
      ${className}
    `}
    >
        
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] object-cover
          transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="mt-4 pb-5 mx-5">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-[#E5E7EB]">
          {title}
        </h2>

        <p className="text-gray-500 dark:text-[#9CA3AF] text-sm mt-2 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-semibold text-green-600 dark:text-[#3B82F6]">
            {currency}
            {price}
          </span>

          <button
            className="
            bg-green-500 text-white px-6 py-2 rounded-xl
            font-medium shadow-md
            hover:bg-green-600 hover:shadow-lg
            active:scale-95
            transition-all duration-300
            dark:bg-[#3B82F6]
            dark:hover:bg-[#2563EB]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
            "
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Food_Card;

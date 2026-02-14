import { Star, Bookmark } from "lucide-react";

const Travel_Card = ({
  title,
  description,
  image,
  price,
  rating = 4.8,
  tag1 = "Romantic Stay",
  tag2 = "2 Night Trip",
  buttonText = "Book now",
  className = "",
}) => {
  return (
    <div
      className={`
      relative w-80 h-120 rounded-2xl overflow-hidden
      shadow-lg group bg-black
      dark:bg-[#111827] dark:border dark:border-[#1F2937]
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
      ${className}
    `}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover
        group-hover:scale-105 transition duration-700 ease-out"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent 
      dark:from-[#0B0F19]/90 dark:via-[#0B0F19]/40" />

      <div className="absolute top-4 right-4 bg-white/25 backdrop-blur-md p-2 rounded-full
      dark:bg-[#1F2937]/80">
        <Bookmark className="text-white dark:text-[#E5E7EB]" size={18} />
      </div>

      <div className="absolute right-4 top-[52%] bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white font-semibold text-sm
      dark:bg-[#1F2937]/80 dark:text-[#E5E7EB]">
        ${price}
      </div>

      <div className="absolute bottom-0 w-full p-5 text-white dark:text-[#E5E7EB]">
        <h2 className="text-[22px] font-semibold leading-tight tracking-tight">
          {title}
        </h2>

        <p className="text-white/80 dark:text-[#9CA3AF] text-sm mt-2 leading-relaxed max-w-[95%]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs flex items-center gap-1 font-medium
          dark:bg-[#1F2937] dark:text-[#E5E7EB]">
            <Star size={13} className="dark:text-[#3B82F6]" /> {rating}
          </div>

          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium
          dark:bg-[#1F2937] dark:text-[#E5E7EB]">
            {tag1}
          </div>

          <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-medium
          dark:bg-[#1F2937] dark:text-[#E5E7EB]">
            {tag2}
          </div>
        </div>

        <button
          className="
          mt-5 w-full bg-white text-black py-3 rounded-full font-semibold text-sm
          hover:bg-black hover:text-white
          transition-all duration-300 active:scale-95
          shadow-md hover:shadow-xl
          
          dark:bg-[#3B82F6] 
          dark:text-white
          dark:hover:bg-[#2563EB]
          dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Travel_Card;

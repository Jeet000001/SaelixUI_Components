import { Star } from "lucide-react";

const Course_Card = ({
  title,
  instructor,
  description,
  image,
  rating = 4.1,
  reviews = 146,
  price,
  className = "",
}) => {
  return (
    <div
      className={`
      w-[320px] rounded-2xl overflow-hidden
      bg-[#111]
      dark:bg-[#111827]
      dark:border border-transparent dark:border-[#1F2937]
      shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      hover:shadow-2xl
      transition-all duration-300 hover:scale-[1.02]
      ${className}
    `}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] object-cover rounded-t-2xl"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent dark:from-black/80 dark:via-black/20 dark:to-transparent" />
      </div>

      <div className="p-4 text-white dark:text-[#E5E7EB]">
        <h2 className="text-lg font-semibold leading-snug">{title}</h2>

        <p className="text-sm text-gray-400 dark:text-[#9CA3AF] mt-1">
          {instructor}
        </p>

        <p className="text-sm text-gray-300 dark:text-[#9CA3AF] mt-2 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm font-medium dark:text-[#E5E7EB]">
            {rating}
          </span>

          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} fill="currentColor" />
            <Star size={16} className="text-gray-500 dark:text-[#1F2937]" />
          </div>

          <span className="text-gray-400 dark:text-[#9CA3AF] text-sm">
            ({reviews})
          </span>
        </div>

        <div className="mt-3 text-xl font-bold dark:text-[#3B82F6]">
          RS. {price.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Course_Card;

import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  role: string;
  image: string;
  review: string;
  rating?: number;
  className?: string;
};

const Testimonial_Card: React.FC<TestimonialCardProps> = ({
  name,
  role,
  image,
  review,
  rating = 5,
  className = "",
}) => {
  return (
    <div
      className={`
      w-80 rounded-3xl p-6 text-white
      bg-linear-to-br from-[#a1a19e] via-[#878585] to-[#716e6e]
      dark:from-[#142352] dark:via-[#1f3576] dark:to-[#0d1a3f]
      dark:bg-[#111827]
      dark:border-[#1F2937]
      dark:text-[#E5E7EB]
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]

      shadow-lg hover:shadow-2xl transition duration-300 hover:scale-[1.02]
      border border-white/10
      ${className}
    `}
    >
      <div className="flex gap-1 mb-4 text-yellow-400 dark:text-[#3B82F6]">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>

      <p className="text-[15px] leading-relaxed text-white/90 dark:text-[#9CA3AF]">
        {review}
      </p>

      <div className="flex items-center gap-3 mt-6">
        <img
          src={image}
          alt={name}
          className="w-11 h-11 rounded-full object-cover border border-white/20 dark:border-[#1F2937]"
        />

        <div>
          <p className="font-semibold text-white dark:text-[#E5E7EB]">{name}</p>
          <p className="text-sm text-gray-300 dark:text-[#9CA3AF]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial_Card;

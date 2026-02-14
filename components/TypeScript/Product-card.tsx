//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React, { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";

type ProductCardProps = {
  title: string;
  brand?: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
  sizes?: number[];
  className?: string;
};

const Product_Card: React.FC<ProductCardProps> = ({
  title,
  brand = "Nike",
  price,
  image,
  rating = 4.5,
  reviews = 120,
  sizes = [39, 40, 41, 42],
  className = "",
}) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(sizes[0]);

  return (
    <div
      className={`
      w-70 rounded-2xl bg-[#f4f4f4] p-3 shadow-md
      hover:shadow-xl transition-all duration-300 hover:scale-[1.02]

      dark:bg-[#111827] 
      dark:border dark:border-[#1F2937]
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]

      ${className}
    `}
    >
      <div className="bg-white rounded-xl dark:bg-[#0B0F19]">
        <img
          src={image}
          alt={title}
          className="w-full h-[150px] object-cover rounded-xl
          transition duration-500 hover:scale-102"
        />
      </div>

      <div className="flex items-center justify-between mt-3">
        <span
          className="bg-black text-white text-[11px] px-3 py-1 rounded-full
        dark:bg-[#3B82F6] dark:text-[#E5E7EB]"
        >
          {brand}
        </span>

        <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-[#9CA3AF]">
          <Star size={14} className="fill-black dark:fill-[#3B82F6]" />
          {rating} ({reviews})
        </div>
      </div>

      <h2
        className="text-[15px] font-semibold mt-2 leading-snug line-clamp-2
      dark:text-[#E5E7EB]"
      >
        {title}
      </h2>

      <div className="text-xl font-bold mt-1 dark:text-[#E5E7EB]">
        ${price.toLocaleString()}
      </div>

      <p className="text-xs text-gray-500 mt-3 dark:text-[#9CA3AF]">
        Select size
      </p>

      <div className="flex gap-2 mt-1 flex-wrap">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`
            px-3 py-1.5 rounded-md border text-xs font-medium
            transition

            dark:border-[#1F2937]

            ${
              selectedSize === size
                ? "bg-black text-white border-black dark:bg-[#3B82F6] dark:border-[#3B82F6] dark:text-white"
                : "bg-white hover:bg-gray-100 dark:bg-[#0B0F19] dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            }
            `}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          className="flex-1 bg-black text-white py-2.5 rounded-lg text-sm font-semibold
          hover:bg-gray-900 transition active:scale-95

          dark:bg-[#3B82F6]
          dark:hover:bg-[#2563EB]
          dark:text-white"
        >
          Buy Now
        </button>

        <button
          className="bg-black text-white p-2.5 rounded-lg
          hover:bg-gray-900 transition active:scale-95

          dark:bg-[#3B82F6]
          dark:hover:bg-[#2563EB]
          dark:text-white"
        >
          <ShoppingCart size={18} />
        </button>
      </div>
    </div>
  );
};

export default Product_Card;

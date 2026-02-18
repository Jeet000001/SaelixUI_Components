//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

interface FormData {
  email: string;
  password: string;
}

const Login_Card: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md 
        bg-white 
        dark:bg-[#111827] 
        border border-gray-200 
        dark:border-[#1F2937] 
        rounded-2xl 
        shadow-md 
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
        p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-[#E5E7EB] mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 dark:text-[#9CA3AF] mb-6">
          Don't have an account yet?{" "}
          <span className="font-medium cursor-pointer hover:underline text-blue-600 dark:text-[#3B82F6] dark:hover:text-[#2563EB]">
            Sign up
          </span>
        </p>

        {/* Email */}
        <div className="relative mb-4">
          <Mail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9CA3AF]"
            size={18}
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            className="w-full 
            bg-gray-50 
            dark:bg-[#0B0F19] 
            border border-gray-300 
            dark:border-[#1F2937] 
            text-gray-900 
            dark:text-[#E5E7EB] 
            rounded-lg 
            pl-10 pr-4 py-3 
            outline-none 
            focus:ring-2 
            focus:ring-blue-600 
            dark:focus:ring-[#3B82F6]"
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <Lock
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9CA3AF]"
            size={18}
          />

          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full 
            bg-gray-50 
            dark:bg-[#0B0F19] 
            border border-gray-300 
            dark:border-[#1F2937] 
            text-gray-900 
            dark:text-[#E5E7EB] 
            rounded-lg 
            pl-10 pr-10 py-3 
            outline-none 
            focus:ring-2 
            focus:ring-blue-600 
            dark:focus:ring-[#3B82F6]"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 
            text-gray-400 
            dark:text-[#9CA3AF] 
            hover:text-gray-700 
            dark:hover:text-[#E5E7EB]"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full 
          bg-blue-600 
          dark:bg-[#3B82F6] 
          hover:bg-blue-700 
          dark:hover:bg-[#2563EB] 
          transition 
          text-white 
          py-3 
          rounded-lg 
          font-semibold 
          mb-6"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-[1px] bg-gray-200 dark:bg-[#1F2937]" />
          <span className="text-gray-500 dark:text-[#9CA3AF] text-sm">
            OR
          </span>
          <div className="flex-1 h-[1px] bg-gray-200 dark:bg-[#1F2937]" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-3">
          {["85906", "17935", "62856"].map((id) => (
            <button
              key={id}
              type="button"
              className="flex-1 
              bg-gray-100 
              dark:bg-[#111827] 
              hover:bg-gray-200 
              dark:hover:bg-[#1F2937] 
              border border-gray-200 
              dark:border-[#1F2937] 
              py-3 
              rounded-lg 
              flex items-center justify-center"
            >
              <img
                src={`https://img.icons8.com/?size=100&id=${id}&format=png&color=000000`}
                className="w-5 h-5"
              />
            </button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Login_Card;

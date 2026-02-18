// If you are using Next.js (App Router) → write "use client" on top
// If normal React (CRA/Vite) → not needed

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useTheme } from "next-themes";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agree: boolean;
}

const Signup_Card: React.FC = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white dark:bg-[#111827] border dark:border-[#1F2937] rounded-2xl shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] p-8 transition-colors"
      >
        <h2 className="text-2xl font-bold text-center mb-2">
          Create an account
        </h2>

        <p className="text-center text-gray-500 dark:text-[#9CA3AF] mb-6">
          Already have an account?{" "}
          <span className="text-black dark:text-[#3B82F6] font-medium cursor-pointer hover:underline">
            Log in
          </span>
        </p>

        <div className="flex gap-3 mb-4">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            type="text"
            placeholder="First name"
            className="w-1/2 border dark:border-[#1F2937] bg-white dark:bg-[#111827] text-black dark:text-[#E5E7EB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#3B82F6]"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Last name"
            className="w-1/2 border dark:border-[#1F2937] bg-white dark:bg-[#111827] text-black dark:text-[#E5E7EB] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#3B82F6]"
          />
        </div>

        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="w-full border dark:border-[#1F2937] bg-white dark:bg-[#111827] text-black dark:text-[#E5E7EB] rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#3B82F6]"
        />

        <div className="relative mb-4">
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full border dark:border-[#1F2937] bg-white dark:bg-[#111827] text-black dark:text-[#E5E7EB] rounded-lg px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-black dark:focus:ring-[#3B82F6]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#9CA3AF]"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <input
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            type="checkbox"
            className="w-4 h-4 accent-black dark:accent-[#3B82F6]"
          />
          <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
            I agree to the{" "}
            <span className="underline cursor-pointer text-black dark:text-[#3B82F6]">
              Terms & Conditions
            </span>
          </p>
        </div>

        <button
          type="submit"
          disabled={!formData.agree}
          className="w-full bg-black dark:bg-[#3B82F6] text-white py-3 rounded-lg font-semibold hover:bg-gray-900 dark:hover:bg-[#2563EB] transition disabled:opacity-50"
        >
          Create account
        </button>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-[#1F2937]"></div>
          <p className="text-sm text-gray-400 dark:text-[#9CA3AF]">
            Or register with
          </p>
          <div className="flex-1 h-[1px] bg-gray-300 dark:bg-[#1F2937]"></div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 border dark:border-[#1F2937] bg-white dark:bg-[#111827] text-black dark:text-[#E5E7EB] rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#1F2937] transition"
          >
            <img src="/google.png" className="w-5 h-5" />
            Google
          </button>

          <button
            type="button"
            className="flex-1 border dark:border-[#1F2937] bg-white dark:bg-[#111827] text-black dark:text-[#E5E7EB] rounded-lg py-3 flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-[#1F2937] transition"
          >
            <img
              src={theme === "dark" ? "/githubDark.png" : "/github.png"}
              className="w-6 h-6"
            />
            Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup_Card;

//If you are using Next.js (App Router) → you must write "use client" at the top for client-side components.
//If you are using normal React.js (CRA/Vite) → you do NOT need "use client".

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const Login_Card = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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

"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#5BA4D9] focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#0a0a0a] text-white hover:bg-[#5BA4D9] active:bg-[#3D8BC4]",
    secondary:
      "bg-white text-[#0a0a0a] border border-gray-300 hover:bg-gray-50 active:bg-gray-100",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}

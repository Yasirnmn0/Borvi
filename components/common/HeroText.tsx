"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

type HeroTextProps = {
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center" | "right";
  alignLg?: "left" | "center" | "right"; // ✅ responsive control
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function HeroText({
  title,
  description,
  align = "left",
  alignLg,
  size = "md",
  className = "",
}: HeroTextProps) {
  // 🎯 Size Variants
  const headingSize = {
    sm: "text-[28px] leading-[34px] lg:text-[36px] lg:leading-[42px]",
    md: "text-[30px] leading-[36px] lg:text-[40px] lg:leading-[48px]",
    lg: "text-[30px] leading-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] lg:leading-[62px]",
  };

  // 🎯 Alignment
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const alignmentLg = {
    left: "lg:text-left",
    center: "lg:text-center",
    right: "lg:text-right",
  };

  return (
    <div className={clsx(className)}>
      {/* HEADING */}
      <motion.h1
        className={clsx(
          headingSize[size],
          "font-extrabold text-[#1b1b1b] tracking-tight",
          alignment[align],
          alignLg && alignmentLg[alignLg],
        )}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        {title}
      </motion.h1>

      {/* DESCRIPTION */}
      {description && (
        <motion.p
          className={clsx(
            "mt-5 text-[15px] font-semibold leading-7 text-[#6b7280]",
            alignment[align],
            align === "center" ? "mx-auto" : "mx-0",
            alignLg === "center" && "lg:mx-auto",
            alignLg === "left" && "lg:text-left",
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

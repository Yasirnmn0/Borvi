"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
};

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  size = "md",
}: SectionHeadingProps) {
  // 🎯 Size Variants
  const headingSize = {
    sm: "text-[28px] lg:text-[32px]",
    md: "text-[36px] lg:text-[40px]",
    lg: "text-[42px] lg:text-[48px]",
  };

  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={alignment}
    >
      {/* TITLE */}
      <h2
        className={`${headingSize[size]} font-extrabold tracking-[-1px] text-[#111827]`}
      >
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p className="mt-3 text-[16px] lg:text-[17px] text-slate-500 ">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

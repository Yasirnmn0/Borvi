"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  highlightedText,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={center ? "text-center" : "text-left"}
    >
      {badge && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
          {badge}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        {title}{" "}
        {highlightedText && (
          <span className="text-primary">{highlightedText}</span>
        )}
      </h2>

      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

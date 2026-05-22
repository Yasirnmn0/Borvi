"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  image: string;
}

export default function StepCard({
  step,
  title,
  description,
  image,
}: StepCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative rounded-3xl border bg-white p-6 shadow-sm"
    >
      <div className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
        {step}
      </div>

      <div className="mb-6 mt-4">
        <Image
          src={image}
          alt={title}
          width={140}
          height={140}
          className="mx-auto object-contain"
        />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>

      <p className="text-slate-600">{description}</p>
    </motion.div>
  );
}

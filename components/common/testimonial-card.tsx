"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  review: string;
  name: string;
  location: string;
  image: string;
}

export default function TestimonialCard({
  review,
  name,
  location,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="rounded-3xl border bg-white p-6 shadow-sm"
    >
      <div className="mb-4 flex gap-1 text-primary">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-primary" />
        ))}
      </div>

      <p className="mb-6 text-slate-600">{review}</p>

      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-slate-900">{name}</h4>

          <p className="text-sm text-slate-500">{location}</p>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { Zap, ShieldCheck, CalendarRange, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, scaleIn } from "@/lib/animation";

const miniHighlights = [
  {
    icon: Zap,
    label: "Quick Process",
    info: "Get equipment in just a few minutes.",
  },
  {
    icon: ShieldCheck,
    label: "Secure Booking",
    info: "Safe & secure bookings through our app.",
  },
  {
    icon: CalendarRange,
    label: "Flexible Options",
    info: "Choose rental duration that suits you.",
  },
  {
    icon: Headphones,
    label: "Support Anytime",
    info: "24/7 support for a smooth experience.",
  },
];

export default function HowValueStrip() {
  return (
    <section className="w-full px-10 pb-18 bg-[#f6f6f6] overflow-hidden">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full rounded-[24px] bg-white border border-neutral-100 py-8 px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0"
      >
        {miniHighlights.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="flex items-center w-full relative group"
            >
              <div className="flex items-center gap-4 px-2 sm:px-4 w-full">
                {/* Icon */}
                <motion.div
                  variants={scaleIn}
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-green-300 text-[#032f19] flex items-center justify-center shrink-0"
                >
                  <Icon className="w-6 h-6 stroke-[2]" />
                </motion.div>

                {/* Text */}
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-neutral-900">
                    {item.label}
                  </h4>
                  <p className="text-xs text-neutral-500 max-w-[180px]">
                    {item.info}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {i < 3 && (
                <div className="hidden lg:block absolute right-0 h-10 w-[1px] bg-neutral-200" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

"use client";

import { metricStats } from "@/data/WhychooseData";
import { motion } from "framer-motion";
import { containerStagger, fadeUp } from "@/lib/animation";

export default function WhyMetricsStrip() {
  return (
    <section className="w-full bg-[#f6f6f6] mx-auto px-8 sm:px-6 lg:px-16 py-0">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="show"
        className="w-full rounded-[24px] bg-[#032f19] text-white py-8 px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 items-center justify-between shadow-md"
      >
        {metricStats.map((stat, idx) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex items-center justify-center gap-4 relative w-full"
            >
              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* TEXT */}
              <div>
                <motion.h4
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="text-xl md:text-2xl font-black tracking-tight text-white leading-none"
                >
                  {stat.value}
                </motion.h4>

                <p className="text-xs text-emerald-400 font-medium mt-1">
                  {stat.label}
                </p>
              </div>

              {/* DIVIDER */}
              {idx < 3 && (
                <div className="hidden lg:block absolute right-0 h-8 w-[1px] bg-white/20" />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

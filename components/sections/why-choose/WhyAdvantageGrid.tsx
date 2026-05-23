"use client";

import SectionHeading from "@/components/common/SectionHeading";
import { advantageItems } from "@/data/WhychooseData";
import { motion } from "framer-motion";
import { containerStagger, fadeUp } from "@/lib/animation";

export default function WhyAdvantageGrid() {
  return (
    <section className="w-full bg-[#f6f6f6] py-16 border-t border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center max-w-xl mx-auto space-y-3 mb-12"
        >
          <SectionHeading
            title={
              <>
                The <span className="text-[#0c7a4b]">Borvi</span> Advantage
              </>
            }
            subtitle="We make renting simple, reliable, and worry-free with benefits that set us apart."
          />
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6"
        >
          {advantageItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl border border-neutral-100/70 p-5 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-300 group"
              >
                {/* ICON */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-12 h-12 rounded-xl bg-[#f6f6f6] text-[#0c7a4b] flex items-center justify-center shrink-0"
                >
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </motion.div>

                {/* TEXT */}
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

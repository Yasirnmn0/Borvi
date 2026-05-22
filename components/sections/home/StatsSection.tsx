"use client";

import Container from "@/components/layout/Container";
import { Users, Package, LayoutGrid, Star } from "lucide-react";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, scaleIn } from "@/lib/animation";
import React from "react";

const stats = [
  {
    value: "1000+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    value: "1500+",
    label: "Equipment",
    icon: Package,
  },
  {
    value: "50+",
    label: "Categories",
    icon: LayoutGrid,
  },
  {
    value: "4.8/5",
    label: "Customer Rating",
    icon: Star,
  },
];

export const StatsSection = () => {
  return (
    <section className="py-0 bg-[#f6f6f6] overflow-hidden">
      <Container>
        {/* MAIN CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white shadow-md border border-slate-100 rounded-[24px] px-8 py-8 md:py-10"
        >
          {/* GRID */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center"
          >
            {stats.map((stat, i) => {
              const IconComponent = stat.icon;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`flex items-center gap-4 w-full justify-start sm:justify-center lg:justify-start lg:px-6
                    ${
                      i !== stats.length - 1
                        ? "lg:border-r lg:border-slate-200/80"
                        : ""
                    }
                  `}
                >
                  {/* ICON */}
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-[#054a29] text-white shrink-0 shadow-inner"
                  >
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </motion.div>

                  {/* TEXT */}
                  <div className="flex flex-col text-left font-sans">
                    <motion.h3
                      variants={fadeUp}
                      className="text-[24px] font-bold text-[#111827] tracking-tight leading-none"
                    >
                      {stat.value}
                    </motion.h3>

                    <motion.p
                      variants={fadeUp}
                      className="text-[14px] text-gray-500 font-medium mt-1 leading-tight"
                    >
                      {stat.label}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

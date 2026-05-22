"use client";

import Image from "next/image";
import { Users2, CalendarDays, Award } from "lucide-react";
import { motion } from "framer-motion";
import {
  containerStagger,
  fadeUp,
  slideRight,
  slideLeft,
  scaleIn,
} from "@/lib/animation";

export default function AboutStory() {
  return (
    <section className="py-12 md:py-16 bg-[#f6f6f6] border-y border-slate-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-10 px-10">
        {/* LEFT IMAGE */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-slate-900 order-2 lg:order-1"
        >
          <motion.div variants={scaleIn} className="w-full h-full">
            <Image
              src="/images/Borvi-shop.png"
              alt="Borvi Logistics and Inventory Management Team"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 order-1 lg:order-2 px-10"
        >
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            className="text-[#0c7a4b] font-bold text-xs md:text-sm tracking-wider uppercase bg-[#0c7a4b]/5 px-3 py-1.5 rounded-md inline-block"
          >
            Our Story
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight"
          >
            Built on Trust. Focused on{" "}
            <span className="text-[#0c7a4b]">Quality.</span>
          </motion.h2>

          {/* Paragraphs */}
          <motion.div
            variants={fadeUp}
            className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed"
          >
            <p>
              Borvi was founded with a simple mission – to make high-quality
              equipment accessible to everyone. Whether you&apos;re a homeowner,
              a DIY enthusiast, or a professional, we have the right tools and
              gear to help you get the job done.
            </p>
            <p>
              We carefully maintain our equipment and constantly expand our
              inventory to serve you better.
            </p>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            variants={containerStagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
          >
            {[
              {
                icon: Users2,
                title: "Wide Range",
                desc: "1500+ equipment options",
              },
              {
                icon: Award,
                title: "Trusted By",
                desc: "1000+ happy clients",
              },
              {
                icon: CalendarDays,
                title: "Serving Since",
                desc: "2020 with pride",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="p-2 rounded-lg bg-emerald-50 text-[#0c7a4b] shrink-0"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* TEXT */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

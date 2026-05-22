"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideRight } from "@/lib/animation";

export default function HowHero() {
  return (
    <section className="w-full bg-[#f6f6f6] px-10 lg:py-6 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5 pl-12 space-y-10"
        >
          <div className="space-y-6">
            <motion.span
              variants={fadeUp}
              className="text-[#0c7a4b] font-semibold text-xs md:text-sm uppercase tracking-wider bg-[#0c7a4b]/10 px-2.5 py-1 rounded inline-block"
            >
              How It Works
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]"
            >
              Renting Made Simple <br />
              in Just <span className="text-[#0c7a4b]">4 Easy Steps</span>
            </motion.h1>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-xl"
          >
            We&apos;ve simplified the rental process so you can get the
            equipment you need quickly and hassle-free.
          </motion.p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-7 relative w-full h-[300px] sm:h-[400px] lg:h-[480px]"
        >
          {/* FLOATING EFFECT WRAPPER */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full"
          >
            <Image
              src="/images/HowHero.png"
              alt="Borvi Application interface walkthrough"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 55vw"
              className="object-contain p-4 object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

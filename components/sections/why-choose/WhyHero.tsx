"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, slideRight, scaleIn } from "@/lib/animation";
import HeroText from "@/components/common/HeroText";
export default function WhyHero() {
  return (
    <section className="w-full h-screen  bg-[#f6f6f6]">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Copy Block */}

        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="space-y-6 py-6 px-10">
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-md bg-[#0c7a4b]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#0c7a4b]">
                Why Choose Us
              </span>
            </motion.div>
            <HeroText
              size="lg"
              title={
                <>
                  More Than Equipment.
                  <br />
                  <span className="text-[#0c7a4b]">A Better Way to Rent.</span>
                </>
              }
              description="At Borvi, we go beyond just renting equipment. We deliver quality,
              convenience, and peace of mind—so you can focus on getting the job
              done."
            />
            {/* Heading */}
            {/* <motion.h1
              variants={fadeUp}
              className="text-1xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-2xl lg:text-[36px]"
            >
              More Than Equipment.
              <br />
              <span className="text-[#0c7a4b]">A Better Way to Rent.</span>
            </motion.h1> */}

            {/* Description */}
            {/* <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]"
            >
              At Borvi, we go beyond just renting equipment. We deliver quality,
              convenience, and peace of mind—so you can focus on getting the job
              done.
            </motion.p> */}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative lg:col-span-7 py-8 overflow-visiable"
        >
          <motion.div variants={scaleIn}>
            <Image
              src="/images/Borvi-6.png"
              alt="Borvi Rental Equipment"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>
          {/* Floating Customer Badge */}
          <motion.div className="absolute z-20 bottom-32 left-0 translate-x-[-40%] md:translate-x-[-50%] bg-white rounded-2xl px-4 py-3 shadow-xl border border-neutral-200 flex items-center gap-3">
            <motion.div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0c7a4b] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 fill-[#0c7a4b]/10" />
            </motion.div>
            <motion.div>
              <motion.p className="text-xs font-bold text-slate-900 leading-none">
                Trusted by
              </motion.p>
              <motion.p className="text-[11px] text-neutral-500 font-medium mt-0.5">
                1000+ Customers Across the City
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

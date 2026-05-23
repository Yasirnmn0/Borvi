"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ChevronRight } from "lucide-react";
import HeroText from "@/components/common/HeroText";
import { heroFeatures } from "@/data/homedata";
import { fadeUp, stagger } from "@/lib/animation";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#f6f6f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* 🟢 IMAGE FIRST ON MOBILE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            {/* DOTS */}
            <div className="absolute top-0 grid grid-cols-6 gap-2 opacity-30">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 bg-[#0c7a4b] rounded-full"
                />
              ))}
            </div>

            {/* FLOAT IMAGE */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/Hero/Equipment.png"
                alt="Equipment"
                width={800}
                height={800}
                priority
                className="object-contain 
                  w-[260px] sm:w-[340px] md:w-[460px] lg:w-[580px]"
              />
            </motion.div>
          </motion.div>

          {/* 🔵 CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 lg:order-1 w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <motion.div variants={fadeUp}>
              <HeroText
                size="lg"
                align="center"
                alignLg="left"
                title={
                  <>
                    Rent Equipment <br className="hidden sm:block" />
                    Anytime, <span className="text-[#1ea672]">Anywhere</span>
                  </>
                }
                description="Tools, cleaning machines, camping gear, bikes and more..."
              />
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mt-6"
            >
              <button className="bg-[#0d7a52] hover:bg-[#0b6845] text-white px-5 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium w-full sm:w-auto">
                <Download size={18} />
                Download App
              </button>

              <button className="border border-[#0d7a52] bg-white text-[#111827] px-5 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto">
                Explore Equipment
                <ChevronRight size={18} />
              </button>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10"
            >
              {heroFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 text-left"
                  >
                    {/* ICON */}
                    <Icon className="text-[#111827]" size={26} />

                    {/* TEXT */}
                    <div>
                      <p className="text-sm font-semibold text-[#111827]">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

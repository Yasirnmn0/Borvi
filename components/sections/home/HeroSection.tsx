"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  ShieldCheck,
  BadgeDollarSign,
  Truck,
  Headphones,
  ChevronRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full h-screen bg-[#f6f6f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-6 py-4 lg:py-4">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[42px] leading-[48px] lg:text-[56px] lg:leading-[62px] font-extrabold text-[#1b1b1b] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Rent Equipment
              <br />
              Anytime, <span className="text-[#1ea672]">Anywhere</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-[15px] font-semibold leading-7 text-[#6b7280] max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Tools, cleaning machines, camping gear, bikes and more all
              available on rent throughout our mobile app.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="bg-[#0d7a52] hover:bg-[#0b6845] text-white px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium transition"
              >
                <Download size={18} />
                Download App
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="border flex gap-2 border-[#0d7a52] hover:border-[#0d7a52] bg-white text-[#111827] px-4 py-3 rounded-lg text-sm font-medium transition"
              >
                Explore Equipment
                <ChevronRight size={18} />
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                {
                  icon: ShieldCheck,
                  title: "Well Maintained",
                  subtitle: "Equipment",
                },
                {
                  icon: BadgeDollarSign,
                  title: "Affordable",
                  subtitle: "Prices",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  subtitle: "& Pickup",
                },
                {
                  icon: Headphones,
                  title: "24/7 Customer",
                  subtitle: "Support",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 1 + index * 0.15,
                      duration: 0.5,
                    }}
                    whileHover={{ y: -4 }}
                  >
                    <Icon className="text-[#111827] mt-0.5" size={36} />

                    <div>
                      <p className="text-[13px] font-semibold text-[#111827]">
                        {item.title}
                      </p>

                      <p className="text-[12px] text-gray-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* DOTS */}
            <motion.div
              className="absolute top-0 grid grid-cols-6 gap-2 opacity-30"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[#0c7a4b]"
                />
              ))}
            </motion.div>

            {/* Main Image */}
            <motion.div
              className="relative z-10 flex justify-end"
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
                className="object-contain w-[700px] lg:w-[700px] max-w-none h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

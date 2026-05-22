"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

export const AppDownloadSection = () => {
  return (
    <section className="py-10 bg-[#f6f6f6]">
      <Container>
        {/* MAIN CARD */}
        <div className="relative overflow-visible rounded-[32px] bg-white shadow-md px-6 md:px-10 lg:px-10 py-10 lg:py-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1.2fr_0.8fr]">
            {/* LEFT SIDE */}
            <div className="relative flex items-center justify-center ">
              {/* Rings */}
              <div className="absolute w-[200px] h-[200px] rounded-full border border-[#ccebdd]" />
              <div className="absolute w-[160px] h-[160px] rounded-full border border-[#d9f2e7]" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="absolute z-20 -translate-y-16 lg:-translate-y-8"
              >
                <Image
                  src="/images/DownloadApp/app-preview.png"
                  alt="App Preview"
                  width={900}
                  height={900}
                  className="
                    object-contain
                    h-[420px]
                    lg:h-[860px]
                    w-auto
                    drop-shadow-[0_35px_70px_rgba(0,0,0,0.18)]
                  "
                />
              </motion.div>
            </div>

            {/* CENTER CONTENT */}
            <div className="max-w-[480px]">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] text-[#111827]"
              >
                Our App Makes Renting{" "}
                <span className="text-[#18a46b]">Faster </span> & Easier
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-2 text-[15px] leading-7 text-gray-500"
              >
                Browse, book & manage your rentals anytime, anywhere.
              </motion.p>

              {/* Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center gap-4 mt-4"
              >
                <Image
                  src="/images/DownloadApp/googleplay-Eng.svg"
                  alt="Google Play"
                  width={160}
                  height={52}
                  className="h-[48px] w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                />

                <Image
                  src="/images/DownloadApp/Apple-Eng.svg"
                  alt="App Store"
                  width={160}
                  height={52}
                  className="h-[48px] w-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            </div>

            {/* RIGHT SIDE (QR BLOCK WITH THE EXACT IMAGE ARROW) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-end border-l border-[#dfe7e2] lg:pl-6"
            >
              {/* Target Wrapper for Relative Arrow Positioning */}
              <div className="relative flex items-center gap-5 pb-6">
                {/* QR Code */}
                <div className="rounded-xl bg-white p-2 shadow-sm border border-gray-100">
                  <Image
                    src="/images/DownloadApp/QR-Techrefi.png"
                    alt="QR Code"
                    width={96}
                    height={96}
                    className="rounded-lg"
                  />
                </div>

                {/* QR Typography Content */}
                <div className="flex flex-col text-left font-sans text-[#111827]">
                  <span className="text-lg font-medium text-gray-700 leading-snug">
                    Scan to
                  </span>
                  <span className="text-2xl font-bold tracking-tight leading-none my-0.5">
                    Download
                  </span>
                  <span className="text-lg font-medium text-gray-700 leading-snug">
                    the App
                  </span>
                </div>

                {/* Smooth Loop Custom SVG Arrow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-10 pointer-events-none">
                  <svg
                    viewBox="0 0 60 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full stroke-[#0c7a4b]"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Perfect single loop swoop tracking from left to right */}
                    <path d="M 10 5 C 10 25, 24 35, 30 25 C 34 17, 26 12, 30 22 C 34 32, 46 25, 50 5" />

                    {/* Left arrow tip pointing up-left */}
                    <path d="M 5 11 L 10 5 L 14 12" />

                    {/* Right arrow tip pointing up-right */}
                    <path d="M 46 12 L 50 5 L 55 11" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

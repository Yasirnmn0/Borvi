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
            <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[320px] lg:min-h-[unset]">
              {/* Rings */}
              <div className="absolute w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full border border-[#ccebdd]" />
              <div className="absolute w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full border border-[#d9f2e7]" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="
                  relative z-20 flex justify-center
                  lg:absolute lg:-translate-y-8
                "
              >
                <Image
                  src="/images/DownloadApp/app-preview.png"
                  alt="App Preview"
                  width={900}
                  height={900}
                  className="
                    object-contain
                    h-[260px]
                    sm:h-[320px]
                    md:h-[380px]
                    lg:h-[860px]
                    w-auto
                    drop-shadow-[0_35px_70px_rgba(0,0,0,0.18)]
                  "
                />
              </motion.div>
            </div>

            {/* CENTER CONTENT */}
            <div className="max-w-[480px] mx-auto text-center lg:text-left lg:mx-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight tracking-[-0.02em] text-[#111827]"
              >
                Our App Makes Renting{" "}
                <span className="text-[#18a46b]">Faster </span> & Easier
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="mt-3 text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-gray-500"
              >
                Browse, book & manage your rentals anytime, anywhere.
              </motion.p>

              {/* Store Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-5"
              >
                <Image
                  src="/images/DownloadApp/googleplay-Eng.svg"
                  alt="Google Play"
                  width={160}
                  height={52}
                  className="h-[40px] sm:h-[48px] w-auto"
                />

                <Image
                  src="/images/DownloadApp/Apple-Eng.svg"
                  alt="App Store"
                  width={160}
                  height={52}
                  className="h-[40px] sm:h-[48px] w-auto"
                />
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                flex flex-col sm:flex-row
                items-center
                justify-center lg:justify-end
                gap-4 sm:gap-6
                border-t lg:border-t-0
                lg:border-l border-[#dfe7e2]
                pt-6 lg:pt-0 lg:pl-6
              "
            >
              <div className="relative flex items-center gap-4 sm:gap-5 pb-2 sm:pb-6">
                {/* QR */}
                <div className="rounded-xl bg-white p-2 shadow-sm border border-gray-100">
                  <Image
                    src="/images/DownloadApp/QR-Techrefi.png"
                    alt="QR Code"
                    width={80}
                    height={80}
                    className="sm:w-[96px] sm:h-[96px]"
                  />
                </div>

                {/* TEXT */}
                <div className="flex flex-col text-center sm:text-left text-[#111827]">
                  <span className="text-sm sm:text-lg text-gray-600">
                    Scan to
                  </span>
                  <span className="text-lg sm:text-2xl font-bold leading-tight">
                    Download
                  </span>
                  <span className="text-sm sm:text-lg text-gray-600">
                    the App
                  </span>
                </div>

                {/* ARROW */}
                <div className="hidden sm:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-10 pointer-events-none">
                  <svg
                    viewBox="0 0 60 40"
                    fill="none"
                    className="w-full h-full stroke-[#0c7a4b]"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 10 5 C 10 25, 24 35, 30 25 C 34 17, 26 12, 30 22 C 34 32, 46 25, 50 5" />
                    <path d="M 5 11 L 10 5 L 14 12" />
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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideRight, scaleIn, containerStagger } from "@/lib/animation";

export default function AppDownloadBanner() {
  return (
    <section className="bg-[#f6f6f6] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-10 pb-10">
        {/* MAIN BANNER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl px-8 py-6 
          bg-gradient-to-r from-[#063d2a] to-[#0c7a4b] text-white flex items-center justify-between gap-8"
        >
          {/* LEFT: PHONE */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative hidden md:block w-[220px]"
          >
            {/* FLOAT EFFECT */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/DownloadApp/app-preview.png"
                alt="App Preview"
                width={220}
                height={160}
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          {/* CENTER: TEXT */}
          <motion.div variants={fadeUp} className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold">
              Ready to Get Started?
            </h3>

            <p className="text-sm text-white/80 mt-1">
              Download the Borvi app and rent equipment anytime, anywhere.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {/* Divider */}
            <div className="hidden md:block h-12 w-[1px] bg-white/20" />

            {/* QR */}
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.08 }}
              className="bg-white p-2 rounded-lg"
            >
              <Image
                src="/images/DownloadApp/QR-Techrefi.png"
                alt="QR Code"
                width={80}
                height={80}
              />
            </motion.div>

            {/* STORE BUTTONS */}
            <div className="flex flex-col gap-3">
              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/DownloadApp/googleplay-Eng.svg"
                  alt="Google Play"
                  width={140}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </motion.div>

              <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/DownloadApp/Apple-Eng.svg"
                  alt="App Store"
                  width={140}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

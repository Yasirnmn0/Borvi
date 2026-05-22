"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, scaleIn } from "@/lib/animation";

const processSteps = [
  {
    stepNum: "1",
    title: "Browse Equipment",
    desc: "Explore our wide range of high-quality equipment across multiple categories.",
    imgSrc: "/images/HowItWorks/step-1.png",
  },
  {
    stepNum: "2",
    title: "Download Our App",
    desc: "Download the Borvi app from Play Store or App Store to get started.",
    imgSrc: "/images/HowItWorks/step-2.png",
  },
  {
    stepNum: "3",
    title: "Book Through the App",
    desc: "Choose your equipment, select the date & time, and confirm your booking.",
    imgSrc: "/images/HowItWorks/step-3.png",
  },
  {
    stepNum: "4",
    title: "Pickup or Get Delivery",
    desc: "Pick up from our location or get it delivered to your doorstep. It's your choice!",
    imgSrc: "/images/HowItWorks/step-4.png",
  },
];

export default function HowSteps() {
  return (
    <section className="w-full py-12 px-10 bg-[#f6f6f6] overflow-hidden">
      {/* HEADING */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-xl mx-auto mb-16 space-y-2"
      >
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          How It Works
        </h2>
        <div className="w-10 h-[3px] bg-[#0c7a4b] mx-auto rounded" />
      </motion.div>

      {/* STEPS */}
      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
      >
        {processSteps.map((step, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="relative flex flex-col items-center text-center space-y-4 group"
          >
            {/* NUMBER BADGE */}
            <motion.div
              variants={scaleIn}
              className="absolute top-0 left-4 z-20 w-8 h-8 rounded-full bg-[#0c7a4b] text-white font-extrabold text-sm flex items-center justify-center shadow-sm"
            >
              {step.stepNum}
            </motion.div>

            {/* CARD */}
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-slate-100 bg-white p-4 flex items-center justify-center overflow-hidden group-hover:bg-white group-hover:shadow-md transition-all duration-300">
              {idx === 1 ? (
                <div className="w-full h-full flex flex-row items-center justify-center gap-2 pl-4">
                  {/* IMAGE */}
                  <motion.div
                    variants={scaleIn}
                    className="relative w-1/2 h-full"
                  >
                    <Image
                      src={step.imgSrc}
                      alt={step.title}
                      fill
                      className="object-contain p-1"
                    />
                  </motion.div>

                  {/* STORE BUTTONS */}
                  <div className="flex flex-col gap-1.5 w-1/2 justify-center pr-1">
                    <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                      <Image
                        src="/images/DownloadApp/googleplay-Eng.svg"
                        alt="Google Play"
                        width={95}
                        height={28}
                        className="w-full h-auto object-contain"
                      />
                    </motion.div>

                    <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                      <Image
                        src="/images/DownloadApp/Apple-Eng.svg"
                        alt="App Store"
                        width={95}
                        height={28}
                        className="w-full h-auto object-contain"
                      />
                    </motion.div>
                  </div>
                </div>
              ) : (
                <motion.div
                  variants={scaleIn}
                  className="relative w-full h-full"
                >
                  <Image
                    src={step.imgSrc}
                    alt={step.title}
                    fill
                    className="object-contain p-2"
                  />
                </motion.div>
              )}
            </div>

            {/* TEXT */}
            <motion.div variants={fadeUp} className="space-y-1.5 px-2">
              <h3 className="font-extrabold text-slate-900 text-base">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                {step.desc}
              </p>
            </motion.div>

            {/* ARROW */}
            {idx < 3 && (
              <motion.div
                variants={fadeUp}
                className="hidden lg:block absolute top-[35%] -right-4 w-8 h-4 z-10 text-slate-300 pointer-events-none"
              >
                <svg
                  viewBox="0 0 24 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                  className="w-full h-full"
                >
                  <path
                    d="M0 6H22M22 6L17 1M22 6L17 11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

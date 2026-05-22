"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, containerStagger, scaleIn } from "@/lib/animation";

const appBenefits = [
  {
    label: "Easy Browsing",
    info: "Find the right equipment quickly and easily.",
    icon: (
      <svg
        className="w-10 h-10 text-[#0c7a4b]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect x="6" y="3" width="12" height="18" rx="3" />
        <path
          d="M12 18h.01M9 7h6M9 11h4"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Real-time Availability",
    info: "Check availability in real-time before booking.",
    icon: (
      <svg
        className="w-10 h-10 text-[#0c7a4b]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l2.5 1.5" strokeLinecap="round" />
        <path
          d="M14 16.5l2 2 4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "Manage Bookings",
    info: "Track your bookings and history in one place.",
    icon: (
      <svg
        className="w-10 h-10 text-[#0c7a4b]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect x="6" y="5" width="12" height="15" rx="2" />
        <path d="M9 3h6a1 1 0 011 1v1H8V4a1 1 0 011-1z" />
        <circle cx="10" cy="9" r="1" fill="currentColor" />
        <circle cx="10" cy="13" r="1" fill="currentColor" />
        <path d="M13 9h3M13 13h3M9 17h7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Exclusive Offers",
    info: "Get access to app-only deals and discounts.",
    icon: (
      <svg
        className="w-10 h-10 text-[#0c7a4b]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 3l2.5 1.5 3-.5 1 3 2.5 1-.5 3 1.5 2.5-1.5 2.5.5 3-2.5 1-1 3-3-.5L12 21l-2.5 1.5-3-.5-1-3-2.5-1 .5-3L3 12l1.5-2.5-.5-3 2.5-1 1-3 3 .5L12 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14l4-4M10 10h.01M14 14h.01"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function HowAppPromo() {
  return (
    <section className="w-full py-16 px-10 bg-[#f6f6f6] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Heading */}
            <div>
              <h2 className="text-4xl text-center font-extrabold text-[#111827]">
                Why Use <span className="text-[#0c7a4b]">Our App?</span>
              </h2>
              <p className="mt-3 text-center text-gray-500">
                Everything you need, right at your fingertips.
              </p>
            </div>

            {/* Features */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-10"
            >
              {appBenefits.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center text-center max-w-[180px] space-y-3"
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="text-sm font-semibold text-[#111827]">
                    {item.label}
                  </h3>

                  {/* DESC */}
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.info}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* BACKGROUND CIRCLE */}
            <div className="absolute w-[380px] h-[380px] bg-[#eef7f2] rounded-full right-10 top-10" />

            {/* DOT PATTERN */}
            <div
              className="absolute right-10 top-24 w-24 h-32 hidden lg:block 
              bg-[radial-gradient(#0c7a4b_2px,transparent_2px)] 
              [background-size:12px_12px] opacity-60"
            />

            {/* FLOATING IMAGE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/images/HowItWorks/Phone-Hand.png"
                alt="App"
                width={420}
                height={520}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

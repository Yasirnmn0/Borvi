"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, slideRight, scaleIn } from "@/lib/animation";
import AppDownloadCTA from "@/components/common/AppDownloadCTA";
export default function AppDownloadBanner() {
  return (
    <>
      <AppDownloadCTA
        variant="default"
        title="Rent Anytime, Anywhere"
        subtitle="Download our app and explore 1500+ equipment at your fingertips."
      />
    </>
    // <section className="pb-16 bg-[#f6f6f6]">
    //   <div className="w-full max-w-7xl mx-auto py-6">
    //     {/* MAIN WRAPPER */}
    //     <motion.div
    //       variants={fadeUp}
    //       initial="hidden"
    //       whileInView="show"
    //       viewport={{ once: true }}
    //       className="bg-[#042F1A] text-white rounded-2xl p-4 md:p-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md select-none overflow-hidden"
    //     >
    //       {/* LEFT SIDE */}
    //       <motion.div
    //         variants={containerStagger}
    //         initial="hidden"
    //         whileInView="show"
    //         viewport={{ once: true }}
    //         className="flex items-center gap-4 sm:gap-6 w-full md:w-auto"
    //       >
    //         {/* ICON */}
    //         <motion.div
    //           variants={scaleIn}
    //           whileHover={{ scale: 1.1 }}
    //           className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-emerald-500/40 flex items-center justify-center"
    //         >
    //           <svg
    //             className="w-6 h-6 sm:w-8 sm:h-8 text-white/90"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="2"
    //             viewBox="0 0 24 24"
    //           >
    //             <rect x="5" y="2" width="14" height="20" rx="3" />
    //             <path d="M12 18h.01" strokeWidth="3" strokeLinecap="round" />
    //           </svg>
    //         </motion.div>

    //         {/* TEXT */}
    //         <motion.div variants={fadeUp} className="flex-1">
    //           <h3 className="text-lg sm:text-xl font-bold tracking-tight">
    //             Rent Anytime, Anywhere
    //           </h3>
    //           <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-medium">
    //             Download our app and explore 1500+ equipment at your fingertips.
    //           </p>
    //         </motion.div>
    //       </motion.div>

    //       {/* RIGHT SIDE */}
    //       <motion.div
    //         variants={slideRight}
    //         initial="hidden"
    //         whileInView="show"
    //         viewport={{ once: true }}
    //         className="flex items-center justify-between md:justify-end gap-4 lg:gap-8 w-full md:w-auto border-t border-emerald-800/40 md:border-t-0 pt-4 md:pt-0"
    //       >
    //         {/* STORE BUTTONS */}
    //         <motion.div
    //           variants={containerStagger}
    //           className="flex items-center gap-3 sm:gap-4"
    //         >
    //           <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
    //             <Image
    //               src="/images/DownloadApp/googleplay-Eng.svg"
    //               alt="Get it on Google Play"
    //               width={135}
    //               height={40}
    //               className="h-9 sm:h-[42px] w-auto object-contain"
    //             />
    //           </motion.div>

    //           <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
    //             <Image
    //               src="/images/DownloadApp/Apple-Eng.svg"
    //               alt="Download on the App Store"
    //               width={135}
    //               height={40}
    //               className="h-9 sm:h-[42px] w-auto object-contain"
    //             />
    //           </motion.div>
    //         </motion.div>

    //         {/* DIVIDER */}
    //         <div className="hidden sm:block h-10 w-[1px] bg-emerald-800/60" />

    //         {/* QR */}
    //         <motion.div
    //           variants={scaleIn}
    //           whileHover={{ scale: 1.08 }}
    //           className="bg-white p-1.5 sm:p-2 rounded-xl flex-shrink-0 shadow-inner"
    //         >
    //           <Image
    //             src="/images/DownloadApp/QR-Techrefi.png"
    //             alt="Scan QR Code"
    //             width={64}
    //             height={64}
    //             className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
    //           />
    //         </motion.div>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </section>
  );
}

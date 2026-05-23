"use client";

import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { steps, features } from "@/data/homedata";
import { containerStagger, fadeUp, scaleIn, slideRight } from "@/lib/animation";
import Image from "next/image";

export const HowItWorksPreview = () => {
  return (
    <section className="py-16 md:py-20 bg-[#f6f6f6] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-center mb-10">
              How Renting <span className="text-[#1ea672]">Works</span>
            </h2>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative"
            >
              {/* Line (hide on mobile) */}
              {/* <div className="hidden sm:block absolute top-[40px] md:top-[50px] left-[10%] w-[80%] border-t border-dashed border-gray-300" /> */}

              {steps.map((step, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* IMAGE ICON */}
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f1f5f3] rounded-full shadow flex items-center justify-center overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    {/* NUMBER */}
                    <div className="w-6 h-6 mt-2 rounded-full bg-[#0F3D2E] text-white text-xs flex items-center justify-center">
                      {index + 1}
                    </div>

                    {/* TEXT */}
                    <h4 className="mt-3 text-xs md:text-sm font-semibold text-[#1b1b1b]">
                      {step.title}
                    </h4>

                    <p className="text-[11px] md:text-xs text-gray-500 mt-1 max-w-[120px]">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* RIGHT - WHY CHOOSE US */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="
    bg-gradient-to-r from-[#0F3D2E] to-[#145A45] 
    text-white 
    rounded-2xl 
    flex flex-col lg:flex-row 
    items-center 
    justify-between 
    px-6 py-6 lg:py-4 
    gap-8
    overflow-hidden
  "
          >
            {/* TEXT */}
            <div className="max-w-sm w-full order-1">
              <h2 className="text-2xl font-bold mb-6">
                Why <span className="text-[#1ea672]">Choose</span> Us?
              </h2>

              <ul className="space-y-4">
                {features.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded-full border border-[#1ea672] text-[#1ea672] text-xs">
                      ✓
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="
      order-2
      w-full 
      flex 
      justify-center 
      lg:justify-end
    "
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Image
                  src="/images/toolbox.png"
                  alt="Toolbox"
                  width={420}
                  height={420}
                  className="
          object-contain
          w-[240px]
          sm:w-[300px]
          md:w-[340px]
          lg:w-[420px]
          h-auto
          lg:scale-110
          lg:translate-x-16
        "
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

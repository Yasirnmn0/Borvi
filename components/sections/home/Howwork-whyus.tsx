"use client";

import Container from "@/components/layout/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Download, Calendar, Truck } from "lucide-react";
import { containerStagger, fadeUp, slideRight, scaleIn } from "@/lib/animation";

const steps = [
  {
    title: "Browse Equipment",
    desc: "Explore a wide range of equipment you need.",
    icon: Search,
  },
  {
    title: "Download Our App",
    desc: "Get our app from Play Store or App Store.",
    icon: Download,
  },
  {
    title: "Book Through App",
    desc: "Choose equipment, select duration & book.",
    icon: Calendar,
  },
  {
    title: "Pickup or Delivery",
    desc: "Pick up from location or get it delivered.",
    icon: Truck,
  },
];

const features = [
  "Top Quality Equipment",
  "Affordable Pricing",
  "Flexible Rental Plans",
  "On-time Delivery",
  "Well Maintained & Sanitized",
  "24/7 Customer Support",
];

export const HowItWorksPreview = () => {
  return (
    <section className="py-32 bg-[#f6f6f6]">
      <Container>
        <div className="grid grid-cols-2 gap-6">
          {/* LEFT - HOW IT WORKS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white shadow-md rounded-2xl p-6 relative"
          >
            <h2 className="text-2xl font-bold text-center mb-12">
              How Renting <span className="text-[#1ea672]">Works</span>
            </h2>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative grid grid-cols-4 gap-6 text-center"
            >
              {/* Line */}
              <div className="absolute top-[38px] left-[8%] w-[84%] border-t border-dashed border-gray-300"></div>

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    {/* ICON */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-16 h-16 bg-[#f6f6f6] rounded-full shadow-md flex items-center justify-center"
                    >
                      <Icon className="w-6 h-6 text-[#1ea672]" />
                    </motion.div>

                    {/* NUMBER */}
                    <div className="w-6 h-6 mt-3 rounded-full bg-[#0F3D2E] text-white text-xs flex items-center justify-center">
                      {index + 1}
                    </div>

                    {/* TITLE */}
                    <h4 className="mt-4 font-semibold text-sm text-[#1b1b1b]">
                      {step.title}
                    </h4>

                    {/* DESC */}
                    <p className="text-xs text-gray-500 mt-2 max-w-[140px]">
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
            className="bg-gradient-to-r from-[#0F3D2E] to-[#145A45] text-white rounded-2xl flex items-center justify-between px-6 py-4 overflow-hidden"
          >
            {/* TEXT */}
            <div className="max-w-sm">
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
                    <span className="w-5 h-5 flex items-center justify-center rounded-full border border-white text-xs">
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
              className="relative flex-1 flex justify-end"
            >
              <Image
                src="/images/toolbox.png"
                alt="Toolbox"
                width={420}
                height={420}
                className="object-contain scale-125 translate-x-16"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, slideRight, scaleIn } from "@/lib/animation";

const valueFeatures = [
  {
    iconUrl: "/images/icons/shield.png",
    title: "Quality Equipment",
    desc: "Well maintained & regularly serviced",
  },
  {
    iconUrl: "/images/icons/tag.png",
    title: "Affordable Prices",
    desc: "Best prices with flexible plans",
  },
  {
    iconUrl: "/images/icons/truck.png",
    title: "Fast Delivery",
    desc: "Quick delivery & easy pickup",
  },
  {
    iconUrl: "/images/icons/headset.png",
    title: "Customer First",
    desc: "24/7 support for a smooth experience",
  },
];

export default function AboutHero() {
  return (
    <section className="w-full overflow-hidden bg-[#f6f6f6]">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="space-y-6 py-8 px-10">
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-md bg-[#0c7a4b]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#0c7a4b]">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-1xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-2xl lg:text-[36px]"
            >
              Your Trusted Partner
              <br />
              for <span className="text-[#0c7a4b]">Every Rental Need</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-sm leading-7 text-slate-600 md:text-[15px]"
            >
              At Borvi, we make renting simple, affordable, and reliable. From
              power tools to camping gear, we provide high-quality equipment so
              you can focus on getting things done.
            </motion.p>
          </div>

          {/* FEATURES */}
          <motion.div
            variants={containerStagger}
            className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4 px-10 pb-10"
          >
            {valueFeatures.map((feat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="space-y-3"
              >
                {/* Icon Box */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0c7a4b]/10 bg-[#0c7a4b]/5 shadow-sm"
                >
                  <div className="relative h-6 w-6">
                    <Image
                      src={feat.iconUrl}
                      alt={feat.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <div className="space-y-1">
                  <h3 className="text-xs font-bold text-slate-900">
                    {feat.title}
                  </h3>

                  <p className="text-[11px] text-slate-500">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative lg:col-span-7 overflow-hidden"
        >
          <motion.div variants={scaleIn}>
            <Image
              src="/images/Borvi5.png"
              alt="Borvi Rental Equipment"
              width={1200}
              height={900}
              priority
              className="h-full w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

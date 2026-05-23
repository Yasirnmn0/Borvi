"use client";

import SectionHeading from "@/components/common/SectionHeading";
import { channels } from "@/data/contactdata";
import { motion } from "framer-motion";
import { containerStagger, fadeUp } from "@/lib/animation";

export default function ContactCardsGrid() {
  return (
    <section className="w-full bg-white py-12 border-t border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center space-y-1"
        >
          <SectionHeading
            title={
              <>
                Get <span className="text-[#0c7a4b]">Touch</span>
              </>
            }
            subtitle="Reach out to us through any of these channels."
          />

          {/* Underline */}
          <motion.div
            variants={fadeUp}
            className="mt-3 mx-auto flex w-12 h-1.5 rounded-full overflow-hidden"
          >
            <div className="bg-[#111827] w-1/4" />
            <div className="bg-[#0c7a4b] w-1/2" />
            <div className="bg-[#111827] w-1/4" />
          </motion.div>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {channels.map((channel, idx) => {
            const Icon = channel.icon;
            const CardWrapper = channel.link ? "a" : "div";

            return (
              <motion.div key={idx} variants={fadeUp}>
                <CardWrapper
                  href={channel.link || undefined}
                  target={
                    channel.link?.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    channel.link?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`bg-neutral-50/50 rounded-2xl border border-neutral-100/80 p-8 flex items-start gap-4 transition-all duration-300 ${
                    channel.link
                      ? "hover:bg-white hover:shadow-lg hover:shadow-neutral-100/60 cursor-pointer group"
                      : "cursor-default"
                  }`}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#e7f2ec] text-[#0c7a4b] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Text */}
                  <div className="space-y-2 min-w-0">
                    <span className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block">
                      {channel.label}
                    </span>

                    <span
                      className={`text-xs font-extrabold text-[#0c7a4b] block truncate transition-colors ${
                        channel.link ? "group-hover:text-[#0c7a4b]" : ""
                      }`}
                    >
                      {channel.value}
                    </span>

                    <span className="text-[11px] text-neutral-400 font-normal block truncate">
                      {channel.subtext}
                    </span>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

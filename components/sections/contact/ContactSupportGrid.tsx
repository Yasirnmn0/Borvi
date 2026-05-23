"use client";

import Image from "next/image";
import { MessageSquareCode, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, scaleIn } from "@/lib/animation";
import { useRouter } from "next/navigation";

export default function ContactSupportGrid() {
  const router = useRouter();

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        variants={containerStagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* LEFT BOX */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="bg-[#f2f8f5] rounded-3xl p-6 flex items-center justify-between gap-6 relative overflow-hidden group border border-neutral-100/50"
        >
          <div className="space-y-4 max-w-[65%] relative z-10">
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-[#032f19] tracking-tight">
                Need Immediate Help?
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Our support team is available 24/7 to assist you.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0c7a4b] hover:bg-[#0a663e] rounded-xl px-4 py-3 shadow-md shadow-[#0c7a4b]/10 transition-colors">
              <MessageSquareCode className="w-3.5 h-3.5" />
              Chat with Support
            </button>
          </div>

          {/* IMAGE */}
          <motion.div
            variants={scaleIn}
            className="absolute right-4 bottom-0 w-[140px] h-[160px] md:w-[220px] md:h-[220px]"
          >
            <Image
              src="/images/support-agent.png"
              alt="Support"
              fill
              className="object-contain object-bottom scale-105 group-hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT BOX */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="bg-neutral-50/60 rounded-3xl p-6 flex items-center justify-between gap-6 relative overflow-hidden group border border-neutral-100"
        >
          <div className="space-y-4 max-w-[60%] relative z-10">
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-[#032f19] tracking-tight">
                Looking for Equipment?
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Browse our wide range of equipment and rent with ease.
              </p>
            </div>

            <button
              onClick={() => {
                router.push("/#Categories");
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0c7a4b] bg-white hover:bg-[#0c7a4b] hover:text-white border border-[#0c7a4b]/20 rounded-xl px-4 py-3 transition-all"
            >
              Explore Equipment
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* IMAGES */}
          <div className="flex items-end gap-4 pr-2">
            {/* Generator */}
            <motion.div
              variants={scaleIn}
              className="relative w-[130px] h-[100px]"
            >
              <Image
                src="/images/generator.png"
                alt="Generator"
                fill
                className="object-contain translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
              />
            </motion.div>

            {/* Lawn Mower */}
            <motion.div
              variants={scaleIn}
              className="relative w-[130px] h-[100px]"
            >
              <Image
                src="/images/Lawn-mower.png"
                alt="Lawn Mower"
                fill
                className="object-contain translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

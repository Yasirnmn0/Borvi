"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { fadeUp, slideRight, scaleIn, containerStagger } from "@/lib/animation";

type CTAProps = {
  variant?: "default" | "card" | "gradient";
  title: React.ReactNode;
  subtitle?: string;

  showPhone?: boolean;
  showQR?: boolean;
  showStores?: boolean;

  align?: "left" | "center" | "right";
};

export default function AppDownloadCTA({
  variant = "default",
  title,
  subtitle,
  showPhone = true,
  showQR = true,
  showStores = true,
  align = "left",
}: CTAProps) {
  const isCard = variant === "card";
  const isGradient = variant === "gradient";

  return (
    <section className="bg-[#f6f6f6] py-10">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`
            relative overflow-hidden rounded-2xl px-6 md:px-10 py-8 flex items-center gap-8
            ${isCard ? "bg-white shadow-md lg:grid lg:grid-cols-[1fr_1.2fr_0.8fr]" : ""}
            ${isGradient ? "bg-gradient-to-r from-[#063d2a] to-[#0c7a4b] text-white" : ""}
            ${!isCard && !isGradient ? "bg-[#042F1A] text-white flex-col md:flex-row justify-between" : ""}
          `}
        >
          {/* LEFT: PHONE */}
          {showPhone && (
            <motion.div
              variants={slideRight}
              className="relative hidden md:block w-[200px]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
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
          )}

          {/* CENTER CONTENT */}
          <div
            className={`
              flex-1
              ${align === "center" && "text-center mx-auto"}
              ${align === "right" && "text-right ml-auto"}
            `}
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl md:text-3xl font-bold tracking-tight"
            >
              {title}
            </motion.h2>

            {subtitle && (
              <motion.p variants={fadeUp} className="mt-2 text-sm opacity-80">
                {subtitle}
              </motion.p>
            )}

            {/* STORE BUTTONS */}
            {showStores && (
              <motion.div
                variants={containerStagger}
                className={`
                  flex gap-3 mt-4
                  ${align === "center" && "justify-center"}
                  ${align === "right" && "justify-end"}
                `}
              >
                <motion.div variants={scaleIn}>
                  <Image
                    src="/images/DownloadApp/googleplay-Eng.svg"
                    alt="Google Play"
                    width={140}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </motion.div>

                <motion.div variants={scaleIn}>
                  <Image
                    src="/images/DownloadApp/Apple-Eng.svg"
                    alt="App Store"
                    width={140}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* RIGHT SIDE (QR) */}
          {showQR && (
            <motion.div variants={scaleIn} className="flex items-center gap-4">
              {isCard && (
                <div className="hidden md:block h-12 w-[1px] bg-gray-200" />
              )}

              <div className="bg-white p-2 rounded-lg">
                <Image
                  src="/images/DownloadApp/QR-Techrefi.png"
                  alt="QR Code"
                  width={80}
                  height={80}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

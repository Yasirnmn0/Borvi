"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Variants } from "framer-motion";
const categories = [
  {
    title: "Power Tools",
    image: "/images/Categories/drill.png",
  },
  {
    title: "Cleaning Equipment",
    image: "/images/Categories/cleaner1.png",
  },
  {
    title: "Gardening",
    image: "/images/Categories/lawnmower1.png",
  },
  {
    title: "Camping & Outdoor",
    image: "/images/Categories/tent.png",
  },
  {
    title: "Bikes & Sports",
    image: "/images/Categories/BikeCycle.png",
  },
  {
    title: "Construction",
    image: "/images/Categories/ladder.png",
  },
];

// 🔥 Animation Variants
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function CategoriesSection() {
  return (
    <section className="bg-[#f6f6f6] py-16">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[42px] font-extrabold tracking-[-1px] text-[#111827]">
            Browse Equipment <span className="text-[#0c7a4b]">Categories</span>
          </h2>

          <p className="mt-3 text-[17px] text-slate-500">
            Find the right equipment for your needs
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card
                className="
                  group
                  rounded-xl
                  border border-slate-200
                  bg-white
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-lg
                  hover:border-[#0c7a4b]/20
                "
              >
                <CardContent className="p-4 flex flex-col items-center justify-between h-[180px]">
                  {/* Image */}
                  <div className="flex items-center justify-center flex-1">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                      }}
                    >
                      <Image
                        src={category.image}
                        alt={category.title}
                        width={90}
                        height={90}
                        className="object-contain"
                      />
                    </motion.div>
                  </div>

                  {/* Text */}
                  <h3 className="text-[14px] font-medium text-[#111827] text-center mt-3">
                    {category.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

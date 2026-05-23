"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, containerStagger, scaleIn } from "@/lib/animation";

const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Delhi",
    text: "Great experience! Equipment was in excellent condition and delivery was very prompt.",
    image: "/images/User1.png",
  },
  {
    name: "Anjali Verma",
    location: "Noida",
    text: "Very affordable and the app is so easy to use. Highly recommended!",
    image: "/images/User2.png",
  },
  {
    name: "Vikram Mehta",
    location: "Gurgaon",
    text: "Rented a tent for our trip. Quality was amazing and the process was smooth.",
    image: "/images/User3.png",
  },
  {
    name: "Siddharth Malhotra",
    location: "Mumbai",
    text: "Excellent support team and seamless booking. Will definitely use it again.",
    image: "/images/User4.png",
  },
];

export default function WhyTestimonials() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const nextSlide = () => {
    setStartIndex((prev) =>
      prev + visibleCount >= testimonials.length ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1,
    );
  };

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount,
  );

  return (
    <section className="py-26 bg-[#f6f6f6] relative overflow-hidden">
      <Container>
        {/* HEADING */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-14"
        >
          <h2 className="text-[42px] font-extrabold tracking-[-1px] text-[#111827]">
            What Our <span className="text-[#0c7a4b]">Customers</span> Say
          </h2>

          <div className="mt-3 flex w-12 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#111827] w-1/3" />
            <div className="bg-[#0c7a4b] w-2/3" />
            <div className="bg-[#111827] w-1/3" />
          </div>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative w-full px-4 sm:px-8">
          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white border rounded-full shadow-md hover:bg-gray-50 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 mx-auto" />
          </button>

          {/* GRID WITH ANIMATION */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="show"
            key={startIndex} // 🔥 THIS FIXES SLIDE ANIMATION
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={t.name + startIndex}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, y: 40 }}
                  whileHover={{ y: -6 }}
                  className="relative bg-white border rounded-[24px] p-7 pt-10 shadow-sm flex flex-col justify-between min-h-[220px]"
                >
                  {/* Quote */}
                  <span className="absolute top-5 left-6 text-[#0c7a4b] text-[36px]">
                    “
                  </span>

                  {/* TEXT */}
                  <div className="space-y-4">
                    <p className="text-[14.5px] text-gray-600 pl-3">{t.text}</p>

                    {/* STARS */}
                    <div className="flex pl-3 text-[#0c7a4b]">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-6 flex justify-between items-end pl-3">
                    <div>
                      <h4 className="text-[16px] font-bold text-[#111827]">
                        {t.name}
                      </h4>
                      <span className="text-[13px] text-gray-400">
                        {t.location}
                      </span>
                    </div>

                    {/* AVATAR */}
                    <motion.div
                      variants={scaleIn}
                      className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md relative"
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white border rounded-full shadow-md hover:bg-gray-50 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 mx-auto" />
          </button>
        </div>
      </Container>
    </section>
  );
}

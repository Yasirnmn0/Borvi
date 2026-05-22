"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Delhi",
    text: "Great experience! Equipment was in excellent condition and delivery was very prompt.",
    image: "/images/Testimonials/user1.png",
  },
  {
    name: "Anjali Verma",
    location: "Noida",
    text: "Very affordable and the app is so easy to use. Highly recommended!",
    image: "/images/Testimonials/user2.png",
  },
  {
    name: "Vikram Mehta",
    location: "Gurgaon",
    text: "Rented a tent for our trip. Quality was amazing and the process was smooth.",
    image: "/images/Testimonials/user3.png",
  },
  // Adding extra items so you can test sliding through multiple data entries easily!
  {
    name: "Siddharth Malhotra",
    location: "Mumbai",
    text: "Excellent support team and seamless booking. Will definitely use it again.",
    image: "/images/Testimonials/user1.png",
  },
];

export const TestimonialsSection = () => {
  // Track the start index of the currently visible reviews
  const [startIndex, setStartIndex] = useState(0);

  // Dynamic visible count: shows 3 items on desktop, 1 on mobile/tablet views
  const getVisibleCount = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return 1;
    }
    return 3;
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) => {
      const visibleCount = getVisibleCount();
      // Loop back to start if we reach the end of dataset
      if (prevIndex + visibleCount >= testimonials.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => {
      const visibleCount = getVisibleCount();
      // Loop to end if going backwards from index zero
      if (prevIndex === 0) {
        return Math.max(0, testimonials.length - visibleCount);
      }
      return prevIndex - 1;
    });
  };

  // Slice data based on active slider position
  const visibleCount =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  // Handles picking correct items even with rolling slices
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount,
  );

  return (
    <section className="py-26 bg-[#f6f6f6] relative overflow-visible">
      <Container>
        {/* CENTERED SECTION HEADING MATCHING DESIGN */}

        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-[42px] font-extrabold tracking-[-1px] text-[#111827]">
            What Our <span className="text-[#0c7a4b]">Customers</span> Say
          </h2>
          {/* Custom Multi-colored Accent Line Under Title */}
          <div className="mt-3 flex items-center justify-center gap-0 w-12 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#111827] w-1/3 h-full" />
            <div className="bg-[#0c7a4b] w-2/3 h-full" />
            <div className="bg-[#111827] w-1/3 h-full" />
          </div>
        </div>

        {/* CAROUSEL GRID CONTAINER WITH NAVIGATION CONTROLS */}
        <div className="relative w-full px-4 sm:px-8">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 bg-white border border-gray-100 rounded-full shadow-md text-gray-800 transition-all hover:bg-gray-50 active:scale-95"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Testimonial Cards Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-500 ease-in-out">
            {visibleTestimonials.map((t, i) => (
              <div
                key={startIndex + i} // Updates key correctly to help React track active component animations
                className="relative bg-white border border-gray-100/80 rounded-[24px] p-7 pt-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[220px]"
              >
                {/* Visual Background Open Quote Icon Asset */}
                <span className="absolute top-5 left-6 text-[#0c7a4b] text-[36px] font-serif leading-none select-none opacity-80">
                  “
                </span>

                {/* Review Paragraph Content Body */}
                <div className="space-y-4">
                  <p className="text-[14.5px] leading-relaxed text-gray-600 font-normal pl-3">
                    {t.text}
                  </p>

                  {/* Star Ratings Component Block */}
                  <div className="flex items-center gap-0.5 pl-3 text-[#0c7a4b]">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 fill-current stroke-none"
                      />
                    ))}
                  </div>
                </div>

                {/* Card Subfooter Containing User Identity Details & Avatar Frame */}
                <div className="mt-6 pt-2 flex items-end justify-between pl-3">
                  <div className="flex flex-col text-left">
                    <h4 className="text-[16px] font-bold text-[#111827] leading-tight">
                      {t.name}
                    </h4>
                    <span className="text-[13px] font-medium text-gray-400 mt-0.5">
                      {t.location}
                    </span>
                  </div>

                  {/* Absolute Bottom-Right Pinned Avatar Image Module */}
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-50 border-2 border-white shadow-md relative shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-11 h-11 bg-white border border-gray-100 rounded-full shadow-md text-gray-800 transition-all hover:bg-gray-50 active:scale-95"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </Container>
    </section>
  );
};

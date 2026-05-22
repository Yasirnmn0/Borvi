"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonialReviews = [
  {
    name: "Rohit Sharma",
    location: "Delhi",
    review:
      "Borvi made renting equipment so easy and affordable. The delivery was on time and the equipment was in excellent condition.",
    rating: 5,
    avatar: "/images/Users/user-1.jpg",
  },
  {
    name: "Anjali Verma",
    location: "Noida",
    review:
      "Great customer support and a wide variety of equipment to choose from. Highly recommended!",
    rating: 5,
    avatar: "/images/Users/user-2.jpg",
  },
  {
    name: "Vikram Mehta",
    location: "Gurgaon",
    review:
      "I rented a generator for my event. Quality was top-notch and the process was completely hassle-free.",
    rating: 5,
    avatar: "/images/Users/user-3.jpg",
  },
];

export default function WhyTestimonials() {
  return (
    <section className="w-full bg-neutral-50/40 py-16 border-t border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-[#032f19] tracking-tight">
            Why Customers Trust <span className="text-[#0c7a4b]">Borvi</span>
          </h2>
          <p className="text-neutral-500 text-xs md:text-sm font-medium">
            Real stories from real customers who love our service.
          </p>
        </div>

        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialReviews.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-neutral-100/80 shadow-sm relative flex flex-col justify-between space-y-6"
              >
                <div className="text-4xl font-serif text-[#0c7a4b]/20 absolute top-4 left-4 leading-none select-none">
                  “
                </div>

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-neutral-600 font-normal leading-relaxed italic">
                    {item.review}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-50">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-neutral-100 shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-neutral-400 font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-100 hidden xl:flex items-center justify-center text-slate-700 hover:text-[#0c7a4b] transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-neutral-100 hidden xl:flex items-center justify-center text-slate-700 hover:text-[#0c7a4b] transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

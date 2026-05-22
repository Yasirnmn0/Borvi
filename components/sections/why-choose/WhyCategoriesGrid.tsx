"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categoryList = [
  { name: "Power Tools", img: "/images/Categories/power-tools.png" },
  { name: "Cleaning Equipment", img: "/images/Categories/cleaning.png" },
  { name: "Gardening", img: "/images/Categories/gardening.png" },
  { name: "Camping & Outdoor", img: "/images/Categories/camping.png" },
  { name: "Bikes & Sports", img: "/images/Categories/bikes.png" },
  { name: "Construction", img: "/images/Categories/construction.png" },
];

export default function WhyCategoriesGrid() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-[#032f19] tracking-tight">
            Quality Equipment for{" "}
            <span className="text-[#0c7a4b]">Every Need</span>
          </h2>
          <p className="text-neutral-500 text-xs md:text-sm font-medium">
            Explore our wide range of well-maintained equipment across multiple
            categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categoryList.map((cat, idx) => (
            <div
              key={idx}
              className="group relative bg-neutral-50/50 rounded-2xl border border-neutral-100 p-4 flex flex-col items-center justify-between aspect-[4/5] hover:bg-white hover:shadow-lg hover:shadow-neutral-100/80 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-2/3 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="w-full flex items-center justify-between mt-4 pt-2 border-t border-dashed border-neutral-100">
                <span className="text-xs font-bold text-slate-800 tracking-tight transition-colors duration-200 group-hover:text-[#0c7a4b]">
                  {cat.name}
                </span>
                <div className="w-6 h-6 rounded-full bg-white border border-neutral-100 group-hover:bg-[#0c7a4b] group-hover:text-white flex items-center justify-center transition-all duration-200 shrink-0">
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

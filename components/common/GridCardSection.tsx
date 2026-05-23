"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

type Item = {
  title: string;
  image: string;
};

type GridCardSectionProps = {
  heading: React.ReactNode;
  subtitle?: string;
  items: Item[];
  columns?: "2" | "3" | "4" | "6";
};

export default function GridCardSection({
  heading,
  subtitle,
  items,
  columns = "6",
}: GridCardSectionProps) {
  const gridCols = {
    "2": "grid-cols-2",
    "3": "grid-cols-2 md:grid-cols-3",
    "4": "grid-cols-2 md:grid-cols-4",
    "6": "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <section className="w-full py-16 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <SectionHeading size="md" title={heading} subtitle={subtitle} />
        </div>

        {/* GRID */}
        <div className={`grid ${gridCols[columns]} gap-6 `}>
          {items.map((item, idx) => (
            <div
              key={idx}
              className="
    group
    relative
    rounded-xl
    border border-slate-200
    bg-white
    shadow-sm
    transition-all duration-300
    hover:shadow-lg
    hover:border-[#0c7a4b]/20
    p-4
    flex flex-col items-center justify-between
    aspect-[4/5]
    cursor-pointer
  "
            >
              {/* IMAGE */}
              <div className="relative w-full h-2/3 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* FOOTER */}
              <div className="w-full flex items-center justify-between mt-4 pt-2 border-t border-dashed border-neutral-100">
                <span className="text-xs font-bold text-slate-800 tracking-tight group-hover:text-[#0c7a4b] transition-colors">
                  {item.title}
                </span>

                <div className="w-6 h-6 rounded-full bg-white border border-neutral-100 group-hover:bg-[#0c7a4b] group-hover:text-white flex items-center justify-center transition-all">
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

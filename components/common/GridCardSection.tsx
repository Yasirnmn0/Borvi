"use client";

import Image from "next/image";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";

type Item = {
  title: string;
  image: string;
  condition: string;
  availability: string;
  pricing: string;
  description: string;
};

type Props = {
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
}: Props) {
  const [selected, setSelected] = useState<Item | null>(null);

  // ✅ PAGINATION STATE
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const visibleItems = items.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  // ✅ NAVIGATION
  const next = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prev = () => {
    if (page > 0) setPage(page - 1);
  };

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

        {/* SLIDER */}
        <div className="relative">
          {/* LEFT ARROW */}
          {/* <button
            onClick={prev}
            disabled={page === 0}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border rounded-full w-10 h-10 items-center justify-center hover:bg-[#0c7a4b] hover:text-white transition disabled:opacity-40"
          >
            <ChevronLeft size={20} />
          </button> */}

          {/* RIGHT ARROW */}
          {/* <button
            onClick={next}
            disabled={page === totalPages - 1}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md border rounded-full w-10 h-10 items-center justify-center hover:bg-[#0c7a4b] hover:text-white transition disabled:opacity-40"
          >
            <ChevronRight size={20} />
          </button> */}

          {/* GRID */}
          <div className={`grid ${gridCols[columns]} gap-6`}>
            {visibleItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(item)}
                className="
                  group relative rounded-xl bg-white shadow-sm hover:shadow-lg
                  p-4 flex flex-col justify-between aspect-[4/5]
                  cursor-pointer transition
                "
              >
                {/* IMAGE */}
                <div className="relative w-full h-2/3 group-hover:scale-105 transition">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* FOOTER */}
                <div className="flex justify-between mt-4 pt-2">
                  <span className="text-xs font-bold group-hover:text-[#0c7a4b]">
                    {item.title}
                  </span>

                  <div className="w-6 h-6 flex items-center justify-center rounded-full border group-hover:bg-[#0c7a4b] group-hover:text-white">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === page ? "bg-[#0c7a4b]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* MODAL */}
        {selected && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 hover:text-green-700"
              >
                <X />
              </button>

              <div className="relative w-full h-40 mb-4">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-center mb-2">
                {selected.title}
              </h3>

              <p className="text-sm text-gray-500 text-center mb-4">
                {selected.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="px-4 py-2 text-xs font-medium bg-white border border-neutral-200 rounded-full shadow-sm hover:bg-[#0c7a4b] hover:text-white cursor-pointer transition">
                  Condition : {selected.condition}
                </span>

                <span className="px-4 py-2 text-xs font-medium bg-white border border-neutral-200 rounded-full shadow-sm hover:bg-[#0c7a4b] hover:text-white cursor-pointer transition">
                  Availablitiy : {selected.availability}
                </span>

                <span className="px-4 py-2 text-xs font-medium bg-white border border-neutral-200 rounded-full shadow-sm hover:bg-[#0c7a4b] hover:text-white cursor-pointer transition">
                  Pricing : {selected.pricing}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function WhyHero() {
  return (
    <section className="w-full max-w-7xl bg-[#f6f6f6] mx-auto px-10 sm:px-6 lg:px-10 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Block */}
        <div className="lg:col-span-5 space-y-5">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#0c7a4b]">
            Why Choose Us
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#032f19] tracking-tight leading-[1.1]">
            More Than Equipment.
            <br />
            <span className="text-[#0c7a4b]">A Better Way to Rent.</span>
          </h1>
          <p className="text-neutral-500 text-sm md:text-base font-normal leading-relaxed max-w-md">
            At Borvi, we go beyond just renting equipment. We deliver quality,
            convenience, and peace of mind—so you can focus on getting the job
            done.
          </p>
        </div>

        {/* Right Graphic Box with Trusted Absolute Overlay Badge */}
        <div className="lg:col-span-7 relative w-full aspect-[4/3] rounded-[32px] overflow-hidden bg-neutral-100 shadow-xl shadow-neutral-100/40">
          <Image
            src="/images/Borvi5.png"
            alt="Borvi equipment warehouse layout display catalog"
            fill
            priority
            className="object-cover"
          />

          {/* Floating Customer Badge */}
          <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-3 shadow-lg border border-neutral-100/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#0c7a4b] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 fill-[#0c7a4b]/10" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 leading-none">
                Trusted by
              </p>
              <p className="text-[11px] text-neutral-500 font-medium mt-0.5">
                1000+ Customers Across the City
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

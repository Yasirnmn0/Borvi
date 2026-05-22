"use client";

import React from "react";
import Image from "next/image";
import { Users2, CalendarDays, Award } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-12 md:py-16 bg-slate-50/50 border-y border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-10 px-10">
        {/* Left Side: Editorial Work Snapshot */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg bg-slate-900 order-2 lg:order-1">
          <Image
            src="/images/borvi-shop.png"
            alt="Borvi Logistics and Inventory Management Team"
            fill
            sizes="(max-w-1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Side: Narrative Copywriting & Secondary Badges */}
        <div className="space-y-6 order-1 lg:order-2 px-10">
          <span className="text-[#0c7a4b] font-bold text-xs md:text-sm tracking-wider uppercase bg-[#0c7a4b]/5 px-3 py-1.5 rounded-md inline-block">
            Our Story
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Built on Trust. Focused on{" "}
            <span className="text-[#0c7a4b]">Quality.</span>
          </h2>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              Borvi was founded with a simple mission – to make high-quality
              equipment accessible to everyone. Whether you&apos;re a homeowner,
              a DIY enthusiast, or a professional, we have the right tools and
              gear to help you get the job done.
            </p>
            <p>
              We carefully maintain our equipment and constantly expand our
              inventory to serve you better.
            </p>
          </div>

          {/* Core Story Summary Pill-boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
              <div className="p-2 rounded-lg bg-emerald-50 text-[#0c7a4b] shrink-0">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Wide Range</h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  1500+ equipment options
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
              <div className="p-2 rounded-lg bg-emerald-50 text-[#0c7a4b] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Trusted By</h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  1000+ happy clients
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
              <div className="p-2 rounded-lg bg-emerald-50 text-[#0c7a4b] shrink-0">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Serving Since
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  2020 with pride
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

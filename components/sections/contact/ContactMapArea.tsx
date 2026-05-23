"use client";

import { Navigation } from "lucide-react";

export default function ContactMapArea() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="relative w-full h-[360px] rounded-[28px] overflow-hidden shadow-md border border-neutral-200">
        {/* MAP */}
        <iframe
          title="Germany Office Location"
          src="https://maps.google.com/maps?q=Friedrichstraße%20123,%20Berlin,%20Germany&t=&z=13&ie=UTF-8&iwloc=&output=embed"
          className="w-full h-full object-cover filter grayscale opacity-75 contrast-[1.1]"
          loading="lazy"
        />

        {/* SOFT OVERLAY (for washed map effect like design) */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

        {/* INFO CARD */}
        <div className="absolute left-6 top-12 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white/60 max-w-xs w-full">
          {/* TEXT */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-[#111827]">Visit Us</h3>

            <p className="text-[13px] text-gray-500 leading-relaxed">
              We’d love to meet you in person. Find us at our office during
              business hours.
            </p>
          </div>

          {/* BUTTON */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4 inline-flex items-center gap-2
              text-sm font-semibold
              text-[#0c7a4b]
              border border-[#0c7a4b]
              rounded-lg px-4 py-2.5
              transition-all duration-200
              hover:bg-[#0c7a4b] hover:text-white
              active:scale-95
            "
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

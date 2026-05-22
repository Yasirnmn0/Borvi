"use client";

import { Navigation } from "lucide-react";

export default function ContactMapArea() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
      <div className="w-full h-[360px] rounded-[32px] overflow-hidden border border-neutral-100 shadow-inner relative bg-neutral-100">
        {/* Core Vector Roadmap Base Container Layer */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!1s0x0%3A0x0!2zMjh_MzMnMTYuOCJOIDc3XzIzJzE4LjAiRQ!5m2!1sen!2sin"
          className="w-full h-full border-none opacity-80"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Borvi corporate headquarters location maps tracking grid"
        />

        {/* Absolute Suspended Route Information Overlay Box */}
        <div className="absolute left-6 top-6 bg-white rounded-2xl p-5 border border-neutral-100/70 shadow-xl max-w-xs w-full space-y-4">
          <div className="space-y-1">
            <h3 className="text-sm font-black text-[#032f19] tracking-tight">
              Visit Us
            </h3>
            <p className="text-[11px] text-neutral-500 font-normal leading-relaxed">
              We&apos;d love to meet you in person. Find us at our office during
              business hours.
            </p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold text-[#0c7a4b] bg-[#e7f2ec] hover:bg-[#0c7a4b] hover:text-white border border-[#0c7a4b]/10 rounded-xl px-4 py-2.5 transition-all duration-200 active:scale-95"
          >
            <Navigation className="w-3.5 h-3.5 fill-current stroke-[1.5]" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

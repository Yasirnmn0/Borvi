"use client";

import { Zap, ShieldCheck, CalendarRange, Headphones } from "lucide-react";

const miniHighlights = [
  {
    icon: Zap,
    label: "Quick Process",
    info: "Get equipment in just a few minutes.",
  },
  {
    icon: ShieldCheck,
    label: "Secure Booking",
    info: "Safe & secure bookings through our app.",
  },
  {
    icon: CalendarRange,
    label: "Flexible Options",
    info: "Choose rental duration that suits you.",
  },
  {
    icon: Headphones,
    label: "Support Anytime",
    info: "24/7 support for a smooth experience.",
  },
];

export default function HowValueStrip() {
  return (
    <section className="w-full py-6">
      <div className="w-full rounded-[24px] bg-[#f7f9f7] border border-neutral-100 py-8 px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 items-center justify-between">
        {miniHighlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center w-full relative">
              {/* Feature Content Wrapper */}
              <div className="flex items-center gap-4 px-2 sm:px-4 w-full">
                {/* Circular Icon Wrapper Badge */}
                <div className="w-14 h-14 rounded-full bg-[#e7f2ec] text-[#032f19] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Text Block */}
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-neutral-900 tracking-tight">
                    {item.label}
                  </h4>
                  <p className="text-xs text-neutral-500 font-normal leading-relaxed max-w-[180px]">
                    {item.info}
                  </p>
                </div>
              </div>

              {/* Vertical Divider Line (Hidden on mobile/tablet screens, hidden after final element) */}
              {i < 3 && (
                <div className="hidden lg:block absolute right-0 h-10 w-[1px] bg-neutral-200" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

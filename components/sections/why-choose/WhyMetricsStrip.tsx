"use client";

import { Users, Wrench, MapPin, Star } from "lucide-react";

const metricStats = [
  { icon: Users, value: "1000+", label: "Happy Customers" },
  { icon: Wrench, value: "1500+", label: "Equipment" },
  { icon: MapPin, value: "25+", label: "Areas Served" },
  { icon: Star, value: "4.8/5", label: "Customer Rating" },
];

export default function WhyMetricsStrip() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="w-full rounded-[24px] bg-[#032f19] text-white py-8 px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0 items-center justify-between shadow-md">
        {metricStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="flex items-center justify-center gap-4 relative w-full"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-black tracking-tight text-white leading-none">
                  {stat.value}
                </h4>
                <p className="text-xs text-emerald-400 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
              {idx < 3 && (
                <div className="hidden lg:block absolute right-0 h-8 w-[1px] bg-white/20" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

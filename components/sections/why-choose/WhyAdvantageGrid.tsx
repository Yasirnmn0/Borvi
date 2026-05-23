"use client";

import {
  ShieldCheck,
  Tag,
  Truck,
  Headphones,
  CalendarDays,
  HeartHandshake,
} from "lucide-react";

const advantageItems = [
  {
    icon: ShieldCheck,
    title: "Top Quality Equipment",
    desc: "Well-maintained, latest equipment for every need.",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    desc: "Best prices with flexible plans that fit your budget.",
  },
  {
    icon: Truck,
    title: "Fast Delivery & Pickup",
    desc: "Quick delivery and easy pickup at your convenience.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Our team is always ready to help you, anytime.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Rental Plans",
    desc: "Hourly, daily, weekly, or monthly - choose what works for you.",
  },
  {
    icon: HeartHandshake,
    title: "Safe & Hassle Free",
    desc: "Easy booking, secure payments, and hassle-free process.",
  },
];

export default function WhyAdvantageGrid() {
  return (
    <section className="w-full bg-[#f6f6f6] py-16 border-t border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-[#032f19] tracking-tight">
            The <span className="text-[#0c7a4b]">Borvi</span> Advantage
          </h2>
          <p className="text-neutral-500 text-xs md:text-sm font-medium">
            We make renting simple, reliable, and worry-free with benefits that
            set us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {advantageItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-100/70 p-5 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:shadow-neutral-100/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f6f6f6] text-[#0c7a4b] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

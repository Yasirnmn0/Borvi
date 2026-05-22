"use client";

import Image from "next/image";
import { MessageSquareCode, ArrowUpRight } from "lucide-react";

export default function ContactSupportGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Action Box: Direct Operator Chat Bridge */}
        <div className="bg-[#f2f8f5] rounded-3xl p-6 flex items-center justify-between gap-6 relative overflow-hidden group border border-neutral-100/50">
          <div className="space-y-4 max-w-[65%] relative z-10">
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-[#032f19] tracking-tight">
                Need Immediate Help?
              </h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                Our support team is available 24/7 to assist you.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0c7a4b] hover:bg-[#0a663e] rounded-xl px-4 py-3 shadow-md shadow-[#0c7a4b]/10 transition-colors">
              <MessageSquareCode className="w-3.5 h-3.5" />
              Chat with Support
            </button>
          </div>

          {/* Customer Support Representative Absolute Silhouette Asset Frame */}
          <div className="absolute right-4 bottom-0 w-[140px] h-[160px] md:w-[160px] md:h-[180px]">
            <Image
              src="/images/Contact/support-agent.png"
              alt="Live support representative call center assistant"
              fill
              className="object-contain object-bottom scale-105 group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Action Box: Equipment Rental Catalog Navigation Link */}
        <div className="bg-neutral-50/60 rounded-3xl p-6 flex items-center justify-between gap-6 relative overflow-hidden group border border-neutral-100">
          <div className="space-y-4 max-w-[60%] relative z-10">
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-[#032f19] tracking-tight">
                Looking for Equipment?
              </h3>
              <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                Browse our wide range of equipment and rent with ease.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 text-xs font-bold text-[#0c7a4b] bg-white hover:bg-[#0c7a4b] hover:text-white border border-[#0c7a4b]/20 rounded-xl px-4 py-3 transition-all">
              Explore Equipment
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Heavy Machinery Mockups absolute floating display element */}
          <div className="absolute right-2 bottom-2 w-[160px] h-[120px] md:w-[180px] md:h-[130px]">
            <Image
              src="/images/Contact/generator-fleet.png"
              alt="Power distribution tracking generator hardware items asset fleet"
              fill
              className="object-contain object-right-bottom translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

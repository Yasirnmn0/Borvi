"use client";

import WhyHero from "@/components/sections/why-choose/WhyHero";
import WhyAdvantageGrid from "@/components/sections/why-choose/WhyAdvantageGrid";
import WhyMetricsStrip from "@/components/sections/why-choose/WhyMetricsStrip";
import WhyCategoriesGrid from "@/components/sections/why-choose/WhyCategoriesGrid";
import WhyTestimonials from "@/components/sections/why-choose/WhyTestimonials";
import WhyDownloadFooterBanner from "@/components/sections/why-choose/WhyDownloadFooterBanner";

export default function WhyChooseUsPage() {
  return (
    <div className="w-full bg-white antialiased">
      {/* Breadcrumbs line wrapper context */}
      <nav className="w-full bg-neutral-50 border-b border-neutral-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-medium text-neutral-500 flex items-center gap-1.5">
          <span className="hover:text-slate-900 cursor-pointer">Home</span>
          <span>&gt;</span>
          <span className="text-[#0c7a4b]">Why Choose Us</span>
        </div>
      </nav>

      {/* Section Lineup Blocks */}
      <WhyHero />
      <WhyAdvantageGrid />
      <WhyMetricsStrip />
      <WhyCategoriesGrid />
      <WhyTestimonials />
      <WhyDownloadFooterBanner />
    </div>
  );
}

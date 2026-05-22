"use client";

import WhyHero from "@/components/sections/why-choose/WhyHero";
import WhyAdvantageGrid from "@/components/sections/why-choose/WhyAdvantageGrid";
import WhyMetricsStrip from "@/components/sections/why-choose/WhyMetricsStrip";
import WhyCategoriesGrid from "@/components/sections/why-choose/WhyCategoriesGrid";
import WhyTestimonials from "@/components/sections/why-choose/WhyTestimonials";
import WhyDownloadFooterBanner from "@/components/sections/why-choose/WhyDownloadFooterBanner";

export default function WhyChooseUsPage() {
  return (
    <>
      <WhyHero />
      <WhyAdvantageGrid />
      <WhyMetricsStrip />
      <WhyCategoriesGrid />
      <WhyTestimonials />
      <WhyDownloadFooterBanner />
    </>
  );
}

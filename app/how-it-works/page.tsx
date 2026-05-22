"use client";

import Container from "@/components/layout/Container";
import HowHero from "@/components/sections/how-it-works/StepsHero";
import HowSteps from "@/components/sections/how-it-works/StepsGrid";
import HowValueStrip from "@/components/sections/how-it-works/FeaturesRow";
import HowAppPromo from "@/components/sections/how-it-works/AppBenefits";
import HowCTA from "@/components/sections/how-it-works/CTA-Banner";

export default function HowItWorksPage() {
  return (
    <>
      {/* Ordered section composition following layout strategy perfectly */}
      <HowHero />
      <HowSteps />
      <HowValueStrip />
      <HowAppPromo />
      <HowCTA />
    </>
  );
}

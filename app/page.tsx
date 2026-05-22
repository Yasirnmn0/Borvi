import HeroSection from "@/components/sections/home/HeroSection";
import CategoriesSection from "@/components/sections/home/CategoriesSection";
import { HowItWorksPreview } from "@/components/sections/home/Howwork-whyus";
// import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { AppDownloadSection } from "@/components/sections/home/AppDownloadSection";
import { StatsSection } from "@/components/sections/home/StatsSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <HowItWorksPreview />
      {/* <WhyChooseUs /> */}
      <AppDownloadSection />
      <StatsSection />
      <TestimonialsSection />
    </>
  );
}

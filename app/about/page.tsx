import AboutHero from "@/components/sections/about/AboutHero";
import OurStory from "@/components/sections/about/OurStory";
import AboutStats from "@/components/sections/about/AboutStats";
// import TeamSection from "@/components/sections/about/TeamSection";
import AboutCTA from "@/components/sections/about/AboutCTABanner";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <AboutStats />
      {/* <TeamSection /> */}
      <AboutCTA />
    </>
  );
}

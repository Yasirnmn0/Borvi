"use client";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactCardsGrid from "@/components/sections/contact/ContactCardsGrid";
import ContactMapArea from "@/components/sections/contact/ContactMapArea";
import ContactSupportGrid from "@/components/sections/contact/ContactSupportGrid";

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactCardsGrid />
      <ContactMapArea />
      <ContactSupportGrid />
    </>
  );
}

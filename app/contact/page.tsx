"use client";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactCardsGrid from "@/components/sections/contact/ContactCardsGrid";
import ContactMapArea from "@/components/sections/contact/ContactMapArea";
import ContactSupportGrid from "@/components/sections/contact/ContactSupportGrid";

export default function ContactUsPage() {
  return (
    <div className="w-full bg-white antialiased">
      {/* Breadcrumb Navigation Hook */}
      <nav className="w-full bg-neutral-50 border-b border-neutral-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs font-medium text-neutral-500 flex items-center gap-1.5">
          <span className="hover:text-slate-900 cursor-pointer transition-colors">
            Home
          </span>
          <span className="text-neutral-300 font-light">&gt;</span>
          <span className="text-[#0c7a4b]">Contact Us</span>
        </div>
      </nav>

      {/* Sequential Section Lineup Stacks */}
      <ContactHero />
      <ContactCardsGrid />
      <ContactMapArea />
      <ContactSupportGrid />
    </div>
  );
}

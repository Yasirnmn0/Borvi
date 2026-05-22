"use client";

import Image from "next/image";

export default function HowHero() {
  return (
    <section className="w-full bg-white pb-12 lg:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: Onboarding Content */}
        <div className="lg:col-span-5 pl-12 space-y-10">
          <div className="space-y-6">
            <span className="text-[#0c7a4b] font-semibold text-xs md:text-sm uppercase tracking-wider bg-[#0c7a4b]/10 px-2.5 py-1 rounded inline-block">
              How It Works
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Renting Made Simple <br />
              in Just <span className="text-[#0c7a4b]">4 Easy Steps</span>
            </h1>
          </div>

          <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-xl">
            We&apos;ve simplified the rental process so you can get the
            equipment you need quickly and hassle-free.
          </p>
        </div>

        {/* Right Side: Curved Background Layer with Floating Mockups */}
        <div className="lg:col-span-7 relative w-full h-[300px] sm:h-[400px] lg:h-[480px]">
          {/* Replace with your unified graphics file containing equipment and mobile frame layout */}
          <Image
            src="/images/HowHero.png"
            alt="Borvi Application interface walkthrough showing simple steps to rent"
            fill
            priority
            sizes="(max-w-1024px) 100vw, 55vw"
            className="object-contain p-4 object-center"
          />
        </div>
      </div>
    </section>
  );
}

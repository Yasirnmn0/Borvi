"use client";

import Image from "next/image";

export default function WhyDownloadFooterBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full bg-[#f4f7f5] rounded-[32px] p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-inner">
        {/* Left Handset Mockups Column */}
        <div className="w-full lg:w-[28%] flex justify-center items-center relative min-h-[160px] lg:min-h-[220px]">
          <div className="relative w-[260px] h-[200px] lg:h-[240px]">
            <Image
              src="/images/Promo/dual-mockup.png"
              alt="Borvi interface overview mobile app active grid frames"
              fill
              className="object-contain object-center scale-110 lg:scale-125"
            />
          </div>
        </div>

        {/* Center Copy Block Column */}
        <div className="w-full lg:w-[42%] text-center lg:text-left space-y-2">
          <h3 className="text-2xl md:text-3xl font-black text-[#032f19] tracking-tight">
            Rent Anytime, Anywhere
          </h3>
          <p className="text-xs md:text-sm text-neutral-500 font-normal leading-relaxed">
            Download the Borvi app and get access to 1500+ equipment at your
            fingertips.
          </p>
        </div>

        {/* Right Stores & Scan Badge Column */}
        <div className="w-full lg:w-[30%] flex items-center justify-center lg:justify-end gap-6 border-t border-neutral-200/50 lg:border-t-0 pt-6 lg:pt-0">
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-neutral-100 flex-shrink-0">
            <Image
              src="/images/Promo/qr-code.png"
              alt="Scan QR code interface link download tracking"
              width={72}
              height={72}
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="hidden lg:block h-12 w-[1px] bg-neutral-300/60" />

          <div className="flex flex-col gap-2.5">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform active:scale-95 hover:opacity-90"
            >
              <Image
                src="/images/Promo/google-play.png"
                alt="Get it on Google Play"
                width={115}
                height={34}
                className="h-9 w-auto object-contain"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform active:scale-95 hover:opacity-90"
            >
              <Image
                src="/images/Promo/app-store.png"
                alt="Download on the App Store"
                width={115}
                height={34}
                className="h-9 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

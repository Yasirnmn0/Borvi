"use client";

import Image from "next/image";

export default function AppDownloadBanner() {
  return (
    <div className="w-full max-w-7xl mx-autob pb-10">
      <div
        className="relative overflow-hidden rounded-2xl px-8 py-6 
        bg-gradient-to-r from-[#063d2a] to-[#0c7a4b] text-white flex items-center justify-between gap-8"
      >
        {/* LEFT: PHONES */}
        <div className="relative hidden md:block w-[220px]">
          <Image
            src="/images/DownloadApp/app-preview.png"
            alt="App Preview"
            width={220}
            height={160}
            className="object-contain"
          />
        </div>

        {/* CENTER: TEXT */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold">
            Ready to Get Started?
          </h3>

          <p className="text-sm text-white/80 mt-1">
            Download the Borvi app and rent equipment anytime, anywhere.
          </p>
        </div>

        {/* RIGHT: QR + BADGES */}
        <div className="flex items-center gap-6">
          {/* Divider */}
          <div className="hidden md:block h-12 w-[1px] bg-white/20" />

          {/* QR */}
          <div className="bg-white p-2 rounded-lg">
            <Image
              src="/images/DownloadApp/QR-Techrefi.png"
              alt="QR Code"
              width={80}
              height={80}
            />
          </div>

          {/* STORE BUTTONS */}
          <div className="flex flex-col gap-3">
            <Image
              src="/images/DownloadApp/googleplay-Eng.svg"
              alt="Google Play"
              width={140}
              height={40}
              className="h-[40px] w-auto"
            />
            <Image
              src="/images/DownloadApp/Apple-Eng.svg"
              alt="App Store"
              width={140}
              height={40}
              className="h-[40px] w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

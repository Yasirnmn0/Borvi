import Image from "next/image";

export default function AppDownloadBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto  py-6">
      <div className="bg-[#042F1A] text-white rounded-2xl p-4 md:p-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md select-none">
        {/* Left Side: Icon & Copy */}
        <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto">
          {/* Phone Circular Badge */}
          <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-emerald-500/40 flex items-center justify-center bg-transparent">
            {/* Simple SVG Phone Outline matching the design */}
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white/90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="5" y="2" width="14" height="20" rx="3" />
              <path d="M12 18h.01" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Rent Anytime, Anywhere
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-medium">
              Download our app and explore 1500+ equipment at your fingertips.
            </p>
          </div>
        </div>

        {/* Right Side: Store Badges & QR Code */}
        <div className="flex items-center justify-between md:justify-end gap-4 lg:gap-8 w-full md:w-auto border-t border-emerald-800/40 md:border-t-0 pt-4 md:pt-0">
          {/* App Stores Wrapper */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Google Play Button */}
            {/* <a 
              href={googlePlayUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform active:scale-95 hover:opacity-90"
            > */}
            <Image
              src="/images/DownloadApp/googleplay-Eng.svg" // Replace with your badge asset path
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-9 sm:h-[42px] w-auto object-contain"
            />

            {/* App Store Button */}
            {/* <a 
              href={appStoreUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform active:scale-95 hover:opacity-90"
            > */}
            <Image
              src="/images/DownloadApp/Apple-Eng.svg" // Replace with your badge asset path
              alt="Download on the App Store"
              width={135}
              height={40}
              className="h-9 sm:h-[42px] w-auto object-contain"
            />
          </div>

          {/* Subtle Vertical Divider (hidden on small mobile screens) */}
          <div className="hidden sm:block h-10 w-[1px] bg-emerald-800/60" />

          {/* QR Code Container */}
          <div className="bg-white p-1.5 sm:p-2 rounded-xl flex-shrink-0 shadow-inner">
            <Image
              src="/images/DownloadApp/QR-Techrefi.png"
              alt="Scan QR Code to download app"
              width={64}
              height={64}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

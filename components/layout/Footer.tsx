"use client";

import {
  LinkedinIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  categoryItems,
  footerNavItems,
} from "@/data/FooterData";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#032b16] text-slate-300 font-sans border-t border-emerald-900/40 w-full">
      <Container className="py-8 lg:py-8">
        {/* Main Grid structure centered on all displays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr_1fr] gap-10 lg:gap-6 items-start text-center">
          {/* Column 1: Identity & Brand Bio */}
          <div className="flex flex-col space-y-5 w-full">
            <Link
              href="/"
              className="flex items-center gap-3 group justify-center"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#032b16] shadow-sm">
                <span className="text-xl font-extrabold">B</span>
              </div>
              <span className="text-xl font-extrabold text-white">Borvi</span>
            </Link>
            <p className="text-[14px] leading-relaxed text-slate-300/90 max-w-[260px]">
              We provide high-quality equipment on rent including tools,
              machines, camping gear, bikes, and more.
            </p>
            {/* Social Handlers Grouped & Centered */}
            <div className="flex items-center gap-4 pt-2 text-slate-300 justify-center">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <YoutubeIcon />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors p-1 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center lg:border-l lg:border-emerald-900/40 w-full h-full">
            <h4 className="text-white text-[16px] font-semibold tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[14px] font-medium w-full">
              {footerNavItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-emerald-400 transition-colors block text-slate-300/80"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories Link Tree */}
          <div className="flex flex-col items-center lg:border-l lg:border-emerald-900/40 w-full h-full">
            <h4 className="text-white text-[16px] font-semibold tracking-wide mb-5">
              Categories
            </h4>
            <ul className="space-y-3 text-[14px] font-medium w-full">
              {categoryItems.map((cat) => (
                <li key={cat.title}>
                  <Link
                    href={cat.href}
                    className="hover:text-emerald-400 transition-colors block text-slate-300/80"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col items-center lg:border-l lg:border-emerald-900/40 w-full h-full space-y-5">
            <h4 className="text-white text-[16px] font-semibold tracking-wide mb-2">
              Contact Us
            </h4>

            <div className="space-y-4 text-[14px] flex flex-col items-center w-full">
              {/* Phone */}
              <div className="flex items-center gap-3 justify-center w-full">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300/90 font-medium">
                  +49 30 12345678
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 justify-center w-full">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300/90 font-medium">
                  hello@borvi.de
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 justify-center text-center w-full">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300/90 leading-normal font-medium">
                  Friedrichstraße 123,
                  <br />
                  10117 Berlin,
                  <br />
                  Germany
                </span>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-3 justify-center w-full">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300/90 font-medium">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Column 5: Map */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[280px] sm:max-w-full h-32 md:h-36 rounded-2xl overflow-hidden border border-emerald-800/60 shadow-lg bg-emerald-950">
              <iframe
                title="Germany Office Location"
                src="https://maps.google.com/maps?q=Friedrichstraße%20123,%20Berlin,%20Germany&t=&z=13&ie=UTF-8&iwloc=&output=embed"
                className="w-full h-full object-cover filter grayscale opacity-75 contrast-[1.1]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Subfooter Copyright & Links Block */}
        <div className="mt-12 pt-6 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-slate-400 font-medium text-center">
          <p>© 2026 Borvi. All Rights Reserved.</p>
          <div className="flex items-center gap-4 justify-center">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-emerald-900/60">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

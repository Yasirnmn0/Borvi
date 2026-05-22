"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const footerNavItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "How It Works", href: "/how-it-works" },
  { title: "Why Choose Us", href: "/why-choose-us" },
  { title: "Contact Us", href: "/contact" },
];

const categoryItems = [
  { title: "Power Tools", href: "#" },
  { title: "Cleaning Equipment", href: "#" },
  { title: "Gardening", href: "#" },
  { title: "Camping & Outdoor", href: "#" },
  { title: "Bikes & Sports", href: "#" },
  { title: "Construction", href: "#" },
];

// Custom Inline SVGs
const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon
      points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
              <div className="flex items-center gap-3 justify-center w-full">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300/90 font-medium">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-3 justify-center w-full">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300/90 font-medium">
                  hello@borvi.com
                </span>
              </div>

              <div className="flex items-start gap-3 justify-center text-center w-full">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-300/90 leading-normal font-medium">
                  123, Sector 45, Noida,
                  <br /> Uttar Pradesh, India
                </span>
              </div>

              <div className="flex items-center gap-3 justify-center w-full">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300/90 font-medium">
                  Mon - Sun: 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Column 5: Map Box Container wrapper */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[280px] sm:max-w-full h-32 md:h-36 rounded-2xl overflow-hidden border border-emerald-800/60 shadow-lg bg-emerald-950">
              <iframe
                title="Borvi Location Map"
                src="https://maps.google.com/maps?q=Sector%2045,%20Noida&t=&z=13&ie=UTF-8&iwloc=&output=embed"
                className="w-full h-full object-cover filter grayscale opacity-75 invert contrast-[1.1]"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
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

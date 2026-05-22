"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const corporateTeam = [
  {
    name: "Aman Verma",
    role: "Founder & CEO",
    imgUrl: "/images/Hero/Equipment.png",
  },
  {
    name: "Neha Sharma",
    role: "Operations Manager",
    imgUrl: "/images/Hero/Equipment.png",
  },
  {
    name: "Rohit Singh",
    role: "Technical Head",
    imgUrl: "/images/Hero/Equipment.png",
  },
  {
    name: "Priya Mehta",
    role: "Customer Support Lead",
    imgUrl: "/images/Hero/Equipment.png",
  },
];

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function AboutTeam() {
  return (
    <section className="py-12 md:py-16 bg-[#f6f6f6]">
      <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
        <span className="text-[#0c7a4b] font-bold text-xs md:text-sm tracking-wide uppercase bg-[#0c7a4b]/5 px-3 py-1.5 rounded-md inline-block">
          Meet Our Team
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
          The People Behind <span className="text-[#0c7a4b]">Borvi</span>
        </h2>
        <p className="text-slate-500 text-sm font-medium">
          A passionate team working hard every day to provide you the best
          rental experience.
        </p>
      </div>

      {/* Grid Matrix mapping 4 executive columns perfectly */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {corporateTeam.map((member, i) => (
          <div
            key={i}
            className="group border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/30 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[11/10] w-full overflow-hidden bg-slate-100">
              <Image
                src={member.imgUrl}
                alt={`${member.name} - ${member.role}`}
                fill
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 text-center flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900 text-base">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-slate-400">
                  {member.role}
                </p>
              </div>

              {/* Interactive Contact Anchors Grid */}
              <div className="flex items-center gap-2.5 justify-center text-slate-400">
                <Link
                  href="#"
                  className="w-7 h-7 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#0c7a4b] hover:bg-[#0c7a4b] hover:text-white transition-colors shadow-sm"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  href="#"
                  className="w-7 h-7 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#0c7a4b] hover:bg-[#0c7a4b] hover:text-white transition-colors shadow-sm"
                >
                  <TwitterIcon />
                </Link>
                <Link
                  href="#"
                  className="w-7 h-7 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[#0c7a4b] hover:bg-[#0c7a4b] hover:text-white transition-colors shadow-sm"
                >
                  <EmailIcon />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: " +49 30 12345678",
    subtext: "Mon - Sun: 8:00 AM - 8:00 PM",
    link: "tel: +49 30 12345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@borvi.com",
    subtext: "We reply within 1 hour",
    link: "mailto:hello@borvi.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Friedrichstraße 123,",
    subtext: "10117 Berlin, Germany",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sun: 8:00 AM - 8:00 PM",
    subtext: "Open All Days",
    link: null,
  },
];

export default function ContactCardsGrid() {
  return (
    <section className="w-full bg-white py-12 border-t border-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Underlined Header Block */}
        <div className="text-center space-y-1">
          {/* <h2 className="text-2xl font-black text-[#032f19] tracking-tight relative inline-block">
            Get in <span className="text-[#0c7a4b] relative z-10">Touch</span>
            <span className="absolute bottom-0 left-1/3 right-1/3 h-[2.5px] bg-[#0c7a4b] rounded-full mt-4" />
          </h2>
          <p className="text-neutral-400 text-xs font-medium pt-2">
            Reach out to us through any of these channels.
          </p> */}

          <SectionHeading
            title={
              <>
                Get <span className="text-[#0c7a4b]">Touch</span>
                <br />
                <span className="bg-[#0c7a4b] w-2/3 pt-4"></span>
              </>
            }
            subtitle="Reach out to us through any of these channels."
          />

          <div className="mt-3 flex w-12 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#111827] w-1/3" />
            <div className="bg-[#0c7a4b] w-2/3" />
            <div className="bg-[#111827] w-1/3" />
          </div>
        </div>

        {/* 4-Column Structured Flex Layout Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((channel, idx) => {
            const Icon = channel.icon;
            const CardWrapper = channel.link ? "a" : "div";

            return (
              <CardWrapper
                key={idx}
                href={channel.link || undefined}
                target={channel.link?.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.link?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`bg-neutral-50/50 rounded-2xl border border-neutral-100/80 p-8 flex items-start gap-4 transition-all duration-300 ${
                  channel.link
                    ? "hover:bg-white hover:shadow-lg hover:shadow-neutral-100/60 cursor-pointer group"
                    : "cursor-default"
                }`}
              >
                {/* Icon Circle Backdrop */}
                <div className="w-12 h-12 rounded-full bg-[#e7f2ec] text-[#0c7a4b] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                <div className="space-y-2 min-w-0">
                  <span className="text-[11px] text-neutral-400 font-bold uppercase tracking-wider block">
                    {channel.label}
                  </span>
                  <span
                    className={`text-xs font-extrabold text-[#0c7a4b] block truncate transition-colors ${channel.link ? "group-hover:text-[#0c7a4b]" : ""}`}
                  >
                    {channel.value}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-normal block truncate">
                    {channel.subtext}
                  </span>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

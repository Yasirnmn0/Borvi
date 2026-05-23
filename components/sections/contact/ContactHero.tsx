"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Headphones, Zap, ShieldCheck, Send } from "lucide-react";
import HeroText from "@/components/common/HeroText";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, slideRight, scaleIn } from "@/lib/animation";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Request Data Submitted:", formData);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Informational Value Proposition Block */}
        <div className="lg:col-span-4 space-y-8 lg:pr-4">
          <div className="space-y-3">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center rounded-md bg-[#0c7a4b]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#0c7a4b]">
                Contact Us
              </span>
            </motion.div>
            <HeroText
              size="md"
              title={
                <>
                  We&apos;re Here to
                  <span className="text-[#1ea672]"> Help </span>
                  <br />
                  Let&apos;s Connect!
                </>
              }
              description="Have a question, need assistance, or want to learn more about our
              rental equipment? Our team is ready to help you."
            />
          </div>

          {/* Quick Core Trust Vectors */}
          <div className="space-y-5 pt-2">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#e7f2ec] text-[#0c7a4b] flex items-center justify-center shrink-0 mt-0.5">
                <Headphones className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                  24/7 Customer Support
                </h3>
                <p className="text-[11px] text-neutral-500 font-normal">
                  We&apos;re here anytime you need us.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#e7f2ec] text-[#0c7a4b] flex items-center justify-center shrink-0 mt-0.5">
                <Zap className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                  Quick Responses
                </h3>
                <p className="text-[11px] text-neutral-500 font-normal">
                  Get fast and helpful answers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#e7f2ec] text-[#0c7a4b] flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5 stroke-[1.75]" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                  Trusted & Reliable
                </h3>
                <p className="text-[11px] text-neutral-500 font-normal">
                  Your satisfaction is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Center Interactive Messaging Input Form Block */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-neutral-100 p-6 shadow-sm shadow-neutral-100/50">
          <div className="space-y-1 mb-6">
            <h2 className="text-lg font-black text-[#032f19] tracking-tight">
              Send Us a Message
            </h2>
            <p className="text-[11px] text-neutral-400 font-medium">
              Fill out the form and we&apos;ll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full text-xs font-normal border border-neutral-200 rounded-xl px-4 py-3 bg-neutral-50/30 placeholder-neutral-400 focus:outline-none focus:border-[#0c7a4b] focus:bg-white transition-all"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full text-xs font-normal border border-neutral-200 rounded-xl px-4 py-3 bg-neutral-50/30 placeholder-neutral-400 focus:outline-none focus:border-[#0c7a4b] focus:bg-white transition-all"
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full text-xs font-normal border border-neutral-200 rounded-xl px-4 py-3 bg-neutral-50/30 placeholder-neutral-400 focus:outline-none focus:border-[#0c7a4b] focus:bg-white transition-all"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>

            <div>
              <select
                required
                className="w-full text-xs font-normal border border-neutral-200 rounded-xl px-4 py-3 bg-neutral-50/30 text-neutral-500 focus:outline-none focus:border-[#0c7a4b] focus:bg-white transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23a3a3a3%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-[right_16px_center] bg-no-repeat"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              >
                <option value="" disabled hidden>
                  Select Subject
                </option>
                <option value="rental">Equipment Rental Query</option>
                <option value="pricing">Corporate Pricing</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                className="w-full text-xs font-normal border border-neutral-200 rounded-xl px-4 py-3 bg-neutral-50/30 placeholder-neutral-400 focus:outline-none focus:border-[#0c7a4b] focus:bg-white transition-all resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full text-xs font-bold text-white bg-[#0c7a4b] hover:bg-[#0a663e] py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 active:scale-[0.99]"
            >
              <Send className="w-3.5 h-3.5 fill-current" />
              Send Message
            </button>
          </form>
        </div>

        {/* Right High-Definition Showroom Warehouse Aspect Container Column */}
        <div className="lg:col-span-4 relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="/images/Borvi-6.png"
            alt="Borvi professional rental equipment lineup display depot center"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

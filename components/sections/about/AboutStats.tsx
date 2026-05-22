"use client";

import { Users, Hammer, MapPin, Calendar } from "lucide-react";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { containerStagger, fadeUp, scaleIn } from "@/lib/animation";

const platformStats = [
  {
    icon: Users,
    metric: "1000+",
    label: "Happy Customers",
    desc: "Growing community that trusts us",
  },
  {
    icon: Hammer,
    metric: "1500+",
    label: "Equipment",
    desc: "Wide range of tools, machines & gears",
  },
  {
    icon: MapPin,
    metric: "25+",
    label: "Areas Served",
    desc: "Delivering across the city and nearby areas",
  },
  {
    icon: Calendar,
    metric: "4+",
    label: "Years of Service",
    desc: "Experience you can rely on",
  },
];

export default function AboutStats() {
  return (
    <section className="pt-16 bg-[#f6f6f6]">
      <Container>
        {/* MAIN CARD */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white shadow-md border border-slate-100 rounded-[24px] px-8 py-8 md:py-10"
        >
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center"
          >
            {platformStats.map((stat, i) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="flex gap-4 px-6 pt-6 sm:pt-0 first:pt-0 lg:first:pl-4 items-center"
                >
                  {/* ICON */}
                  <motion.div
                    variants={scaleIn}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-full bg-[#032d22] flex items-center justify-center text-white shrink-0"
                  >
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </motion.div>

                  {/* TEXT */}
                  <div className="space-y-0.5">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {stat.metric}
                    </h3>
                    <h4 className="text-sm font-bold text-slate-800">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium leading-normal max-w-[170px]">
                      {stat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export default function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex items-center gap-4 rounded-3xl border bg-white p-6 shadow-sm"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <h3 className="text-3xl font-bold text-slate-900">{value}</h3>

        <p className="text-slate-600">{label}</p>
      </div>
    </motion.div>
  );
}

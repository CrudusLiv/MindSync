"use client";

import { motion } from "framer-motion";
import type { MetricOption } from "@/lib/checkin";

export function MetricStep({
  title,
  options,
  onSelect,
}: {
  title: string;
  options: MetricOption[];
  onSelect: (value: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="text-center"
    >
      <h2 className="text-2xl font-semibold text-ink-900 md:text-3xl">{title}</h2>
      <div className="mt-10 grid grid-cols-5 gap-2 sm:gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(option.value)}
            className="flex flex-col items-center gap-1.5 rounded-2xl border border-transparent bg-white p-2 shadow-soft transition-all hover:-translate-y-1 hover:border-sage-300 hover:shadow-soft-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 sm:gap-2 sm:p-4"
          >
            <span className="text-2xl sm:text-3xl">{option.emoji}</span>
            <span className="text-[10px] font-medium text-ink-600 sm:text-xs">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

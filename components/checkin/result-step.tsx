"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProgressRing } from "@/components/ui/progress-ring";
import { buttonVariants } from "@/components/ui/button";
import { getWellnessBand } from "@/lib/checkin";

export function ResultStep({ index }: { index: number }) {
  const band = getWellnessBand(index);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center text-center"
    >
      <p className="text-sm font-medium uppercase tracking-wide text-sage-600">
        Check-in complete
      </p>
      <ProgressRing value={index} size={180} strokeWidth={14} className="mt-6">
        <span className="text-4xl font-semibold text-ink-900">{index}</span>
        <span className="text-xs text-ink-500">Wellness Index</span>
      </ProgressRing>
      <h2 className="mt-8 text-2xl font-semibold text-ink-900">{band.heading}</h2>
      <p className="mt-2 max-w-sm text-sm text-ink-600">{band.message}</p>
      <Link
        href="/"
        className={buttonVariants({ variant: "primary", size: "lg", className: "mt-8" })}
      >
        Done
      </Link>
    </motion.div>
  );
}

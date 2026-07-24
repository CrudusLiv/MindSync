"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function JournalStep({
  value,
  onChange,
  onContinue,
}: {
  value: string;
  onChange: (value: string) => void;
  onContinue: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
      className="text-center"
    >
      <h2 className="text-2xl font-semibold text-ink-900 md:text-3xl">
        Anything on your mind today?
      </h2>
      <p className="mt-2 text-sm text-ink-500">
        Totally optional — just for you.
      </p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        placeholder="Write a few words if you'd like..."
        className="mt-6 w-full resize-none rounded-2xl border border-ink-200 bg-white p-4 text-sm text-ink-800 shadow-soft focus:border-sage-400 focus:outline-none"
      />
      <div className="mt-6 flex justify-center gap-3">
        <Button type="button" variant="ghost" onClick={onContinue}>
          Skip
        </Button>
        <Button type="button" variant="primary" onClick={onContinue}>
          Continue
        </Button>
      </div>
    </motion.div>
  );
}

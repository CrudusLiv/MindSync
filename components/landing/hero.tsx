"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ProgressRing } from "@/components/ui/progress-ring";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { hero } from "@/lib/content/landing";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-sage-100)_0%,var(--color-lavender-100)_45%,var(--color-cream-50)_100%)] opacity-80"
      />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-medium uppercase tracking-wide text-sage-600"
          >
            {hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight text-ink-900 md:text-6xl md:leading-tight"
          >
            {hero.headline}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-ink-600"
          >
            {hero.subhead}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={hero.primaryCta.href}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className={buttonVariants({ variant: "ghost", size: "lg" })}
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative mx-auto mt-20 hidden h-80 max-w-3xl md:block"
        >
          <div
            aria-hidden
            className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sage-200/50 via-lavender-200/40 to-teal-200/40 blur-2xl"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-0"
          >
            <Card glass className="flex w-56 items-center gap-4">
              <ProgressRing value={82} size={64} strokeWidth={7}>
                <span className="text-sm font-semibold text-ink-900">82</span>
              </ProgressRing>
              <div>
                <p className="text-xs font-medium text-ink-500">Wellness Index</p>
                <p className="mt-1 text-xs text-sage-600">+4 this week</p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-20"
          >
            <Card glass className="w-56">
              <p className="text-xs font-medium text-ink-500">
                Today&apos;s Check-in
              </p>
              <p className="mt-2 text-sm text-ink-700">
                🙂 Feeling steady, energy up
              </p>
            </Card>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          >
            <Card glass className="flex w-52 items-center gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <p className="text-xs font-medium text-ink-500">Check-in streak</p>
                <p className="text-sm font-semibold text-ink-900">7 days</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

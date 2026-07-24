"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { features } from "@/lib/content/landing";

const ICONS = {
  Sparkles,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
} as const;

export function Features() {
  return (
    <Section id="features">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-ink-900 md:text-4xl">
          Everything your team needs to feel supported
        </h2>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => {
          const Icon = ICONS[feature.icon as keyof typeof ICONS];
          const cardContent = (
            <Card
              className={cn(
                "h-full",
                feature.href &&
                  "transition-all hover:-translate-y-1 hover:border-sage-300 hover:shadow-soft-lg border border-transparent"
              )}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-100">
                <Icon className="h-5 w-5 text-sage-600" />
              </div>
              <h3 className="mt-4 font-semibold text-ink-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-ink-600">
                {feature.description}
              </p>
              {feature.href && (
                <p className="mt-4 flex items-center gap-1 text-sm font-medium text-sage-600">
                  Try it now
                  <ArrowRight className="h-4 w-4" />
                </p>
              )}
            </Card>
          );

          return (
            <motion.div key={feature.title} variants={fadeInUp}>
              {feature.href ? (
                <Link
                  href={feature.href}
                  className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                >
                  {cardContent}
                </Link>
              ) : (
                cardContent
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";
import { Container } from "@/components/ui/container";
import type { ReactNode } from "react";

export function Section({
  id,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      <Container className={containerClassName}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
}

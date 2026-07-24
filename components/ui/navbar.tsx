"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#pricing", label: "Pricing" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-soft" : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="text-lg font-semibold text-ink-900">
          MindSync
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 hover:text-sage-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#login" className={buttonVariants({ variant: "ghost", size: "md" })}>
            Log in
          </a>
          <a
            href="#book-demo"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            Book a Demo
          </a>
        </div>
      </Container>
    </header>
  );
}

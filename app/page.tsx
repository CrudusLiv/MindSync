import { NavBar } from "@/components/ui/navbar";
import { Hero } from "@/components/landing/hero";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Privacy } from "@/components/landing/privacy";
import { Pricing } from "@/components/landing/pricing";
import { CtaFooter } from "@/components/landing/cta-footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <Privacy />
        <Pricing />
      </main>
      <CtaFooter />
    </>
  );
}

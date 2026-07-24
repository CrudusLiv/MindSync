import { Section } from "@/components/ui/section";
import { howItWorks } from "@/lib/content/landing";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-teal-50/40">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-ink-900 md:text-4xl">
          How it works
        </h2>
      </div>
      <div className="relative mt-16 grid gap-12 md:grid-cols-3">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-teal-200 md:block"
        />
        {howItWorks.map((item) => (
          <div key={item.step} className="relative text-center">
            <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 text-sm font-semibold text-cream-50">
              {item.step}
            </div>
            <h3 className="mt-5 font-semibold text-ink-900">{item.title}</h3>
            <p className="mt-2 text-sm text-ink-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

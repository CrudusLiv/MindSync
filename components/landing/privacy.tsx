import { Check, ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui/section";
import { privacy } from "@/lib/content/landing";

export function Privacy() {
  return (
    <Section id="privacy" className="bg-lavender-50">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-lavender-500 shadow-soft">
          <ShieldCheck className="h-7 w-7 text-cream-50" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-ink-900 md:text-4xl">
          {privacy.heading}
        </h2>
        <p className="mt-4 text-ink-600">{privacy.body}</p>
      </div>
      <ul className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
        {privacy.guarantees.map((guarantee) => (
          <li key={guarantee} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lavender-500">
              <Check className="h-4 w-4 text-cream-50" />
            </span>
            <span className="text-ink-700">{guarantee}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

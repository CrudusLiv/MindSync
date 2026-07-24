import { Check } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pricingTiers } from "@/lib/content/landing";

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-ink-900 md:text-4xl">
          Simple, transparent pricing
        </h2>
      </div>
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={cn(
              "flex flex-col",
              tier.highlighted && "shadow-soft-lg ring-2 ring-sage-500"
            )}
          >
            <h3 className="font-semibold text-ink-900">{tier.name}</h3>
            <p className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-ink-900">
                {tier.price}
              </span>
              <span className="text-sm text-ink-500">{tier.unit}</span>
            </p>
            <p className="mt-3 text-sm text-ink-600">{tier.description}</p>
            <ul className="mt-6 flex flex-1 flex-col gap-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage-600" />
                  <span className="text-ink-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book-demo"
              className={cn(
                buttonVariants({
                  variant: tier.highlighted ? "primary" : "secondary",
                }),
                "mt-8 w-full"
              )}
            >
              {tier.cta}
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}

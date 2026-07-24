import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { footer } from "@/lib/content/landing";

export function CtaFooter() {
  return (
    <>
      <section
        id="book-demo"
        className="bg-[linear-gradient(135deg,var(--color-sage-500),var(--color-teal-500))] py-24 text-center text-cream-50"
      >
        <Container>
          <h2 className="text-3xl font-semibold md:text-4xl">
            {footer.cta.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream-100">
            {footer.cta.body}
          </p>
          <a
            href="#book-demo"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "mt-8 bg-cream-50 text-sage-700 hover:bg-cream-100"
            )}
          >
            {footer.cta.button.label}
          </a>
        </Container>
      </section>
      <footer className="bg-ink-900 py-16 text-ink-300">
        <Container>
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <p className="text-lg font-semibold text-cream-50">MindSync</p>
              <p className="mt-2 text-sm">
                Calm, private wellness for the modern workplace.
              </p>
            </div>
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <p className="text-sm font-semibold text-cream-50">
                  {column.heading}
                </p>
                <ul className="mt-3 flex flex-col gap-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-cream-50">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xs text-ink-500">
            &copy; {new Date().getFullYear()} MindSync. All rights reserved.
          </p>
        </Container>
      </footer>
    </>
  );
}

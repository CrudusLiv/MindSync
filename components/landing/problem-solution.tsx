import { Section } from "@/components/ui/section";
import { problemSolution } from "@/lib/content/landing";

export function ProblemSolution() {
  const { problem, solution } = problemSolution;
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl bg-ink-50 p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-ink-500">
            {problem.label}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-ink-900 md:text-3xl">
            {problem.heading}
          </h2>
          <p className="mt-4 text-ink-600">{problem.body}</p>
        </div>
        <div className="rounded-2xl bg-sage-50 p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-sage-600">
            {solution.label}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-ink-900 md:text-3xl">
            {solution.heading}
          </h2>
          <p className="mt-4 text-ink-600">{solution.body}</p>
        </div>
      </div>
    </Section>
  );
}

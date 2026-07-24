"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ProgressDots } from "@/components/checkin/progress-dots";
import { MetricStep } from "@/components/checkin/metric-step";
import { JournalStep } from "@/components/checkin/journal-step";
import { ResultStep } from "@/components/checkin/result-step";
import {
  moodOptions,
  energyOptions,
  stressOptions,
  workloadOptions,
  computeWellnessIndex,
} from "@/lib/checkin";

type MetricKey = "mood" | "energy" | "stress" | "workload";
type Answers = Partial<Record<MetricKey, number>>;

const METRIC_STEPS: { key: MetricKey; title: string; options: typeof moodOptions }[] = [
  { key: "mood", title: "How are you feeling today?", options: moodOptions },
  { key: "energy", title: "What's your energy like?", options: energyOptions },
  { key: "stress", title: "How stressed do you feel?", options: stressOptions },
  { key: "workload", title: "How does your workload feel?", options: workloadOptions },
];

const JOURNAL_STEP_INDEX = METRIC_STEPS.length;
const RESULT_STEP_INDEX = METRIC_STEPS.length + 1;
const PROGRESS_TOTAL = METRIC_STEPS.length + 1;

export default function CheckInPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [journal, setJournal] = useState("");

  const isMetricStep = step < METRIC_STEPS.length;
  const isJournalStep = step === JOURNAL_STEP_INDEX;
  const isResultStep = step === RESULT_STEP_INDEX;

  function handleMetricSelect(key: MetricKey, value: number) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    window.setTimeout(() => setStep((s) => s + 1), 300);
  }

  const wellnessIndex = computeWellnessIndex(
    answers.mood ?? 3,
    answers.energy ?? 3,
    answers.stress ?? 3,
    answers.workload ?? 3
  );

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-sage-100)_0%,var(--color-lavender-100)_45%,var(--color-cream-50)_100%)] px-6 py-16">
      <Link
        href="/"
        className="absolute left-6 top-6 text-sm font-medium text-ink-600 hover:text-ink-900"
      >
        ← Back to MindSync
      </Link>

      <Container className="max-w-lg">
        {!isResultStep && <ProgressDots total={PROGRESS_TOTAL} current={step} />}

        <div className="mt-8 rounded-2xl bg-white/70 p-8 shadow-soft-lg backdrop-blur-sm md:p-12">
          {step > 0 && !isResultStep && (
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              className="mb-6 text-sm text-ink-500 hover:text-ink-800"
            >
              ← Back
            </button>
          )}

          <AnimatePresence mode="wait">
            {isMetricStep && (
              <MetricStep
                key={METRIC_STEPS[step].key}
                title={METRIC_STEPS[step].title}
                options={METRIC_STEPS[step].options}
                onSelect={(value) => handleMetricSelect(METRIC_STEPS[step].key, value)}
              />
            )}
            {isJournalStep && (
              <JournalStep
                key="journal"
                value={journal}
                onChange={setJournal}
                onContinue={() => setStep((s) => s + 1)}
              />
            )}
            {isResultStep && <ResultStep key="result" index={wellnessIndex} />}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
}

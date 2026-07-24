export interface MetricOption {
  value: number;
  emoji: string;
  label: string;
}

export const moodOptions: MetricOption[] = [
  { value: 1, emoji: "😞", label: "Awful" },
  { value: 2, emoji: "🙁", label: "Low" },
  { value: 3, emoji: "😐", label: "Okay" },
  { value: 4, emoji: "🙂", label: "Good" },
  { value: 5, emoji: "😄", label: "Great" },
];

export const energyOptions: MetricOption[] = [
  { value: 1, emoji: "😴", label: "Drained" },
  { value: 2, emoji: "😑", label: "Low" },
  { value: 3, emoji: "😐", label: "Okay" },
  { value: 4, emoji: "🙂", label: "Energized" },
  { value: 5, emoji: "⚡", label: "Great" },
];

export const stressOptions: MetricOption[] = [
  { value: 1, emoji: "🔥", label: "Overwhelmed" },
  { value: 2, emoji: "😣", label: "High" },
  { value: 3, emoji: "😐", label: "Some" },
  { value: 4, emoji: "🙂", label: "Manageable" },
  { value: 5, emoji: "😌", label: "Calm" },
];

export const workloadOptions: MetricOption[] = [
  { value: 1, emoji: "🌊", label: "Overloaded" },
  { value: 2, emoji: "😮‍💨", label: "Heavy" },
  { value: 3, emoji: "😐", label: "Steady" },
  { value: 4, emoji: "🙂", label: "Manageable" },
  { value: 5, emoji: "🌿", label: "Light" },
];

export interface WellnessBand {
  heading: string;
  message: string;
}

export function computeWellnessIndex(
  mood: number,
  energy: number,
  stress: number,
  workload: number
): number {
  const sum = mood + energy + stress + workload;
  return Math.round((sum / 20) * 100);
}

export function getWellnessBand(index: number): WellnessBand {
  if (index >= 80) {
    return {
      heading: "You're doing great today.",
      message:
        "Keep up whatever's working — a short walk or a few quiet minutes can help sustain it.",
    };
  }
  if (index >= 60) {
    return {
      heading: "You're doing okay today.",
      message:
        "A few small resets — water, a stretch, a short break — could help you feel steadier.",
    };
  }
  if (index >= 40) {
    return {
      heading: "Today looks a bit stretched.",
      message:
        "Consider a short mindfulness break, and don't hesitate to talk to your AI Wellness Coach about what's going on.",
    };
  }
  return {
    heading: "It sounds like today is heavy.",
    message:
      "Please be gentle with yourself. Talking to a counsellor can help — booking one is always private and your choice.",
  };
}

export const hero = {
  eyebrow: "AI-Powered Workplace Wellness",
  headline: "Bring calm to how your company takes care of its people.",
  subhead:
    "MindSync gives employees a private space to check in on how they're doing, and gives organizations privacy-first insight into the wellbeing of their teams — without ever reading a single journal entry.",
  primaryCta: { label: "Get Started", href: "#features" },
  secondaryCta: { label: "Book a Demo", href: "#book-demo" },
};

export const problemSolution = {
  problem: {
    label: "The Problem",
    heading: "Burnout is invisible until it isn't.",
    body: "By the time workload stress shows up in attrition numbers, it's already cost your team its best people. Most companies have no early signal — just annual surveys and exit interviews.",
  },
  solution: {
    label: "The MindSync Way",
    heading: "A daily pulse, not an annual guess.",
    body: "A 30-second daily check-in gives employees a calming ritual and gives your organization an honest, aggregated, privacy-preserving read on team wellbeing — early enough to actually act on it.",
  },
};

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

export const features: FeatureItem[] = [
  {
    icon: "Sparkles",
    title: "Daily Check-Ins",
    description:
      "A calming 30-second ritual to log mood, energy, stress, and workload.",
    href: "/check-in",
  },
  {
    icon: "MessageCircle",
    title: "AI Wellness Coach",
    description:
      "Personalized guidance, breathing exercises, and journaling prompts, on demand.",
  },
  {
    icon: "TrendingUp",
    title: "Burnout Prediction",
    description:
      "Explainable, supportive early-warning signals — never a diagnosis.",
  },
  {
    icon: "ShieldCheck",
    title: "Privacy by Design",
    description:
      "Journals and AI chats stay private. Employers only ever see aggregates.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Check in",
    description: "Employees spend 30 seconds a day logging how they're feeling.",
  },
  {
    step: "02",
    title: "Get insights",
    description:
      "AI turns patterns into personal, supportive guidance — never a diagnosis.",
  },
  {
    step: "03",
    title: "Take action",
    description:
      "Employees act on recommendations; organizations see aggregate trends only.",
  },
];

export const privacy = {
  heading: "Privacy is not a feature. It's the foundation.",
  body: "Journal entries, AI conversations, and counselling sessions are never visible to employers — not to managers, not to HR, not to company admins. Ever.",
  guarantees: [
    "HR and managers see aggregated, anonymized trends only — never individual records.",
    "Counsellors access personal data only after explicit, revocable employee consent.",
    "AI chat history is private by default and encrypted at rest.",
  ],
};

export const pricingTiers = [
  {
    name: "Starter",
    price: "$4",
    unit: "/employee/month",
    description: "For small teams getting started with proactive wellness.",
    features: ["Daily check-ins", "AI Wellness Coach", "Basic team analytics"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Business",
    price: "$8",
    unit: "/employee/month",
    description: "For growing organizations that need department-level insight.",
    features: [
      "Everything in Starter",
      "Burnout prediction engine",
      "HR & department analytics",
      "Counselling marketplace",
    ],
    highlighted: true,
    cta: "Book a Demo",
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    description: "For enterprises with custom compliance and integration needs.",
    features: [
      "Everything in Business",
      "SSO & custom integrations",
      "Dedicated success manager",
      "Custom data residency",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export const footer = {
  cta: {
    heading: "Bring calm to your workplace.",
    body: "See how MindSync can support your team's wellbeing, without compromising anyone's privacy.",
    button: { label: "Book a Demo", href: "#book-demo" },
  },
  columns: [
    {
      heading: "Product",
      links: ["Features", "Pricing", "Privacy", "Security"],
    },
    {
      heading: "Company",
      links: ["About", "Careers", "Blog", "Contact"],
    },
    {
      heading: "Legal",
      links: ["Privacy Policy", "Terms of Service"],
    },
  ],
};

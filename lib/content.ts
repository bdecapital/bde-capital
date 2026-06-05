import type { IconName } from "@/components/ui/Icon";

export type Faq = { q: string; a: string };

// PROOF — large blocks: "Why Agency Owners Work With BDE"
export const proofBlocks: {
  value: string;
  label: string;
  sub: string;
  numeric?: number;
  prefix?: string;
  suffix?: string;
}[] = [
  {
    value: "3",
    label: "Industries",
    sub: "Companies built & exited",
    numeric: 3,
  },
  {
    value: "$100M",
    label: "Platform In Progress",
    sub: "Insurance distribution we're building now",
    numeric: 100,
    prefix: "$",
    suffix: "M",
  },
  { value: "M&A", label: "Real Deal Experience", sub: "We know how buyers think" },
  {
    value: "50",
    label: "States",
    sub: "Nationwide distribution",
    numeric: 50,
  },
  {
    value: "100%",
    label: "Operator-Led",
    sub: "We've signed the front of the check",
    numeric: 100,
    suffix: "%",
  },
  {
    value: "9X",
    label: "Exit Target",
    sub: "Positioned for a premium exit",
    numeric: 9,
    suffix: "X",
  },
];

// THE PROBLEM — emotional cascade ("die with the owner")
export const problemChain = [
  { text: "The owner leaves.", note: "Vacation, burnout, illness, retirement." },
  { text: "Production disappears.", note: "Every relationship ran through one person." },
  { text: "Enterprise value disappears.", note: "There's no system left to value." },
  { text: "Buyers disappear.", note: "Nobody pays a premium for a job." },
];

// THE SHIFT (income vs equity)
export const shiftIncome = [
  "Stops the moment you stop",
  "Taxed at the highest rates",
  "Capped by your personal output",
  "Gone when you walk away",
];
export const shiftEquity = [
  "Pays you again when you sell",
  "Taxed at favorable rates",
  "Multiplied by systems and team",
  "Becomes generational money",
];

// THE BDE EXIT FLYWHEEL — circular, 6 steps
export const flywheelSteps: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  { icon: "users", title: "Recruit", body: "Install a repeatable engine that attracts and onboards stronger producers." },
  { icon: "rocket", title: "Produce", body: "Lift per-agent output and total issued premium with proven sales systems." },
  { icon: "shield", title: "Retain", body: "Tighten persistency so the book is sticky, profitable, and buyer-friendly." },
  { icon: "trending", title: "Scale", body: "Grow predictably across teams and markets — not by working more hours." },
  { icon: "building", title: "Systemize", body: "Document the machine so the agency runs and grows without you." },
  { icon: "layers", title: "Exit", body: "Package and position the agency for acquisition — up to 9X." },
];

// CASE STUDIES — dashboard before/after
export const caseStudies: {
  tag: string;
  revenue: { from: string; to: string };
  team: { from: string; to: string };
  ev: { from: string; to: string };
  readiness: { from: number; to: number };
}[] = [
  {
    tag: "Agency A",
    revenue: { from: "$900K", to: "$3.8M" },
    team: { from: "6", to: "42" },
    ev: { from: "$1.8M", to: "$18M" },
    readiness: { from: 25, to: 92 },
  },
  {
    tag: "Team Leader B",
    revenue: { from: "$1.4M", to: "$6.1M" },
    team: { from: "9", to: "55" },
    ev: { from: "$3M", to: "$34M" },
    readiness: { from: 35, to: 96 },
  },
  {
    tag: "Producer Group C",
    revenue: { from: "$2.2M", to: "$9.4M" },
    team: { from: "14", to: "80" },
    ev: { from: "$5M", to: "$58M" },
    readiness: { from: 40, to: 98 },
  },
];

export const caseStudyDisclaimer =
  "Examples shown for illustration. Results depend on agency size, execution, persistency, and market conditions. BDE Capital helps position agencies for a premium exit — no specific multiple or sale is guaranteed.";

// WHO THIS IS FOR
export const forYou = [
  "Established agency owners",
  "Team leaders",
  "Recruiters with a team",
  "Producers with existing distribution",
  "Agencies doing meaningful annual issued premium",
];
export const notForYou = [
  "Brand-new agents",
  "People looking for motivation",
  "No-production teams",
  "Agencies unwilling to implement systems",
];

// FULL-COLOR CARRIER CHIPS
export const carrierBrands: { name: string; color: string }[] = [
  { name: "Mutual of Omaha", color: "#005EB8" },
  { name: "Corebridge", color: "#00B3A4" },
  { name: "Transamerica", color: "#E4002B" },
  { name: "Americo", color: "#C8102E" },
  { name: "Foresters", color: "#00843D" },
  { name: "Royal Neighbors", color: "#6A1B9A" },
  { name: "Aetna", color: "#7D3F98" },
  { name: "Aflac", color: "#1B7AC2" },
];

// FAQ
export const faqs: Faq[] = [
  {
    q: "How fast can this happen?",
    a: "Scaling production and tightening systems can start producing results within the first 90 days. A full reposition for a premium exit is typically a 12–36 month build, depending on where your agency is today. We map a realistic timeline on your qualification call.",
  },
  {
    q: "What multiple can I realistically expect?",
    a: "It depends on your profitability, growth rate, persistency, and how dependent the business is on you. Owner-dependent books trade low; systemized agencies with recurring revenue and a recruiting engine can command meaningfully higher multiples — up to 9X in strong cases. We help you position for a premium exit; no specific multiple is guaranteed.",
  },
  {
    q: "Do I keep ownership?",
    a: "Yes. This is your agency. We help you scale it, build enterprise value, and position for a premium exit on your terms — whether that's a partial sale, a full exit, or simply building an asset you could sell one day.",
  },
  {
    q: "What does BDE Capital get?",
    a: "It depends on how we work together — advisory, partnership, or acquisition. We align our upside with yours, so we win when your agency becomes more valuable. We lay out the exact structure on your call. No surprises.",
  },
  {
    q: "Who qualifies?",
    a: "Established agency owners and team leaders who are already producing, have (or want to build) a team, and are serious about implementing systems. If you're brand new or looking for motivation, this isn't the right fit — and that's okay.",
  },
];

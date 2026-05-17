import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Crown,
  DoorClosed,
  Globe2,
  Handshake,
  Hotel,
  KeyRound,
  LineChart,
  LockKeyhole,
  MonitorPlay,
  Moon,
  Network,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Trophy,
  Users2,
  WalletCards,
  Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

const sponsorTiers = [
  {
    name: "Title Partner",
    range: "$5M–$15M",
    copy: "Category-exclusive ownership of a national or global event campaign anchored from Stirling.",
    perks: ["Prime physical + digital placement", "Executive room access", "National affiliate integration"],
  },
  {
    name: "Category Partner",
    range: "$1M–$5M",
    copy: "Vertical-specific sponsor position across beverage, devices, apparel, travel, fintech, mobility, or lifestyle.",
    perks: ["Product integration", "Market-level activations", "Campaign reporting"],
  },
  {
    name: "Experience Partner",
    range: "$250K–$1M",
    copy: "High-touch placement within curated private experiences and executive environments.",
    perks: ["Room placement", "Gift bag/device tie-in", "Creator/content moments"],
  },
  {
    name: "Local Market Partner",
    range: "$50K–$500K",
    copy: "Affiliate venue sponsor package for regional hotels, casino properties, and destination markets.",
    perks: ["Local activation", "Venue co-branding", "Sponsor-funded demand"],
  },
];

const calendar = [
  { label: "Q1", title: "NFL Playoffs + Championship Season", markets: "Las Vegas, Miami, Dallas, Atlanta", icon: Trophy },
  { label: "Q2", title: "Final Four, NBA Playoffs, Boxing", markets: "Vegas HQ + hotel affiliate nodes", icon: MonitorPlay },
  { label: "Q3", title: "F1, Soccer, Music + Cultural Campaigns", markets: "Global resort + MSA expansion", icon: Globe2 },
  { label: "Q4", title: "NFL, Holiday Galas, Capital Closings", markets: "Stirling private deal-room calendar", icon: CalendarDays },
];

const rooms = [
  { name: "Stirling Control Room", use: "Parent production studio, sponsor command center, stream coordination", icon: RadioTower },
  { name: "Executive Deal Rooms", use: "Private negotiations, capital formation, enterprise contract closings", icon: DoorClosed },
  { name: "Sponsor Showcase Zones", use: "Physical product placement, device demos, experiential installations", icon: Sparkles },
  { name: "Affiliate Hotel Nodes", use: "Private hosted rooms connected through VIBE production and programming", icon: Hotel },
];

const metrics = [
  { metric: "Occupancy", impact: "Fill low-demand windows and shoulder dates through sponsored experiences." },
  { metric: "ADR", impact: "Create compression and premium stay-cation packages around programmed events." },
  { metric: "RevPAR", impact: "Improve room yield through forward-booked, calendarized demand." },
  { metric: "Total Spend", impact: "Drive casino, F&B, retail, entertainment, and post-event property revenue." },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/5 px-4 py-2 text-xs text-slate-600 dark:text-white/75">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A96E]/40 dark:border-[#C9A96E]/30 bg-amber-50 dark:bg-[#C9A96E]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#8B6914] dark:text-[#C9A96E]">
      <Zap size={14} /> {children}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.045] p-6 shadow-lg shadow-slate-200/60 dark:shadow-2xl dark:shadow-black/30 backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src="/stirling-logo.png"
      alt="The Stirling Club"
      className={`${className} w-auto object-contain`}
    />
  );
}

export default function SterlingClubSite() {
  const [selectedTier, setSelectedTier] = useState(0);
  const [dark, setDark] = useState(() => localStorage.getItem("sterling-theme") !== "light");

  useEffect(() => {
    localStorage.setItem("sterling-theme", dark ? "dark" : "light");
  }, [dark]);

  const tier = sponsorTiers[selectedTier];
  const selectedCopy = useMemo(() => sponsorTiers[selectedTier], [selectedTier]);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen overflow-hidden bg-slate-50 dark:bg-[#050608] text-slate-900 dark:text-white">

        {/* Ambient glow blobs */}
        <div className="pointer-events-none fixed inset-0 opacity-25 dark:opacity-70">
          <div className="absolute left-[-12%] top-[-12%] h-[42rem] w-[42rem] rounded-full bg-[#C9A96E]/10 blur-3xl" />
          <div className="absolute right-[-10%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-[#C9A96E]/10 blur-3xl" />
          <div className="absolute bottom-[-15%] left-[35%] h-[30rem] w-[30rem] rounded-full bg-amber-700/15 blur-3xl" />
        </div>

        {/* Nav */}
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-[#C9A96E]/30 bg-white px-4 py-3 shadow-lg shadow-slate-200/40 dark:shadow-xl dark:shadow-black/30">
              <Logo className="h-8" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold tracking-[0.28em] text-slate-800 dark:text-[#C9A96E]">TPG / VIBE100</div>
              <div className="text-xs text-slate-500 dark:text-white/45">Enterprise Metamorphosis Model</div>
            </div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Pill>Invite Only</Pill>
            <Pill>Sponsor Funded</Pill>
            <Pill>Hotel Network</Pill>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 dark:border-white/10 text-slate-500 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button className="rounded-full bg-[#C9A96E] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#b8954f]">
              Request Access
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative z-10 mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div {...fadeUp}>
            <div className="mb-8 inline-flex rounded-3xl border border-[#C9A96E]/30 bg-white px-6 py-5 shadow-lg shadow-slate-200/40 dark:shadow-2xl dark:shadow-black/40">
              <Logo className="h-10 md:h-12" />
            </div>
            <br />
            <SectionLabel>Private Access. Global Demand.</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-900 dark:text-white md:text-7xl lg:text-8xl">
              Control the room.{" "}
              <span className="text-[#8B6914] dark:text-[#C9A96E]">Monetize the ecosystem.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-white/68 md:text-xl">
              Stirling Club becomes the TPG / VIBE command center for sponsor-funded private viewing experiences, executive deal flow, hotel demand generation, and content-driven enterprise monetization.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="group rounded-2xl bg-[#C9A96E] px-7 py-4 font-black text-white shadow-2xl shadow-amber-950/20 transition hover:bg-[#b8954f]">
                Enter the Room <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={18} />
              </button>
              <button className="rounded-2xl border border-slate-200 dark:border-white/15 bg-transparent dark:bg-white/5 px-7 py-4 font-bold text-slate-700 dark:text-white transition hover:bg-slate-100 dark:hover:bg-white/10">
                View Partner Model
              </button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-white/55">
              <span>No ticketing.</span><span>•</span><span>No paid streams.</span><span>•</span><span>No F&B resale dependency.</span><span>•</span><span>Revenue lives upstream.</span>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-[#C9A96E]/10 via-white/5 to-amber-300/10 dark:from-[#C9A96E]/15 dark:via-white/5 dark:to-amber-400/10 blur-2xl" />
            <Card className="relative p-4">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.7rem] border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[radial-gradient(circle_at_30%_20%,rgba(201,169,110,.22),transparent_28%),linear-gradient(145deg,#111827,#030712_58%,#14120b)] p-5">
                <div className="flex items-center justify-between">
                  <Pill>Stirling HQ</Pill>
                  <Pill>Live Campaign</Pill>
                </div>
                <div className="mt-14 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-black/35 p-5 backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#C9A96E] text-white">
                      <Network />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/45">Operating System</div>
                      <div className="text-2xl font-black text-slate-900 dark:text-white">Watch-Party Network</div>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {rooms.map((r) => {
                      const Icon = r.icon;
                      return (
                        <div key={r.name} className="flex gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4">
                          <Icon className="mt-1 text-[#8B6914] dark:text-[#C9A96E]" size={20} />
                          <div>
                            <div className="font-bold text-slate-900 dark:text-white">{r.name}</div>
                            <div className="text-sm text-slate-500 dark:text-white/55">{r.use}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>

        {/* Clean Revenue Thesis */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <motion.div {...fadeUp} className="text-center">
            <SectionLabel>The clean revenue thesis</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Do not monetize the guest. Monetize the value chain.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-white/60">
              The private viewing environment remains invitation-only and experience-inclusive. Revenue is generated through brand sponsorship, venue participation, hotel inventory strategy, product integration, original content, device engagement, and enterprise deal-flow outcomes.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              [ShieldCheck, "Private + Compliant", "No public ticketing, no paid stream resale, no cash F&B dependency."],
              [Handshake, "Sponsor Funded", "Brands fund access, placement, products, campaign inventory, and proximity."],
              [Hotel, "Hotel Yield Lift", "Heads in beds, stay-cation packages, property spend, and room block arbitrage."],
              [LineChart, "Enterprise Upside", "Deal closings, finance mandates, sponsor renewals, and affiliate expansion."],
            ].map(([Icon, title, copy]) => (
              <motion.div key={title as string} {...fadeUp}>
                <Card className="h-full">
                  {React.createElement(Icon as React.ElementType, { className: "text-[#8B6914] dark:text-[#C9A96E]", size: 30 })}
                  <h3 className="mt-5 text-xl font-black text-slate-900 dark:text-white">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-white/55">{copy as string}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sponsor Marketplace */}
        <section className="relative z-10 border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div {...fadeUp}>
              <SectionLabel>Sponsor Marketplace</SectionLabel>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                Own the room, the relationship, and the campaign surface area.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-white/60">
                Sponsors participate up and down the entire value chain—Stirling physical spaces, affiliate venues, devices, creator content, invitations, product drops, and executive hospitality.
              </p>
              <div className="mt-8 grid gap-3">
                {sponsorTiers.map((s, i) => (
                  <button
                    key={s.name}
                    onClick={() => setSelectedTier(i)}
                    className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                      selectedTier === i
                        ? "border-[#C9A96E]/50 bg-amber-50 dark:bg-[#C9A96E]/10 text-slate-900 dark:text-white"
                        : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-white"
                    }`}
                  >
                    <span>
                      <span className="block font-black">{s.name}</span>
                      <span className="text-sm text-slate-500 dark:text-white/50">{s.range}</span>
                    </span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <Card className="h-full p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.3em] text-[#8B6914] dark:text-[#C9A96E]">Selected tier</div>
                    <h3 className="mt-2 text-4xl font-black text-slate-900 dark:text-white">{tier.name}</h3>
                  </div>
                  <div className="rounded-2xl bg-[#C9A96E] px-4 py-3 text-xl font-black text-white">{tier.range}</div>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-white/65">{selectedCopy.copy}</p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {tier.perks.map((p) => (
                    <div key={p} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/25 p-4">
                      <CheckCircle2 className="text-[#8B6914] dark:text-[#C9A96E]" size={20} />
                      <div className="mt-3 text-sm font-bold text-slate-700 dark:text-white/75">{p}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-3xl border border-[#C9A96E]/25 bg-amber-50 dark:bg-[#C9A96E]/10 p-5 text-sm leading-6 text-amber-900 dark:text-amber-50/80">
                  Revenue is created by access, visibility, placement, and relationship acceleration—not by charging guests to view televised content.
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Hotel Partnership */}
        <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <motion.div {...fadeUp} className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionLabel>Hotel Partnership Logic</SectionLabel>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-5xl">
                We do not compete with hotels. We fill them.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-white/60">
                TPG / VIBE purchases or controls room inventory, packages experience value through sponsors, and places demand into participating hotel properties. Venue partners receive room revenue, ancillary spend, gaming activity, F&B lift, entertainment upsell, and stronger forecastable demand.
              </p>
              <div className="mt-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] p-5">
                <div className="flex items-center gap-3 text-[#8B6914] dark:text-[#C9A96E]">
                  <Building2 /> Room Block Arbitrage
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-white/55">
                  Forward-contracted inventory can be bundled into sponsor-funded experience packages, executive hospitality allocations, and stay-cation campaigns—allowing partner properties to monetize beyond the room itself.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((m) => (
                <Card key={m.metric}>
                  <div className="text-3xl font-black text-[#8B6914] dark:text-[#C9A96E]">{m.metric} ↑</div>
                  <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-white/55">{m.impact}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 365 Calendar Engine */}
        <section className="relative z-10 bg-gradient-to-b from-slate-100 dark:from-white/[0.03] to-transparent px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp} className="text-center">
              <SectionLabel>365 Calendar Engine</SectionLabel>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-6xl">
                Programmed one to two years ahead.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-white/60">
                Sports, entertainment, music, culture, finance, philanthropy, and HTES activations become a forward-booked hospitality calendar that sponsors and hotel partners can plan against.
              </p>
            </motion.div>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {calendar.map((c) => {
                const Icon = c.icon;
                return (
                  <motion.div key={c.label} {...fadeUp}>
                    <Card className="h-full">
                      <div className="flex items-center justify-between">
                        <div className="rounded-xl bg-[#C9A96E] px-3 py-1 text-sm font-black text-white">{c.label}</div>
                        <Icon className="text-slate-400 dark:text-white/45" />
                      </div>
                      <h3 className="mt-6 text-xl font-black text-slate-900 dark:text-white">{c.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-white/55">{c.markets}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Device + Access Layer */}
        <section className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-3">
          <motion.div {...fadeUp} className="lg:col-span-1">
            <SectionLabel>Device + Access Layer</SectionLabel>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">Phones become credentials.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-white/60">
              VIBE-enabled devices can act as invitation credentials, sponsor content carriers, loyalty wallets, event guides, campaign trackers, and post-event engagement tools.
            </p>
          </motion.div>
          <motion.div {...fadeUp} className="lg:col-span-2">
            <Card className="grid gap-5 md:grid-cols-3">
              {[
                [Smartphone, "Invitation Credential", "Branded mobile pass for private access and check-in."],
                [WalletCards, "Value Exchange", "Reward, loyalty, and engagement layer without forcing purchase at event."],
                [Users2, "Audience Intelligence", "Permissioned engagement metrics for sponsor ROI and follow-up."],
              ].map(([Icon, title, copy]) => (
                <div key={title as string} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/25 p-5">
                  {React.createElement(Icon as React.ElementType, { className: "text-[#8B6914] dark:text-[#C9A96E]" })}
                  <h3 className="mt-5 font-black text-slate-900 dark:text-white">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-white/55">{copy as string}</p>
                </div>
              ))}
            </Card>
          </motion.div>
        </section>

        {/* Gated Deal Room */}
        <section className="relative z-10 border-y border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/40 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp} className="text-center">
              <SectionLabel>Gated Deal Room</SectionLabel>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white md:text-6xl">
                Designed for private capital, not public crowds.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-white/60">
                The Stirling Model protects exclusivity while creating measurable business value for sponsors, venues, municipalities, athletes, influencers, hotel partners, and enterprise clients.
              </p>
            </motion.div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [LockKeyhole, "Private Access", "Curated invite-only audiences aligned to enterprise objectives."],
                [KeyRound, "Executive Proximity", "Strategic seating, private rooms, and deal-specific programming."],
                [ShieldCheck, "Compliance-First Framing", "No paid viewing, no public ticketing, no resale-driven broadcast model."],
              ].map(([Icon, title, copy]) => (
                <Card key={title as string}>
                  {React.createElement(Icon as React.ElementType, { className: "text-[#8B6914] dark:text-[#C9A96E]", size: 30 })}
                  <h3 className="mt-5 text-xl font-black text-slate-900 dark:text-white">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-white/55">{copy as string}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-center">
          <motion.div {...fadeUp}>
            <div className="mx-auto mb-7 grid h-16 w-16 place-items-center rounded-3xl border border-[#C9A96E]/30 bg-amber-50 dark:bg-[#C9A96E]/10">
              <Crown className="text-[#8B6914] dark:text-[#C9A96E]" />
            </div>
            <h2 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white md:text-7xl">
              Enter the room.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-white/60">
              Stirling is not a nightclub. It is the origin point for a sponsor-funded hospitality, media, and enterprise monetization infrastructure built around private access and measurable economic outcomes.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-2xl bg-[#C9A96E] px-8 py-4 font-black text-white transition hover:bg-[#b8954f]">
                Request Private Access
              </button>
              <button className="rounded-2xl border border-slate-200 dark:border-white/15 bg-transparent dark:bg-white/5 px-8 py-4 font-black text-slate-700 dark:text-white transition hover:bg-slate-100 dark:hover:bg-white/10">
                Become a Sponsor
              </button>
              <button className="rounded-2xl border border-slate-200 dark:border-white/15 bg-transparent dark:bg-white/5 px-8 py-4 font-black text-slate-700 dark:text-white transition hover:bg-slate-100 dark:hover:bg-white/10">
                Partner as Venue
              </button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-slate-200 dark:border-white/10 px-6 py-10 text-center text-sm text-slate-400 dark:text-white/45">
          <div className="mx-auto mb-5 inline-flex rounded-2xl border border-[#C9A96E]/30 bg-white px-5 py-3">
            <Logo className="h-7" />
          </div>
          <div className="font-bold tracking-[0.28em] text-slate-600 dark:text-white/70">TPG / VIBE100 ENTERPRISES</div>
          <div className="mt-3">We do not sell access to events. We control access to opportunity.</div>
        </footer>

      </main>
    </div>
  );
}

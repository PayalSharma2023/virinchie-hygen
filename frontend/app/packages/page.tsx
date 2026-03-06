import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/BreadCrumb";
export const metadata: Metadata = {
  title: "Packages | Virinchie Hygen Engineering Consultants",
  description:
    "Choose from our consultancy engagement tiers and construction packages — from initial feasibility studies to end-to-end project management and luxury construction.",
};

// ─── CONSULTANCY PACKAGES ───────────────────────────────────────────────────

const consultancyPackages = [
  {
    name: "Advisory",
    subtitle: "Initial Consultation & Feasibility",
    price: "On Request",
    highlight: false,
    border: "border-sky-200",
    bg: "bg-sky-50",
    text: "text-sky-600",
    accentText: "text-sky-500",
    features: [
      "Site visit & preliminary assessment",
      "Feasibility study report",
      "Initial hydrological / environmental review",
      "Regulatory compliance guidance",
      "Risk identification overview",
      "Written technical brief",
    ],
    cta: "Get a Consultation",
  },
  {
    name: "Study & Design",
    subtitle: "Detailed Engineering Studies",
    price: "Project-Based",
    highlight: true,
    border: "border-[#210568]",
    bg: "bg-[#210568]",
    text: "text-white",
    accentText: "text-sky-300",
    features: [
      "Everything in Advisory",
      "Detailed hydrological / hydraulic modeling",
      "GIS mapping & spatial analysis",
      "Environmental Impact Assessment (EIA)",
      "Infrastructure design drawings",
      "Detailed Project Report (DPR)",
    ],
    cta: "Request a Proposal",
  },
  {
    name: "Full PMC",
    subtitle: "End-to-End Project Management",
    price: "Retainer / % of Project",
    highlight: false,
    border: "border-teal-200",
    bg: "bg-teal-50",
    text: "text-teal-600",
    accentText: "text-teal-500",
    features: [
      "Everything in Study & Design",
      "Contractor selection & management",
      "Construction supervision & QA/QC",
      "Progress monitoring & reporting",
      "Regulatory approvals support",
      "Post-completion handover",
    ],
    cta: "Discuss Your Project",
  },
];

const comparison = [
  { feature: "Site Assessment", advisory: true, study: true, pmc: true },
  { feature: "Feasibility Report", advisory: true, study: true, pmc: true },
  { feature: "HEC-HMS / HEC-RAS Modeling", advisory: false, study: true, pmc: true },
  { feature: "GIS & Remote Sensing", advisory: false, study: true, pmc: true },
  { feature: "EIA / EMP Preparation", advisory: false, study: true, pmc: true },
  { feature: "Detailed Project Report (DPR)", advisory: false, study: true, pmc: true },
  { feature: "Contractor Management", advisory: false, study: false, pmc: true },
  { feature: "Construction Supervision", advisory: false, study: false, pmc: true },
  { feature: "Regulatory Approvals Support", advisory: false, study: false, pmc: true },
  { feature: "Post-completion Handover", advisory: false, study: false, pmc: true },
];

// ─── CONSTRUCTION PACKAGES ──────────────────────────────────────────────────

const constructionPackages = [
  {
    name: "Silver",
    subtitle: "Essential Construction",
    price: "₹1,599",
    unit: "/ sq.ft",
    href: "/packages/silver",
    highlight: false,
    badge: null,
    headerGradient: "from-slate-500 to-slate-700",
    badgeBg: "",
    border: "border-slate-200",
    accentColor: "text-slate-500",
    warranty: "3-year warranty",
    features: [
      "MS Shuttering · Fe415 Steel",
      "ACC / Ambuja Cement",
      "Fly Ash / CLC Bricks",
      "Standard vitrified tile flooring",
      "Basic modular kitchen + SS sink",
      "Aluminum sliding windows",
      "Anchor / L&T modular switches",
      "Asian Paints / Berger finish",
    ],
    cta: "View Silver Details",
  },
  {
    name: "Gold",
    subtitle: "Premium Construction",
    price: "₹1,999",
    unit: "/ sq.ft",
    href: "/packages/gold",
    highlight: true,
    badge: "Most Popular",
    headerGradient: "from-yellow-500 to-amber-600",
    badgeBg: "bg-amber-100 text-amber-700",
    border: "border-yellow-400",
    accentColor: "text-amber-500",
    warranty: "5-year warranty",
    features: [
      "Fe500 Steel (JSW / Jai Bharat)",
      "Ultratech Cement · AAC Blocks",
      "Premium shuttering & plaster",
      "Premium vitrified tiles",
      "Modular kitchen + chimney provision",
      "UPVC windows with insulation",
      "Havells switches · Polycab wiring",
      "Jaguar / Hindware sanitaryware",
    ],
    cta: "View Gold Details",
  },
  {
    name: "Platinum",
    subtitle: "Luxury Construction",
    price: "₹2,700",
    unit: "/ sq.ft",
    href: "/packages/platinum",
    highlight: false,
    badge: "Premium",
    headerGradient: "from-slate-700 to-slate-900",
    badgeBg: "bg-slate-100 text-slate-700",
    border: "border-slate-400",
    accentColor: "text-slate-400",
    warranty: "7-year warranty",
    features: [
      "Fe500D Steel · Ultratech Premium",
      "AAC Blocks + high-grade shuttering",
      "Italian marble / luxury vitrified",
      "Luxury modular kitchen + marble top",
      "Teakwood frames + double-glazed glass",
      "Kohler / Grohe sanitaryware",
      "Smart home automation readiness",
      "Premium woodwork & designer finishes",
    ],
    cta: "View Platinum Details",
  },
];

const constructionComparison = [
  { feature: "Steel Grade", silver: "Fe415", gold: "Fe500 (JSW/JB)", platinum: "Fe500D" },
  { feature: "Cement Brand", silver: "ACC / Ambuja", gold: "Ultratech", platinum: "Ultratech Premium" },
  { feature: "Wall Material", silver: "Fly Ash / CLC Bricks", gold: "AAC Blocks", platinum: "AAC Blocks" },
  { feature: "Flooring", silver: "Standard Vitrified", gold: "Premium Vitrified", platinum: "Italian Marble" },
  { feature: "Kitchen", silver: "Basic Modular", gold: "Premium + Chimney", platinum: "Luxury + Marble top" },
  { feature: "Windows", silver: "Aluminum Sliding", gold: "UPVC Insulated", platinum: "Double Glazed" },
  { feature: "Sanitaryware", silver: "Parryware/Johnson", gold: "Jaguar/Hindware", platinum: "Kohler/Grohe" },
  { feature: "Electricals", silver: "Finolex/Anchor", gold: "Polycab/Havells", platinum: "Smart-ready" },
  { feature: "Rainwater Harvesting", silver: "—", gold: "✓", platinum: "✓" },
  { feature: "Landscape Design", silver: "—", gold: "✓", platinum: "✓" },
  { feature: "Home Automation", silver: "—", gold: "—", platinum: "✓" },
  { feature: "Warranty", silver: "3 Years", gold: "5 Years", platinum: "7 Years" },
];

// ─── HELPERS ────────────────────────────────────────────────────────────────

function Check({ yes }: { yes: boolean }) {
  if (yes)
    return (
      <svg className="w-5 h-5 text-sky-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    );
  return <span className="text-slate-300 text-base font-bold block text-center">–</span>;
}

function ArrowRight() {
  return (
    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section className="relative py-14 bg-gradient-to-br from-sky-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }]} />
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 bg-white/80 border border-sky-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            How We Engage
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-5"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Packages</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 12" fill="none">
                <path d="M0 8 Q55 0 110 8 Q165 16 220 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From a quick feasibility check to full project management and luxury construction — choose the right combination for your project.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="#consultancy"
              className="inline-flex items-center gap-2 bg-white border border-sky-200 text-sky-600 text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:bg-sky-50 transition-all duration-200"
            >
              Consultancy Packages ↓
            </a>
            <a
              href="#construction"
              className="inline-flex items-center gap-2 bg-[#210568] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:bg-[#01589e] transition-all duration-200"
            >
              Construction Packages ↓
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION DIVIDER LABEL — CONSULTANCY
      ══════════════════════════════════════════════ */}
      <div id="consultancy" className="bg-white pt-20 pb-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sky-200" />
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Consultancy Engagement
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sky-200" />
        </div>
        <p className="text-center text-slate-500 text-sm mt-3 max-w-xl mx-auto">
          Choose the level of professional engineering support that matches your project scope.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          CONSULTANCY PACKAGE CARDS
      ══════════════════════════════════════════════ */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {consultancyPackages.map((pkg, i) => {
              const isHighlight = pkg.highlight;
              return (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ${
                    isHighlight
                      ? "shadow-2xl shadow-blue-900/20 scale-[1.02]"
                      : `${pkg.bg} border ${pkg.border} shadow-sm hover:shadow-lg hover:-translate-y-1`
                  }`}
                >
                  {isHighlight && <div className="absolute inset-0 bg-gradient-to-br from-[#210568] to-[#0e7ab5]" />}
                  {isHighlight && (
                    <div className="relative flex justify-center pt-5">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className={`relative p-7 flex flex-col flex-1 ${!isHighlight ? "pt-7" : ""}`}>
                    <h2
                      className={`text-xl font-bold mb-1 ${isHighlight ? "text-white" : "text-slate-800"}`}
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {pkg.name}
                    </h2>
                    <p className={`text-xs mb-5 ${isHighlight ? "text-sky-200" : "text-slate-400"}`}>{pkg.subtitle}</p>
                    <div className={`text-sm font-semibold mb-6 ${isHighlight ? "text-sky-300" : pkg.text}`}>{pkg.price}</div>
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {pkg.features.map((f, fi) => (
                        <li key={fi} className={`flex items-start gap-2.5 text-sm ${isHighlight ? "text-sky-100" : "text-slate-600"}`}>
                          <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlight ? "text-sky-300" : pkg.accentText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                        isHighlight
                          ? "bg-white text-[#210568] hover:bg-sky-50 shadow-lg"
                          : `bg-white border ${pkg.border} ${pkg.text} hover:shadow-md`
                      }`}
                    >
                      {pkg.cta}
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Consultancy Comparison Table ── */}
      <section className="relative py-16 bg-gradient-to-b from-sky-50/30 to-white overflow-hidden px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Compare Plans
            </span>
            <h2 className="text-3xl font-bold text-slate-800" style={{ fontFamily: "'Georgia', serif" }}>
              What's Included
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 font-semibold text-sky-600 text-xs uppercase tracking-wider text-center">Advisory</th>
                    <th className="px-6 py-4 font-semibold text-[#210568] text-xs uppercase tracking-wider text-center bg-blue-50/50">Study & Design</th>
                    <th className="px-6 py-4 font-semibold text-teal-600 text-xs uppercase tracking-wider text-center">Full PMC</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className={`border-b border-slate-50 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}>
                      <td className="px-6 py-3.5 font-medium text-slate-700">{row.feature}</td>
                      <td className="px-6 py-3.5"><Check yes={row.advisory} /></td>
                      <td className="px-6 py-3.5 bg-blue-50/30"><Check yes={row.study} /></td>
                      <td className="px-6 py-3.5"><Check yes={row.pmc} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION DIVIDER LABEL — CONSTRUCTION
      ══════════════════════════════════════════════ */}
      <div id="construction" className="bg-white pt-16 pb-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-200" />
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-100 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Construction Packages
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-200" />
        </div>
        <p className="text-center text-slate-500 text-sm mt-3 max-w-xl mx-auto">
          Fixed-price per sq.ft construction tiers — from quality-assured essentials to full luxury builds.
        </p>
      </div>

      {/* ══════════════════════════════════════════════
          CONSTRUCTION PACKAGE CARDS
      ══════════════════════════════════════════════ */}
      <section className="relative py-12 bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-50/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {constructionPackages.map((pkg, i) => {
              const isHighlight = pkg.highlight;
              return (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 border ${pkg.border} ${
                    isHighlight
                      ? "shadow-2xl shadow-amber-900/10 scale-[1.02]"
                      : "shadow-sm hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  {/* Card header */}
                  <div className={`bg-gradient-to-br ${pkg.headerGradient} px-7 py-6 text-white`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h2 className="text-xl font-bold" style={{ fontFamily: "'Georgia', serif" }}>{pkg.name}</h2>
                        <p className="text-white/70 text-xs mt-0.5">{pkg.subtitle}</p>
                      </div>
                      {pkg.badge && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${pkg.badgeBg}`}>
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      <span className="text-white/70 text-sm">{pkg.unit}</span>
                    </div>
                    <p className="text-white/60 text-xs mt-1">{pkg.warranty}</p>
                  </div>

                  {/* Card body */}
                  <div className="p-7 bg-white flex flex-col flex-1">
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {pkg.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.accentColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2.5">
                      <Link
                        href={pkg.href}
                        className={`group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 border ${pkg.border} ${pkg.accentColor} bg-white hover:shadow-md`}
                      >
                        {pkg.cta}
                        <ArrowRight />
                      </Link>
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-slate-500 hover:text-slate-700 transition-colors duration-200"
                      >
                        Request Custom Quote →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Construction Comparison Table ── */}
      <section className="relative py-16 bg-gradient-to-b from-amber-50/20 to-white overflow-hidden px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-100 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Compare Tiers
            </span>
            <h2 className="text-3xl font-bold text-slate-800" style={{ fontFamily: "'Georgia', serif" }}>
              Package Comparison
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-6 py-4 font-semibold text-slate-600 text-xs uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-4 font-semibold text-slate-500 text-xs uppercase tracking-wider text-center">Silver</th>
                    <th className="px-6 py-4 font-semibold text-amber-600 text-xs uppercase tracking-wider text-center bg-amber-50/50">Gold</th>
                    <th className="px-6 py-4 font-semibold text-slate-700 text-xs uppercase tracking-wider text-center">Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {constructionComparison.map((row, i) => (
                    <tr key={i} className={`border-b border-slate-50 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}>
                      <td className="px-6 py-3.5 font-medium text-slate-700">{row.feature}</td>
                      <td className="px-6 py-3.5 text-center text-slate-500 text-xs">{row.silver}</td>
                      <td className="px-6 py-3.5 text-center text-amber-700 text-xs font-medium bg-amber-50/30">{row.gold}</td>
                      <td className="px-6 py-3.5 text-center text-slate-600 text-xs font-medium">{row.platinum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 rounded-3xl p-12 text-center overflow-hidden shadow-xl shadow-sky-100/50">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-200/40 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-white border border-sky-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Not Sure Which Package?
            </span>
            <h2
              className="text-3xl font-bold text-slate-800 mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Let's Talk About Your Project
            </h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Every project is unique. Contact us and we'll recommend the right combination of consultancy and construction services for your specific needs and budget.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
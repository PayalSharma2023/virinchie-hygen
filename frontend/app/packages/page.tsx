import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engagement Packages | Virinchie Hygen Engineering Consultants",
  description:
    "Choose from our consultancy engagement tiers — from initial feasibility studies to end-to-end project management in hydrology, environmental, and civil engineering.",
};

const packages = [
  {
    name: "Advisory",
    subtitle: "Initial Consultation & Feasibility",
    price: "On Request",
    highlight: false,
    color: "from-sky-400 to-cyan-400",
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-600",
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
    color: "from-[#210568] to-[#01589e]",
    bg: "bg-[#210568]",
    border: "border-[#210568]",
    text: "text-white",
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
    color: "from-teal-400 to-emerald-400",
    bg: "bg-teal-50",
    border: "border-teal-200",
    text: "text-teal-600",
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

function Check({ yes }: { yes: boolean }) {
  if (yes) return (
    <svg className="w-5 h-5 text-sky-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
  return <span className="text-slate-200 text-lg font-bold block text-center">–</span>;
}

export default function EngagementPackagesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 bg-white/80 border border-sky-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            How We Engage
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-5"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Consultancy{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Packages</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 260 12" fill="none">
                <path d="M0 8 Q65 0 130 8 Q195 16 260 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From a quick feasibility check to full end-to-end project management — choose the level of engagement that fits your project.
          </p>
        </div>
      </section>

      {/* ── PACKAGE CARDS ── */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {packages.map((pkg, i) => {
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
                  {isHighlight && (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#210568] to-[#0e7ab5]" />
                  )}

                  {/* Popular badge */}
                  {isHighlight && (
                    <div className="relative flex justify-center pt-5">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-white/20 border border-white/30 text-white px-3 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`relative p-7 flex flex-col flex-1 ${!isHighlight && "pt-7"}`}>
                    <h2
                      className={`text-xl font-bold mb-1 ${isHighlight ? "text-white" : "text-slate-800"}`}
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {pkg.name}
                    </h2>
                    <p className={`text-xs mb-5 ${isHighlight ? "text-sky-200" : "text-slate-400"}`}>
                      {pkg.subtitle}
                    </p>

                    {/* Price */}
                    <div className={`text-sm font-semibold mb-6 ${isHighlight ? "text-sky-300" : pkg.text}`}>
                      {pkg.price}
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-8 flex-1">
                      {pkg.features.map((f, fi) => (
                        <li key={fi} className={`flex items-start gap-2.5 text-sm ${isHighlight ? "text-sky-100" : "text-slate-600"}`}>
                          <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isHighlight ? "text-sky-300" : pkg.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className={`group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                        isHighlight
                          ? "bg-white text-[#210568] hover:bg-sky-50 shadow-lg"
                          : `bg-white border ${pkg.border} ${pkg.text} hover:shadow-md`
                      }`}
                    >
                      {pkg.cta}
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="relative py-20 bg-gradient-to-b from-sky-50/30 to-white overflow-hidden px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Compare Plans
            </span>
            <h2
              className="text-3xl font-bold text-slate-800"
              style={{ fontFamily: "'Georgia', serif" }}
            >
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

      {/* ── CTA ── */}
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
              Every project is unique. Contact us and we'll recommend the right engagement level for your specific needs and budget.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200/50 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Free Consultation
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
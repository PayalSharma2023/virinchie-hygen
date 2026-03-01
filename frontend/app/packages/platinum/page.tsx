"use client";

import { useState } from "react";
import Link from "next/link";

const specs = [
  {
    category: "Structure & Civil",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    items: [
      { label: "Steel Grade", value: "Fe500D — highest grade" },
      { label: "Cement", value: "Ultratech Premium" },
      { label: "Shuttering", value: "High-quality premium shuttering" },
      { label: "Walls", value: "AAC Blocks" },
      { label: "Plaster", value: "Premium finish, full waterproofing" },
    ],
  },
  {
    category: "Flooring",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    items: [
      { label: "Living / Bedrooms", value: "Italian marble / luxury vitrified" },
      { label: "Bathrooms", value: "Designer premium tiles" },
      { label: "Paint", value: "Luxury emulsion with texture" },
      { label: "Finish", value: "Premium woodwork & wall paneling" },
    ],
  },
  {
    category: "Kitchen",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5M6 10.608v8.137A2.25 2.25 0 0 0 8.25 21h7.5A2.25 2.25 0 0 0 18 18.745V10.608" />
      </svg>
    ),
    items: [
      { label: "Counter", value: "Italian marble countertop" },
      { label: "Kitchen", value: "Luxury modular kitchen" },
      { label: "Appliances", value: "High-end chimney + hob provision" },
      { label: "Storage", value: "Full-height premium cabinets" },
    ],
  },
  {
    category: "Doors & Windows",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    items: [
      { label: "Main Door", value: "Teakwood frame, designer finish" },
      { label: "Interior", value: "Premium flush / panel doors" },
      { label: "Windows", value: "Double-glazed glass" },
      { label: "Hardware", value: "Designer luxury fittings" },
    ],
  },
  {
    category: "Electrical & Automation",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    items: [
      { label: "Wiring", value: "Smart-ready premium wiring" },
      { label: "Switches", value: "Luxury modular switches" },
      { label: "Automation", value: "Home automation readiness" },
      { label: "Lighting", value: "Designer LED + cove lighting" },
    ],
  },
  {
    category: "Bathroom",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    items: [
      { label: "Sanitaryware", value: "Kohler / Grohe" },
      { label: "CP Fittings", value: "Kohler / Grohe premium" },
      { label: "Wall Tiles", value: "Designer imported tiles" },
      { label: "Shower", value: "Rain shower + steam provision" },
    ],
  },
  {
    category: "Special & Smart Features",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
    items: [
      { label: "Home Automation", value: "Full smart home readiness" },
      { label: "Rainwater Harvesting", value: "Included" },
      { label: "HVAC", value: "Full provisions + ducting" },
      { label: "Warranty", value: "7-year extended warranty" },
    ],
  },
];

export default function PlatinumPackagePage() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <main className="font-sans bg-white text-slate-800">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-24 text-white">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Platinum</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-200 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-slate-300" />
                Premium Tier
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                Platinum
                <span className="block text-2xl font-normal text-slate-400 mt-1 tracking-wide" style={{ fontFamily: "sans-serif" }}>Luxury Construction</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                The pinnacle of what we offer — Italian marble, Kohler / Grohe sanitaryware, smart home readiness and the finest finishes money can buy.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-5xl font-bold text-white" style={{ fontFamily: "'Georgia', serif" }}>₹2,700</span>
                <span className="text-slate-400 text-lg">/ sq.ft</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {["7-year warranty", "Italian marble", "Smart home ready", "Kohler/Grohe"].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="group inline-flex items-center gap-2 bg-white text-slate-800 hover:bg-slate-100 px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                  Request Custom Quote
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link href="/packages" className="inline-flex items-center gap-2 text-slate-300 hover:text-white border border-white/20 hover:border-white/40 px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200">
                  ← All Packages
                </Link>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <div className="h-[3px] w-full bg-gradient-to-r from-slate-400 via-white to-slate-400 rounded-full mb-8" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Steel", value: "Fe500D" },
                    { label: "Cement", value: "Ultratech Premium" },
                    { label: "Floors", value: "Italian Marble" },
                    { label: "Windows", value: "Double Glazed" },
                    { label: "Sanitaryware", value: "Kohler/Grohe" },
                    { label: "Warranty", value: "7 Years" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-xl p-4">
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">{item.label}</p>
                      <p className="text-sm font-bold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-slate-500 to-slate-700 text-white rounded-2xl px-5 py-3 shadow-xl border border-white/10">
                <p className="text-xs text-slate-300 uppercase tracking-wider">Starting at</p>
                <p className="text-xl font-bold">₹2,700/sqft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECS ACCORDION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-600 bg-slate-50 border border-slate-200 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Full Specifications
            </span>
            <h2 className="text-3xl font-bold text-slate-800" style={{ fontFamily: "'Georgia', serif" }}>What's Included</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {specs.map((sec, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-slate-600">{sec.icon}</span>
                    <span className="font-semibold text-slate-800">{sec.category}</span>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${openSection === i ? "bg-slate-700 border-slate-700 rotate-45" : "border-slate-200"}`}>
                    <svg className={`w-3 h-3 transition-colors ${openSection === i ? "text-white" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openSection === i ? "max-h-96" : "max-h-0"}`}>
                  <div className="px-6 pb-5 bg-slate-50/40">
                    <div className="pt-2 grid sm:grid-cols-2 gap-2">
                      {sec.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-slate-100">
                          <svg className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          <div>
                            <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                            <p className="text-sm text-slate-700 font-semibold">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON STRIP ── */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { tier: "Silver", price: "₹1,599", active: false, href: "/packages/silver", note: "Essential" },
            { tier: "Gold", price: "₹1,999", active: false, href: "/packages/gold", note: "Popular" },
            { tier: "Platinum", price: "₹2,700", active: true, href: "/packages/platinum", note: "You are here" },
          ].map((t) => (
            <Link
              key={t.tier}
              href={t.href}
              className={`rounded-2xl p-5 text-center border transition-all duration-200 hover:-translate-y-1 ${t.active ? "bg-gradient-to-br from-slate-700 to-slate-900 text-white border-slate-600 shadow-xl" : "bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:shadow-md"}`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${t.active ? "text-slate-400" : "text-slate-400"}`}>{t.note}</p>
              <p className="text-xl font-bold mb-1" style={{ fontFamily: "'Georgia', serif" }}>{t.tier}</p>
              <p className={`text-sm font-semibold ${t.active ? "text-slate-300" : "text-slate-500"}`}>{t.price}/sqft</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 text-center overflow-hidden text-white shadow-2xl">
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Georgia', serif" }}>Experience Unmatched Luxury</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto text-sm leading-relaxed">Reserve the finest construction experience. Our team will craft a custom plan around your vision.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-white text-slate-800 px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-slate-100 transition-all duration-200 hover:-translate-y-0.5 shadow-lg">
                Request Free Estimate
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/packages" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200">
                Compare All Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
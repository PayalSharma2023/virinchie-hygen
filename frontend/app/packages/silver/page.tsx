"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/BreadCrumb";
// ─── DATA ────────────────────────────────────────────────────────────────────

const specs = [
  {
    category: "Structure & Civil",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    items: [
      { label: "Steel Grade", value: "Fe415 — Kamdhenu / Amba Shakti" },
      { label: "Cement", value: "ACC / Ambuja" },
      { label: "Shuttering", value: "MS Shuttering" },
      { label: "Walls", value: "Fly Ash / CLC Bricks" },
      { label: "Plaster", value: "15 mm, waterproofing included" },
    ],
  },
  {
    category: "Flooring & Painting",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
    items: [
      { label: "Living / Bedrooms", value: "Standard vitrified tiles" },
      { label: "Bathrooms", value: "Anti-skid ceramic tiles" },
      { label: "Paint Brand", value: "Asian Paints / Berger" },
      { label: "Finish", value: "Putty coat exterior + interior" },
    ],
  },
  {
    category: "Kitchen",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M4 3v7a4 4 0 0 0 8 0V3M8 21v-7M16 3v18M20 3v6a2 2 0 0 1-4 0V3" />
  </svg>

    ),
    items: [
      { label: "Counter", value: "Granite countertop" },
      { label: "Tiles", value: "2×2 ceramic dado tiles" },
      { label: "Sink", value: "SS sink with drainboard" },
      { label: "Modular", value: "Basic modular kitchen (acrylic)" },
    ],
  },
  {
    category: "Doors & Windows",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
    items: [
      { label: "Main Door", value: "Teak wood frame" },
      { label: "Interior", value: "Flush doors" },
      { label: "Windows", value: "Aluminum sliding" },
      { label: "Hardware", value: "Standard fittings" },
    ],
  },
  {
    category: "Electrical",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    items: [
      { label: "Wiring", value: "Finolex / Anchor FRLS" },
      { label: "Switches", value: "Anchor / L&T modular" },
      { label: "Lighting", value: "LED fittings" },
      { label: "Type", value: "Concealed conduit wiring" },
    ],
  },
  {
    category: "Bathroom",
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 12h13a4 4 0 0 0-4-4h-1V5a2 2 0 1 0-4 0v3H6a3 3 0 0 0-3 3v1z"/>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M16 12v6M19 15v3M13 15v3M10 15v3"/>
  </svg>
    ),
    items: [
      { label: "Sanitaryware", value: "Parryware / Johnson" },
      { label: "CP Fittings", value: "Local make" },
      { label: "Wall Tiles", value: "2×2 ceramic dado" },
      { label: "Floor", value: "Anti-skid ceramic" },
    ],
  },
  {
    category: "Add-ons Included",
    icon: (
     <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75h4.5v4.5h-4.5zM3.75 9.75h4.5v4.5h-4.5zM9.75 3.75h4.5v4.5h-4.5zM15.75 14.25v2.25m0 0v2.25m0-2.25h2.25m-2.25 0h-2.25"
      />
    </svg>
    ),
    items: [
      { label: "Water Storage", value: "Overhead tank 1000L + sump 3000L" },
      { label: "Security", value: "MS grill for main door" },
      { label: "Landscaping", value: "Basic landscaping" },
      { label: "Drawings", value: "Architectural + structural drawings" },
    ],
  }
];

const upgrades = [
  {
    from: "Silver",
    to: "Gold",
    diff: "+₹400/sq.ft",
    benefits: [
      "Fe500 steel",
      "AAC blocks",
      "UPVC windows",
      "Havells electricals",
      "5-yr warranty",
    ],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function SilverPackagePage() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <main className="font-sans bg-white text-slate-800">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 py-14">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-slate-100/60 rounded-full blur-[80px] pointer-events-none" />

        {/* Diagonal accent stripe */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] border border-slate-100 rounded-full" />
          <div className="absolute -top-10 -right-10 w-[400px] h-[400px] border border-slate-100 rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Silver" }]} />
         

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 bg-white border border-slate-200 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                Construction Package
              </span>

              <h1
                className="text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Silver
                <span
                  className="block text-2xl font-normal text-slate-400 mt-1 tracking-wide"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Essential Construction
                </span>
              </h1>

              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                Quality-assured construction using proven materials and systems
                — the right foundation for a lasting home, built without
                compromise on safety.
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-8">
                <span
                  className="text-5xl font-bold text-[#210568]"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  ₹1,599
                </span>
                <span className="text-slate-400 text-lg">/ sq.ft</span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["3-year warranty", "Within 25 km radius", "Customizable"].map(
                  (b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-[#13baf6]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {b}
                    </span>
                  ),
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Request Custom Quote
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-[#210568] border border-slate-200 hover:border-[#210568]/30 bg-white px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
                >
                  ← All Packages
                </Link>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/60 p-8">
                <div className="h-[3px] w-full bg-gradient-to-r from-[#210568] via-[#01589e] to-[#13baf6] rounded-full mb-8" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Steel", value: "Fe415" },
                    { label: "Cement", value: "ACC/Ambuja" },
                    { label: "Walls", value: "CLC Bricks" },
                    { label: "Windows", value: "Aluminum" },
                    { label: "Flooring", value: "Vitrified" },
                    { label: "Warranty", value: "3 Years" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-slate-50 rounded-xl p-4"
                    >
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#210568] text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-xs text-blue-200 uppercase tracking-wider">
                  Starting at
                </p>
                <p className="text-xl font-bold">₹1,599/sqft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECS ACCORDION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#01589e] bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#13baf6]" />
              Full Specifications
            </span>
            <h2
              className="text-3xl font-bold text-slate-800"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              What's Included
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {specs.map((sec, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#01589e]">{sec.icon}</span>
                    <span className="font-semibold text-slate-800">
                      {sec.category}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center transition-all duration-300 ${openSection === i ? "bg-[#210568] border-[#210568] rotate-45" : ""}`}
                  >
                    <svg
                      className={`w-3 h-3 transition-colors ${openSection === i ? "text-white" : "text-slate-400"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openSection === i ? "max-h-96" : "max-h-0"}`}
                >
                  <div className="px-6 pb-5 bg-slate-50/50">
                    <div className="pt-2 grid sm:grid-cols-2 gap-2">
                      {sec.items.map((item, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-slate-100"
                        >
                          <svg
                            className="w-4 h-4 text-[#13baf6] flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                          <div>
                            <p className="text-xs text-slate-400 font-medium">
                              {item.label}
                            </p>
                            <p className="text-sm text-slate-700 font-semibold">
                              {item.value}
                            </p>
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

      {/* ── UPGRADE NUDGE ── */}
      <section className="py-16 px-6 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-sky-100 shadow-lg overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-[#210568] via-[#01589e] to-[#13baf6]" />
            <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#01589e] mb-1">
                  Upgrade Available
                </p>
                <h3
                  className="text-xl font-bold text-slate-800 mb-2"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Step up to Gold for +₹400/sq.ft
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Fe500 steel",
                    "AAC blocks",
                    "UPVC windows",
                    "Havells electricals",
                    "5-yr warranty",
                  ].map((b) => (
                    <span
                      key={b}
                      className="text-xs bg-sky-50 text-sky-700 border border-sky-100 px-2.5 py-1 rounded-full font-medium"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/packages/gold"
                className="flex-shrink-0 group inline-flex items-center gap-2 bg-[#210568] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#01589e] transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-blue-900/20"
              >
                See Gold
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-[#210568] to-[#01589e] rounded-3xl p-12 text-center overflow-hidden text-white shadow-2xl shadow-blue-900/30">
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
          <div className="relative">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Ready to Start Building?
            </h2>
            <p className="text-blue-200 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Tell us about your plot and requirements — we'll prepare a
              detailed estimate at no cost.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#210568] px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-sky-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              >
                Request Free Estimate
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
              >
                Compare Packages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

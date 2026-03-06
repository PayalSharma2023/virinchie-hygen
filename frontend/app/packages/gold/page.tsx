"use client";

import { useState } from "react";
import Link from "next/link";
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
      { label: "Steel Grade", value: "Fe500 — JSW / Jai Bharat" },
      { label: "Cement", value: "Ultratech" },
      { label: "Shuttering", value: "Premium shuttering" },
      { label: "Walls", value: "AAC Blocks" },
      { label: "Plaster", value: "Premium plaster, waterproofing" },
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
      { label: "Living / Bedrooms", value: "Premium vitrified tiles" },
      { label: "Bathrooms", value: "Anti-skid premium ceramic" },
      { label: "Paint Brand", value: "Asian Royale acrylic emulsion" },
      { label: "Finish", value: "Premium putty + texture coat" },
    ],
  },
  {
    category: "Kitchen",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 3v7a4 4 0 0 0 8 0V3M8 21v-7M16 3v18M20 3v6a2 2 0 0 1-4 0V3"
        />
      </svg>
    ),
    items: [
      { label: "Counter", value: "Granite countertop" },
      { label: "Tiles", value: "Designer tiles (dado)" },
      { label: "Kitchen", value: "Modular kitchen + chimney provision" },
      { label: "Extras", value: "Hardscape & landscape design" },
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
      { label: "Main Door", value: "Hardwood frame with veneer finish" },
      { label: "Interior", value: "Premium flush doors" },
      { label: "Windows", value: "UPVC with better insulation" },
      { label: "Hardware", value: "Premium fittings" },
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
      { label: "Wiring", value: "Polycab premium FRLS" },
      { label: "Switches", value: "Havells modular" },
      { label: "Lighting", value: "Premium LED + extra points" },
      { label: "Type", value: "Concealed conduit wiring" },
    ],
  },
  {
    category: "Bathroom",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12h13a4 4 0 0 0-4-4h-1V5a2 2 0 1 0-4 0v3H6a3 3 0 0 0-3 3v1z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 12v6M19 15v3M13 15v3M10 15v3"
        />
      </svg>
    ),
    items: [
      { label: "Sanitaryware", value: "Jaguar / Hindware Premium" },
      { label: "CP Fittings", value: "Jaguar / Hindware" },
      { label: "Wall Tiles", value: "Premium ceramic designer" },
      { label: "Floor", value: "Premium anti-skid" },
    ],
  },
  {
    category: "Special Features",
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
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
    items: [
      { label: "Rainwater Harvesting", value: "Included" },
      { label: "HVAC", value: "Provisions included" },
      { label: "Landscape", value: "Hardscape & landscape design" },
      { label: "Warranty", value: "5-year extended warranty" },
    ],
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function GoldPackagePage() {
  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <main className="font-sans bg-white text-slate-800">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-sky-50 py-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-sky-100/40 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] border border-amber-100 rounded-full" />
          <div className="absolute -top-10 -right-10 w-[400px] h-[400px] border border-amber-100 rounded-full" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
         
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Gold" }]} />

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Most Popular
              </span>

              <h1
                className="text-5xl lg:text-6xl font-bold text-slate-800 mb-4 leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Gold
                <span
                  className="block text-2xl font-normal text-slate-400 mt-1 tracking-wide"
                  style={{ fontFamily: "sans-serif" }}
                >
                  Premium Construction
                </span>
              </h1>

              <p className="text-slate-500 text-lg leading-relaxed mb-8 max-w-lg">
                The sweet spot of quality and value — Fe500 steel, AAC blocks,
                premium fixtures and a 5-year warranty. Most of our clients
                choose Gold.
              </p>

              <div className="flex items-baseline gap-3 mb-8">
                <span
                  className="text-5xl font-bold text-amber-600"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  ₹1,999
                </span>
                <span className="text-slate-400 text-lg">/ sq.ft</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-10">
                {[
                  "5-year warranty",
                  "Within 25 km radius",
                  "Rainwater harvesting",
                  "HVAC provisions",
                ].map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-amber-500"
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
                ))}
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
              <div className="bg-white rounded-2xl border border-amber-100 shadow-xl shadow-amber-100/60 p-8">
                <div className="h-[3px] w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-full mb-8" />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Steel", value: "Fe500" },
                    { label: "Cement", value: "Ultratech" },
                    { label: "Walls", value: "AAC Blocks" },
                    { label: "Windows", value: "UPVC" },
                    { label: "Flooring", value: "Premium Vitrified" },
                    { label: "Warranty", value: "5 Years" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-amber-50/60 rounded-xl p-4"
                    >
                      <p className="text-xs text-amber-700/60 uppercase tracking-wider font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm font-bold text-slate-700">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-xs text-amber-100 uppercase tracking-wider">
                  Starting at
                </p>
                <p className="text-xl font-bold">₹1,999/sqft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPECS ACCORDION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-100 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-amber-50/30 transition-colors duration-150"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-amber-600">{sec.icon}</span>
                    <span className="font-semibold text-slate-800">
                      {sec.category}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${openSection === i ? "bg-amber-500 border-amber-500 rotate-45" : "border-slate-200"}`}
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
                  <div className="px-6 pb-5 bg-amber-50/20">
                    <div className="pt-2 grid sm:grid-cols-2 gap-2">
                      {sec.items.map((item, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 bg-white rounded-xl p-3.5 border border-slate-100"
                        >
                          <svg
                            className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"
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

      {/* ── COMPARISON STRIP ── */}
      <section className="py-16 px-6 bg-gradient-to-br from-amber-50/40 to-white">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            {
              tier: "Silver",
              price: "₹1,599",
              active: false,
              href: "/packages/silver",
              note: "Essential",
            },
            {
              tier: "Gold",
              price: "₹1,999",
              active: true,
              href: "/packages/gold",
              note: "You are here",
            },
            {
              tier: "Platinum",
              price: "₹2,700",
              active: false,
              href: "/packages/platinum",
              note: "Luxury",
            },
          ].map((t) => (
            <Link
              key={t.tier}
              href={t.href}
              className={`rounded-2xl p-5 text-center border transition-all duration-200 hover:-translate-y-1 ${t.active ? "bg-gradient-to-br from-amber-500 to-amber-600 text-white border-amber-400 shadow-lg shadow-amber-200" : "bg-white text-slate-700 border-slate-100 hover:border-amber-200 hover:shadow-md"}`}
            >
              <p
                className={`text-xs font-bold uppercase tracking-widest mb-1 ${t.active ? "text-amber-100" : "text-slate-400"}`}
              >
                {t.note}
              </p>
              <p
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {t.tier}
              </p>
              <p
                className={`text-sm font-semibold ${t.active ? "text-amber-100" : "text-slate-500"}`}
              >
                {t.price}/sqft
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── UPGRADE NUDGE ── */}
      <section className="py-16 px-6 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-sky-100 shadow-lg overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-[#210568] via-[#01589e] to-[#13baf6]" />
            <div className="p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#01589e] mb-1">
                  Luxury Upgrade
                </p>
                <h3
                  className="text-xl font-bold text-slate-800 mb-2"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Upgrade to Platinum for +₹700/sq.ft
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Premium marble / granite flooring",
                    "Luxury bathroom fittings",
                    "Designer false ceiling",
                    "Smart home provisions",
                    "10-year structural warranty",
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
                href="/packages/platinum"
                className="flex-shrink-0 group inline-flex items-center gap-2 bg-[#210568] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#01589e] transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-blue-900/20"
              >
                See Platinum
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
              Build Your Dream Home
            </h2>
            <p className="text-blue-200 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Gold is our most popular choice. Get a detailed quote tailored to
              your plot size and requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white text-[#210568] px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-amber-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
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

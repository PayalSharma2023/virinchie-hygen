"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Simple scroll-reveal hook (replaces AOS dependency)
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
      }}
    >
      {children}
    </div>
  );
}

const foundation = [
  {
    title: "Our Mission",
    text: "To deliver sustainable, cost-effective and innovative engineering solutions that create measurable impact for communities and ecosystems.",
    color: "from-sky-400 to-cyan-400",
    bg: "bg-sky-50",
    border: "border-sky-100",
    text_color: "text-sky-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    title: "Our Vision",
    text: "To become a leading engineering consultancy in India, recognized for resilience-driven infrastructure and environmental stewardship.",
    color: "from-teal-400 to-emerald-400",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text_color: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Our Values",
    text: "Sustainability, Innovation, and Integrity are not just words — they are the foundation of every project we undertake.",
    color: "from-blue-400 to-indigo-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text_color: "text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "40+", label: "Years of Rainfall Data" },
  { value: "25+", label: "Major Projects Delivered" },
  { value: "50+", label: "Clients Across India" },
  { value: "100%", label: "Sustainability Focus" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-[#f0f7ff]">
        <div className="absolute inset-0">
          <Image src="/about.jpg" alt="Engineering Background" fill className="object-cover brightness-105 saturate-75" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white/70 to-teal-50/80" />
        </div>

        {/* Decorative orb */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 bg-white/80 border border-sky-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              About Us
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight mb-5"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
            >
              Building{" "}
              <span className="relative inline-block">
                <span className="text-sky-500">Resilient</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M0 8 Q75 0 150 8 Q225 16 300 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>{" "}
              Futures
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
              Trusted Civil &amp; Environmental Engineering experts serving mountain cities and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="group inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-sky-200 transition-all duration-200 hover:-translate-y-0.5">
                Explore Our Services
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-slate-200 text-slate-700 px-7 py-3.5 rounded-xl font-semibold text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Reveal delay={0}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Who We Are
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-800 mb-5 leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Shimla's Leading{" "}
              <span className="text-sky-500">Engineering</span> Consultancy
            </h2>
            <p className="text-slate-500 mb-4 leading-relaxed">
              Virinchie Hygen Engineering Consultants Pvt. Ltd. delivers sustainable and innovative
              solutions in civil and environmental engineering, rooted in Shimla, Himachal Pradesh.
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              From hydrological modeling to GIS-based studies, we combine global standards with
              deep local expertise to serve mountain cities and beyond.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-blue-100 transition-all duration-200 hover:-translate-y-0.5">
              Learn More
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 group">
              <Image src="/about-team.jpg" alt="Engineering Team" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Based in</p>
                <p className="text-sm font-bold text-slate-800">Shimla, Himachal Pradesh</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="relative py-24 bg-gradient-to-b from-sky-50/40 to-white overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-sky-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-teal-100/50 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Our Foundation
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                The Principles That{" "}
                <span className="relative inline-block">
                  <span className="text-sky-500">Guide Us</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {foundation.map((item, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className={`group relative ${item.bg} border ${item.border} rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 rounded-2xl`} />
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm ${item.text_color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-1/2 bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0c3547] via-[#01589e] to-[#0e7ab5]">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-400/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-400/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors duration-200">
                <h2 className="text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Georgia', serif" }}>{s.value}</h2>
                <p className="text-sky-200 text-sm">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="relative bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 rounded-3xl p-12 text-center overflow-hidden shadow-xl shadow-sky-100/50">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-200/40 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-200/40 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-white border border-sky-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Let's Work Together
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Let's Build Something{" "}
                <span className="text-sky-500">Sustainable</span> Together
              </h2>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                Partner with Virinchie Hygen for future-ready, resilient engineering solutions.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200/50 transition-all duration-200 hover:-translate-y-0.5">
                Get in Touch
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
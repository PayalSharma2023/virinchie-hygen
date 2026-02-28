"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Lightweight scroll-reveal (no AOS needed)
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}>
      {children}
    </div>
  );
}

const services = [
  {
    title: "Hydrological Modeling",
    category: "Hydrology",
    desc: "Advanced flood, rainfall, and watershed studies using state-of-the-art simulation tools for climate-resilient planning.",
    points: ["Flood risk assessment & mapping", "HEC-HMS & HEC-RAS modeling", "Rainfall-runoff analysis", "Stormwater management design"],
    link: "/services/hydrology",
    color: "from-sky-400 to-cyan-400",
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: "Environmental Consultancy",
    category: "Environment",
    desc: "Comprehensive solutions for environmental impact, sustainability planning, and green infrastructure development.",
    points: ["Environmental Impact Assessments (EIA)", "Sustainability planning & reporting", "Nature-based solution design", "Compliance documentation"],
    link: "/services/environment",
    color: "from-teal-400 to-emerald-400",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253" />
      </svg>
    ),
  },
  {
    title: "Infrastructure & Structural Design",
    category: "Civil",
    desc: "Specialized engineering for dams, barrages, bridges, and earthquake-resistant buildings.",
    points: ["Hydraulic structure design", "Earthquake-resistant buildings", "Slope stabilization solutions", "Infrastructure rehabilitation"],
    link: "/services/infrastructure",
    color: "from-blue-400 to-indigo-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Water Supply & Wastewater",
    category: "Water",
    desc: "Planning, design, and optimization of water supply and sanitation systems.",
    points: ["Water treatment plant design", "Distribution network optimization", "Wastewater treatment solutions", "Recycling & reuse systems"],
    link: "/services/water",
    color: "from-cyan-400 to-sky-400",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    text: "text-cyan-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Solid Waste Management",
    category: "Waste",
    desc: "Sustainable waste collection, processing, and disposal systems for cleaner communities.",
    points: ["Waste collection system design", "Material recovery facilities", "Landfill design & management", "Waste-to-energy solutions"],
    link: "/services/waste",
    color: "from-emerald-400 to-green-400",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Renewable Energy Solutions",
    category: "Energy",
    desc: "Feasibility studies and integration planning for clean energy infrastructure.",
    points: ["Solar energy feasibility studies", "Micro-hydro power assessments", "Wind energy potential analysis", "Hybrid system design"],
    link: "/services/energy",
    color: "from-amber-400 to-orange-400",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Project Management & Consultancy",
    category: "PMC",
    desc: "Comprehensive project oversight for government and private clients.",
    points: ["Feasibility studies & DPR", "Contract management", "Quality assurance & control", "Technical advisory services"],
    link: "/services/pmc",
    color: "from-violet-400 to-purple-400",
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    title: "GIS & Remote Sensing",
    category: "GIS",
    desc: "Precision mapping and spatial analysis using advanced geospatial tools.",
    points: ["Spatial database development", "Land-use / land-cover mapping", "DEM processing & analysis", "Web GIS application development"],
    link: "/services/gis",
    color: "from-rose-400 to-pink-400",
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    title: "Custom Engineering Solutions",
    category: "Custom",
    desc: "Tailored solutions for mountainous and environmentally sensitive regions.",
    points: ["Site-specific engineering designs", "Adaptation to local conditions", "Multi-disciplinary integration", "Innovative problem-solving"],
    link: "/contact",
    color: "from-slate-400 to-gray-400",
    bg: "bg-slate-50",
    border: "border-slate-100",
    text: "text-slate-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
];

const categories = ["All", ...Array.from(new Set(services.map((s) => s.category)))];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? services : services.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#f0f7ff]">
        <div className="absolute inset-0">
          <Image src="/services.jpg" alt="Engineering Services" fill priority className="object-cover brightness-105 saturate-75" />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white/70 to-teal-50/85" />
        </div>
        <div className="absolute top-10 right-10 w-80 h-80 bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 bg-white/80 border border-sky-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              What We Offer
            </span>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight mb-5"
              style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
            >
              Our Engineering{" "}
              <span className="relative inline-block">
                <span className="text-sky-500">Services</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M0 8 Q75 0 150 8 Q225 16 300 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Innovative, data-driven solutions for resilient infrastructure and sustainable development.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="relative py-24 bg-gradient-to-b from-white to-sky-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-sky-100/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-teal-100/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Header */}
          <Reveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                Our Expertise
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-800 mb-3"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Explore Our{" "}
                <span className="relative inline-block">
                  <span className="text-sky-500">Capabilities</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
                Smart, sustainable, and data-driven engineering solutions tailored for challenging mountain environments.
              </p>
            </div>
          </Reveal>

          {/* Category Filter */}
          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-200"
                      : "bg-white text-slate-500 border-slate-200 hover:border-sky-300 hover:text-sky-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className={`group relative ${s.bg} border ${s.border} rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                  {/* Gradient hover wash */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 rounded-2xl`} />

                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5 relative">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm ${s.text} group-hover:scale-110 transition-transform duration-300`}>
                      {s.icon}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${s.text} bg-white border ${s.border} px-2.5 py-1 rounded-full`}>
                      {s.category}
                    </span>
                  </div>

                  {/* Title & desc */}
                  <h3 className="text-base font-bold text-slate-800 mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.desc}</p>

                  {/* Points */}
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {s.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-500">
                        <svg className={`w-4 h-4 flex-shrink-0 mt-0.5 ${s.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  {/* <Link
                    href={s.link}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${s.text} group/link`}
                  >
                    Learn More
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link> */}

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-1/2 bg-gradient-to-r ${s.color} rounded-full transition-all duration-500`} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6">
        <Reveal>
          <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 rounded-3xl p-12 text-center overflow-hidden shadow-xl shadow-sky-100/50">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-200/40 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-200/40 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-white border border-sky-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                Work With Us
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Need Expert{" "}
                <span className="text-sky-500">Engineering</span> Solutions?
              </h2>
              <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
                Partner with Virinchie Hygen for reliable, sustainable, and innovative solutions built for your unique challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200/50 transition-all duration-200 hover:-translate-y-0.5">
                  Contact Our Team
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <a href="tel:+917018167926" className="flex items-center gap-1.5 hover:text-sky-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                  +91 7018167926
                </a>
                <a href="mailto:info@virinchiehygen.com" className="flex items-center gap-1.5 hover:text-sky-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                  info@virinchiehygen.com
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
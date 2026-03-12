"use client";

import { Leaf, Lightbulb, Handshake } from "lucide-react";
import { useState } from "react";

const values = [
  {
    title: "Sustainability",
    description:
      "We design solutions that protect communities and nature for generations to come, ensuring long-term environmental balance.",
    icon: Leaf,
    color: "from-teal-400 to-emerald-400",
    bg: "bg-teal-50 dark:bg-teal-950/40",
    border: "border-teal-100 dark:border-teal-800/50",
    iconColor: "text-teal-600 dark:text-teal-400",
    iconBg: "bg-white dark:bg-slate-800",
    stat: "30+ Eco Projects",
  },
  {
    title: "Innovation",
    description:
      "From advanced GIS to hydrological modeling, we leverage cutting-edge tools to deliver engineering excellence.",
    icon: Lightbulb,
    color: "from-sky-400 to-cyan-400",
    bg: "bg-sky-50 dark:bg-sky-950/40",
    border: "border-sky-100 dark:border-sky-800/50",
    iconColor: "text-sky-600 dark:text-sky-400",
    iconBg: "bg-white dark:bg-slate-800",
    stat: "Latest GIS & CAD Tools",
  },
  {
    title: "Collaboration",
    description:
      "We work hand-in-hand with stakeholders, ensuring trust and transparency throughout every project lifecycle.",
    icon: Handshake,
    color: "from-blue-400 to-indigo-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-100 dark:border-blue-800/50",
    iconColor: "text-blue-600 dark:text-blue-400",
    iconBg: "bg-white dark:bg-slate-800",
    stat: "100+ Stakeholders",
  },
];

export default function Values() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-sky-50/50 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-sky-100/60 dark:bg-sky-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-teal-100/60 dark:bg-teal-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 border border-sky-100 dark:border-sky-800/50 px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          What Drives Us
        </span>

        <h2
          className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4 leading-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Our Core{" "}
          <span className="relative inline-block">
            <span className="text-sky-500 dark:text-sky-400">Values</span>
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-16 text-base leading-relaxed">
          The principles guiding every engineering decision and long-term impact we create.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isActive = active === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                className={`group relative cursor-default ${value.bg} border ${value.border} p-8 rounded-2xl transition-all duration-300 text-left overflow-hidden ${
                  isActive ? "shadow-xl dark:shadow-black/50 -translate-y-2" : "shadow-sm"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} transition-opacity duration-300 rounded-2xl ${isActive ? "opacity-[0.06]" : "opacity-0"}`} />

                <div className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl ${value.iconBg} shadow-sm ${value.iconColor} mb-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3" style={{ fontFamily: "'Georgia', serif" }}>
                  {value.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  {value.description}
                </p>

                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold ${value.iconColor} ${value.iconBg} border ${value.border} px-3 py-1.5 rounded-full transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${value.color}`} />
                  {value.stat}
                </div>

                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r ${value.color} rounded-full transition-all duration-500 ${isActive ? "w-1/2" : "w-0"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
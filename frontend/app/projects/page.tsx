import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Image from "next/image";
import Breadcrumb from "@/components/layout/BreadCrumb";

export const metadata: Metadata = {
  title: "Projects | Virinchie Hygen Engineering Consultants Pvt. Ltd.",
  description:
    "Explore engineering consultancy projects by Virinchie Hygen Engineering Consultants Pvt. Ltd. including hydrology, infrastructure, environmental and GIS solutions.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#f0f7ff] dark:bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src="/projects.jpg"
            alt="Projects background"
            fill
            className="object-cover brightness-105 saturate-75 dark:brightness-50 dark:saturate-50"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white/70 to-teal-50/85 dark:from-slate-950/90 dark:via-slate-900/80 dark:to-slate-950/90" />
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 dark:text-sky-400 bg-white/80 dark:bg-slate-800/80 border border-sky-100 dark:border-sky-700 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Our Portfolio
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white leading-tight mb-5"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Engineering{" "}
            <span className="relative inline-block">
              <span className="text-sky-500 dark:text-sky-400">Projects</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M0 8 Q75 0 150 8 Q225 16 300 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-xl leading-relaxed">
            Delivering resilient infrastructure and sustainable solutions across India since 2018.
          </p>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="relative py-20 bg-gradient-to-b from-white to-sky-50/30 dark:from-slate-950 dark:to-slate-900 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-100/40 dark:bg-sky-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-100/40 dark:bg-teal-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
}
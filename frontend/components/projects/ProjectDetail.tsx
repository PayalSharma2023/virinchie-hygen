"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";

interface ProjectDetailProps {
  project: Project;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  hydrology:     { bg: "bg-sky-50",     text: "text-sky-600",     border: "border-sky-100" },
  infrastructure:{ bg: "bg-blue-50",    text: "text-blue-600",    border: "border-blue-100" },
  environment:   { bg: "bg-teal-50",    text: "text-teal-600",    border: "border-teal-100" },
  gis:           { bg: "bg-rose-50",    text: "text-rose-600",    border: "border-rose-100" },
  water:         { bg: "bg-cyan-50",    text: "text-cyan-600",    border: "border-cyan-100" },
  energy:        { bg: "bg-amber-50",   text: "text-amber-600",   border: "border-amber-100" },
  default:       { bg: "bg-slate-50",   text: "text-slate-600",   border: "border-slate-100" },
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const catKey = project.category?.toLowerCase().replace(/\s/g, "-") ?? "default";
  const colors = categoryColors[catKey] ?? categoryColors.default;

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 space-y-10">

      {/* ── Hero Image ── */}
      <div className="relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

        {/* Category badge over image */}
        <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest ${colors.text} ${colors.bg} border ${colors.border} px-3 py-1.5 rounded-full shadow-sm`}>
          {project.category?.replace("-", " ")}
        </span>
      </div>

      {/* ── Header ── */}
      <header className="space-y-3">
        <h1
          className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {project.title}
        </h1>
        <p className="text-slate-500 leading-relaxed text-base max-w-2xl">
          {project.description}
        </p>
      </header>

      {/* ── Info Grid ── */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          {
            label: "Location",
            value: project.location,
            icon: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            ),
          },
          {
            label: "Completed",
            value: project.completionDate,
            icon: (
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
            ),
          },
          ...(project.area
            ? [{
                label: "Area",
                value: project.area,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                ),
              }]
            : []),
        ].map((item, i) => (
          <div key={i} className="bg-sky-50 border border-sky-100 rounded-xl p-4 flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white shadow-sm text-sky-500 flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">{item.label}</p>
              <p className="text-sm font-semibold text-slate-700 mt-0.5">{item.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Project Images ── */}
      {project.images && project.images.length > 0 && (
        <section className="space-y-5">
          <h2
            className="text-xl font-bold text-slate-800"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Project Visuals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.images.map((img, index) => (
              <div key={index} className="group rounded-2xl overflow-hidden shadow-md border border-slate-100 bg-white">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={`${project.title} – ${img.label}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-wider py-3 px-4">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Key Features ── */}
      {project.features && project.features.length > 0 && (
        <section className="bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 rounded-2xl p-6 space-y-4">
          <h2
            className="text-xl font-bold text-slate-800"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Key Features
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── Walkthrough Video ── */}
      {project.walkthroughUrl && (
        <section className="space-y-4">
          <h2
            className="text-xl font-bold text-slate-800"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Project Walkthrough
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <iframe
              src={project.walkthroughUrl.replace("watch?v=", "embed/")}
              title={`${project.title} Walkthrough`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* ── Planning PDF ── */}
      {project.planningPdf && (
        <section className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-3">
          <h2
            className="text-xl font-bold text-slate-800"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Planning & Drawings
          </h2>
          <p className="text-sm text-slate-500">
            View detailed planning work including floor plans and technical drawings.
          </p>
          <a
            href={project.planningPdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-100 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            {project.planningPdf.label}
          </a>
        </section>
      )}

      {/* ── CTA ── */}
      <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-500 transition-colors duration-200"
        >
          <svg className="w-4 h-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          All Projects
        </Link>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-blue-100 transition-all duration-200 hover:-translate-y-0.5"
        >
          Contact for Similar Projects
          <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
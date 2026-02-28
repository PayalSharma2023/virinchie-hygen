"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import ProjectDetail from "@/components/projects/ProjectDetail"
import { projects } from "@/lib/data/projects"

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50/40 to-white px-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/50 rounded-full blur-[80px] pointer-events-none" />
        <div className="text-center relative">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rose-500 bg-rose-50 border border-rose-100 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            404 – Not Found
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Project Not Found
          </h2>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">
            Sorry, the project you are looking for doesn't exist or may have been moved.
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-blue-100 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </section>
    )
  }

  return (
    <div className="relative bg-gradient-to-b from-white to-sky-50/20 min-h-screen">
      {/* Subtle background orbs */}
      <div className="fixed top-20 right-0 w-[350px] h-[350px] bg-sky-100/30 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-20 left-0 w-[350px] h-[350px] bg-teal-100/30 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Back breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-500 transition-colors duration-200"
        >
          <svg className="w-4 h-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Project detail component */}
      <div className="relative z-10">
        <ProjectDetail project={project} />
      </div>
    </div>
  )
}
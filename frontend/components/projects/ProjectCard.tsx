"use client"

import Link from "next/link"
import Image from "next/image"

interface Project {
  id: string
  title: string
  slug: string
  category: string
  description: string
  image: string
  location: string
  completionDate: string
  area?: string
}

interface ProjectCardProps {
  project: Project
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  hydrology:      { bg: "bg-sky-50",    text: "text-sky-600",    border: "border-sky-100" },
  infrastructure: { bg: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-100" },
  environment:    { bg: "bg-teal-50",   text: "text-teal-600",   border: "border-teal-100" },
  gis:            { bg: "bg-rose-50",   text: "text-rose-600",   border: "border-rose-100" },
  water:          { bg: "bg-cyan-50",   text: "text-cyan-600",   border: "border-cyan-100" },
  energy:         { bg: "bg-amber-50",  text: "text-amber-600",  border: "border-amber-100" },
  residential:    { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
  commercial:     { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100" },
  default:        { bg: "bg-slate-50",  text: "text-slate-500",  border: "border-slate-100" },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const catKey = project.category?.toLowerCase().replace(/\s/g, "-") ?? "default"
  const colors = categoryColors[catKey] ?? categoryColors.default

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Light gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />

        {/* Category badge */}
        <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest ${colors.text} ${colors.bg} border ${colors.border} px-2.5 py-1 rounded-full shadow-sm`}>
          {project.category?.replace("-", " ")}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-base font-bold text-slate-800 leading-snug mb-2 group-hover:text-sky-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            {project.location}
          </span>
          <span>{project.completionDate}</span>
        </div>

        {project.area && (
          <p className="text-xs text-slate-400 mb-4">Area: {project.area}</p>
        )}

        {/* View link */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500">
          View Project
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>

      {/* Bottom accent */}
      <div className="h-[3px] w-0 group-hover:w-1/2 mx-auto bg-gradient-to-r from-sky-400 to-teal-400 rounded-full transition-all duration-500" />
    </Link>
  )
}
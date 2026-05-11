"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "@/lib/data/projects"

const categories = [
  { value: "all",             label: "All Projects" },
  { value: "hydrology",       label: "Hydrology" },
  { value: "structural",      label: "Structural" },
  { value: "transportation",  label: "Transportation" },
  { value: "planning",        label: "Planning" },
  { value: "environmental",   label: "Environmental" },
  { value: "disaster",        label: "Disaster Mitigation" },
  { value: "infrastructure",  label: "Infrastructure" },
  { value: "survey",          label: "Survey" },
  { value: "water",           label: "Water Supply" },
];

export default function ProjectGrid() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category?.toLowerCase() === filter)

  return (
    <section className="space-y-8">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
              filter === cat.value
                ? "bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-200 dark:shadow-sky-900/40"
                : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-slate-400 dark:text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-600 dark:text-slate-300">
          {filteredProjects.length}
        </span>{" "}
        project{filteredProjects.length !== 1 ? "s" : ""}
        {filter !== "all" && (
          <>
            {" "}in{" "}
            <span className="font-semibold text-sky-500 dark:text-sky-400 capitalize">
              {filter}
            </span>
          </>
        )}
      </p>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-800/40 rounded-2xl">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            No projects found in this category.
          </p>
          <button
            onClick={() => setFilter("all")}
            className="mt-4 text-xs font-semibold text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors"
          >
            View all projects →
          </button>
        </div>
      )}
    </section>
  )
}
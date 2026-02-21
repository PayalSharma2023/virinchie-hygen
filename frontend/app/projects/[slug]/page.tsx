"use client"

import { useParams } from "next/navigation"
import ProjectDetail from "@/components/projects/ProjectDetail"
import { projects } from "@/lib/data/projects"


export default function ProjectDetailPage() {
  const { slug } = useParams() // get dynamic slug from URL :contentReference[oaicite:1]{index=1}

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <p className="mt-2 text-gray-600">
          Sorry, the project you are looking for does not exist.
        </p>
      </div>
    )
  }

  return <ProjectDetail project={project} />
}

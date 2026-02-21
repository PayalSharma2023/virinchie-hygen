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

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4">
          <p className="text-sm text-secondary mb-1">
            {project.category.replace("-", " ")}
          </p>

          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{project.description}</p>

          <div className="text-xs text-gray-500 flex justify-between">
            <span>{project.location}</span>
            <span>{project.completionDate}</span>
          </div>

          {project.area && (
            <p className="text-xs text-gray-500 mt-1">
              Area: {project.area}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}

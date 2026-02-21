"use client"

import { useState } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "@/lib/data/projects"

// const projects = [
  
//   {
//   "id": "1",
//   "title": "Residential House – 3D Elevation",
//   "slug": "residential-3d-elevation",
//   "category": "residential",
//   image: "/projects/1.1.jpeg",
//   "description": "A 3D elevation is like a photo of a building before it is built, showing how it will look after construction.",
//   "highlights": [
//     "Shows exterior design clearly",
//     "Looks realistic and lifelike",
//     "Easy for clients to understand"
//   ],
//   "comparison": {
//     "2dElevation": "Flat drawing without depth",
//     "3dElevation": "Realistic view with depth, shadows, and textures"
//   },
//   completionDate: "2024",
// }
// ,
//   {
//     id: "2",
//     title: "Modern Villa - Ambala Cantt",
//     slug: "modern-villa-ambala",
//     category: "residential",
//     description: "Luxurious 4BHK villa with contemporary design",
//     image: "/projects/1.1.jpeg",
//     location: "Ambala Cantt, Haryana",
//     completionDate: "2024",
//     area: "3500 sq ft",
//   },
//   {
//     id: "3",
//     title: "Modern Villa - Ambala Cantt",
//     slug: "modern-villa-ambala",
//     category: "residential",
//     description: "Luxurious 4BHK villa with contemporary design",
//     image: "/projects/1.2.jpeg",
//     location: "Ambala Cantt, Haryana",
//     completionDate: "2024",
//     area: "3500 sq ft",
//   },
//   // … other projects
// ]

export default function ProjectGrid() {
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter)

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "studio", label: "Studio" },
    { value: "shopping complex", label: "Shopping Complex" },
  ]

  return (
    <section className="max-w-5xl mx-auto">
      {/* Category filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === cat.value
                ? "bg-primary-600 text-black shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

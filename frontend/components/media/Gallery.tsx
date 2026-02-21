"use client"

import { useState } from "react"
import Image from "next/image"
import { projects } from "@/lib/data/projects" // adjust import path if needed

export default function Gallery() {
  const [filter, setFilter] = useState("all")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Build flat list of images from project data
  const allImages = projects.flatMap((project) =>
    project.images.map((img) => ({
      projectId: project.id,
      category: project.category,
      title: img.label || project.title,
      src: img.src,
    }))
  )

  // Apply filter
  const filteredImages = filter === "all"
    ? allImages
    : allImages.filter((img) => img.category === filter)

  const categories = [
    { value: "all", label: "All" },
    ...Array.from(new Set(projects.map((p) => p.category))).map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
    })),
  ]

  return (
    <>
      {/* Filters */}
      <div className="flex gap-4 mb-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === cat.value
                ? "bg-primary-600 text-black"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative h-40 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-xs">
              {image.title}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          {/* Current Image */}
          <div className="relative w-full max-w-3xl h-[60vh]">
            <Image
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].title}
              fill
              className="object-contain"
            />
          </div>

          {/* Prev */}
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex(selectedIndex - 1)
              }}
            >
              ‹
            </button>
          )}

          {/* Next */}
          {selectedIndex < filteredImages.length - 1 && (
            <button
              className="absolute right-4 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex(selectedIndex + 1)
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  )
}

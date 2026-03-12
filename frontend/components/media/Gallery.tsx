"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { projects } from "@/lib/data/projects"

interface GalleryImage {
  projectId: string
  category: string
  title: string
  src: string
}

const categoryColors: Record<string, string> = {
  hydrology:      "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700",
  environment:    "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700",
  gis:            "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700",
  civil:          "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700",
  infrastructure: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700",
}

function getCategoryStyle(cat: string) {
  return categoryColors[cat.toLowerCase()] ?? "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600"
}

export default function Gallery() {
  const [filter, setFilter]               = useState("all")
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [imageLoaded, setImageLoaded]     = useState<Record<number, boolean>>({})

  // Build flat image list
  const allImages: GalleryImage[] = projects.flatMap((project) =>
    project.images.map((img) => ({
      projectId: project.id,
      category:  project.category,
      title:     img.label || project.title,
      src:       img.src,
    }))
  )

  const filteredImages = filter === "all"
    ? allImages
    : allImages.filter((img) => img.category.toLowerCase() === filter)

  const categories = [
    { value: "all", label: "All" },
    ...Array.from(new Set(projects.map((p) => p.category.toLowerCase()))).map((cat) => ({
      value: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1),
    })),
  ]

  // Keyboard navigation in lightbox
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return
    if (e.key === "ArrowRight" && selectedIndex < filteredImages.length - 1)
      setSelectedIndex(selectedIndex + 1)
    if (e.key === "ArrowLeft" && selectedIndex > 0)
      setSelectedIndex(selectedIndex - 1)
    if (e.key === "Escape")
      setSelectedIndex(null)
  }, [selectedIndex, filteredImages.length])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selectedIndex])

  // Reset filter selection when filter changes
  useEffect(() => { setSelectedIndex(null) }, [filter])

  return (
    <>
      {/* ── Filter bar ── */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => {
          const isActive = filter === cat.value
          return (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                isActive
                  ? "bg-[#210568] dark:bg-sky-600 text-white border-transparent shadow-md shadow-blue-200/50 dark:shadow-sky-900/30"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 hover:text-sky-600 dark:hover:text-sky-400"
              }`}
            >
              {cat.label}
              {cat.value === "all" && (
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`}>
                  {allImages.length}
                </span>
              )}
            </button>
          )
        })}

        {/* Result count */}
        <span className="ml-auto self-center text-xs text-slate-400 dark:text-slate-500 font-medium">
          {filteredImages.length} photo{filteredImages.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* ── Empty state ── */}
      {filteredImages.length === 0 && (
        <div className="text-center py-24">
          <div className="w-16 h-16 bg-sky-50 dark:bg-sky-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-sky-300 dark:text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium">No photos in this category yet.</p>
        </div>
      )}

      {/* ── Masonry grid ── */}
      {filteredImages.length > 0 && (
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-black/50 hover:-translate-y-0.5 transition-all duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Aspect ratio varies for masonry feel */}
              <div className={`relative w-full ${index % 5 === 0 ? "h-64" : index % 3 === 0 ? "h-48" : "h-56"}`}>
                {!imageLoaded[index] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 animate-pulse" />
                )}
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  onLoad={() => setImageLoaded((prev) => ({ ...prev, [index]: true }))}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border backdrop-blur-sm ${getCategoryStyle(image.category)}`}>
                    {image.category}
                  </span>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/30">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>

                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-semibold leading-snug line-clamp-2">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Lightbox ── */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white/70 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
            {selectedIndex + 1} / {filteredImages.length}
          </div>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-4 max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={filteredImages[selectedIndex].src}
                alt={filteredImages[selectedIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 rounded-b-xl">
              <p className="text-white font-semibold text-sm">{filteredImages[selectedIndex].title}</p>
              <span className={`inline-block mt-1 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${getCategoryStyle(filteredImages[selectedIndex].category)}`}>
                {filteredImages[selectedIndex].category}
              </span>
            </div>
          </div>

          {/* Prev */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex - 1) }}
              className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Next */}
          {selectedIndex < filteredImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedIndex(selectedIndex + 1) }}
              className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          {/* Thumbnail strip */}
          {filteredImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-xs overflow-x-auto px-2 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
              {filteredImages.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelectedIndex(i) }}
                  className={`relative flex-shrink-0 w-8 h-8 rounded-md overflow-hidden transition-all duration-200 border-2 ${
                    i === selectedIndex ? "border-sky-400 scale-110" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img.src} alt={img.title} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
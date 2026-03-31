"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useCallback, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "@/lib/types";

interface ProjectDetailProps {
  project: Project;
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  hydrology:      { bg: "bg-sky-50 dark:bg-sky-950/40",    text: "text-sky-600 dark:text-sky-400",    border: "border-sky-100 dark:border-sky-800/50"    },
  infrastructure: { bg: "bg-blue-50 dark:bg-blue-950/40",  text: "text-blue-600 dark:text-blue-400",  border: "border-blue-100 dark:border-blue-800/50"  },
  environment:    { bg: "bg-teal-50 dark:bg-teal-950/40",  text: "text-teal-600 dark:text-teal-400",  border: "border-teal-100 dark:border-teal-800/50"  },
  gis:            { bg: "bg-rose-50 dark:bg-rose-950/40",  text: "text-rose-600 dark:text-rose-400",  border: "border-rose-100 dark:border-rose-800/50"  },
  water:          { bg: "bg-cyan-50 dark:bg-cyan-950/40",  text: "text-cyan-600 dark:text-cyan-400",  border: "border-cyan-100 dark:border-cyan-800/50"  },
  energy:         { bg: "bg-amber-50 dark:bg-amber-950/40",text: "text-amber-600 dark:text-amber-400",border: "border-amber-100 dark:border-amber-800/50"},
  default:        { bg: "bg-slate-50 dark:bg-slate-800",   text: "text-slate-600 dark:text-slate-300",border: "border-slate-100 dark:border-slate-700"   },
};

const categoryBadgeColors: Record<string, string> = {
  hydrology:      "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700",
  environment:    "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700",
  gis:            "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700",
  infrastructure: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700",
  water:          "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700",
  energy:         "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700",
};

function getCategoryBadgeStyle(cat: string) {
  return categoryBadgeColors[cat.toLowerCase()] ?? "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-600";
}

const SERIF = { fontFamily: "'Georgia', serif" } as const;

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

const AreaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-sky-500 dark:text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const PdfIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

const InfoCard = memo(({ label, value, icon }: { label: string; value?: string; icon: React.ReactNode }) => (
  <div className="bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-800/50 rounded-xl p-4 flex items-start gap-3">
    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-sky-500 dark:text-sky-400 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">{value}</p>
    </div>
  </div>
));
InfoCard.displayName = "InfoCard";

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-bold text-slate-800 dark:text-white" style={SERIF}>{children}</h2>
);

// ── Gallery Lightbox — portalled to document.body so it covers the navbar ─────

interface LightboxImage { src: string; label: string; }
interface GalleryLightboxProps {
  images: LightboxImage[];
  selectedIndex: number;
  category: string;
  onClose: () => void;
  onSelect: (index: number) => void;
}

const GalleryLightbox = memo(({ images, selectedIndex, category, onClose, onSelect }: GalleryLightboxProps) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight" && selectedIndex < images.length - 1) onSelect(selectedIndex + 1);
    if (e.key === "ArrowLeft"  && selectedIndex > 0)                 onSelect(selectedIndex - 1);
    if (e.key === "Escape")                                           onClose();
  }, [selectedIndex, images.length, onSelect, onClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const current = images[selectedIndex];

  // createPortal renders straight onto document.body — outside <article>, outside
  // <main>, completely separate from the navbar's stacking context.
  return createPortal(
    <div
      className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white/70 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
        {selectedIndex + 1} / {images.length}
      </div>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl mx-4 max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[80vh]">
          <Image
            src={current.src}
            alt={current.label}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 rounded-b-xl">
          <p className="text-white font-semibold text-sm">{current.label}</p>
          <span className={`inline-block mt-1 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${getCategoryBadgeStyle(category)}`}>
            {category}
          </span>
        </div>
      </div>

      {/* Prev */}
      {selectedIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onSelect(selectedIndex - 1); }}
          className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Next */}
      {selectedIndex < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onSelect(selectedIndex + 1); }}
          className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-xs overflow-x-auto px-2 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); onSelect(i); }}
              className={`relative flex-shrink-0 w-8 h-8 rounded-md overflow-hidden transition-all duration-200 border-2 ${
                i === selectedIndex ? "border-sky-400 scale-110" : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={img.src} alt={img.label} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body
  );
});
GalleryLightbox.displayName = "GalleryLightbox";

// ── Main Component ────────────────────────────────────────────────────────────

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeModal = useCallback(() => setSelectedIndex(null), []);

  const catKey = project.category?.toLowerCase().replace(/\s+/g, "-") ?? "default";
  const colors  = CATEGORY_COLORS[catKey] ?? CATEGORY_COLORS.default;

  const infoItems = [
    { label: "Location",  value: project.location,      icon: <LocationIcon /> },
    { label: "Completed", value: project.completionDate, icon: <CalendarIcon /> },
    ...(project.area ? [{ label: "Area", value: project.area, icon: <AreaIcon /> }] : []),
  ];

  const embedUrl = project.walkthroughUrl?.replace("watch?v=", "embed/");

  const galleryImages = (project.images ?? []).map((img) => ({
    src:   img.src,
    label: img.label ?? project.title,
  }));

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 space-y-10">

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 dark:shadow-black/40 group">
        <Image src={project.image} alt={project.title} fill priority className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest ${colors.text} ${colors.bg} border ${colors.border} px-3 py-1.5 rounded-full shadow-sm`}>
          {project.category?.replace(/-/g, " ")}
        </span>
      </div>

      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight" style={SERIF}>{project.title}</h1>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base max-w-2xl">{project.description}</p>
      </header>

      {/* Info Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {infoItems.map((item) => <InfoCard key={item.label} {...item} />)}
      </section>

      {/* Project Images */}
      {!!galleryImages.length && (
        <section className="space-y-5">
          <SectionHeading>Project Visuals</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-md dark:shadow-black/30 border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/20 dark:bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/30">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider py-3 px-4">{img.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox — portalled to document.body, covers navbar completely */}
      {selectedIndex !== null && (
        <GalleryLightbox
          images={galleryImages}
          selectedIndex={selectedIndex}
          category={project.category ?? ""}
          onClose={closeModal}
          onSelect={setSelectedIndex}
        />
      )}

      {/* Key Features */}
      {!!project.features?.length && (
        <section className="bg-gradient-to-br from-sky-50 to-teal-50 dark:from-sky-950/40 dark:to-teal-950/40 border border-sky-100 dark:border-sky-800/40 rounded-2xl p-6 space-y-4">
          <SectionHeading>Key Features</SectionHeading>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <CheckIcon />{feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Walkthrough Video */}
      {embedUrl && (
        <section className="space-y-4">
          <SectionHeading>Project Walkthrough</SectionHeading>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700">
            <iframe src={embedUrl} title={`${project.title} Walkthrough`} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </section>
      )}

      {/* Planning PDF */}
      {project.planningPdf && (
        <section className="bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 space-y-3">
          <SectionHeading>Planning & Drawings</SectionHeading>
          <p className="text-sm text-slate-500 dark:text-slate-400">View detailed planning work including floor plans and technical drawings.</p>
          <a href={project.planningPdf.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-100 dark:shadow-blue-900/30 transition-all duration-200 hover:-translate-y-0.5">
            <PdfIcon />{project.planningPdf.label}
          </a>
        </section>
      )}

      {/* CTA */}
      <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/projects" className="group inline-flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200">
          <ArrowIcon className="w-4 h-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
          All Projects
        </Link>
        <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-blue-100 dark:shadow-blue-900/30 transition-all duration-200 hover:-translate-y-0.5">
          Contact for Similar Projects
          <ArrowIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

    </article>
  );
}
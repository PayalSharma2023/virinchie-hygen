"use client";

import Link from "next/link";
import Image from "next/image";
import { memo, useCallback, useState } from "react";
import { Project } from "@/lib/types";

interface ProjectDetailProps {
  project: Project;
}

// Category colors — each entry gets both light and dark variants
const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  hydrology:      { bg: "bg-sky-50 dark:bg-sky-950/40",    text: "text-sky-600 dark:text-sky-400",    border: "border-sky-100 dark:border-sky-800/50"    },
  infrastructure: { bg: "bg-blue-50 dark:bg-blue-950/40",  text: "text-blue-600 dark:text-blue-400",  border: "border-blue-100 dark:border-blue-800/50"  },
  environment:    { bg: "bg-teal-50 dark:bg-teal-950/40",  text: "text-teal-600 dark:text-teal-400",  border: "border-teal-100 dark:border-teal-800/50"  },
  gis:            { bg: "bg-rose-50 dark:bg-rose-950/40",  text: "text-rose-600 dark:text-rose-400",  border: "border-rose-100 dark:border-rose-800/50"  },
  water:          { bg: "bg-cyan-50 dark:bg-cyan-950/40",  text: "text-cyan-600 dark:text-cyan-400",  border: "border-cyan-100 dark:border-cyan-800/50"  },
  energy:         { bg: "bg-amber-50 dark:bg-amber-950/40",text: "text-amber-600 dark:text-amber-400",border: "border-amber-100 dark:border-amber-800/50"},
  default:        { bg: "bg-slate-50 dark:bg-slate-800",   text: "text-slate-600 dark:text-slate-300",border: "border-slate-100 dark:border-slate-700"   },
};

const SERIF = { fontFamily: "'Georgia', serif" } as const;

// ── Icons ────────────────────────────────────────────────────────────────────

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

// ── Sub-components ────────────────────────────────────────────────────────────

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

const ImageModal = memo(({ src, onClose }: { src: string; onClose: () => void }) => (
  <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50" onClick={onClose}>
    <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={onClose}
        aria-label="Close image"
        className="absolute -top-10 right-0 text-white text-3xl font-bold leading-none hover:text-slate-300 transition-colors"
      >
        &times;
      </button>
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <Image src={src} alt="Project image enlarged" fill className="object-contain" />
      </div>
    </div>
  </div>
));
ImageModal.displayName = "ImageModal";

// ── Main Component ────────────────────────────────────────────────────────────

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const closeModal = useCallback(() => setModalImage(null), []);

  const catKey = project.category?.toLowerCase().replace(/\s+/g, "-") ?? "default";
  const colors = CATEGORY_COLORS[catKey] ?? CATEGORY_COLORS.default;

  const infoItems = [
    { label: "Location",  value: project.location,      icon: <LocationIcon /> },
    { label: "Completed", value: project.completionDate, icon: <CalendarIcon /> },
    ...(project.area ? [{ label: "Area", value: project.area, icon: <AreaIcon /> }] : []),
  ];

  const embedUrl = project.walkthroughUrl?.replace("watch?v=", "embed/");

  return (
    <article className="max-w-4xl mx-auto px-6 py-12 space-y-10">

      {/* Hero Image */}
      <div className="relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-xl shadow-slate-200/60 dark:shadow-black/40 group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
        <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-widest ${colors.text} ${colors.bg} border ${colors.border} px-3 py-1.5 rounded-full shadow-sm`}>
          {project.category?.replace(/-/g, " ")}
        </span>
      </div>

      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white leading-tight" style={SERIF}>
          {project.title}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base max-w-2xl">
          {project.description}
        </p>
      </header>

      {/* Info Grid */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {infoItems.map((item) => (
          <InfoCard key={item.label} {...item} />
        ))}
      </section>

      {/* Project Images */}
      {!!project.images?.length && (
        <section className="space-y-5">
          <SectionHeading>Project Visuals</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-md dark:shadow-black/30 border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer"
                onClick={() => setModalImage(img.src)}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={`${project.title} – ${img.label}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider py-3 px-4">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Image Modal */}
      {modalImage && <ImageModal src={modalImage} onClose={closeModal} />}

      {/* Key Features */}
      {!!project.features?.length && (
        <section className="bg-gradient-to-br from-sky-50 to-teal-50 dark:from-sky-950/40 dark:to-teal-950/40 border border-sky-100 dark:border-sky-800/40 rounded-2xl p-6 space-y-4">
          <SectionHeading>Key Features</SectionHeading>
          <ul className="grid sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <CheckIcon />
                {feature}
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
            <iframe
              src={embedUrl}
              title={`${project.title} Walkthrough`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Planning PDF */}
      {project.planningPdf && (
        <section className="bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 space-y-3">
          <SectionHeading>Planning & Drawings</SectionHeading>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            View detailed planning work including floor plans and technical drawings.
          </p>
          <a
            href={project.planningPdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-100 dark:shadow-blue-900/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <PdfIcon />
            {project.planningPdf.label}
          </a>
        </section>
      )}

      {/* CTA */}
      <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
        >
          <ArrowIcon className="w-4 h-4 rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
          All Projects
        </Link>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-blue-100 dark:shadow-blue-900/30 transition-all duration-200 hover:-translate-y-0.5"
        >
          Contact for Similar Projects
          <ArrowIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

    </article>
  );
}
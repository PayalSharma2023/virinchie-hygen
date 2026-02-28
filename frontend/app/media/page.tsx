import type { Metadata } from "next";
import Gallery from "@/components/media/Gallery";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Media Gallery | Virinchie Hygen Engineering Consultants",
  description:
    "Browse photos and visuals from our engineering projects — hydrology studies, GIS mapping, infrastructure, and environmental consultancy work across India.",
  keywords: [
    "engineering project gallery",
    "hydrology project photos",
    "GIS mapping visuals",
    "civil engineering Himachal Pradesh",
  ],
  openGraph: {
    title: "Media Gallery | Virinchie Hygen Engineering Consultants",
    url: "https://virinchie.com/media",
  },
  alternates: { canonical: "https://virinchie.com/media" },
};

export default function MediaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MediaGallery",
    name: "Virinchie Hygen Engineering Consultants Media Gallery",
    description: "A visual gallery of engineering projects by Virinchie Hygen Engineering Consultants.",
    url: "https://virinchie.com/media",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-[#f0f7ff]">
        <div className="absolute inset-0">
          <Image src="/media.jpg" alt="Media gallery background" fill className="object-cover brightness-105 saturate-75" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white/70 to-teal-50/85" />
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 bg-white/80 border border-sky-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Our Work in Photos
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-4"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Media{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Gallery</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 180 12" fill="none">
                <path d="M0 8 Q45 0 90 8 Q135 16 180 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-600 text-base max-w-lg leading-relaxed">
            A visual journey through our engineering projects — from hydrological studies to infrastructure design.
          </p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="relative py-20 bg-gradient-to-b from-white to-sky-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6">
          <Gallery />
        </div>
      </section>
    </>
  );
}
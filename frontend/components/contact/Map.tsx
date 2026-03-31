"use client";
import { COMPANY_INFO } from "@/lib/constants";

export default function MapWithDirections() {
  return (
    <div className="space-y-4">
      {/* Map */}
      <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700">
        <div className="absolute top-3 left-3 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-100 dark:border-slate-700 rounded-xl px-3 py-2 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 dark:text-slate-500">Our Office</p>
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">{COMPANY_INFO.address.street}</p>
        </div>
        <iframe
          title="Virinchie Hygen Office Location"
          src={COMPANY_INFO.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Directions button */}
      <a
        href={COMPANY_INFO.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-900/30 border border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 px-5 py-3 rounded-xl font-semibold text-sm shadow-sm transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
        Get Directions on Google Maps
        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}
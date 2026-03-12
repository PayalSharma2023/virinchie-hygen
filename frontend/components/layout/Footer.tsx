import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";

const services = [
  { name: "Hydrological Modeling",          path: "/services#hydrology" },
  { name: "Environmental Consultancy",       path: "/services#environmental-eia" },
  { name: "BIM",                             path: "/services#architecture-interior" },
  { name: "Infrastructure & Structural",     path: "/services#water-infrastructure" },
  { name: "Water Supply & Wastewater",       path: "/services#dpr-project-reports" },
  { name: "Solid Waste Management",          path: "/services#waste" },
  { name: "Renewable Energy",               path: "/services#energy" },
  { name: "Project Management & PMC",        path: "/services#project-management" },
  { name: "GIS & Remote Sensing",            path: "/services#survey-gis" },
  { name: "Custom Engineering",              path: "/services#cad-support" },
];

// ─── Social icon map ──────────────────────────────────────────────────────────
// Keys must match the keys in COMPANY_INFO.social (case-insensitive check below)

function SocialIcon({ name }: { name: string }) {
  const key = name.toLowerCase();

  if (key === "facebook")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
      </svg>
    );

  if (key === "instagram")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069Zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    );

  if (key === "linkedin")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    );

  if (key === "youtube")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
      </svg>
    );

  // Fallback: initials
  return <span className="text-xs font-semibold uppercase">{name.slice(0, 2)}</span>;
}

// ─── Brand colours for each platform ─────────────────────────────────────────
const socialHoverClass: Record<string, string> = {
  facebook:  "hover:bg-[#1877F2]/20 hover:text-[#1877F2] hover:border-[#1877F2]/30",
  instagram: "hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/30",
  linkedin:  "hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/30",
  youtube:   "hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/30",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#060f1e] text-white/70">

      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#210568] via-[#01589e] to-[#13baf6]" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative w-[70px] h-[50px] bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <Image src="/logo.jpeg" alt="Virinchie Hygen Logo" fill className="object-contain p-1" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm uppercase tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
                  Virinchie Hy<span className="text-red-500">gen</span>
                </span>
                <span className="text-sky-400 text-[10px] uppercase tracking-widest font-medium">
                  Engineering Consultants
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/50 mb-4">
              Delivering sustainable, innovative engineering solutions for mountain cities and beyond.
            </p>
            <p className="text-xs text-white/30 uppercase tracking-widest">
              Est. {COMPANY_INFO.foundedYear}
            </p>

            {/* Social links */}
            {COMPANY_INFO.social && (
              <div className="flex gap-3 mt-5">
                {Object.entries(COMPANY_INFO.social).map(([name, href]) => {
                  const hoverCls =
                    socialHoverClass[name.toLowerCase()] ??
                    "hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/30";
                  return (
                    <Link
                      key={name}
                      href={href as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className={`w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 transition-all duration-200 ${hoverCls}`}
                    >
                      <SocialIcon name={name} />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-white/50 hover:text-sky-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-sky-400">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.path}
                    className="text-sm text-white/50 hover:text-sky-400 transition-colors duration-200 flex items-center gap-1.5 group leading-snug"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-sky-400 flex-shrink-0">→</span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <address className="not-italic space-y-4">
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-sky-400" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <Link href={COMPANY_INFO.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-sky-400 leading-relaxed">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city},{" "}
                  {COMPANY_INFO.address.state}
                </Link>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-sky-400" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <Link href={`tel:${COMPANY_INFO.phone}`} className="text-sm text-white/50 hover:text-sky-400 transition-colors duration-200">
                  {COMPANY_INFO.phone}
                </Link>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-sky-400" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <Link href={`mailto:${COMPANY_INFO.email}`} className="text-sm text-white/50 hover:text-sky-400 transition-colors duration-200 break-all">
                  {COMPANY_INFO.email}
                </Link>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.06] px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <p className="text-slate-500 text-xs">
            © {currentYear} Virinchie Hygen Engineering Consultants Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/blogs" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Blogs
            </Link>
            <span className="text-slate-700">·</span>
            <Link href="/contact" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Contact
            </Link>
            <span className="text-slate-700">·</span>
            <Link
              href="/admin/login"
              className="text-slate-500 hover:text-slate-500 text-[11px] transition-colors duration-200"
              title="Admin"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
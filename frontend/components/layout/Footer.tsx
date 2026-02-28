import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";

const services = [
  "Hydrological & Hydraulic Studies",
  "Environmental Consultancy",
  "GIS & Remote Sensing",
  "Civil Infrastructure Design",
  "Watershed Management",
  "Disaster Risk Reduction",
];

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
                  Virinchie Hygen
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
                {Object.entries(COMPANY_INFO.social).map(([name, href]) => (
                  <Link
                    key={name}
                    href={href as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-sky-500/20 border border-white/10 flex items-center justify-center text-white/40 hover:text-sky-400 transition-all duration-200 text-xs font-semibold uppercase"
                  >
                    {name.slice(0, 2)}
                  </Link>
                ))}
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
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-white/50 hover:text-sky-400 transition-colors duration-200 flex items-center gap-1.5 group leading-snug"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-sky-400 flex-shrink-0">→</span>
                    {s}
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
                <p className="text-sm text-white/50 leading-relaxed">
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city},{" "}
                  {COMPANY_INFO.address.state}
                </p>
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
          <span>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</span>
          <span>Designed with care for resilient communities 🏔️</span>
        </div>
      </div>
    </footer>
  );
}
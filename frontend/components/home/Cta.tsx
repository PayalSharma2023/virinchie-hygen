import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-[#0c3547] via-[#01589e] to-[#0e7ab5]">
      {/* Decorative orbs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-400/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-400/20 rounded-full blur-[80px] pointer-events-none" />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-200 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
          Let's Build Together
        </span>

        <h3
          className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Ready to Strengthen Your{" "}
          <span className="text-sky-300">City's Resilience?</span>
        </h3>

        <p className="text-sky-100/80 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Let's talk about how we can tailor hydrology, environmental, and civil
          solutions for your unique challenges.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-white text-[#01589e] font-semibold px-7 py-3.5 rounded-xl hover:bg-sky-50 shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            Contact Us
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Virinchie Hygen Engineering Consultants Pvt. Ltd.",
  description:
    "Join Virinchie Hygen Engineering Consultants. Explore hydrology, GIS, environmental, and civil engineering career opportunities in India.",
};

const jobs = [
  {
    id: 1,
    title: "Hydrology Engineer",
    location: "Delhi, India",
    type: "Full Time",
    experience: "2–5 Years",
    category: "Hydrology",
    color: "from-sky-400 to-cyan-400",
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "GIS Analyst",
    location: "Remote / Hybrid",
    type: "Full Time",
    experience: "1–3 Years",
    category: "GIS",
    color: "from-rose-400 to-pink-400",
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Structural Design Engineer",
    location: "Chandigarh, India",
    type: "Full Time",
    experience: "3–6 Years",
    category: "Civil",
    color: "from-blue-400 to-indigo-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Environmental Consultant",
    location: "Shimla, Himachal Pradesh",
    type: "Full Time",
    experience: "2–4 Years",
    category: "Environment",
    color: "from-teal-400 to-emerald-400",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Project Management Consultant",
    location: "Delhi / Hybrid",
    type: "Full Time",
    experience: "4–8 Years",
    category: "PMC",
    color: "from-violet-400 to-purple-400",
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Water Resources Engineer",
    location: "Shimla / Delhi",
    type: "Full Time",
    experience: "2–5 Years",
    category: "Water",
    color: "from-cyan-400 to-sky-400",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    text: "text-cyan-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
];

const perks = [
  { label: "Impactful Work", desc: "Projects that directly improve communities and ecosystems" },
  { label: "Mountain Locations", desc: "Work across scenic Himachal Pradesh and North India" },
  { label: "Technical Growth", desc: "Exposure to GIS, HEC-HMS/RAS, and cutting-edge tools" },
  { label: "Flexible Options", desc: "Remote and hybrid roles available for select positions" },
];

export default function JobsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 bg-white/80 border border-sky-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            We're Hiring
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-5"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Join Our{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Team</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none">
                <path d="M0 8 Q30 0 60 8 Q90 16 120 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Work on impactful hydrology, environmental, and civil engineering projects that shape the resilience of Indian mountain cities.
          </p>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-sky-500 font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="text-sm font-bold text-slate-800 mb-1">{p.label}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── JOB LISTINGS ── */}
      <section className="relative py-24 bg-gradient-to-b from-white to-sky-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              Open Positions
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-800"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Current{" "}
              <span className="relative inline-block">
                <span className="text-sky-500">Openings</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 180 8" fill="none">
                  <path d="M0 5 Q45 0 90 5 Q135 10 180 5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className={`group relative ${job.bg} border ${job.border} rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {/* Hover gradient wash */}
                <div className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 rounded-2xl`} />

                {/* Header */}
                <div className="flex items-center justify-between mb-4 relative">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm ${job.text} group-hover:scale-110 transition-transform duration-300`}>
                    {job.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${job.text} bg-white border ${job.border} px-2.5 py-1 rounded-full`}>
                    {job.category}
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-800 mb-4 leading-snug">{job.title}</h2>

                {/* Meta */}
                <div className="space-y-2 text-xs text-slate-500 mb-6 flex-1">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {job.experience}
                  </div>
                </div>

                {/* Apply button */}
                <Link
                  href={`mailto:careers@virinchiehygen.com?subject=Application for ${job.title}`}
                  className={`group/btn inline-flex items-center gap-2 text-xs font-semibold ${job.text} transition-colors duration-200`}
                >
                  Apply Now
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-1/2 bg-gradient-to-r ${job.color} rounded-full transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN APPLICATION CTA ── */}
      <section className="py-20 px-6">
        <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-[#0c3547] via-[#01589e] to-[#0e7ab5] rounded-3xl p-12 text-center overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-400/20 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-300 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
              Open Application
            </span>
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Don't See a Suitable Role?
            </h3>
            <p className="text-sky-200/80 mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Send your resume to{" "}
              <span className="text-sky-300 font-semibold">careers@virinchiehygen.com</span>{" "}
              and we'll reach out when an opportunity matches your profile.
            </p>
            <a
              href="mailto:careers@virinchiehygen.com"
              className="group inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-[#01589e] font-semibold px-7 py-3.5 rounded-xl text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Send Your Resume
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
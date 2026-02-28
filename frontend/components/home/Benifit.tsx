const benefits = [
  {
    title: "Integrated Planning",
    desc: "Combining hydrology, engineering, and ecology into one seamless, holistic solution.",
    color: "from-sky-400 to-cyan-400",
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Mountain City Expertise",
    desc: "Solutions purpose-built for the unique terrain, climate, and infrastructure challenges of hill cities.",
    color: "from-teal-400 to-emerald-400",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15 12 5.25 21.75 15M4.5 12.75V21h15v-8.25" />
      </svg>
    ),
  },
  {
    title: "Future-Ready Infrastructure",
    desc: "Resilient designs that adapt to climate change, regulatory shifts, and long-term community growth.",
    color: "from-blue-400 to-indigo-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Transparent Collaboration",
    desc: "Clear communication and trust-based partnerships with government bodies, NGOs, and communities.",
    color: "from-indigo-400 to-purple-400",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
      </svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-50 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Why Choose Us
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Approach</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`group flex gap-4 items-start ${b.bg} border ${b.border} rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden relative`}
            >
              {/* Icon */}
              <div className={`flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white shadow-sm ${b.text} group-hover:scale-110 transition-transform duration-300`}>
                {b.icon}
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-1/3 bg-gradient-to-r ${b.color} rounded-full transition-all duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
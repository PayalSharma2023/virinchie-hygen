import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Flood Risk Mapping — Shimla District",
    category: "Hydrology",
    image: "/flood.jpg",
    link: "/projects",
    tag: "GIS + Modeling",
  },
  {
    title: "Urban Drainage System — Dehradun",
    category: "Civil Engineering",
    image: "/drainage.jpg",
    link: "/projects",
    tag: "Infrastructure",
  },
  {
    title: "Environmental Impact Assessment",
    category: "Environmental",
    image: "/impact.jpg",
    link: "/projects",
    tag: "EIA Report",
  },
];

const categoryColors: Record<string, string> = {
  Hydrology: "bg-sky-100 text-sky-600 border-sky-200",
  "Civil Engineering": "bg-teal-100 text-teal-600 border-teal-200",
  Environmental: "bg-emerald-100 text-emerald-600 border-emerald-200",
};

export default function FeaturedProjects() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-sky-50/50 to-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-100/50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-100/50 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            Our Work
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Featured{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Projects</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base">
            Real-world solutions across hydrology, civil, and environmental engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="group relative block bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Light overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />

                {/* Tag pill over image */}
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest bg-white/90 text-slate-600 px-2.5 py-1 rounded-full shadow-sm">
                  {project.tag}
                </span>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Category badge */}
                <span
                  className={`inline-block text-[10px] font-semibold uppercase tracking-wider border px-2.5 py-0.5 rounded-full mb-3 ${
                    categoryColors[project.category] ?? "bg-slate-100 text-slate-500 border-slate-200"
                  }`}
                >
                  {project.category}
                </span>

                <h3 className="text-base font-semibold text-slate-800 leading-snug mb-4 group-hover:text-sky-600 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Arrow link */}
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-500">
                  View Project
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-1/2 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200/50 hover:shadow-blue-300/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            View All Projects
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
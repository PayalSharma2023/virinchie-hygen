import Link from "next/link";
import type { Metadata } from "next";
import { getPosts, type BlogPost } from "@/lib/data/blogs";
import Breadcrumb from "@/components/layout/BreadCrumb";
export const metadata: Metadata = {
  title: "Blog | Virinchie Hygen Engineering Consultants",
  description:
    "Insights, technical articles and project updates from our engineering consultants on hydrology, civil engineering, and sustainable infrastructure.",
};

const categoryColors: Record<string, string> = {
  Hydrology: "bg-sky-100 text-sky-700 border-sky-200",
  Environment: "bg-teal-100 text-teal-700 border-teal-200",
  GIS: "bg-violet-100 text-violet-700 border-violet-200",
  Sustainability: "bg-blue-100 text-blue-700 border-blue-200",
  Geotechnical: "bg-orange-100 text-orange-700 border-orange-200",
  "Project Reports": "bg-amber-100 text-amber-700 border-amber-200",
  Construction: "bg-slate-100 text-slate-700 border-slate-200",
};

function CategoryBadge({ category }: { category: string }) {
  const cls = categoryColors[category] ?? "bg-gray-100 text-gray-700 border-gray-200";
  return (
    <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${cls}`}>
      {category}
    </span>
  );
}

function CoverPlaceholder({ gradient }: { gradient: string }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient}`}>
      <div className="w-full h-full bg-black/20" />
    </div>
  );
}

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative py-14 bg-gradient-to-br from-sky-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 bg-white/80 border border-sky-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Insights & Updates
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-5"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Engineering{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Insights</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M0 8 Q50 0 100 8 Q150 16 200 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Technical articles, project updates and engineering perspectives from our team in Himachal Pradesh.
          </p>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && (
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#01589e] mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-[#13baf6] inline-block" />
              Featured Article
            </p>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/80 hover:shadow-2xl hover:shadow-sky-100/40 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <CoverPlaceholder gradient={featured.coverColor} />
                  <div className="absolute top-4 left-4">
                    <CategoryBadge category={featured.category} />
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                  <h2
                    className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-snug group-hover:text-[#210568] transition-colors duration-200"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed mb-6 text-sm">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{featured.author}</p>
                      <p className="text-xs text-slate-400">{featured.authorRole} · {featured.date}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#01589e] bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full">
                      {featured.readTime}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#210568] group-hover:gap-3 transition-all duration-200">
                    Read article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ── MASONRY GRID ── */}
      <section className="py-12 pb-24 px-6 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 flex items-center gap-2">
            <span className="w-4 h-px bg-slate-200 inline-block" />
            All Articles
          </p>

          {rest.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {rest.map((post) => (
                <div key={post.id} className="break-inside-avoid">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100/30 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      <div
                        className="relative overflow-hidden"
                        style={{ height: `${160 + (parseInt(post.id) % 3) * 40}px` }}
                      >
                        <CoverPlaceholder gradient={post.coverColor} />
                        <div className="absolute top-3 left-3">
                          <CategoryBadge category={post.category} />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3
                          className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-[#210568] transition-colors duration-200 text-base"
                          style={{ fontFamily: "'Georgia', serif" }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                          <div>
                            <p className="text-xs font-semibold text-slate-600">{post.author}</p>
                            <p className="text-[11px] text-slate-400">{post.date}</p>
                          </div>
                          <span className="text-[11px] text-slate-400 font-medium">{post.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-700 mb-1" style={{ fontFamily: "'Georgia', serif" }}>No articles yet</h3>
              <p className="text-slate-400 text-sm">Check back soon — our team is working on new content.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-100 rounded-3xl p-10 text-center overflow-hidden shadow-xl shadow-sky-100/50">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-200/40 rounded-full blur-[60px] pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-white border border-sky-100 px-4 py-1.5 rounded-full mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Work With Us
            </span>
            <h2 className="text-2xl font-bold text-slate-800 mb-3" style={{ fontFamily: "'Georgia', serif" }}>Have a Project in Mind?</h2>
            <p className="text-slate-500 mb-6 text-sm max-w-md mx-auto">Our engineers are based in Shimla and work across Himachal Pradesh. Get in touch for a free initial consultation.</p>
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-blue-200/50 transition-all duration-200 hover:-translate-y-0.5">
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
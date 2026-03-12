import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPost,
  getRelatedPosts,
  getAllSlugs,
  type BlogSection,
} from "@/lib/data/blogs";

export const dynamicParams = true;

// ─── METADATA ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | Virinchie Hygen Blog`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Virinchie Hygen Blog`,
      description: post.excerpt,
      ...(post.featuredImage?.url && { images: [{ url: post.featuredImage.url }] }),
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ─── CATEGORY COLOURS ────────────────────────────────────────────────────────

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Hydrology:         { bg: "bg-sky-100 dark:bg-sky-900/40",       text: "text-sky-700 dark:text-sky-300",       border: "border-sky-200 dark:border-sky-700"       },
  Environment:       { bg: "bg-teal-100 dark:bg-teal-900/40",     text: "text-teal-700 dark:text-teal-300",     border: "border-teal-200 dark:border-teal-700"     },
  GIS:               { bg: "bg-violet-100 dark:bg-violet-900/40", text: "text-violet-700 dark:text-violet-300", border: "border-violet-200 dark:border-violet-700" },
  Sustainability:    { bg: "bg-blue-100 dark:bg-blue-900/40",     text: "text-blue-700 dark:text-blue-300",     border: "border-blue-200 dark:border-blue-700"     },
  Geotechnical:      { bg: "bg-orange-100 dark:bg-orange-900/40", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-700" },
  "Project Reports": { bg: "bg-amber-100 dark:bg-amber-900/40",   text: "text-amber-700 dark:text-amber-300",   border: "border-amber-200 dark:border-amber-700"   },
  Construction:      { bg: "bg-slate-100 dark:bg-slate-700",      text: "text-slate-700 dark:text-slate-300",   border: "border-slate-200 dark:border-slate-600"   },
};

// ─── CALLOUT STYLES ───────────────────────────────────────────────────────────

const calloutStyles = {
  tip: {
    bg: "bg-sky-50 dark:bg-sky-900/30", border: "border-sky-200 dark:border-sky-700",
    icon: "text-sky-500", title: "text-sky-800 dark:text-sky-300", text: "text-sky-700 dark:text-sky-400",
    iconPath: "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-900/30", border: "border-amber-200 dark:border-amber-700",
    icon: "text-amber-500", title: "text-amber-800 dark:text-amber-300", text: "text-amber-700 dark:text-amber-400",
    iconPath: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
  },
  info: {
    bg: "bg-[#210568]/5 dark:bg-sky-900/30", border: "border-[#210568]/15 dark:border-sky-700",
    icon: "text-[#210568] dark:text-sky-400", title: "text-[#210568] dark:text-sky-300", text: "text-slate-700 dark:text-slate-300",
    iconPath: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
  },
};

// ─── CONTENT RENDERER ────────────────────────────────────────────────────────

function RenderContent({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section, i) => {
        switch (section.type) {
          case "paragraph":
            return (
              <p key={i} className="text-slate-600 dark:text-slate-300 leading-[1.85] text-[1.05rem]">
                {section.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={i} className="text-2xl font-bold text-slate-800 dark:text-white mt-10 mb-2 pt-4 border-t border-slate-100 dark:border-slate-800" style={{ fontFamily: "'Georgia', serif" }}>
                {section.text}
              </h2>
            );
          case "subheading":
            return (
              <h3 key={i} className="text-lg font-bold text-slate-800 dark:text-white mt-7 mb-2" style={{ fontFamily: "'Georgia', serif" }}>
                {section.text}
              </h3>
            );
          case "bulletList":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-[1.02rem] leading-relaxed">
                    <span className="mt-[0.45rem] w-1.5 h-1.5 rounded-full bg-[#13baf6] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "numberedList":
            return (
              <ol key={i} className="space-y-3 pl-1">
                {section.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-[1.02rem] leading-relaxed">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#210568]/10 dark:bg-sky-900/40 text-[#210568] dark:text-sky-400 text-xs font-bold flex items-center justify-center mt-0.5">
                      {j + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "callout": {
            const s = calloutStyles[section.variant] ?? calloutStyles.info;
            return (
              <div key={i} className={`rounded-xl border ${s.bg} ${s.border} p-5 flex gap-4`}>
                <div className="flex-shrink-0 mt-0.5">
                  <svg className={`w-5 h-5 ${s.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.iconPath} />
                  </svg>
                </div>
                <div>
                  <p className={`font-bold text-sm mb-1 ${s.title}`}>{section.title}</p>
                  <p className={`text-sm leading-relaxed ${s.text}`}>{section.text}</p>
                </div>
              </div>
            );
          }
          case "codeBlock":
            return (
              <div key={i} className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">{section.language}</span>
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                </div>
                <pre className="bg-slate-900 text-slate-200 p-5 text-sm font-mono overflow-x-auto leading-relaxed">
                  <code>{section.code}</code>
                </pre>
              </div>
            );
          case "divider":
            return (
              <div key={i} className="flex items-center gap-4 py-4">
                <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                </div>
                <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800" />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await params — required in Next.js 15
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.relatedSlugs ?? []);
  const cat = categoryColors[post.category] ?? {
    bg: "bg-slate-100 dark:bg-slate-700",
    text: "text-slate-700 dark:text-slate-300",
    border: "border-slate-200 dark:border-slate-600",
  };
  const headings = post.content.filter(
    (s): s is { type: "heading"; text: string } => s.type === "heading"
  );

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24">
        {post.featuredImage?.url ? (
          <>
            <Image src={post.featuredImage.url} alt={post.featuredImage.alt || post.title} fill className="object-cover" sizes="100vw" priority />
            <div className="absolute inset-0 bg-black/65" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 bg-gradient-to-br ${post.coverColor}`} />
            <div className="absolute inset-0 bg-black/50" />
          </>
        )}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-10 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
            <span>/</span>
            <span className="text-white/80 truncate max-w-[240px]">{post.title}</span>
          </nav>

          <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border mb-6 ${cat.bg} ${cat.text} ${cat.border}`}>
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl" style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {post.author.split(" ").pop()?.charAt(0)}
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{post.author}</p>
                <p className="text-white/60 text-xs">{post.authorRole}</p>
              </div>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-white/60 text-sm">{post.date}</span>
            <div className="h-4 w-px bg-white/20" />
            <span className="inline-flex items-center gap-1.5 text-white/80 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTENT + SIDEBAR ── */}
      <section className="py-16 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_260px] gap-12 items-start">
            <article>
              <RenderContent sections={post.content} />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full hover:border-[#210568]/30 dark:hover:border-sky-500/50 hover:text-[#210568] dark:hover:text-sky-400 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author bio */}
              <div className="mt-10 bg-gradient-to-br from-sky-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 border border-sky-100 dark:border-sky-800/40 rounded-2xl p-6 flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-[#210568] flex items-center justify-center text-white font-bold text-xl flex-shrink-0" style={{ fontFamily: "'Georgia', serif" }}>
                  {post.author.split(" ").pop()?.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white mb-0.5">{post.author}</p>
                  <p className="text-xs text-[#01589e] dark:text-sky-400 font-semibold mb-2 uppercase tracking-wider">{post.authorRole}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{post.authorBio}</p>
                </div>
              </div>

              {/* Nav row */}
              <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
                <Link href="/blogs" className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-[#210568] dark:hover:text-sky-400 transition-colors">
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                  </svg>
                  Back to Blog
                </Link>
                <Link href="/contact" className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-5 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-blue-900/15 transition-all duration-200 hover:-translate-y-0.5">
                  Discuss a Project
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              {headings.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 p-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    Contents
                  </p>
                  <nav className="space-y-1">
                    {headings.map((s, i) => (
                      <p key={i} className="text-sm text-slate-600 dark:text-slate-300 hover:text-[#210568] dark:hover:text-sky-400 transition-colors py-1 border-l-2 border-transparent hover:border-[#13baf6] pl-3 cursor-pointer leading-tight">
                        {s.text}
                      </p>
                    ))}
                  </nav>
                </div>
              )}

              <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Article Info</p>
                <div className="space-y-3">
                  {[
                    { label: "Published", value: post.date },
                    { label: "Read Time", value: post.readTime },
                    { label: "Category",  value: post.category },
                    { label: "Author",    value: post.author },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-2">
                      <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                      <span className="text-xs text-slate-700 dark:text-slate-200 font-semibold text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#210568] to-[#01589e] rounded-2xl p-6 text-white">
                <p className="font-bold text-sm mb-2" style={{ fontFamily: "'Georgia', serif" }}>Need Engineering Support?</p>
                <p className="text-blue-200 text-xs leading-relaxed mb-4">Our team handles projects across HP. Get a free initial consultation.</p>
                <Link href="/contact" className="group w-full inline-flex items-center justify-center gap-2 bg-white text-[#210568] px-4 py-2.5 rounded-xl font-semibold text-xs hover:bg-sky-50 transition-all duration-200">
                  Contact Us
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="py-16 px-6 bg-gradient-to-b from-sky-50/30 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-slate-200 dark:bg-slate-700" />
              Related Articles
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map((rp) => {
                const rc = categoryColors[rp.category] ?? { bg: "bg-slate-100 dark:bg-slate-700", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-600" };
                return (
                  <Link key={rp.slug} href={`/blogs/${rp.slug}`} className="group block">
                    <article className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-sky-100/30 dark:hover:shadow-black/40 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                      <div className="h-28 relative overflow-hidden">
                        {rp.featuredImage?.url ? (
                          <Image src={rp.featuredImage.url} alt={rp.featuredImage.alt || rp.title} fill className="object-cover" sizes="300px" />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-br ${rp.coverColor}`}>
                            <div className="w-full h-full bg-black/20" />
                          </div>
                        )}
                        <div className="absolute top-3 left-3 z-10">
                          <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border ${rc.bg} ${rc.text} ${rc.border}`}>
                            {rp.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-slate-800 dark:text-white text-sm leading-snug mb-2 group-hover:text-[#210568] dark:group-hover:text-sky-400 transition-colors line-clamp-2" style={{ fontFamily: "'Georgia', serif" }}>
                          {rp.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-slate-400">{rp.date}</span>
                          <span className="text-[11px] text-slate-400">{rp.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 px-6 bg-white dark:bg-slate-950">
        <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-sky-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 border border-sky-100 dark:border-sky-800/40 rounded-3xl p-10 text-center overflow-hidden shadow-lg shadow-sky-100/50 dark:shadow-black/30">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-200/30 dark:bg-sky-900/20 rounded-full blur-[50px] pointer-events-none" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3" style={{ fontFamily: "'Georgia', serif" }}>Enjoyed this article?</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-md mx-auto">Browse more technical insights or get in touch to discuss your project.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/blogs" className="group inline-flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md shadow-blue-900/15 transition-all duration-200 hover:-translate-y-0.5">
                More Articles
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#210568]/20 dark:border-sky-500/30 text-[#210568] dark:text-sky-400 hover:bg-[#210568]/5 dark:hover:bg-sky-900/30 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200">
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
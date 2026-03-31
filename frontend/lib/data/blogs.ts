// ─── TYPES ───────────────────────────────────────────────────────────────────

export type BlogSection =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'bulletList'; items: string[] }
  | { type: 'numberedList'; items: string[] }
  | { type: 'callout'; title: string; text: string; variant: 'info' | 'warning' | 'tip' }
  | { type: 'codeBlock'; language: string; code: string }
  | { type: 'divider' };

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  authorBio: string;
  date: string;
  readTime: string;
  coverColor: string;
  featured?: boolean;
  featuredImage?: { url: string; alt: string; publicId?: string; };
  tags: string[];
  relatedSlugs?: string[];
  content: BlogSection[];
}

// ─── STATIC FALLBACK DATA ─────────────────────────────────────────────────────

export const FALLBACK_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'hec-ras-flood-modelling-best-practices',
    title: 'HEC-RAS Flood Modelling: Best Practices for Himalayan River Basins',
    excerpt: "Himalayan rivers present unique hydraulic challenges — steep gradients, sediment loads and monsoon surges demand specialised modelling approaches. Here's what we've learnt from two decades in the field.",
    category: 'Hydrology',
    author: 'Er. Vikram Nanda',
    authorRole: 'Senior Hydrologist',
    featuredImage: { url: '/bg.jpg', alt: 'HEC-RAS flood modelling' },
    authorBio: 'Over 20 years of hydrological modelling experience across Himachal Pradesh and Uttarakhand. Specialises in flood risk assessment and dam safety studies.',
    date: '12 Feb 2025',
    readTime: '8 min read',
    coverColor: 'from-sky-400 to-cyan-600',
    featured: true,
    tags: ['HEC-RAS', 'Flood Modelling', 'Himachal Pradesh', 'Hydraulics'],
    relatedSlugs: ['gis-remote-sensing-watershed', 'dpr-preparation-irrigation'],
    content: [
      { type: 'paragraph', text: 'Himalayan river basins are among the most hydraulically complex environments on earth. Steep channel gradients, high sediment concentrations, and extreme monsoon variability combine to create conditions that standard HEC-RAS defaults simply weren\'t designed for.' },
      { type: 'heading', text: 'Why Standard Defaults Fail in Himalayan Conditions' },
      { type: 'paragraph', text: 'Most HEC-RAS tutorials reference low-gradient alluvial rivers — think Mississippi tributaries or the Thames. Manning\'s roughness coefficients, energy slope assumptions and critical flow handling all need recalibration when you\'re working at 1,500–3,000m elevation with channel slopes of 1–5%.' },
      { type: 'callout', title: 'Key Insight', text: 'In our experience, using a blanket Manning\'s n of 0.04 for cobble-bed Himalayan channels can underestimate peak discharge by 15–30%. Field-calibrate against gauge records wherever possible.', variant: 'tip' },
      { type: 'heading', text: 'Our 5-Step Modelling Workflow' },
      { type: 'numberedList', items: ['Acquire SRTM 30m DEM and co-register with 1:25,000 Survey of India topo sheets', 'Delineate watershed using QGIS terrain analysis — verify against field-observed drainage divides', 'Import cross-sections from field survey or extracted from DEM at 100–500m intervals depending on channel sinuosity', 'Run HEC-HMS to generate design flood hydrographs (100-year, 500-year return periods)', 'Route hydrograph through HEC-RAS steady + unsteady flow simulations and map inundation extents in QGIS'] },
      { type: 'divider' },
      { type: 'paragraph', text: 'HEC-RAS in Himalayan terrain rewards careful calibration and healthy scepticism of default settings. When in doubt, go back to the field — there is no substitute for observed flood marks and local knowledge from riverside communities.' },
    ],
  },
  {
    id: '2',
    slug: 'eia-process-himachal-projects',
    title: 'Navigating the EIA Process for Infrastructure Projects in Himachal Pradesh',
    excerpt: 'Environmental clearances can make or break a project timeline. This step-by-step walkthrough covers all stages from Form-1 to public hearings.',
    category: 'Environment',
    author: 'Er. Priya Sharma',
    authorRole: 'Environmental Lead',
    authorBio: 'Environmental consultant specialising in EIA/EMP preparation for linear infrastructure and hydropower projects across the western Himalayas.',
    date: '28 Jan 2025',
    readTime: '6 min read',
    coverColor: 'from-teal-400 to-emerald-600',
    tags: ['EIA', 'Environmental Clearance', 'Himachal Pradesh', 'Regulatory'],
    relatedSlugs: ['hec-ras-flood-modelling-best-practices', 'slope-stability-analysis-hp'],
    content: [
      { type: 'paragraph', text: 'Environmental clearance (EC) is often the longest-lead-time item on an infrastructure project schedule in Himachal Pradesh. Understanding the process — and front-loading the work — can save months of delay.' },
      { type: 'divider' },
      { type: 'paragraph', text: 'The EC process is demanding but navigable. The teams that succeed are those that treat it as an engineering task — systematic, evidence-based, and thoroughly documented — rather than a bureaucratic hurdle.' },
    ],
  },
  {
    id: '3',
    slug: 'gis-remote-sensing-watershed',
    title: 'GIS & Remote Sensing for Watershed Delineation: A Practical Guide',
    excerpt: 'Accurate watershed boundaries are the foundation of any hydrological study. We walk through our QGIS + SRTM DEM workflow step by step.',
    category: 'GIS',
    author: 'Er. Arjun Mehta',
    authorRole: 'GIS Specialist',
    authorBio: 'GIS analyst with expertise in terrain analysis, spatial hydrology and satellite-derived land-use mapping for engineering applications.',
    date: '15 Jan 2025',
    readTime: '10 min read',
    coverColor: 'from-violet-400 to-purple-600',
    tags: ['GIS', 'QGIS', 'Remote Sensing', 'Watershed', 'DEM'],
    relatedSlugs: ['hec-ras-flood-modelling-best-practices'],
    content: [
      { type: 'paragraph', text: 'Watershed delineation is one of the most frequent tasks in our GIS workflows — and one of the most consequential. An error here propagates through every downstream calculation: catchment area, runoff volume, flood peak.' },
      { type: 'divider' },
      { type: 'paragraph', text: 'A correctly delineated watershed takes 2–4 hours in QGIS. Correcting a wrong one mid-project can cost weeks. Front-load the validation effort.' },
    ],
  },
  {
    id: '4',
    slug: 'rainwater-harvesting-residential',
    title: 'Designing Effective Rainwater Harvesting Systems for Residential Buildings',
    excerpt: 'A well-designed RWH system can cut water bills by 40% in regions with 800mm+ annual rainfall. We cover sizing, materials and maintenance.',
    category: 'Sustainability',
    author: 'Er. Sunita Rawat',
    authorRole: 'Civil Engineer',
    authorBio: 'Civil engineer specialising in sustainable water management and green building practices for residential and institutional projects.',
    date: '2 Jan 2025',
    readTime: '5 min read',
    coverColor: 'from-blue-400 to-indigo-600',
    tags: ['Rainwater Harvesting', 'Sustainability', 'Residential', 'Water Management'],
    relatedSlugs: ['aac-blocks-vs-fly-ash-bricks'],
    content: [
      { type: 'paragraph', text: 'Himachal Pradesh receives 800–1,800mm of annual rainfall depending on district. A well-designed rainwater harvesting (RWH) system can realistically offset 30–50% of household non-potable water demand.' },
    ],
  },
  {
    id: '5',
    slug: 'slope-stability-analysis-hp',
    title: 'Slope Stability Challenges in Himachal Pradesh Construction',
    excerpt: 'Over 60% of construction failures in HP are slope-related. This article covers geotechnical surveys, FS calculations and mitigation measures.',
    category: 'Geotechnical',
    author: 'Er. Rahul Thakur',
    authorRole: 'Geotechnical Engineer',
    authorBio: 'Geotechnical engineer with 15 years of experience in slope stabilisation, foundation design and landslide risk assessment in the Himalayan region.',
    date: '18 Dec 2024',
    readTime: '7 min read',
    coverColor: 'from-orange-400 to-red-500',
    tags: ['Geotechnical', 'Slope Stability', 'Himachal Pradesh', 'Landslide'],
    relatedSlugs: ['eia-process-himachal-projects'],
    content: [
      { type: 'paragraph', text: 'The Himalayan terrain of Himachal Pradesh presents some of the most challenging geotechnical conditions in India.' },
    ],
  },
  {
    id: '6',
    slug: 'dpr-preparation-irrigation',
    title: 'Preparing Detailed Project Reports for Irrigation Schemes',
    excerpt: 'A DPR is only as good as the data behind it. We share our internal checklist for irrigation DPRs that clear state-level scrutiny first time.',
    category: 'Project Reports',
    author: 'Er. Vikram Nanda',
    authorRole: 'Senior Hydrologist',
    authorBio: 'Over 20 years of hydrological modelling experience across Himachal Pradesh and Uttarakhand.',
    date: '5 Dec 2024',
    readTime: '9 min read',
    coverColor: 'from-amber-400 to-yellow-600',
    tags: ['DPR', 'Irrigation', 'Project Reports', 'HP Government'],
    relatedSlugs: ['hec-ras-flood-modelling-best-practices', 'eia-process-himachal-projects'],
    content: [
      { type: 'paragraph', text: 'A Detailed Project Report (DPR) for an irrigation scheme in Himachal Pradesh is a high-stakes document.' },
    ],
  },
  {
    id: '7',
    slug: 'aac-blocks-vs-fly-ash-bricks',
    title: 'AAC Blocks vs Fly Ash Bricks: Which Is Right for Your Construction?',
    excerpt: 'Both materials are eco-friendly, but the right choice depends on your site, budget and structural requirements.',
    category: 'Construction',
    author: 'Er. Sunita Rawat',
    authorRole: 'Civil Engineer',
    authorBio: 'Civil engineer specialising in sustainable water management and green building practices.',
    date: '22 Nov 2024',
    readTime: '4 min read',
    coverColor: 'from-slate-400 to-slate-600',
    tags: ['AAC Blocks', 'Construction Materials', 'Fly Ash Bricks', 'Sustainability'],
    relatedSlugs: ['construction-cost-estimation-hp', 'rainwater-harvesting-residential'],
    content: [
      { type: 'paragraph', text: 'Both Autoclaved Aerated Concrete (AAC) blocks and fly ash bricks are significantly greener than traditional red clay bricks.' },
    ],
  },
  {
    id: '8',
    slug: 'construction-cost-estimation-hp',
    title: 'Construction Cost Estimation in Himachal Pradesh: Key Variables',
    excerpt: 'Transport costs, seasonal labour rates and material availability can swing estimates by 20–30% in hilly terrain.',
    category: 'Construction',
    author: 'Er. Arjun Mehta',
    authorRole: 'GIS Specialist',
    authorBio: 'GIS analyst with expertise in terrain analysis, spatial hydrology and satellite-derived land-use mapping.',
    date: '10 Nov 2024',
    readTime: '6 min read',
    coverColor: 'from-rose-400 to-pink-600',
    tags: ['Cost Estimation', 'Construction', 'Himachal Pradesh', 'Budget'],
    relatedSlugs: ['aac-blocks-vs-fly-ash-bricks'],
    content: [
      { type: 'paragraph', text: 'Cost estimation for construction projects in Himachal Pradesh carries a layer of complexity that flat-terrain estimators consistently underestimate.' },
    ],
  },
];

// ─── NORMALIZE ────────────────────────────────────────────────────────────────
// Converts a raw MongoDB blog document into the BlogPost shape the frontend expects

function normalizeBlog(b: any): BlogPost {
  // Auto-calculate read time from content if not stored
  const readTime = b.readTime || estimateReadTime(b.content);

  // Format date from ISO string if `date` field is empty/missing
  const date =
    b.date ||
    (b.publishedAt
      ? new Date(b.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
      : new Date(b.createdAt ?? Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }));

  // content may be an array of BlogSection blocks or a legacy HTML string
  let content: BlogSection[] = [];
  if (Array.isArray(b.content) && b.content.length > 0) {
    content = b.content as BlogSection[];
  } else if (typeof b.content === 'string' && b.content) {
    content = [{ type: 'paragraph', text: b.content }];
  }

  return {
    id:           b._id?.toString() ?? b.id ?? '',
    slug:         b.slug,
    title:        b.title,
    excerpt:      b.excerpt,
    category:     b.category ?? '',
    author:       b.author ?? 'Admin',
    authorRole:   b.authorRole ?? '',
    authorBio:    b.authorBio ?? '',
    date,
    readTime,
    coverColor:   b.coverColor || 'from-sky-400 to-cyan-600',
    featured:     b.featured ?? false,
    featuredImage: b.featuredImage
      ? { url: b.featuredImage.url, alt: b.featuredImage.alt || b.title, publicId: b.featuredImage.publicId || undefined }
      : undefined,
    tags:         b.tags ?? [],
    relatedSlugs: b.relatedSlugs ?? [],
    content,
  };
}

function estimateReadTime(content: any): string {
  if (!Array.isArray(content)) return '5 min read';
  const words = content
    .map((block: any) => {
      if (block.text) return block.text;
      if (block.items) return (block.items as string[]).join(' ');
      if (block.code) return block.code;
      return '';
    })
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

// ─── DATA HELPERS ─────────────────────────────────────────────────────────────

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? '';

// export async function getPosts(): Promise<BlogPost[]> {
//   if (!API_BASE) return FALLBACK_POSTS;

//   try {
//     const res = await fetch(`${API_BASE}/api/blogs?published=true&limit=50`, {
//       next: { revalidate: 60 },
//     });
//     if (!res.ok) return FALLBACK_POSTS;

//     const data = await res.json();
//     const dbPosts: BlogPost[] = (data.blogs ?? []).map(normalizeBlog);

//     // Merge: DB posts first, then any fallback slugs not yet in DB
//     const dbSlugs = new Set(dbPosts.map((p) => p.slug));
//     const staticOnly = FALLBACK_POSTS.filter((p) => !dbSlugs.has(p.slug));

//     return [...dbPosts, ...staticOnly];
//   } catch {
//     return FALLBACK_POSTS;
//   }
// }
export async function getPosts(): Promise<BlogPost[]> {
  if (!API_BASE) return FALLBACK_POSTS;

  try {
    const res = await fetch(`${API_BASE}/api/blogs?published=true&limit=50`, {
      next: { revalidate: 60 },
      cache: 'no-store', // ← add this during dev to bypass Next.js cache
    });
    if (!res.ok) return FALLBACK_POSTS;

    const data = await res.json();
    const dbPosts: BlogPost[] = (data.blogs ?? []).map(normalizeBlog);

    const dbSlugs = new Set(dbPosts.map((p) => p.slug));
    const staticOnly = FALLBACK_POSTS.filter((p) => !dbSlugs.has(p.slug));

    return [...dbPosts];
  } catch {
    return FALLBACK_POSTS;
  }
}

export async function getPost(slug: string): Promise<BlogPost | null>{
  // Always have a fallback ready
  const fallback = FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;

  if (!API_BASE) return fallback;

  try {
    const res = await fetch(`${API_BASE}/api/blogs?slug=${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return fallback;

    const data = await res.json();
    if (!data.blog) return fallback;

    return normalizeBlog(data.blog);
  } catch {
    return fallback;
  }
}

export async function getRelatedPosts(slugs: string[]): Promise<BlogPost[]> {
  if (!slugs.length) return [];

  if (!API_BASE) {
    return FALLBACK_POSTS.filter((p) => slugs.includes(p.slug)).slice(0, 3);
  }

  try {
    const results = await Promise.all(slugs.slice(0, 3).map((s) => getPost(s)));
    return results.filter(Boolean) as BlogPost[];
  } catch {
    return FALLBACK_POSTS.filter((p) => slugs.includes(p.slug)).slice(0, 3);
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const staticSlugs = FALLBACK_POSTS.map((p) => p.slug);
  if (!API_BASE) return staticSlugs;

  try {
    const res = await fetch(`${API_BASE}/api/blogs?published=true&limit=200`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return staticSlugs;
    const data = await res.json();
    const dbSlugs: string[] = (data.blogs ?? []).map((b: any) => b.slug);
    return [...new Set([...dbSlugs])];
  } catch {
    return staticSlugs;
  }
}
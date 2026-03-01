// ─── TYPES ───────────────────────────────────────────────────────────────────

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bulletList"; items: string[] }
  | { type: "numberedList"; items: string[] }
  | { type: "callout"; title: string; text: string; variant: "info" | "warning" | "tip" }
  | { type: "codeBlock"; language: string; code: string }
  | { type: "divider" };

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
  tags: string[];
  relatedSlugs?: string[];
  content: BlogSection[];
}

// ─── FALLBACK DATA ────────────────────────────────────────────────────────────
// Used ONLY when the backend API is unavailable or returns an error.
// In production, getPosts() and getPost() below will use your API first.

export const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "hec-ras-flood-modelling-best-practices",
    title: "HEC-RAS Flood Modelling: Best Practices for Himalayan River Basins",
    excerpt:
      "Himalayan rivers present unique hydraulic challenges — steep gradients, sediment loads and monsoon surges demand specialised modelling approaches. Here's what we've learnt from two decades in the field.",
    category: "Hydrology",
    author: "Er. Vikram Nanda",
    authorRole: "Senior Hydrologist",
    authorBio:
      "Over 20 years of hydrological modelling experience across Himachal Pradesh and Uttarakhand. Specialises in flood risk assessment and dam safety studies.",
    date: "12 Feb 2025",
    readTime: "8 min read",
    coverColor: "from-sky-400 to-cyan-600",
    featured: true,
    tags: ["HEC-RAS", "Flood Modelling", "Himachal Pradesh", "Hydraulics"],
    relatedSlugs: ["gis-remote-sensing-watershed", "dpr-preparation-irrigation"],
    content: [
      {
        type: "paragraph",
        text: "Himalayan river basins are among the most hydraulically complex environments on earth. Steep channel gradients, high sediment concentrations, and extreme monsoon variability combine to create conditions that standard HEC-RAS defaults simply weren't designed for.",
      },
      {
        type: "heading",
        text: "Why Standard Defaults Fail in Himalayan Conditions",
      },
      {
        type: "paragraph",
        text: "Most HEC-RAS tutorials reference low-gradient alluvial rivers — think Mississippi tributaries or the Thames. Manning's roughness coefficients, energy slope assumptions and critical flow handling all need recalibration when you're working at 1,500–3,000m elevation with channel slopes of 1–5%.",
      },
      {
        type: "callout",
        title: "Key Insight",
        text: "In our experience, using a blanket Manning's n of 0.04 for cobble-bed Himalayan channels can underestimate peak discharge by 15–30%. Field-calibrate against gauge records wherever possible.",
        variant: "tip",
      },
      {
        type: "heading",
        text: "Our 5-Step Modelling Workflow",
      },
      {
        type: "numberedList",
        items: [
          "Acquire SRTM 30m DEM and co-register with 1:25,000 Survey of India topo sheets",
          "Delineate watershed using QGIS terrain analysis — verify against field-observed drainage divides",
          "Import cross-sections from field survey or extracted from DEM at 100–500m intervals depending on channel sinuosity",
          "Run HEC-HMS to generate design flood hydrographs (100-year, 500-year return periods)",
          "Route hydrograph through HEC-RAS steady + unsteady flow simulations and map inundation extents in QGIS",
        ],
      },
      {
        type: "subheading",
        text: "Step 1 & 2: Terrain and Watershed Setup",
      },
      {
        type: "paragraph",
        text: "The quality of your DEM is the single biggest determinant of model accuracy. For catchments under 200 km², we supplement SRTM data with drone-acquired DSMs in critical reaches near infrastructure. LiDAR is ideal but rarely available in Himalayan projects.",
      },
      {
        type: "subheading",
        text: "Step 3: Cross-Section Density",
      },
      {
        type: "paragraph",
        text: "Himalayan channels change character rapidly — a boulder-choke gorge 200m upstream can be a braided gravel reach downstream. Cross-section spacing should reflect this. We use field survey for the 5 km immediately upstream and downstream of any structure of interest, and DEM-extracted sections beyond that.",
      },
      {
        type: "callout",
        title: "Warning",
        text: "DEM-extracted cross-sections underrepresent channel bathymetry in deep, narrow gorges. Always supplement with field survey for bridge and barrage reach assessments.",
        variant: "warning",
      },
      {
        type: "heading",
        text: "Manning's Roughness: Field-Calibrated Values",
      },
      {
        type: "paragraph",
        text: "Below are roughness values we have calibrated against observed flood marks in HP river basins over the past decade. These are starting points — always validate against local gauge data.",
      },
      {
        type: "bulletList",
        items: [
          "Boulder-bed gorge reach: n = 0.055 – 0.070",
          "Cobble-gravel straight reach: n = 0.038 – 0.050",
          "Sand-gravel braided reach: n = 0.028 – 0.038",
          "Riparian floodplain (dense willow): n = 0.060 – 0.080",
          "Agricultural floodplain: n = 0.030 – 0.040",
        ],
      },
      {
        type: "heading",
        text: "Handling Mixed Flow Regimes",
      },
      {
        type: "paragraph",
        text: "Himalayan rivers routinely transition between subcritical and supercritical flow within a single reach — a condition HEC-RAS handles with mixed flow regime simulations. Enable this in the simulation options and set appropriate critical depth starting conditions at both the upstream and downstream boundaries.",
      },
      {
        type: "callout",
        title: "Pro Tip",
        text: "When mixed flow iterations fail to converge, check for cross-sections with abrupt width contractions. A single pathological section can cause cascade failures through the entire model. Use the profile plot to identify Froude number spikes.",
        variant: "info",
      },
      {
        type: "heading",
        text: "Reporting and Map Outputs",
      },
      {
        type: "paragraph",
        text: "State-level project reports in HP typically require 100-year and 500-year flood inundation maps at 1:10,000 scale. Export water surface elevation grids from RAS Mapper and process in QGIS: subtract from a filled DEM, clip to watershed boundary and apply a blue colour ramp with classified depth intervals (0–0.5m, 0.5–1m, 1–2m, >2m).",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "HEC-RAS in Himalayan terrain rewards careful calibration and healthy scepticism of default settings. When in doubt, go back to the field — there is no substitute for observed flood marks and local knowledge from riverside communities.",
      },
    ],
  },
  {
    id: "2",
    slug: "eia-process-himachal-projects",
    title: "Navigating the EIA Process for Infrastructure Projects in Himachal Pradesh",
    excerpt:
      "Environmental clearances can make or break a project timeline. This step-by-step walkthrough covers all stages from Form-1 to public hearings.",
    category: "Environment",
    author: "Er. Priya Sharma",
    authorRole: "Environmental Lead",
    authorBio:
      "Environmental consultant specialising in EIA/EMP preparation for linear infrastructure and hydropower projects across the western Himalayas.",
    date: "28 Jan 2025",
    readTime: "6 min read",
    coverColor: "from-teal-400 to-emerald-600",
    tags: ["EIA", "Environmental Clearance", "Himachal Pradesh", "Regulatory"],
    relatedSlugs: ["hec-ras-flood-modelling-best-practices", "slope-stability-analysis-hp"],
    content: [
      {
        type: "paragraph",
        text: "Environmental clearance (EC) is often the longest-lead-time item on an infrastructure project schedule in Himachal Pradesh. Understanding the process — and front-loading the work — can save months of delay.",
      },
      {
        type: "heading",
        text: "The EIA Notification 2006 Framework",
      },
      {
        type: "paragraph",
        text: "All projects covered under the EIA Notification 2006 (as amended) must obtain prior EC from either the Ministry of Environment, Forest and Climate Change (MoEFCC) or the State-level Environmental Impact Assessment Authority (SEIAA), depending on project category and capacity.",
      },
      {
        type: "bulletList",
        items: [
          "Category A: Appraised at Central level by Expert Appraisal Committee (EAC)",
          "Category B1: Requires full EIA — appraised at State level by SEAC",
          "Category B2: Screened at State level, general conditions apply, no EIA required",
        ],
      },
      {
        type: "heading",
        text: "Stage 1: Screening & Scoping",
      },
      {
        type: "paragraph",
        text: "Submit Form-1 (and Form-1A for construction/townships) to the competent authority. For Category B projects, SEAC will determine whether a full EIA is required (B1) or not (B2). For Category A projects, Terms of Reference (ToR) are issued by EAC after a scoping meeting — typically within 30 days of application.",
      },
      {
        type: "callout",
        title: "Important",
        text: "Include a detailed baseline data collection plan with your ToR application. Projects that demonstrate robust monitoring proposals typically receive ToRs within one meeting cycle rather than two.",
        variant: "tip",
      },
      {
        type: "heading",
        text: "Stage 2: Baseline Data Collection",
      },
      {
        type: "paragraph",
        text: "Baseline studies must cover three seasons (excluding monsoon) over a minimum 12-month period for Category A projects. For linear infrastructure in HP, critical baselines include air quality, surface and groundwater, biodiversity (flora/fauna surveys), socioeconomic profile, and seismicity.",
      },
      {
        type: "heading",
        text: "Stage 3: EIA Report Preparation",
      },
      {
        type: "paragraph",
        text: "The EIA report must follow the MoEFCC generic structure. Common reasons for rejection include inadequate impact prediction (qualitative descriptions instead of modelled predictions), missing alternatives analysis, and an EMP without measurable targets or a monitoring budget.",
      },
      {
        type: "callout",
        title: "Pro Tip",
        text: "Engage with the local Gram Sabha and project-affected persons early — before the mandatory public hearing. A well-prepared community engagement record substantially reduces objections raised during the formal hearing.",
        variant: "info",
      },
      {
        type: "heading",
        text: "Stage 4: Public Hearing",
      },
      {
        type: "paragraph",
        text: "Public hearings in HP are conducted by the HP State Pollution Control Board (HPSPCB) at the project site or nearest administrative centre. Notice must be published 30 days in advance in national and local newspapers. Prepare a non-technical summary in Hindi for distribution.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "The EC process is demanding but navigable. The teams that succeed are those that treat it as an engineering task — systematic, evidence-based, and thoroughly documented — rather than a bureaucratic hurdle.",
      },
    ],
  },
  {
    id: "3",
    slug: "gis-remote-sensing-watershed",
    title: "GIS & Remote Sensing for Watershed Delineation: A Practical Guide",
    excerpt:
      "Accurate watershed boundaries are the foundation of any hydrological study. We walk through our QGIS + SRTM DEM workflow step by step.",
    category: "GIS",
    author: "Er. Arjun Mehta",
    authorRole: "GIS Specialist",
    authorBio:
      "GIS analyst with expertise in terrain analysis, spatial hydrology and satellite-derived land-use mapping for engineering applications.",
    date: "15 Jan 2025",
    readTime: "10 min read",
    coverColor: "from-violet-400 to-purple-600",
    tags: ["GIS", "QGIS", "Remote Sensing", "Watershed", "DEM"],
    relatedSlugs: ["hec-ras-flood-modelling-best-practices"],
    content: [
      {
        type: "paragraph",
        text: "Watershed delineation is one of the most frequent tasks in our GIS workflows — and one of the most consequential. An error here propagates through every downstream calculation: catchment area, runoff volume, flood peak.",
      },
      {
        type: "heading",
        text: "Choosing the Right DEM",
      },
      {
        type: "bulletList",
        items: [
          "SRTM 1-arc-second (30m) — freely available from USGS EarthExplorer, best general-purpose choice",
          "ALOS PALSAR 12.5m — better in dense vegetation; radar-derived so penetrates canopy",
          "Cartosat-1 25m — available from NRSC Bhuvan, good for Indian subcontinent",
          "Drone DSM — for small (<10 km²) high-precision catchments near structures",
        ],
      },
      {
        type: "heading",
        text: "Step-by-Step QGIS Workflow",
      },
      {
        type: "numberedList",
        items: [
          "Load DEM and reproject to UTM Zone 43N (EPSG:32643) for HP projects",
          "Fill sinks using SAGA > Terrain Analysis > Fill Sinks (Wang & Liu)",
          "Compute flow direction raster (D8 algorithm)",
          "Compute flow accumulation raster",
          "Define pour point at the structure or gauge location of interest",
          "Extract watershed using SAGA > Upslope Area from single point",
          "Vectorise, smooth and validate against Survey of India topo sheets",
        ],
      },
      {
        type: "callout",
        title: "Common Mistake",
        text: "Skipping sink-filling before flow direction calculation is the most common error we see in peer review. Unfilled sinks create artificial closed basins that fragment watershed delineation unpredictably.",
        variant: "warning",
      },
      {
        type: "heading",
        text: "Validating Your Output",
      },
      {
        type: "paragraph",
        text: "Never submit a delineated watershed without field validation. Check that the boundary follows visible ridgelines in satellite imagery, compare the computed area against any published gauge catchment data, and walk disputed sections in the field if access permits.",
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "A correctly delineated watershed takes 2–4 hours in QGIS. Correcting a wrong one mid-project can cost weeks. Front-load the validation effort.",
      },
    ],
  },
  {
    id: "4",
    slug: "rainwater-harvesting-residential",
    title: "Designing Effective Rainwater Harvesting Systems for Residential Buildings",
    excerpt:
      "A well-designed RWH system can cut water bills by 40% in regions with 800mm+ annual rainfall. We cover sizing, materials and maintenance.",
    category: "Sustainability",
    author: "Er. Sunita Rawat",
    authorRole: "Civil Engineer",
    authorBio:
      "Civil engineer specialising in sustainable water management and green building practices for residential and institutional projects.",
    date: "2 Jan 2025",
    readTime: "5 min read",
    coverColor: "from-blue-400 to-indigo-600",
    tags: ["Rainwater Harvesting", "Sustainability", "Residential", "Water Management"],
    relatedSlugs: ["aac-blocks-vs-fly-ash-bricks"],
    content: [
      {
        type: "paragraph",
        text: "Himachal Pradesh receives 800–1,800mm of annual rainfall depending on district. A well-designed rainwater harvesting (RWH) system can realistically offset 30–50% of household non-potable water demand.",
      },
      {
        type: "heading",
        text: "Sizing the Storage Tank",
      },
      {
        type: "paragraph",
        text: "Tank capacity should bridge the longest dry spell between significant rainfall events, not store an entire season's rainfall. For most HP locations, a 15–30 day demand buffer is appropriate.",
      },
      {
        type: "callout",
        title: "Formula",
        text: "Tank Volume (L) = Daily non-potable demand (L/day) × Dry spell days. For a family of 5 with 60L/day non-potable use and 20-day buffer: 5 × 60 × 20 = 6,000L minimum storage.",
        variant: "info",
      },
      {
        type: "heading",
        text: "Catchment Area & First-Flush",
      },
      {
        type: "paragraph",
        text: "Calculate effective rooftop catchment area after deducting overhangs. Always install a first-flush diverter to discard the first 2mm of rainfall, which carries the highest contaminant load from the roof surface.",
      },
      {
        type: "bulletList",
        items: [
          "GI sheet roofs — runoff coefficient 0.90, minimal contamination",
          "RCC roofs — runoff coefficient 0.85, moderate moss/algae risk",
          "Clay tile roofs — runoff coefficient 0.75, watch for moss growth",
          "Asbestos (old construction) — avoid harvesting, health risk",
        ],
      },
      {
        type: "heading",
        text: "Maintenance Schedule",
      },
      {
        type: "numberedList",
        items: [
          "Pre-monsoon: clean gutters, flush downpipes, inspect tank lid seals",
          "Post-monsoon: drain first-flush device, check filter media, clean tank interior",
          "Annual: professional inspection of inlet, overflow and outlet fittings",
        ],
      },
    ],
  },
  {
    id: "5",
    slug: "slope-stability-analysis-hp",
    title: "Slope Stability Challenges in Himachal Pradesh Construction",
    excerpt:
      "Over 60% of construction failures in HP are slope-related. This article covers geotechnical surveys, FS calculations and mitigation measures.",
    category: "Geotechnical",
    author: "Er. Rahul Thakur",
    authorRole: "Geotechnical Engineer",
    authorBio:
      "Geotechnical engineer with 15 years of experience in slope stabilisation, foundation design and landslide risk assessment in the Himalayan region.",
    date: "18 Dec 2024",
    readTime: "7 min read",
    coverColor: "from-orange-400 to-red-500",
    tags: ["Geotechnical", "Slope Stability", "Himachal Pradesh", "Landslide"],
    relatedSlugs: ["eia-process-himachal-projects"],
    content: [
      {
        type: "paragraph",
        text: "The Himalayan terrain of Himachal Pradesh presents some of the most challenging geotechnical conditions in India. Young, tectonically active geology combined with intense monsoon rainfall and seismic activity creates a hazard environment where slope failures are not exceptional events — they are expected.",
      },
      {
        type: "heading",
        text: "Common Failure Modes",
      },
      {
        type: "bulletList",
        items: [
          "Planar failure — along foliation/bedding planes dipping toward the slope",
          "Wedge failure — at intersection of two discontinuity sets",
          "Toppling failure — in steeply-dipping columnar rock masses",
          "Circular failure — in weak, weathered or colluvial material",
          "Debris flow — rapid mobilisation of saturated colluvium on slopes >25°",
        ],
      },
      {
        type: "heading",
        text: "Minimum Factor of Safety Requirements",
      },
      {
        type: "paragraph",
        text: "HP PWD and BRO guidelines require minimum FS of 1.5 for static conditions and 1.1 under seismic loading (Zone IV/V). For structures of consequence (hospitals, bridges), we recommend 1.7 static / 1.2 seismic as internal design targets.",
      },
      {
        type: "callout",
        title: "Critical Note",
        text: "Pore water pressure is the dominant destabilising factor in HP slopes. A slope with FS = 1.8 under dry conditions may drop to FS = 1.1 at peak monsoon saturation. Always run both dry and saturated analyses.",
        variant: "warning",
      },
      {
        type: "heading",
        text: "Mitigation Measures",
      },
      {
        type: "numberedList",
        items: [
          "Surface drainage — intercept and divert water before it enters the slope",
          "Sub-surface drainage — horizontal drain holes to reduce pore pressure",
          "Rock bolting / soil nailing — passive reinforcement for cut slopes",
          "Retaining walls / breast walls — toe support for shallow colluvial failures",
          "Bio-engineering — vetiver grass and native shrubs for shallow surficial erosion",
        ],
      },
    ],
  },
  {
    id: "6",
    slug: "dpr-preparation-irrigation",
    title: "Preparing Detailed Project Reports for Irrigation Schemes",
    excerpt:
      "A DPR is only as good as the data behind it. We share our internal checklist for irrigation DPRs that clear state-level scrutiny first time.",
    category: "Project Reports",
    author: "Er. Vikram Nanda",
    authorRole: "Senior Hydrologist",
    authorBio:
      "Over 20 years of hydrological modelling experience across Himachal Pradesh and Uttarakhand. Specialises in flood risk assessment and dam safety studies.",
    date: "5 Dec 2024",
    readTime: "9 min read",
    coverColor: "from-amber-400 to-yellow-600",
    tags: ["DPR", "Irrigation", "Project Reports", "HP Government"],
    relatedSlugs: ["hec-ras-flood-modelling-best-practices", "eia-process-himachal-projects"],
    content: [
      {
        type: "paragraph",
        text: "A Detailed Project Report (DPR) for an irrigation scheme in Himachal Pradesh is a high-stakes document — it forms the basis for government sanction, budget allocation and eventual tendering. Projects that sail through technical scrutiny on first submission share a common trait: exhaustive baseline data backed by field evidence.",
      },
      {
        type: "heading",
        text: "Standard DPR Structure",
      },
      {
        type: "numberedList",
        items: [
          "Executive Summary",
          "Project Background and Objectives",
          "Catchment and Hydrology (design discharge calculations)",
          "Water Demand Assessment — Culturable Command Area, crop water requirements",
          "Infrastructure Design — headworks, canal network, structures",
          "Environmental and Social Impact Summary",
          "Cost Estimates and Economic Analysis (BCR calculation)",
          "Implementation Schedule (Gantt chart)",
          "Operation & Maintenance Plan",
        ],
      },
      {
        type: "callout",
        title: "Scrutiny Tip",
        text: "Chapter 3 (Hydrology) and Chapter 7 (Cost Estimates) receive the most scrutiny from the HP Irrigation & Public Health Department review committee. Ensure your design discharge calculation includes the full HEC-HMS model run as an appendix, and that your cost estimates reference current HP Schedule of Rates.",
        variant: "info",
      },
      {
        type: "heading",
        text: "Common Rejection Reasons",
      },
      {
        type: "bulletList",
        items: [
          "Design discharge based on empirical formulas without hydrological modelling",
          "Culturable Command Area overstated — field delineation not provided",
          "Cost estimates not referenced to current SOR — outdated rates used",
          "Missing land acquisition details for canal alignment",
          "EMP not attached or lacking quantitative targets",
        ],
      },
    ],
  },
  {
    id: "7",
    slug: "aac-blocks-vs-fly-ash-bricks",
    title: "AAC Blocks vs Fly Ash Bricks: Which Is Right for Your Construction?",
    excerpt:
      "Both materials are eco-friendly, but the right choice depends on your site, budget and structural requirements. Here's our engineering take.",
    category: "Construction",
    author: "Er. Sunita Rawat",
    authorRole: "Civil Engineer",
    authorBio:
      "Civil engineer specialising in sustainable water management and green building practices for residential and institutional projects.",
    date: "22 Nov 2024",
    readTime: "4 min read",
    coverColor: "from-slate-400 to-slate-600",
    tags: ["AAC Blocks", "Construction Materials", "Fly Ash Bricks", "Sustainability"],
    relatedSlugs: ["construction-cost-estimation-hp", "rainwater-harvesting-residential"],
    content: [
      {
        type: "paragraph",
        text: "Both Autoclaved Aerated Concrete (AAC) blocks and fly ash bricks are significantly greener than traditional red clay bricks — and both have a role in modern construction. But treating them as interchangeable is a mistake that can affect structural performance, thermal comfort and your bottom line.",
      },
      {
        type: "heading",
        text: "Side-by-Side Comparison",
      },
      {
        type: "bulletList",
        items: [
          "Density: AAC ~600 kg/m³ vs Fly Ash ~1,800 kg/m³ — AAC is 65% lighter, reducing dead load",
          "Thermal insulation: AAC R-value ~0.8/100mm vs fly ash ~0.15 — AAC wins significantly",
          "Compressive strength: AAC 3–5 N/mm² vs fly ash 7.5–10 N/mm² — fly ash is stronger",
          "Water absorption: AAC absorbs more — requires quality plastering on external faces",
          "Cost: AAC typically 20–30% more expensive per sq.ft wall area",
          "Availability in HP: Fly ash bricks more locally available; AAC requires transport from plains",
        ],
      },
      {
        type: "heading",
        text: "When to Use AAC Blocks",
      },
      {
        type: "bulletList",
        items: [
          "Multi-storey buildings where dead load reduction matters for structural economy",
          "Thermally demanding locations — Shimla, Manali, Kinnaur — where insulation reduces HVAC load",
          "Projects where speed of construction is critical (large block size = faster laying)",
        ],
      },
      {
        type: "heading",
        text: "When to Use Fly Ash Bricks",
      },
      {
        type: "bulletList",
        items: [
          "Ground floor or basement walls where higher compressive strength is beneficial",
          "Budget-constrained projects in lower-altitude locations",
          "Sites with poor road access where AAC transport cost becomes prohibitive",
        ],
      },
      {
        type: "callout",
        title: "Our Recommendation",
        text: "For Gold and Platinum package construction in HP above 1,200m elevation, we specify AAC blocks as standard. The thermal performance payback over a 10-year heating/cooling period typically exceeds the cost premium.",
        variant: "tip",
      },
    ],
  },
  {
    id: "8",
    slug: "construction-cost-estimation-hp",
    title: "Construction Cost Estimation in Himachal Pradesh: Key Variables",
    excerpt:
      "Transport costs, seasonal labour rates and material availability can swing estimates by 20–30% in hilly terrain. Here's what to account for.",
    category: "Construction",
    author: "Er. Arjun Mehta",
    authorRole: "GIS Specialist",
    authorBio:
      "GIS analyst with expertise in terrain analysis, spatial hydrology and satellite-derived land-use mapping for engineering applications.",
    date: "10 Nov 2024",
    readTime: "6 min read",
    coverColor: "from-rose-400 to-pink-600",
    tags: ["Cost Estimation", "Construction", "Himachal Pradesh", "Budget"],
    relatedSlugs: ["aac-blocks-vs-fly-ash-bricks"],
    content: [
      {
        type: "paragraph",
        text: "Cost estimation for construction projects in Himachal Pradesh carries a layer of complexity that flat-terrain estimators consistently underestimate. Altitude, road accessibility, seasonal labour migration and fragmented material supply chains all introduce variability that can swing a budget by 20–30%.",
      },
      {
        type: "heading",
        text: "The Altitude Premium",
      },
      {
        type: "paragraph",
        text: "Material transport to sites above 1,800m typically adds ₹15–40/kg to delivered cost depending on road condition, distance from railhead and season. For high-density materials like steel (Fe500 rebar), this can add ₹2,500–8,000/MT over valley-floor pricing.",
      },
      {
        type: "heading",
        text: "Seasonal Labour Rates",
      },
      {
        type: "paragraph",
        text: "Construction labour in HP is highly seasonal. Skilled mason and carpenter rates peak during April–June (pre-monsoon push) and September–November (post-monsoon catch-up). Rates can vary by 25–35% between peak and off-peak periods. Factor this into your construction programme.",
      },
      {
        type: "callout",
        title: "Budgeting Rule of Thumb",
        text: "For projects above 1,500m in HP, add a 15% 'hill factor' to your base estimate as a starting contingency, then refine with site-specific transport and labour surveys. Never use Delhi NCR or Punjab rates as the base without adjustment.",
        variant: "info",
      },
      {
        type: "heading",
        text: "Key Line Items Often Missed",
      },
      {
        type: "bulletList",
        items: [
          "Temporary road construction / improvement to site — often ₹3–8L for remote plots",
          "Generator and fuel costs — power cuts common in remote HP locations",
          "Winter shutdown costs — heating, covers, anti-freeze admixtures if working through winter",
          "Increased wastage factor for materials — 8–12% vs 5% on flat terrain",
          "Regulatory approvals — TCP/Town Planning, Forest NOC, PCB NOC where applicable",
        ],
      },
      { type: "divider" },
      {
        type: "paragraph",
        text: "A well-prepared cost estimate in HP is worth every hour invested. The projects that run over budget most often are those that used a standard estimating template without a single site visit before tendering.",
      },
    ],
  },
];

// ─── DATA ACCESS HELPERS ──────────────────────────────────────────────────────
// These are used by both /blog (index) and /blog/[slug] (detail page).
// They try your API first; fall back to FALLBACK_POSTS silently on any error.

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";

/**
 * Fetch all blog posts.
 * Falls back to FALLBACK_POSTS if the API is unavailable or returns an error.
 */
export async function getPosts(): Promise<BlogPost[]> {
  if (!API_BASE) return FALLBACK_POSTS;
  try {
    const res = await fetch(`${API_BASE}/api/blog/posts`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: BlogPost[] = await res.json();
    return data.length > 0 ? data : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}

/**
 * Fetch a single post by slug.
 * Falls back to FALLBACK_POSTS lookup if the API is unavailable or returns 404.
 * Returns null if not found in either source (triggers notFound() in the page).
 */
export async function getPost(slug: string): Promise<BlogPost | null> {
  if (!API_BASE) {
    return FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;
  }
  try {
    const res = await fetch(`${API_BASE}/api/blog/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  } catch {
    return FALLBACK_POSTS.find((p) => p.slug === slug) ?? null;
  }
}

/**
 * Fetch related posts by slug array.
 * Always resolves from FALLBACK_POSTS (related posts are decorative,
 * not worth a separate API round-trip unless you want to).
 */
export async function getRelatedPosts(slugs: string[]): Promise<BlogPost[]> {
  // Optionally replace with an API call if your backend supports batch fetch
  return FALLBACK_POSTS.filter((p) => slugs.includes(p.slug)).slice(0, 3);
}

/**
 * All slugs — used for generateStaticParams in the [slug] page.
 */
export function getAllSlugs(): string[] {
  return FALLBACK_POSTS.map((p) => p.slug);
}
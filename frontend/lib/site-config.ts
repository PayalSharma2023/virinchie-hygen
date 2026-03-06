// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit this file to update stats, branding, social links and map
// Used by: Footer, Hero, About page, Contact page
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  // ── Company ────────────────────────────────────────────────────────────────
  name: "Virinchie Hygen",
  fullName: "Virinchie Hygen Engineering Consultants Pvt. Ltd.",
  tagline: "Engineering Excellence Since 2018",
  foundedYear: 2018, // ← used to auto-compute "X+ Years of Experience" every Jan 1 ✓

  // ── Stats (shown on home hero, about page, footer) ─────────────────────────
  stats: {
    projectsCompleted: 120,
    clientsSatisfied: 85,
    statesActive: 6,
    teamSize: 25,
    districtsServed: 12,
  },

  // ── Contact ────────────────────────────────────────────────────────────────
  phone: "+91 7018167926",
  email: "info@virinchiehygen.com",
  address: "Shimla, Himachal Pradesh, India",

  // ── Google Maps — Shimla office (fix iii & xii) ───────────────────────────
  // To get precise link: search your address on maps.google.com → Share → Copy link
  mapsUrl:
    "https://www.google.com/maps/search/Shimla,+Himachal+Pradesh,+India/@31.1048,77.1734,14z",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27672.2!2d77.1734!3d31.1048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e1db5b9b7a07%3A0x3a90e5a7a8ded1a0!2sShimla%2C+Himachal+Pradesh!5e0!3m2!1sen!2sin!4v1",

  // ── Social media (fix iv) — replace with real URLs ─────────────────────────
  social: {
    facebook: "https://facebook.com/virinchiehygen",   // ← replace
    instagram: "https://instagram.com/virinchiehygen", // ← replace
    linkedin: "https://linkedin.com/company/virinchiehygen", // ← replace
    youtube: "https://youtube.com/@virinchiehygen",    // ← replace
  },
};

// ── Derived helpers ───────────────────────────────────────────────────────────

/** Returns "7+" in 2025, "8+" in 2026, etc. — fully automatic (fix xix ✓) */
export function getYearsOfExperience(): number {
  return new Date().getFullYear() - SITE_CONFIG.foundedYear;
}

/** Returns current copyright year string */
export function getCopyrightYear(): number {
  return new Date().getFullYear();
}
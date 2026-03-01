export const COMPANY_INFO = {
  name: "Virinchie Hygen Engineering Consultants Pvt. Ltd.",
  fullName: "Virinchie Hygen Engineering Consultants Pvt. Ltd.",
  tagline:
    "Partner with Virinchie Hygen Engineering Consultants for reliable, sustainable, and innovative solutions.",
  foundedYear: "2018",
  phone: "+91 7018167926",
  email: "info@virinchiehygen.com",
  address: {
    street: "Sharma Cottage, Thakur Bagh, Annandale",
    city: "Shimla",
    state: "Himachal Pradesh",
    pincode: "171001",
    country: "India",
  },
  social: {
    facebook: "https://facebook.com/virinchiehygen",
    instagram: "https://instagram.com/virinchiehygen",
    linkedin: "https://linkedin.com/company/virinchiehygen",
    youtube: "https://youtube.com/@virinchiehygen",
  },
  businessHours: {
    weekdays: "9:00 AM - 7:00 PM",
    saturday: "9:00 AM - 5:00 PM",
    sunday: "Closed",
  },
} as const;

// export const NAV_LINKS = [
//   // { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Services', path: '/services' },
//   { name: 'Packages', path: '/packages' },
//   { name: 'Projects', path: '/projects' },
//   { name: 'Media', path: '/media' },
//   // { name: 'Blogs', path: '/blogs' },
// //   { name: 'Contact', path: '/contact' }
// ] as const

export const NAV_LINKS = [
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "All Services", path: "/services" },
      { name: "Surveying & GIS", path: "/services#survey-gis" },
      {
        name: "Water Supply & Infrastructure",
        path: "/services#water-infrastructure",
      },
      { name: "DPR & Project Reports", path: "/services#dpr-project-reports" },
      { name: "Project Planning & PMC", path: "/services#project-management" },
      {
        name: "Environmental & EIA Services",
        path: "/services#environmental-eia",
      },
      {
        name: "Architectural & Interior Design",
        path: "/services#architecture-interior",
      },
      { name: "CAD & Technical Support", path: "/services#cad-support" },
    ],
  },
  {
    name: "Packages",
    path: "/packages",
    dropdown: [
      { name: "All Packages", path: "/packages" },
      { name: "Construction", path: "/packages#construction" },
      { name: "Consultancy", path: "/packages#consultancy" },
      // { name: "Enterprise", path: "/packages#enterprise" },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Media", path: "/media" },
] as const;

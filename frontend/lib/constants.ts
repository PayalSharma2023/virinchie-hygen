export const COMPANY_INFO = {
  name: 'Virinchie Hygen Engineering Consultants Pvt. Ltd.',
  fullName: 'Virinchie Hygen Engineering Consultants Pvt. Ltd.',
  tagline: 'Partner with Virinchie Hygen Engineering Consultants for reliable, sustainable, and innovative solutions.',
  foundedYear: '2018',
  phone: '+91 7018167926',
  email: 'info@virinchiehygen.com',
  address: {
    street: 'Sharma Cottage, Thakur Bagh, Annandale',
    city: 'Shimla',
    state: 'Himachal Pradesh',
    pincode: '171001',
    country: 'India'
  },
  social: {
    facebook: 'https://facebook.com/dmaangroup',
    instagram: 'https://instagram.com/dmaangroup',
    linkedin: 'https://linkedin.com/company/dmaangroup',
    youtube: 'https://youtube.com/@dmaangroup'
  },
  businessHours: {
    weekdays: '9:00 AM - 7:00 PM',
    saturday: '9:00 AM - 5:00 PM',
    sunday: 'Closed'
  }
} as const

export const NAV_LINKS = [
  // { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Packages', path: '/packages' },
  { name: 'Projects', path: '/projects' },
  { name: 'Media', path: '/media' },
  // { name: 'Blogs', path: '/blogs' },
//   { name: 'Contact', path: '/contact' }
] as const
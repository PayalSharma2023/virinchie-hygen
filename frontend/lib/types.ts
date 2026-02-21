export interface NavLink {
  name: string
  path: string
}

export interface Service {
  title: string
  slug: string
  description: string
  icon: string
  features?: string[]
}

export interface Project {
  id: string
  title: string
  slug: string
  category: string
  description: string
  image: string
  images?: {
    label: string
    src: string
  }[]
  walkthroughUrl?: string      // video link
  planningPdf?: {
    label: string
    url: string
  }
  location: string
  area?: string
  completionDate: string
  features?: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  content: string
  rating: number
  image?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

// Type definitions for the blog platform

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: {
    url: string;
    publicId: string;
  };
  author: string;
  categories: string[];
  tags: string[];
  published: boolean;
  publishedAt?: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogImage?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  _id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export interface ApiResponse<T = any> {
  success?: boolean;
  error?: string;
  message?: string;
  data?: T;
}

export interface BlogFormData {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: {
    url: string;
    publicId: string;
  };
  author: string;
  categories: string;
  tags: string;
  published: boolean;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
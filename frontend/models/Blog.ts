import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
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
  featured: boolean;
  featuredImage: { url: string; alt: string; publicId: string };
  tags: string[];
  relatedSlugs: string[];
  content: any[];
  published: boolean;
  publishedAt?: Date;
  views: number;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  createdAt: Date;
  updatedAt: Date;
}


const BlogSchema = new Schema<IBlog>(
  {
    slug:        { type: String, required: true, unique: true, trim: true, lowercase: true },
    title:       { type: String, required: true, trim: true },
    excerpt:     { type: String, required: true, maxlength: 300 },
    category:    { type: String, required: true, trim: true },
    author:      { type: String, required: true, default: 'Admin' },
    authorRole:  { type: String, default: '' },
    authorBio:   { type: String, default: '' },
    date:        { type: String, default: '' },       // e.g. "12 Feb 2025"
    readTime:    { type: String, default: '' },       // e.g. "8 min read"
    coverColor:  { type: String, default: 'from-sky-400 to-cyan-600' },
    featured:    { type: Boolean, default: false },
    featuredImage: {
      url: { type: String, required: true },
      alt: { type: String, default: '' },
      publicId: { type: String, required: true }, 
    },
    tags:         { type: [String], default: [] },
    relatedSlugs: { type: [String], default: [] },
    content:      { type: Schema.Types.Mixed, default: [] },
    published:    { type: Boolean, default: false },
    publishedAt:  { type: Date },
    views:        { type: Number, default: 0 },
    metaTitle:        { type: String, default: '' },
    metaDescription:  { type: String, default: '' },
    metaKeywords:     { type: [String], default: [] },
  },
  { timestamps: true }
);

BlogSchema.index({ title: 'text', excerpt: 'text' });

const Blog: Model<IBlog> =
  mongoose.models.Blog ?? mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
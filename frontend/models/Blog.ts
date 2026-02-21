import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
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
  publishedAt?: Date;
  
  // SEO Fields
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  ogImage?: string;
  
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: 300,
    },
    featuredImage: {
      url: {
        type: String,
        required: true,
      },
      publicId: {
        type: String,
        required: true,
      },
    },
    author: {
      type: String,
      required: true,
      default: 'Admin',
    },
    categories: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    
    // SEO Fields
    metaTitle: {
      type: String,
      required: true,
      maxlength: 60,
    },
    metaDescription: {
      type: String,
      required: true,
      maxlength: 160,
    },
    metaKeywords: {
      type: [String],
      default: [],
    },
    ogImage: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
BlogSchema.index({ slug: 1 });
BlogSchema.index({ published: 1, publishedAt: -1 });
BlogSchema.index({ categories: 1 });
BlogSchema.index({ tags: 1 });

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
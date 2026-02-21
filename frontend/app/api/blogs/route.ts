import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import {middleware} from '@/middleware/auth';

// GET all blogs (public)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const slug = searchParams.get('slug');

    const query: any = {};

    if (published === 'true') {
      query.published = true;
    }

    if (slug) {
      query.slug = slug;
      const blog = await Blog.findOne(query);
      if (!blog) {
        return NextResponse.json(
          { error: 'Blog not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ blog });
    }

    const blogs = await Blog.find(query).sort({ publishedAt: -1, createdAt: -1 });

    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Get blogs error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST create new blog (admin only)
export async function POST(request: NextRequest) {
  // Check authentication
  const authError = await middleware(request);
  if (authError) return authError;

  try {
    await connectDB();

    const data = await request.json();

    // Generate slug from title if not provided
    const slug = data.slug || data.title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Ensure unique slug
    let uniqueSlug = slug;
    let counter = 1;
    while (await Blog.findOne({ slug: uniqueSlug })) {
      uniqueSlug = `${slug}-${counter}`;
      counter++;
    }

    const blog = await Blog.create({
      ...data,
      slug: uniqueSlug,
      publishedAt: data.published ? new Date() : undefined,
    });

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error) {
    console.error('Create blog error:', error);
    return NextResponse.json(
      { error: 'Failed to create blog' },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { middleware } from '@/middleware/auth';
import { deleteFromCloudinary } from '@/lib/cloudinary';

// GET single blog
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ blog });
  } catch (error: any) {
    console.error('Get blog error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog' },
      { status: 500 }
    );
  }
}

// PUT update blog (admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check authentication
  const authError = await middleware(request);
  if (authError) return authError;

  try {
    await connectDB();

    const data = await request.json();

    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    // If publishing for the first time, set publishedAt
    if (data.published && !blog.published) {
      data.publishedAt = new Date();
    }

    // Delete old featured image if changed
    if (
      data.featuredImage &&
      data.featuredImage.publicId !== blog.featuredImage.publicId
    ) {
      try {
        await deleteFromCloudinary(blog.featuredImage.publicId);
      } catch (error) {
        console.error('Failed to delete old image:', error);
      }
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      params.id,
      { $set: data },
      { new: true, runValidators: true }
    );

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error: any) {
    console.error('Update blog error:', error);
    return NextResponse.json(
      { error: 'Failed to update blog' },
      { status: 500 }
    );
  }
}

// DELETE blog (admin only)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Check authentication
  const authError = await middleware(request);
  if (authError) return authError;

  try {
    await connectDB();

    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    // Delete featured image from Cloudinary
    try {
      await deleteFromCloudinary(blog.featuredImage.publicId);
    } catch (error) {
      console.error('Failed to delete image from Cloudinary:', error);
    }

    await Blog.findByIdAndDelete(params.id);

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error: any) {
    console.error('Delete blog error:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog' },
      { status: 500 }
    );
  }
}
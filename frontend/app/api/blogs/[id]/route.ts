import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { middleware } from '@/middleware/auth';
import { deleteFromCloudinary } from '@/lib/cloudinary';

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  try {
    await connectDB();
    const { id } = await params;
    const blog = await Blog.findById(id);
    if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    return NextResponse.json({ blog });
  } catch (error) {
    console.error('[GET /api/blogs/[id]]', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: Ctx) {
  const authError = await middleware(request);
  if (authError) return authError;

  let newPublicId: string | null = null;

  try {
    await connectDB();
    const { id } = await params;
    const data = await request.json();
    const blog = await Blog.findById(id);
    if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });

    // Track new image for rollback if update fails
    const imageChanged =
      data.featuredImage?.publicId &&
      data.featuredImage.publicId !== blog.featuredImage.publicId;

    if (imageChanged) newPublicId = data.featuredImage.publicId;

    // Set publishedAt only when transitioning draft → published
    if (data.published && !blog.published) {
      data.publishedAt = new Date();
    }
    // Clear publishedAt when unpublishing
    if (data.published === false && blog.published) {
      data.publishedAt = null;
    }

    const updated = await Blog.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );

    // Delete OLD image from Cloudinary only after DB update succeeds
    if (imageChanged) {
      await deleteFromCloudinary(blog.featuredImage.publicId).catch((e) =>
        console.error('[Cloudinary] Could not delete old image:', e)
      );
    }

    return NextResponse.json({ success: true, blog: updated });
  } catch (error: any) {
    console.error('[PUT /api/blogs/[id]]', error);

    // Rollback: delete newly uploaded image if DB update failed
    if (newPublicId) {
      await deleteFromCloudinary(newPublicId).catch((e) =>
        console.error('[Cloudinary rollback failed]', e)
      );
    }

    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: Ctx) {
  const authError = await middleware(request);
  if (authError) return authError;

  try {
    await connectDB();
    const { id } = await params;
    const blog = await Blog.findById(id);
    if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });

    // Delete from DB first, then clean Cloudinary
    await Blog.findByIdAndDelete(id);

    await deleteFromCloudinary(blog.featuredImage.publicId).catch((e) =>
      console.error('[Cloudinary] Could not delete image:', e)
    );

    return NextResponse.json({ success: true, message: 'Blog deleted' });
  } catch (error) {
    console.error('[DELETE /api/blogs/[id]]', error);
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}

// ─── PATCH /api/blogs/[id] — toggle publish only ─────────────────────────────
export async function PATCH(request: NextRequest, { params }: Ctx) {
  const authError = await middleware(request);
  if (authError) return authError;

  try {
    await connectDB();
    const { id } = await params;
    const { published } = await request.json();

    const blog = await Blog.findById(id);
    if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });

    blog.published = published;
    if (published && !blog.publishedAt) blog.publishedAt = new Date();
    if (!published) blog.publishedAt = undefined;
    await blog.save();

    return NextResponse.json({ success: true, published: blog.published });
  } catch (error) {
    console.error('[PATCH /api/blogs/[id]]', error);
    return NextResponse.json({ error: 'Failed to toggle publish' }, { status: 500 });
  }
}
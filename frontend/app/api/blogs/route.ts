import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { middleware } from "@/middleware/auth";
import { deleteFromCloudinary } from "@/lib/cloudinary";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const published = searchParams.get("published");
    const slug = searchParams.get("slug");
    const category = searchParams.get("category");
    const tag = searchParams.get("tag");
    const search = searchParams.get("search");
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const limit = Math.min(50, parseInt(searchParams.get("limit") ?? "20", 10));

    const query: Record<string, any> = {};
    if (published === "true") query.published = true;
    if (category) query.categories = category;
    if (tag) query.tags = tag;
    if (search) query.$text = { $search: search };

    // if (slug) {
    //   const blog = await Blog.findOne({ ...query, slug });
    //   if (!blog) return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    //   Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } }).exec();
    //   return NextResponse.json({ blog });
    // }
    // Single blog by slug — don't filter by published when fetching by slug
    if (slug) {
      const blog = await Blog.findOne({ slug }); // ← removed query spread that required published:true
      if (!blog)
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      Blog.findByIdAndUpdate(blog._id, { $inc: { views: 1 } }).exec();
      return NextResponse.json({ blog });
    }

    const skip = (page - 1) * limit;
    const total = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .sort({ publishedAt: -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-content");

    return NextResponse.json({
      blogs,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("[GET /api/blogs]", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  // ✅ Auth check first — returns null if OK, error response if not
  const authError = await middleware(request);
  if (authError) return authError;

  let uploadedPublicId: string | null = null;

  try {
    await connectDB();
    const data = await request.json();

    // Track the publicId so we can roll back if save fails
    uploadedPublicId = data.featuredImage?.publicId ?? null;

    // Build unique slug
    const base = (data.slug || data.title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    let slug = base;
    let counter = 1;
    while (await Blog.findOne({ slug })) {
      slug = `${base}-${counter++}`;
    }

    const blog = await Blog.create({
      ...data,
      slug,
      publishedAt: data.published ? new Date() : undefined,
    });

    // ✅ Blog saved — image is now legitimately stored
    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error: any) {
    console.error("[POST /api/blogs]", error);

    // ✅ Blog save failed — delete the already-uploaded Cloudinary image
    if (uploadedPublicId) {
      await deleteFromCloudinary(uploadedPublicId).catch((e) =>
        console.error("[Cloudinary rollback failed]", e),
      );
    }

    const message =
      error?.code === 11000
        ? "A blog with this slug already exists"
        : "Failed to create blog";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

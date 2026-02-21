import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
}

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch('/api/blogs?published=true', {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Our Blogs</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog: Blog) => (
          <div key={blog._id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {blog.excerpt}
            </p>
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-blue-600 font-semibold"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

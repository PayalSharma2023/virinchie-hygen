'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react';

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: { url: string };
  published: boolean;
  publishedAt?: string;
  createdAt: string;
  categories: string[];
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data.blogs ?? []);
    } catch {
      toast.error('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      const res = await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('Blog deleted');
        setBlogs((prev) => prev.filter((b) => b._id !== id));
      } else {
        toast.error('Failed to delete');
      }
    } catch {
      toast.error('Failed to delete');
    }
  };

  const handleTogglePublish = async (id: string, current: boolean) => {
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !current }),
      });
      if (res.ok) {
        toast.success(current ? 'Blog unpublished' : 'Blog published');
        setBlogs((prev) =>
          prev.map((b) => b._id === id ? { ...b, published: !current } : b)
        );
      } else {
        toast.error('Failed to update publish status');
      }
    } catch {
      toast.error('Failed to update publish status');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#210568]" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100">Blogs</h1>
        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 bg-[#210568] hover:bg-[#01589e] text-white px-5 py-2.5 rounded-lg font-semibold transition-colors"
        >
          <Plus size={18} /> New Blog
        </Link>
      </div>

      {blogs.length === 0 ? (
        <div className="text-center py-20 text-gray-500 dark:text-slate-400">
          No blogs yet.{' '}
          <Link href="/admin/blogs/new" className="text-[#210568] dark:text-sky-400 underline">
            Create your first one.
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex gap-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-transparent dark:border-slate-700 p-4"
            >
              {/* Thumbnail */}
              <div className="relative w-24 h-20 rounded-md overflow-hidden flex-shrink-0">
                <Image src={blog.featuredImage.url} alt={blog.title} fill className="object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-semibold text-gray-900 dark:text-slate-100 truncate">{blog.title}</h2>
                  <span className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${
                    blog.published
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {blog.published ? 'Published' : 'Draft'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-slate-400 line-clamp-1 mt-1">{blog.excerpt}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {blog.categories.map((c) => (
                    <span key={c} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 px-2 py-0.5 rounded">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 flex-shrink-0">
                <button
                  onClick={() => handleTogglePublish(blog._id, blog.published)}
                  title={blog.published ? 'Unpublish' : 'Publish'}
                  className={`p-2 rounded-lg transition-colors ${
                    blog.published
                      ? 'bg-yellow-50 hover:bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/40'
                      : 'bg-green-50 hover:bg-green-100 text-green-600 dark:bg-green-900/20 dark:hover:bg-green-900/40'
                  }`}
                >
                  {blog.published ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                <Link
                  href={`/admin/blogs/edit/${blog._id}`}
                  className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:hover:bg-blue-900/40 transition-colors"
                >
                  <Pencil size={16} />
                </Link>
                <button
                  onClick={() => handleDelete(blog._id, blog.title)}
                  className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 dark:bg-red-900/20 dark:hover:bg-red-900/40 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
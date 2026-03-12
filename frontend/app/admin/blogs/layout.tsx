'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { LogOut, FileText, PlusCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState<any>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/verify');
      const data = await res.json();

      if (data.authenticated) {
        setAdmin(data.admin);
        setLoading(false);
      } else {
        router.push('/admin/login');
      }
    } catch {
      router.push('/admin/login');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      toast.success('Logged out successfully');
      router.push('/admin/login');
    } catch {
      toast.error('Logout failed');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-600 dark:border-sky-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">

      {/* Navbar */}
      <nav className="bg-white dark:bg-slate-800 shadow-md border-b border-gray-200 dark:border-slate-700">
        <div className="px-6">
          <div className="flex justify-between items-center h-16">

            <Link
              href="/admin/blogs"
              className="text-xl font-bold text-[#2d7ffb]"
            >
              Admin Panel
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-gray-700 dark:text-slate-300">
                Welcome, <span className="font-semibold">{admin?.name}</span>
              </span>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>

          </div>
        </div>
      </nav>

      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 min-h-[calc(100vh-64px)]">
          <nav className="p-4">

            <Link
              href="/admin/blogs"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                pathname === '/admin/blogs'
                  ? 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400 font-semibold'
                  : 'text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              <FileText size={20} />
              All Blogs
            </Link>

            <Link
              href="/admin/blogs/new"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                pathname === '/admin/blogs/new'
                  ? 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400 font-semibold'
                  : 'text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700'
              }`}
            >
              <PlusCircle size={20} />
              Create New Blog
            </Link>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              >
                View Website →
              </Link>
            </div>

          </nav>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-8 text-gray-900 dark:text-slate-100">
          {children}
        </main>

      </div>
    </div>
  );
}
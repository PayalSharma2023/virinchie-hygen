'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Upload, X, Plus, Trash2 } from 'lucide-react';

const inputCls = "w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-400";
const labelCls = "block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2";
const hintCls  = "text-sm text-gray-500 dark:text-slate-400 mt-1";
const cardCls  = "bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 border border-transparent dark:border-slate-700";
const cardHeadCls = "text-xl font-semibold text-gray-900 dark:text-slate-100 mb-4";

const COVER_COLORS = [
  { label: 'Sky',    value: 'from-sky-400 to-cyan-600' },
  { label: 'Teal',   value: 'from-teal-400 to-emerald-600' },
  { label: 'Violet', value: 'from-violet-400 to-purple-600' },
  { label: 'Blue',   value: 'from-blue-400 to-indigo-600' },
  { label: 'Orange', value: 'from-orange-400 to-red-500' },
  { label: 'Amber',  value: 'from-amber-400 to-yellow-600' },
  { label: 'Slate',  value: 'from-slate-400 to-slate-600' },
  { label: 'Rose',   value: 'from-rose-400 to-pink-600' },
];

type BlockType = 'paragraph' | 'heading' | 'subheading' | 'bulletList' | 'numberedList' | 'callout' | 'divider';

interface ContentBlock {
  type: BlockType;
  text?: string;
  items?: string[];
  title?: string;
  variant?: 'info' | 'warning' | 'tip';
}

const defaultBlock = (type: BlockType): ContentBlock => {
  switch (type) {
    case 'paragraph':    return { type, text: '' };
    case 'heading':      return { type, text: '' };
    case 'subheading':   return { type, text: '' };
    case 'bulletList':   return { type, items: [''] };
    case 'numberedList': return { type, items: [''] };
    case 'callout':      return { type, title: '', text: '', variant: 'info' };
    case 'divider':      return { type };
    default:             return { type: 'paragraph', text: '' };
  }
};

export default function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);

  // Image state
  const [existingImage, setExistingImage] = useState<{ url: string; alt: string; publicId: string } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [blobPreview, setBlobPreview] = useState('');

  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);

  const [form, setForm] = useState({
    title:       '',
    slug:        '',
    excerpt:     '',
    category:    '',
    author:      'Admin',
    authorRole:  '',
    authorBio:   '',
    readTime:    '',
    coverColor:  'from-sky-400 to-cyan-600',
    featured:    false,
    tags:        '',
    relatedSlugs:'',
    published:   false,
    metaTitle:       '',
    metaDescription: '',
    metaKeywords:    '',
  });

  const set = (name: string, value: any) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    set(name, value);
  };

  // ── Load blog ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Not found');
        const b = data.blog;

        setForm({
          title:           b.title ?? '',
          slug:            b.slug ?? '',
          excerpt:         b.excerpt ?? '',
          category:        b.category ?? '',
          author:          b.author ?? 'Admin',
          authorRole:      b.authorRole ?? '',
          authorBio:       b.authorBio ?? '',
          readTime:        b.readTime ?? '',
          coverColor:      b.coverColor ?? 'from-sky-400 to-cyan-600',
          featured:        b.featured ?? false,
          tags:            (b.tags ?? []).join(', '),
          relatedSlugs:    (b.relatedSlugs ?? []).join(', '),
          published:       b.published ?? false,
          metaTitle:       b.metaTitle ?? '',
          metaDescription: b.metaDescription ?? '',
          metaKeywords:    (b.metaKeywords ?? []).join(', '),
        });

        setExistingImage({
          url:      b.featuredImage?.url ?? '',
          alt:      b.featuredImage?.alt ?? b.title,
          publicId: b.featuredImage?.publicId ?? '',
        });

        // content can be array of blocks or a legacy HTML string
        if (Array.isArray(b.content) && b.content.length > 0) {
          setContentBlocks(b.content);
        } else if (typeof b.content === 'string' && b.content) {
          setContentBlocks([{ type: 'paragraph', text: b.content }]);
        } else {
          setContentBlocks([{ type: 'paragraph', text: '' }]);
        }
      } catch (err: any) {
        toast.error(err.message || 'Failed to load blog');
        router.push('/admin/blogs');
      } finally {
        setFetching(false);
      }
    };
    load();
  }, [id, router]);

  // ── Image ──────────────────────────────────────────────────────────────────
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { toast.error('Please select an image'); return; }
    if (file.size > 5 * 1024 * 1024) { toast.error('Max 5MB'); return; }
    if (blobPreview) URL.revokeObjectURL(blobPreview);
    setSelectedFile(file);
    setBlobPreview(URL.createObjectURL(file));
  };

  const clearImage = () => {
    if (blobPreview) URL.revokeObjectURL(blobPreview);
    setSelectedFile(null);
    setBlobPreview('');
    setExistingImage(null);
  };

  const currentPreview = blobPreview || existingImage?.url || '';

  // ── Content blocks ─────────────────────────────────────────────────────────
  const addBlock = (type: BlockType) =>
    setContentBlocks((p) => [...p, defaultBlock(type)]);
  const removeBlock = (i: number) =>
    setContentBlocks((p) => p.filter((_, idx) => idx !== i));
  const updateBlock = (i: number, patch: Partial<ContentBlock>) =>
    setContentBlocks((p) => p.map((b, idx) => idx === i ? { ...b, ...patch } : b));
  const updateListItem = (bi: number, li: number, val: string) =>
    setContentBlocks((p) => p.map((b, idx) => {
      if (idx !== bi) return b;
      const items = [...(b.items ?? [])]; items[li] = val; return { ...b, items };
    }));
  const addListItem = (bi: number) =>
    setContentBlocks((p) => p.map((b, idx) =>
      idx === bi ? { ...b, items: [...(b.items ?? []), ''] } : b));
  const removeListItem = (bi: number, li: number) =>
    setContentBlocks((p) => p.map((b, idx) =>
      idx === bi ? { ...b, items: (b.items ?? []).filter((_, i) => i !== li) } : b));

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPreview) { toast.error('Please select a featured image'); return; }

    setLoading(true);
    try {
      let featuredImage = existingImage ?? { url: '', alt: form.title, publicId: '' };

      // Upload new image only if user selected a file
      if (selectedFile) {
        toast.loading('Uploading image…', { id: 'up' });
        const fd = new FormData();
        fd.append('file', selectedFile);
        const upRes = await fetch('/api/upload', { method: 'POST', body: fd });
        const upData = await upRes.json();
        if (!upRes.ok) throw new Error(upData.error || 'Upload failed');
        toast.success('Image uploaded', { id: 'up' });
        featuredImage = { url: upData.url, alt: form.title, publicId: upData.publicId };
      }

      const payload = {
        ...form,
        featuredImage,
        tags:         form.tags.split(',').map((t) => t.trim()).filter(Boolean),
        relatedSlugs: form.relatedSlugs.split(',').map((s) => s.trim()).filter(Boolean),
        metaKeywords: form.metaKeywords.split(',').map((k) => k.trim()).filter(Boolean),
        content:      contentBlocks,
      };

      const res = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update');

      toast.success('Blog updated!');
      router.push('/admin/blogs');
    } catch (err: any) {
      toast.dismiss('up');
      toast.error(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#210568]" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-8">Edit Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* ── Basic Info ─────────────────────────────────────────────────── */}
        <div className={cardCls}>
          <h2 className={cardHeadCls}>Basic Information</h2>
          <div className="space-y-4">
            <div>
              <label className={labelCls}>Title *</label>
              <input name="title" value={form.title} onChange={handleInput} required className={inputCls} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Slug *</label>
                <input name="slug" value={form.slug} onChange={handleInput} required className={inputCls} />
                <p className={hintCls}>/blogs/{form.slug}</p>
              </div>
              <div>
                <label className={labelCls}>Category *</label>
                <input name="category" value={form.category} onChange={handleInput} required className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Excerpt * <span className="font-normal text-gray-400">({form.excerpt.length}/300)</span></label>
              <textarea name="excerpt" value={form.excerpt} onChange={handleInput} required maxLength={300} rows={3} className={`${inputCls} resize-none`} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Author</label>
                <input name="author" value={form.author} onChange={handleInput} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Author Role</label>
                <input name="authorRole" value={form.authorRole} onChange={handleInput} className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Author Bio</label>
              <textarea name="authorBio" value={form.authorBio} onChange={handleInput} rows={2} className={`${inputCls} resize-none`} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Read Time</label>
                <input name="readTime" value={form.readTime} onChange={handleInput} className={inputCls} placeholder="e.g. 8 min read" />
              </div>
              <div>
                <label className={labelCls}>Related Post Slugs</label>
                <input name="relatedSlugs" value={form.relatedSlugs} onChange={handleInput} className={inputCls} placeholder="slug-one, slug-two" />
              </div>
            </div>
            <div>
              <label className={labelCls}>Tags</label>
              <input name="tags" value={form.tags} onChange={handleInput} className={inputCls} placeholder="comma-separated" />
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="featured" checked={form.featured}
                onChange={(e) => set('featured', e.target.checked)}
                className="w-5 h-5 accent-sky-600 rounded" />
              <label htmlFor="featured" className="text-gray-700 dark:text-slate-300 font-medium cursor-pointer">
                Featured post
              </label>
            </div>
          </div>
        </div>

        {/* ── Cover Colour ──────────────────────────────────────────────── */}
        <div className={cardCls}>
          <h2 className={cardHeadCls}>Cover Colour</h2>
          <div className="flex flex-wrap gap-3">
            {COVER_COLORS.map((c) => (
              <button key={c.value} type="button"
                onClick={() => set('coverColor', c.value)}
                className={`h-10 w-28 rounded-lg bg-gradient-to-r ${c.value} text-white text-xs font-semibold transition-all ${form.coverColor === c.value ? 'ring-2 ring-offset-2 ring-[#210568] scale-105' : 'opacity-70 hover:opacity-100'}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Featured Image ────────────────────────────────────────────── */}
        <div className={cardCls}>
          <h2 className={cardHeadCls}>Featured Image</h2>
          {currentPreview ? (
            <div className="relative">
              <img src={currentPreview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
              <button type="button" onClick={clearImage}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                <X size={18} />
              </button>
              {selectedFile && (
                <p className="text-xs text-center text-slate-500 dark:text-slate-400 mt-2">
                  New image will upload when you save
                </p>
              )}
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg cursor-pointer hover:border-sky-500 transition-colors bg-gray-50 dark:bg-slate-700/50">
              <Upload className="w-10 h-10 text-gray-400 mb-3" />
              <p className="text-sm text-gray-500 dark:text-slate-400"><span className="font-semibold">Click to select</span></p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG, WEBP (MAX. 5MB)</p>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileSelect} disabled={loading} />
            </label>
          )}
        </div>

        {/* ── Content Builder ───────────────────────────────────────────── */}
        <div className={cardCls}>
          <h2 className={cardHeadCls}>Content</h2>
          <div className="space-y-4">
            {contentBlocks.map((block, i) => (
              <ContentBlockEditor key={i} block={block} index={i}
                onUpdate={(patch) => updateBlock(i, patch)}
                onRemove={() => removeBlock(i)}
                onUpdateItem={(li, val) => updateListItem(i, li, val)}
                onAddItem={() => addListItem(i)}
                onRemoveItem={(li) => removeListItem(i, li)}
              />
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-700">
            <p className="text-xs font-semibold text-gray-500 dark:text-slate-400 mb-3 uppercase tracking-widest">Add Block</p>
            <div className="flex flex-wrap gap-2">
              {(['paragraph','heading','subheading','bulletList','numberedList','callout','divider'] as BlockType[]).map((type) => (
                <button key={type} type="button" onClick={() => addBlock(type)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300 rounded-lg hover:bg-[#210568] hover:text-white transition-colors">
                  <Plus size={12} />
                  {type.replace(/([A-Z])/g, ' $1').trim()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── SEO ──────────────────────────────────────────────────────── */}
        <div className={cardCls}>
          <h2 className={cardHeadCls}>SEO</h2>
          <div className="space-y-4">
            <div>
              <label className={labelCls}>Meta Title <span className="font-normal text-gray-400">({form.metaTitle.length}/60)</span></label>
              <input name="metaTitle" value={form.metaTitle} onChange={handleInput} maxLength={60} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Meta Description <span className="font-normal text-gray-400">({form.metaDescription.length}/160)</span></label>
              <textarea name="metaDescription" value={form.metaDescription} onChange={handleInput} maxLength={160} rows={3} className={`${inputCls} resize-none`} />
            </div>
            <div>
              <label className={labelCls}>Meta Keywords</label>
              <input name="metaKeywords" value={form.metaKeywords} onChange={handleInput} className={inputCls} placeholder="keyword1, keyword2" />
            </div>
          </div>
        </div>

        {/* ── Publish ───────────────────────────────────────────────────── */}
        <div className={cardCls}>
          <h2 className={cardHeadCls}>Publish</h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={form.published}
              onChange={(e) => set('published', e.target.checked)}
              className="w-5 h-5 accent-sky-600 rounded" />
            <span className="text-gray-700 dark:text-slate-300 font-medium">Published</span>
          </label>
        </div>

        {/* ── Actions ───────────────────────────────────────────────────── */}
        <div className="flex gap-4">
          <button type="submit" disabled={loading}
            className="flex-1 bg-[#210568] hover:bg-[#01589e] text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
            {loading ? <><Spinner /> Saving…</> : 'Save Changes'}
          </button>
          <button type="button" onClick={() => router.back()}
            className="px-6 py-3 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

// ── Shared sub-components ────────────────────────────────────────────────────

function ContentBlockEditor({ block, index, onUpdate, onRemove, onUpdateItem, onAddItem, onRemoveItem }: {
  block: ContentBlock;
  index: number;
  onUpdate: (patch: Partial<ContentBlock>) => void;
  onRemove: () => void;
  onUpdateItem: (li: number, val: string) => void;
  onAddItem: () => void;
  onRemoveItem: (li: number) => void;
}) {
  const iCls = "w-full px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-gray-900 dark:text-slate-100 text-sm focus:ring-2 focus:ring-sky-500 outline-none";
  const blockTypeLabel: Record<string, string> = {
    paragraph: 'Paragraph', heading: 'Heading', subheading: 'Subheading',
    bulletList: 'Bullet List', numberedList: 'Numbered List', callout: 'Callout', divider: 'Divider',
  };

  return (
    <div className="border border-gray-200 dark:border-slate-600 rounded-xl p-4 bg-gray-50/50 dark:bg-slate-800/50 group">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#210568] dark:text-sky-400">
          {blockTypeLabel[block.type]}
        </span>
        <button type="button" onClick={onRemove}
          className="opacity-0 group-hover:opacity-100 p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-all">
          <Trash2 size={14} />
        </button>
      </div>

      {block.type === 'divider' && <div className="h-px bg-gray-200 dark:bg-slate-600 my-2" />}

      {(block.type === 'paragraph') && (
        <textarea value={block.text ?? ''} onChange={(e) => onUpdate({ text: e.target.value })}
          rows={4} className={`${iCls} resize-none`} placeholder="Paragraph text…" />
      )}

      {(block.type === 'heading' || block.type === 'subheading') && (
        <input value={block.text ?? ''} onChange={(e) => onUpdate({ text: e.target.value })}
          className={`${iCls} ${block.type === 'heading' ? 'font-bold text-lg' : 'font-semibold'}`}
          placeholder={block.type === 'heading' ? 'Section heading…' : 'Subheading…'} />
      )}

      {(block.type === 'bulletList' || block.type === 'numberedList') && (
        <div className="space-y-2">
          {(block.items ?? []).map((item, li) => (
            <div key={li} className="flex gap-2 items-center">
              <span className="text-xs text-gray-400 w-5 text-center flex-shrink-0">
                {block.type === 'numberedList' ? li + 1 : '•'}
              </span>
              <input value={item} onChange={(e) => onUpdateItem(li, e.target.value)}
                className={`${iCls} flex-1`} placeholder={`Item ${li + 1}`} />
              <button type="button" onClick={() => onRemoveItem(li)}
                className="p-1 text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded flex-shrink-0">
                <X size={14} />
              </button>
            </div>
          ))}
          <button type="button" onClick={onAddItem}
            className="flex items-center gap-1 text-xs text-sky-600 dark:text-sky-400 hover:underline mt-1">
            <Plus size={12} /> Add item
          </button>
        </div>
      )}

      {block.type === 'callout' && (
        <div className="space-y-3">
          <div className="flex gap-3">
            <input value={block.title ?? ''} onChange={(e) => onUpdate({ title: e.target.value })}
              className={`${iCls} flex-1`} placeholder="Callout title…" />
            <select value={block.variant ?? 'info'} onChange={(e) => onUpdate({ variant: e.target.value as any })}
              className="px-3 py-2 border border-gray-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-sm text-gray-900 dark:text-slate-100 outline-none">
              <option value="info">Info</option>
              <option value="tip">Tip</option>
              <option value="warning">Warning</option>
            </select>
          </div>
          <textarea value={block.text ?? ''} onChange={(e) => onUpdate({ text: e.target.value })}
            rows={3} className={`${iCls} resize-none`} placeholder="Callout body text…" />
        </div>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
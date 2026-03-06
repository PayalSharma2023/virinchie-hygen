import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string; // omit for current (last) item
}

interface Props {
  items: BreadcrumbItem[];
  /** "light" = white text (for dark hero backgrounds), "dark" = slate text (default) */
  theme?: "light" | "dark";
}

export default function Breadcrumb({ items, theme = "dark" }: Props) {
  const base =
    theme === "light"
      ? "text-white/60 hover:text-white"
      : "text-slate-400 hover:text-[#210568]";
  const sep = theme === "light" ? "text-white/30" : "text-slate-300";
  const current = theme === "light" ? "text-white/90" : "text-slate-600";

  return (
    <nav aria-label="Breadcrumb" className="flex mb-4 items-center gap-2 flex-wrap">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {isLast || !item.href ? (
              <span className={`text-xs font-medium ${isLast ? current : `${base} transition-colors cursor-pointer`}`}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className={`text-xs font-medium transition-colors ${base}`}>
                {item.label}
              </Link>
            )}
            {!isLast && (
              <svg className={`w-3 h-3 flex-shrink-0 ${sep}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
          </span>
        );
      })}
    </nav>
  );
}
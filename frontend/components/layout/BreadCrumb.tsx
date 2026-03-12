import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
  /** "light" = white text (dark hero bg), "dark" = slate text (default), "auto" = adapts to dark mode */
  theme?: "light" | "dark" | "auto";
}

export default function Breadcrumb({ items, theme = "auto" }: Props) {
  let linkCls: string;
  let sepCls: string;
  let currentCls: string;

  if (theme === "light") {
    linkCls    = "text-white/60 hover:text-white";
    sepCls     = "text-white/30";
    currentCls = "text-white/90";
  } else if (theme === "dark") {
    linkCls    = "text-slate-400 hover:text-[#210568]";
    sepCls     = "text-slate-300";
    currentCls = "text-slate-600";
  } else {
    // auto — light text on dark bg hero (dark: prefix), slate on light bg
    linkCls    = "text-slate-400 dark:text-slate-400 hover:text-[#210568] dark:hover:text-sky-400";
    sepCls     = "text-slate-300 dark:text-slate-600";
    currentCls = "text-slate-600 dark:text-slate-300";
  }

  return (
    <nav aria-label="Breadcrumb" className="flex mb-4 items-center gap-2 flex-wrap">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {isLast || !item.href ? (
              <span className={`text-xs font-medium ${isLast ? currentCls : `${linkCls} transition-colors cursor-pointer`}`}>
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className={`text-xs font-medium transition-colors ${linkCls}`}>
                {item.label}
              </Link>
            )}
            {!isLast && (
              <svg className={`w-3 h-3 flex-shrink-0 ${sepCls}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            )}
          </span>
        );
      })}
    </nav>
  );
}
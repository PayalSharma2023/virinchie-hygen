"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    if (!isOpen) setOpenAccordion(null);
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDropdownItemClick = (itemPath: string) => {
    const [pagePath, hash] = itemPath.split("#");
    onClose();
    if (hash && pathname === pagePath) {
      // Already on the page — wait for menu close animation then scroll
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      router.push(itemPath);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-down panel */}
      <div
        className={`fixed left-0 right-0 top-[67px] z-50 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-4 rounded-2xl bg-white shadow-xl shadow-black/10 border border-gray-100 overflow-hidden">
          {/* Top accent */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#210568] via-[#01589e] to-[#13baf6]" />

          {/* Nav links */}
          <nav className="p-3 space-y-1">
            {NAV_LINKS.map((link) => {
              const hasDropdown = "dropdown" in link && link.dropdown && link.dropdown.length > 0;
              const isActive =
                pathname === link.path ||
                (hasDropdown && link.dropdown!.some((d) => pathname === d.path.split("#")[0]));
              const isAccordionOpen = openAccordion === link.name;

              if (hasDropdown) {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setOpenAccordion(isAccordionOpen ? null : link.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-blue-50 text-[#210568] font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-[#01589e]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 text-[#01589e] ${
                          isAccordionOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isAccordionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 pr-2 pb-1 pt-0.5 space-y-0.5">
                        {link.dropdown!.map((item, i) => (
                          <button
                            key={item.path}
                            onClick={() => handleDropdownItemClick(item.path)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm w-full text-left transition-all duration-150 ${
                              i === 0
                                ? "font-semibold text-[#210568] hover:bg-blue-50"
                                : "text-gray-500 hover:text-[#01589e] hover:bg-gray-50"
                            }`}
                          >
                            {i !== 0 && (
                              <span className="w-1 h-1 rounded-full bg-[#13baf6] flex-shrink-0" />
                            )}
                            {item.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-50 text-[#210568] font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#01589e]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#13baf6]" />}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="mx-4 border-t border-gray-100" />

          {/* CTA Buttons */}
          <div className="p-4 flex flex-col gap-3">
            <Link
              href="/jobs"
              onClick={onClose}
              className="block text-center px-4 py-3 text-sm font-semibold text-[#210568] border-2 border-[#210568] rounded-xl hover:bg-[#210568] hover:text-white transition-all duration-200"
            >
              View Open Careers
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="block text-center px-4 py-3 text-sm font-semibold text-white bg-[#210568] rounded-xl hover:bg-[#01589e] transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
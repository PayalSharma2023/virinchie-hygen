"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownItemClick = (itemPath: string) => {
    setOpenDropdown(null);
    const [pagePath, hash] = itemPath.split("#");
    if (hash && pathname === pagePath) {
      // Already on the same page — smooth scroll directly
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(itemPath);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] mt-[-4px]"
            : "bg-[#F7F7F7] py-0"
        }`}
      >
        {/* Top accent bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#210568] via-[#01589e] to-[#13baf6]" />

        <div className="max-w-7xl mx-auto flex items-center px-6 py-2 justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative h-12 w-[90px] overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpeg"
                alt="Virinchie Hygen Engineering Consultants"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span
                className="text-[#210568] font-bold text-sm uppercase tracking-wide"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Virinchie Hy<span className="text-red-600">gen</span>
              </span>
              <span className="text-[#01589e] text-xs uppercase tracking-widest font-medium text-[10px]">
                Engineering Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {NAV_LINKS.map((link) => {
              const hasDropdown = "dropdown" in link && link.dropdown && link.dropdown.length > 0;
              const isActive =
                pathname === link.path ||
                (hasDropdown && link.dropdown!.some((d) => pathname === d.path.split("#")[0]));
              const isOpen = openDropdown === link.name;

              if (hasDropdown) {
                return (
                  <div key={link.path} className="relative">
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      className={`relative flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 group ${
                        isActive
                          ? "text-[#210568] font-semibold bg-blue-50"
                          : "text-black hover:text-[#01589e] hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#13baf6] transition-transform duration-300 origin-left ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-lg shadow-black/10 border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                        isOpen
                          ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
                      }`}
                      style={{ transformOrigin: "top center" }}
                    >
                      <div className="h-[2px] w-full bg-gradient-to-r from-[#210568] via-[#01589e] to-[#13baf6]" />
                      <div className="py-1.5 px-1.5">
                        {link.dropdown!.map((item, i) => (
                          <button
                            key={item.path}
                            onClick={() => handleDropdownItemClick(item.path)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm w-full text-left transition-all duration-150 ${
                              i === 0
                                ? "font-semibold text-[#210568] hover:bg-blue-50"
                                : "text-gray-600 hover:text-[#01589e] hover:bg-gray-50"
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
                  scroll={true}
                  className={`relative text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 group ${
                    isActive
                      ? "text-[#210568] font-semibold bg-blue-50"
                      : "text-gray-700 hover:text-[#01589e] hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#13baf6] transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/jobs"
              scroll={true}
              className="text-sm font-semibold text-[#210568] border-2 border-[#210568] px-4 py-2 rounded-lg hover:bg-[#210568] hover:text-white transition-all duration-200"
            >
              Our Careers
            </Link>
            <Link
              href="/contact"
              scroll={true}
              className="text-sm font-semibold text-white bg-[#210568] px-4 py-2 rounded-lg hover:bg-[#01589e] hover:shadow-md hover:shadow-blue-200 transition-all duration-200 hover:-translate-y-[1px]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#210568] hover:bg-[#01589e] transition-colors flex-shrink-0"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-5 h-4">
              <span className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "top-[7px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[7px] w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"}`} />
              <span className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
            </div>
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <div className="h-[67px]" />
    </>
  );
}
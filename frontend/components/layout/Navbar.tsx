"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-0"
            : "bg-[#F7F7F7] py-1"
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
              <span className="text-[#210568] font-bold text-sm uppercase tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
                Virinchie Hygen
              </span>
              <span className="text-[#01589e] text-xs uppercase tracking-widest font-medium text-[10px]">
                Engineering Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                scroll={true}
                className={`relative text-sm font-medium px-4 py-2 rounded-md transition-all duration-200 group ${
                  pathname === link.path
                    ? "text-[#210568] font-semibold bg-blue-50"
                    : "text-gray-700 hover:text-[#01589e] hover:bg-gray-100"
                }`}
              >
                {link.name}
                {/* Active underline indicator */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#13baf6] transition-transform duration-300 origin-left ${
                    pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/jobs"
              scroll={true}
              className="text-sm font-semibold text-[#210568] border-2 border-[#210568] px-4 py-2 rounded-lg hover:bg-[#210568] hover:text-white transition-all duration-200"
            >
              Jobs
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
              <span
                className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "top-[7px] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isMobileMenuOpen ? "top-[7px] -rotate-45" : "top-[14px]"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer */}
      <div className="h-[67px]" />
    </>
  );
}
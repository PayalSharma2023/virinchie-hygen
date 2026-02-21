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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0  z-50 px-6 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F7F7] shadow-lg"
            : "bg-[#F7F7F7] backdrop-blur-sm"
        }`}
      >
        <div className="max-w-9xl mx-auto flex items-center py-2 justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center h-full">
            <div className="relative h-14 w-[100px] overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="Virinchie Hygen Engineering Consultants"
                fill
                className="object-contain"
                priority
              />
            </div>
              <h1 className=" text-blue-900 text-lg uppercase font-bold">Virinchie Hygen Engineering Consultants</h1>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#F7F7F7] to-transparent pointer-events-none" /> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex  items-center justify-between space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                scroll={true}
                className={`text-md font-medium transition-colors hover:text-[#13baf6] ${
                  pathname === link.path
                    ? "text-[#01589e] border-1 font-bold  p-2 px-3 rounded-md  border-white/20"
                    : "text-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          <div className="hidden gap-4 lg:flex">
            <Link
              href="/jobs"
              scroll={true}
              className="text-md font-semibold text-black border bg-white border-[#8fe7f7] px-4 py-2 rounded-lg"
            >
              Jobs
            </Link>
            <Link
              href="/contact"
              scroll={true}
              className="text-md font-semibold text-white bg-[#210568] px-4 py-2 rounded-lg"
            >
              Contact
            </Link>
          </div>
          </div>

        

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg  transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              /* X Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Spacer to avoid content behind navbar */}
      <div className="h-20"></div>
    </>
  );
}

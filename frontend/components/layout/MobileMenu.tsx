"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_LINKS } from "@/lib/constants"
import { useEffect } from "react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

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
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="mx-4 rounded-2xl bg-white shadow-xl shadow-black/10 border border-gray-100 overflow-hidden">

          {/* Top accent — matches Navbar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-[#210568] via-[#01589e] to-[#13baf6]" />

          {/* Nav links */}
          <nav className="p-3 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path
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
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#13baf6]" />
                  )}
                </Link>
              )
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
              View Open Jobs
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
  )
}
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
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 top-20 max-h-[50vh] bg-white z-50 p-4">
      <nav className="space-y-2">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            onClick={onClose}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              pathname === link.path
                ? "bg-primary-600/30 text-black font-semibold"
                : "text-gray-700 hover:bg-primary-600/10"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="mt-6">
        <Link
          href="/contact"
          onClick={onClose}
          className="block text-center px-4 py-3 bg-[#FEE8A1] text-black rounded-lg"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}

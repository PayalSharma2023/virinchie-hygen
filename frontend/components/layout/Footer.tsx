import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/80">
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <Image
            src="/logo.jpeg" // ✅ public/images/logo.jpeg
            alt="Dmaan Group Logo"
            width={150}
            height={100}
            className="object-contain"
          />
          <h3 className="text-xl font-bold">{COMPANY_INFO.name}</h3>
          <p className="mt-2">{COMPANY_INFO.tagline}</p>
          <p className="mt-1 text-sm text-gray-300">
            Established {COMPANY_INFO.foundedYear}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg text-gray-100 font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className=" text-gray-100 hover:text-[#FEE8A1]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-gray-300">
            <li>Architecture Design</li>
            <li>Construction</li>
            <li>Modular Kitchen</li>
            <li>
              <Link href="/projects" className="hover:text-[#FEE8A1]">
                View All Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <address className="not-italic text-gray-300 space-y-2">
            <div>
              {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city},{" "}
              {COMPANY_INFO.address.state}
            </div>
            <div>
              Phone:{" "}
              <Link
                href={`tel:${COMPANY_INFO.phone}`}
                className="hover:text-primary-600"
              >
                {COMPANY_INFO.phone}
              </Link>
            </div>
            <div>
              Email:{" "}
              <Link
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-primary-600"
              >
                {COMPANY_INFO.email}
              </Link>
            </div>
          </address>

          {/* Social Links (optional icons) */}
          {COMPANY_INFO.social && (
            <div className="flex space-x-4 mt-4">
              {Object.entries(COMPANY_INFO.social).map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-600"
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-300">
        &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
        <div>Designed & developed with ❤️ for quality construction</div>
      </div>
    </footer>
  );
}

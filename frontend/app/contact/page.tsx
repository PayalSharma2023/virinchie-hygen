import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapWithDirections from "@/components/contact/Map";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Virinchie Hygen Engineering Consultants",
  description:
    "Contact Virinchie Hygen Engineering Consultants for hydrology, environmental, and civil engineering services in Shimla, Himachal Pradesh. Get a free consultation.",
  keywords: [
    "contact engineering consultants",
    "Virinchie Hygen contact",
    "hydrology consultants Shimla",
    "civil engineering Himachal Pradesh",
  ],
  openGraph: {
    title: "Contact Virinchie Hygen Engineering Consultants",
    url: "https://virinchie.com/contact",
  },
  alternates: { canonical: "https://virinchie.com/contact" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Virinchie Hygen Engineering Consultants",
    url: "https://virinchie.com/contact",
    description: "Get in touch with Virinchie Hygen Engineering Consultants for quotes, consultations, and engineering service inquiries.",
    isPartOf: { "@type": "WebSite", name: "Virinchie Hygen Engineering Consultants", url: "https://virinchie.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-[#f0f7ff]">
        <div className="absolute inset-0">
          <Image src="/contact.jpg" alt="Contact background" fill className="object-cover brightness-105 saturate-75" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white/70 to-teal-50/85" />
        </div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-600 bg-white/80 border border-sky-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Contact Us
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-4"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Let's Build{" "}
            <span className="relative inline-block">
              <span className="text-sky-500">Together</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 12" fill="none">
                <path d="M0 8 Q55 0 110 8 Q165 16 220 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-slate-600 text-base max-w-lg leading-relaxed">
            Get in touch for engineering consultancy, project inquiries, or a free initial consultation.
          </p>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section className="relative py-20 bg-gradient-to-b from-white to-sky-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-100/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Form */}
          <ContactForm />

          {/* Right: Info + Map */}
          <div className="space-y-6">
            <ContactInfo />
            <MapWithDirections />
          </div>
        </div>
      </section>
    </>
  );
}
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us - Get Engineering & Construction Quote in Ambala, Haryana",
  description:
    "Contact Virinchie Hygen Engineering Consultants for engineering, construction, and consultancy services in Ambala, Haryana. Get free consultation and quotes.",
  keywords: [
    "contact engineering consultants",
    "Virinchie contact",
    "construction quote Ambala",
    "engineering consultants Haryana",
  ],
  openGraph: {
    title: "Contact Virinchie Hygen Engineering Consultants",
    url: "https://virinchie.com/contact",
  },
  alternates: {
    canonical: "https://virinchie.com/contact",
  },
};

export default function ContactPage() {
  // JSON-LD Structured Data for this Contact page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Virinchie Hygen Engineering Consultants",
    url: "https://virinchie.com/contact",
    description:
      "Get in touch with Virinchie Hygen Engineering Consultants for quotes, consultations, and engineering service inquiries.",
    isPartOf: {
      "@type": "WebSite",
      name: "Virinchie Hygen Engineering Consultants",
      url: "https://virinchie.com",
    },
  };

  return (
    <>
      {/* JSON-LD for ContactPage (for search engines) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="contact-page mb-10 container mx-auto space-y-6">
        {/* Page Header */}
        <div className="text-center relative bg-black/10 py-16 mt-[-3vh]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/bg.png"
              alt="background"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>
          <h1 className="text-3xl text-primary-600 font-bold">
            Contact Us
          </h1>
          <p className="text-gray-300">
            Get in touch for your engineering & construction needs
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info + Map */}
          <div className="p-4 bg-gray-100 rounded shadow-md">

            <ContactForm/>
          </div>
          <div className="space-y-6 px-4 lg:px-0">
            <ContactInfo />
            <Map />
          </div>
        </div>
      </section>
    </>
  );
}

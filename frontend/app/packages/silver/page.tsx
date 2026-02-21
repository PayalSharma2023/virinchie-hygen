"use client";

import { useState } from "react";
// import type { Metadata } from "next";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Silver Package | Virinchie Hygen Engineering Consultants",
//   description:
//     "Affordable and reliable construction package with durable materials and quality assurance.",
// };

const accordionData = [
  {
    title: "Civil Works",
    items: [
      "MS shuttering",
      "Fe415 grade steel (Kamdhenu, Amba Shakti)",
      "ACC / Ambuja Cement",
      "Fly ash or CLC bricks",
      "15mm plaster, waterproofing",
    ],
  },
  {
    title: "Bathroom",
    items: [
      "Parryware/Johnson Pedestal",
      "Local make CP fittings",
      "2x2 ceramic tiles (dado)",
      "Anti-skid ceramic tiles (flooring)",
    ],
  },
  {
    title: "Electrical",
    items: [
      "Finolex/Anchor wires",
      "Modular switches (Anchor/L&T)",
      "LED lights",
      "Conduit wiring",
    ],
  },
  {
    title: "Doors & Windows",
    items: [
      "Teak wood main door",
      "Flush doors for interior",
      "Aluminum sliding windows",
      "Standard hardware",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "2x2 ceramic tiles (dado)",
      "Modular kitchen with acrylic finish",
      "SS sink with drainboard",
      "Granite countertop",
    ],
  },
  {
    title: "Flooring & Painting",
    items: [
      "Vitrified tiles (living & bedrooms)",
      "Anti-skid ceramic (bathrooms)",
      "Asian Paints/Berger",
      "Putty coat finish",
    ],
  },
  {
    title: "Add-ons",
    items: [
      "Overhead tank (1000L)",
      "Underground sump (3000L)",
      "Grill for main door",
      "Basic landscaping",
    ],
  },
];

export default function SilverPackagePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-[#1a2a6c] mb-4">
            Silver Package – ₹1599 / sq.ft
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Affordable and reliable construction with durable materials for lasting quality.
          </p>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              3-year warranty
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              25 km radius coverage
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Customization available
            </span>
          </div>
        </div>

        {/* ACCORDION */}
        <div className="space-y-5">
          {accordionData.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-[#1a2a6c] hover:bg-gray-100 transition"
              >
                {section.title}
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <ul className="space-y-3 text-gray-600">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TERMS SECTION */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-[#1a2a6c] mb-2">Terms</h3>
          <p className="text-gray-600">
            3-year warranty. Applicable within 25 km radius. Customization available.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <Link
            href="/contact"
            className="bg-[#1a2a6c] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#152053] transition"
          >
            Request Custom Quote
          </Link>

          <Link
            href="/packages"
            className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            ← Back to Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

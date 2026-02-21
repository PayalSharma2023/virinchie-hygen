import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platinum Package | Virinchie Hygen Engineering Consultants",
  description:
    "Premium Platinum construction package with luxury finishes and smart home integration.",
};

export default function PlatinumPackagePage() {
  return (
    <main className="font-sans">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-600 to-slate-800 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Platinum Package
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Premium features, luxury finishes, and smart home integration for
            the ultimate living experience.
          </p>

          <div className="inline-block bg-gray-200 text-gray-900 text-2xl font-bold px-8 py-4 rounded-full shadow-lg border border-gray-400 mb-8">
            ₹2700 / sq.ft
          </div>

          <div>
            <Link
              href="#cta"
              className="bg-white text-slate-800 font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Experience Luxury
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Exclusive Platinum Features
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Our Platinum Package represents the pinnacle of luxury construction
            with premium materials and smart technology integration.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Civil Works",
                desc: "Fe500D steel, Ultratech Premium Cement, AAC Blocks, high quality shuttering.",
              },
              {
                title: "Bathroom",
                desc: "Designer tiles & premium sanitaryware from Kohler / Grohe.",
              },
              {
                title: "Electrical",
                desc: "Smart wiring options & home automation readiness.",
              },
              {
                title: "Doors & Windows",
                desc: "Teakwood frames with double glass windows.",
              },
              {
                title: "Kitchen",
                desc: "Italian marble countertop & high-end modular kitchen.",
              },
              {
                title: "Flooring & Painting",
                desc: "Italian marble / premium vitrified flooring & luxury paints.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-slate-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">The Ultimate Package</h2>
          <p className="text-gray-600 mb-12">
            See how our Platinum Package compares to other options
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Silver */}
            <div className="border rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Silver</h3>
              <p className="text-2xl font-semibold mb-6">₹1599 / sq.ft</p>
              <ul className="text-gray-600 space-y-2 mb-6 text-left">
                <li>✓ Fe415 grade steel</li>
                <li>✓ ACC / Ambuja Cement</li>
                <li>✓ Standard fittings</li>
                <li className="text-gray-400">✕ Smart home features</li>
              </ul>
              <Link
                href="/packages/silver"
                className="bg-gray-800 text-white px-5 py-2 rounded-md"
              >
                View Details
              </Link>
            </div>

            {/* Gold */}
            <div className="border rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Gold</h3>
              <p className="text-2xl font-semibold mb-6">₹1999 / sq.ft</p>
              <ul className="text-gray-600 space-y-2 mb-6 text-left">
                <li>✓ Fe500 grade steel</li>
                <li>✓ Ultratech Cement</li>
                <li>✓ Premium fittings</li>
                <li className="text-gray-400">✕ Smart home features</li>
              </ul>
              <Link
                href="/packages/gold"
                className="bg-gray-800 text-white px-5 py-2 rounded-md"
              >
                View Details
              </Link>
            </div>

            {/* Platinum */}
            <div className="border-2 border-slate-700 rounded-xl p-8 shadow-lg scale-105">
              <h3 className="text-xl font-bold mb-4 text-slate-700">
                Platinum
              </h3>
              <p className="text-2xl font-semibold mb-6">
                ₹2700 / sq.ft
              </p>
              <ul className="text-gray-600 space-y-2 mb-6 text-left">
                <li>✓ Fe500D highest grade steel</li>
                <li>✓ Ultratech Premium Cement</li>
                <li>✓ Luxury designer fittings</li>
                <li>✓ Smart home automation</li>
              </ul>
              <Link
                href="#cta"
                className="bg-slate-700 text-white px-5 py-2 rounded-md"
              >
                Get Started
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        id="cta"
        className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-20 text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Experience Unmatched Luxury
          </h2>
          <p className="text-gray-200 mb-10">
            Create your dream home with our premium Platinum Package
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-white text-slate-800 font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Request Custom Quote
            </Link>

            <Link
              href="/packages"
              className="bg-green-600 px-8 py-3 rounded-md hover:bg-green-700 transition"
            >
              ← Back to Packages
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBuilding,
  FaBath,
  FaBolt,
  FaDoorOpen,
  FaUtensils,
  FaPaintRoller,
  FaShieldAlt,
  FaTruck,
  FaCogs,
  FaCheck,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Gold Package | Virinchie Hygen Engineering Consultants",
  description:
    "Premium Gold construction package with enhanced materials, luxury finishes, and 5-year warranty at ₹1999 per sq.ft.",
};

export default function GoldPackagePage() {
  return (
    <main className="font-sans text-gray-700">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gold Package
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Enhanced materials and premium features with the perfect balance
            of cost and luxury.
          </p>

          <div className="bg-yellow-400 text-gray-900 text-3xl font-bold px-10 py-4 rounded-full inline-block shadow-xl mb-8">
            ₹1999 / sq.ft
          </div>

          <div>
            <Link
              href="#cta"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md transition"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
            Premium Features
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-14">
            Our Gold Package includes high-quality materials and premium
            finishes for a luxurious result.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-yellow-500 text-4xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-blue-900">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= COMPARISON ================= */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 overflow-x-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
            Why Choose Gold?
          </h2>

          <table className="w-full bg-white rounded-lg shadow-md text-center">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">Standard</th>
                <th className="p-4">Gold Package</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4 font-semibold text-blue-900 text-left">
                    {row.feature}
                  </td>
                  <td className="p-4">{row.standard}</td>
                  <td className="p-4 text-yellow-600 font-semibold flex justify-center items-center gap-2">
                    <FaCheck /> {row.gold}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        id="cta"
        className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Dream Project?
          </h2>

          <p className="mb-8 opacity-90">
            Get started with our premium Gold Package today
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Benefit icon={<FaShieldAlt />} text="5-year warranty" />
            <Benefit icon={<FaTruck />} text="25 km radius coverage" />
            <Benefit icon={<FaCogs />} text="Customization available" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md transition"
            >
              Request Custom Quote
            </Link>

            <Link
              href="/packages"
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-md transition"
            >
              ← Back to Packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= DATA ================= */

const features = [
  {
    icon: <FaBuilding />,
    title: "Civil Works",
    desc: "Fe500 grade steel (JSW / Jai Bharat), Ultratech Cement, AAC Blocks, and premium shuttering and plaster.",
  },
  {
    icon: <FaBath />,
    title: "Bathroom",
    desc: "Premium ceramic wall & floor tiles with Jaguar / Hindware premium sanitary fixtures.",
  },
  {
    icon: <FaBolt />,
    title: "Electrical",
    desc: "Polycab premium FRLS wires, Havells switches, and extra power points.",
  },
  {
    icon: <FaDoorOpen />,
    title: "Doors & Windows",
    desc: "Hardwood frame with veneer finish and UPVC windows with better insulation.",
  },
  {
    icon: <FaUtensils />,
    title: "Kitchen",
    desc: "Granite countertop, designer tiles, and modular kitchen with chimney provision.",
  },
  {
    icon: <FaPaintRoller />,
    title: "Flooring & Painting",
    desc: "Premium vitrified tiles and Asian Royale acrylic emulsion paints.",
  },
];

const comparison = [
  { feature: "Steel Quality", standard: "Fe415", gold: "Fe500 (JSW / Jai Bharat)" },
  { feature: "Cement", standard: "ACC / Ambuja", gold: "Ultratech Cement" },
  { feature: "Electrical", standard: "Finolex/Anchor", gold: "Polycab Premium" },
  { feature: "Switches", standard: "Anchor/L&T", gold: "Havells" },
  { feature: "Sanitary", standard: "Parryware/Johnson", gold: "Jaguar/Hindware Premium" },
  { feature: "Windows", standard: "Aluminum Sliding", gold: "UPVC with Insulation" },
  { feature: "Warranty", standard: "3 Years", gold: "5 Years Extended" },
];

/* ================= BENEFIT COMPONENT ================= */

function Benefit({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="bg-white/10 px-6 py-3 rounded-full flex items-center gap-2">
      <span className="text-yellow-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

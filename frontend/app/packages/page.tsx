import type { Metadata } from "next";
import PackageCard from "@/components/packages/PackageCard";
import ComparisonTable from "@/components/packages/ComparisonTable";
import Warranty from "@/components/packages/Warranty";
import QuoteForm from "@/components/packages/QuoteForm";

export const metadata: Metadata = {
  title: "Packages | Virinchie Hygen Engineering Consultants Pvt. Ltd.",
  description:
    "House & Flat Construction Packages by Virinchie Hygen Engineering Consultants Pvt. Ltd. Choose Silver, Gold, or Platinum plans with 3-year defect warranty.",
};

export default function PackagesPage() {
  return (
    <main className="bg-slate-50">
      {/* Header */}
      <section className="py-20 text-center px-4">
        <h1 className="text-4xl font-bold text-[#1a2a6c]">
          House & Flat Construction Packages
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
          Choose from Silver, Gold, or Platinum packages tailored to your budget
          and lifestyle. All packages include a 3-year construction defect
          warranty.
        </p>
      </section>

      {/* Packages */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PackageCard
            title="Silver"
            price="₹1599"
            subtitle="Basic construction package"
            color="blue"
            features={[
              "Site Layout & Architectural Detailing",
              "Earthquake-Resistant Structure",
              "Plumbing & Electrical Drawings",
              "MS Shuttering • Fe415 Steel",
              "ACC / Ambuja Cement",
              "Standard Tile Flooring",
              "Basic Modular Kitchen",
            ]}
          />

          <PackageCard
            title="Gold"
            price="₹1999"
            subtitle="Premium construction package"
            highlight
            color="orange"
            features={[
              "Includes Silver Package Features",
              "Hardscape & Landscape Design",
              "Rainwater Harvesting System",
              "HVAC Provisions",
              "Fe500 Steel • Ultratech Cement",
              "AAC Blocks & Premium Fixtures",
              "Premium Tile Flooring",
            ]}
          />

          <PackageCard
            title="Platinum"
            price="₹2700"
            subtitle="Luxury construction package"
            color="purple"
            features={[
              "Includes Gold Package Features",
              "Double Glazed Windows",
              "Kohler / Grohe Sanitaryware",
              "Italian Marble Flooring",
              "Luxury Modular Kitchen",
              "Home Automation System",
              "Premium Woodwork & Finishes",
            ]}
          />
        </div>
      </section>

      <Warranty />

      <ComparisonTable />

      <QuoteForm />
    </main>
  );
}

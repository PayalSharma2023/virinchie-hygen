import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectGrid from "@/components/projects/ProjectGrid";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Virinchie Hygen Engineering Consultants Pvt. Ltd.",
  description:
    "Explore engineering consultancy projects by Virinchie Hygen Engineering Consultants Pvt. Ltd. including hydrology, infrastructure, environmental and GIS solutions.",
};

const projects = [
  {
    title: "Hydrological Study – River Basin",
    location: "Haryana, India",
    category: "Hydrology",
    description:
      "Comprehensive hydrological analysis including flood assessment, runoff modeling, and water resource planning.",
  },
  {
    title: "Storm Water Drainage Design",
    location: "Ambala, Haryana",
    category: "Infrastructure",
    description:
      "Design and analysis of storm water drainage systems for urban development projects.",
  },
  {
    title: "Environmental Impact Assessment",
    location: "North India",
    category: "Environment",
    description:
      "EIA study conducted for infrastructure and industrial development projects.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="text-center relative bg-black/10 py-16 mt-[-3vh] mb-8">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg.png"
            alt="background"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
        </div>

        <h1 className="text-3xl text-primary-600 font-bold">Our Projects</h1>
        <p className="mt-2 text-gray-300">
          Showcasing excellence in construction and architecture since 2018
        </p>
      </div>

      <section className="projects-page container mx-auto px-4 py-8">
        <ProjectGrid />
      </section>
    </>
  );
}

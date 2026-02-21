"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="project-detail container mx-auto px-4 py-12 max-w-4xl space-y-8">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center text-black font-semibold hover:underline"
      >
        ← Back to Projects
      </Link>

      {/* Top section: image + title */}
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <header className="space-y-2 text-center md:text-left">
        <p className="text-sm text-black font-medium">
          {project.category.replace("-", " ")}
        </p>
        <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
        <p className="text-gray-700 max-w-prose mx-auto md:mx-0">
          {project.description}
        </p>
      </header>

      {/* Project Images (3D + Actual if available) */}
      {project.images && project.images.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Project Visuals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-md bg-white"
              >
                <div className="relative h-60">
                  <Image
                    src={img.src}
                    alt={`${project.title} – ${img.label}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm font-medium text-gray-700 py-2">
                  {img.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      

      {/* Info grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-md text-sm text-gray-700">
        <div className="space-y-2">
          <p className="font-semibold text-gray-800">Location</p>
          <p>{project.location}</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-gray-800">Project Info</p>
          <p>Completed: {project.completionDate}</p>
          {project.area && <p>Area: {project.area}</p>}
        </div>
      </section>
      {project.walkthroughUrl && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Project Walkthrough
          </h2>

          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              src={project.walkthroughUrl.replace("watch?v=", "embed/")}
              title={`${project.title} Walkthrough`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* Features list (if any) */}
      {project.features && project.features.length > 0 && (
        <section className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>
      )}
      {project.planningPdf && (
        <section className="bg-gray-50 p-6 rounded-lg shadow-md space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Planning & Drawings
          </h2>

          <p className="text-gray-700">
            View detailed planning work including floor plans and technical
            drawings.
          </p>

          <a
            href={project.planningPdf.url}
            target="_blank"
            // rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 text-black font-semibold px-5 py-3 rounded-lg hover:opacity-90 transition"
          >
            📄 {project.planningPdf.label}
          </a>
        </section>
      )}

      {/* Call to action (optional) */}
      <div className="text-center">
        <Link
          href="/contact"
          className="inline-block bg-primary-600 text-black font-semibold px-6 py-3 rounded-lg  transition"
        >
          Contact for Similar Projects
        </Link>
      </div>
    </article>
  );
}

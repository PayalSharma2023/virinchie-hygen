"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: "💧",
    title: "Hydrological Modeling",
    desc: "Advanced flood, rainfall, and watershed studies using state-of-the-art simulation tools for climate-resilient planning.",
    points: [
      "Flood risk assessment & mapping",
      "HEC-HMS & HEC-RAS modeling",
      "Rainfall-runoff analysis",
      "Stormwater management design",
    ],
    link: "/services/hydrology",
  },
  {
    icon: "🌱",
    title: "Environmental Consultancy",
    desc: "Comprehensive solutions for environmental impact, sustainability planning, and green infrastructure development.",
    points: [
      "Environmental Impact Assessments (EIA)",
      "Sustainability planning & reporting",
      "Nature-based solution design",
      "Compliance documentation",
    ],
    link: "/services/environment",
  },
  {
    icon: "🌉",
    title: "Infrastructure & Structural Design",
    desc: "Specialized engineering for dams, barrages, bridges, and earthquake-resistant buildings.",
    points: [
      "Hydraulic structure design",
      "Earthquake-resistant buildings",
      "Slope stabilization solutions",
      "Infrastructure rehabilitation",
    ],
    link: "/services/infrastructure",
  },
  {
    icon: "🚰",
    title: "Water Supply & Wastewater",
    desc: "Planning, design, and optimization of water supply and sanitation systems.",
    points: [
      "Water treatment plant design",
      "Distribution network optimization",
      "Wastewater treatment solutions",
      "Recycling & reuse systems",
    ],
    link: "/services/water",
  },
  {
    icon: "♻️",
    title: "Solid Waste Management",
    desc: "Sustainable waste collection, processing, and disposal systems.",
    points: [
      "Waste collection system design",
      "Material recovery facilities",
      "Landfill design & management",
      "Waste-to-energy solutions",
    ],
    link: "/services/waste",
  },
  {
    icon: "☀️",
    title: "Renewable Energy Solutions",
    desc: "Feasibility studies and integration planning for clean energy infrastructure.",
    points: [
      "Solar energy feasibility studies",
      "Micro-hydro power assessments",
      "Wind energy potential analysis",
      "Hybrid system design",
    ],
    link: "/services/energy",
  },
  {
    icon: "📊",
    title: "Project Management & Consultancy",
    desc: "Comprehensive project oversight for government and private clients.",
    points: [
      "Feasibility studies & DPR",
      "Contract management",
      "Quality assurance & control",
      "Technical advisory services",
    ],
    link: "/services/pmc",
  },
  {
    icon: "🗺️",
    title: "GIS & Remote Sensing",
    desc: "Precision mapping and spatial analysis using advanced geospatial tools.",
    points: [
      "Spatial database development",
      "Land-use / land-cover mapping",
      "DEM processing & analysis",
      "Web GIS application development",
    ],
    link: "/services/gis",
  },
  {
    icon: "⚙️",
    title: "Custom Engineering Solutions",
    desc: "Tailored solutions for mountainous and environmentally sensitive regions.",
    points: [
      "Site-specific engineering designs",
      "Adaptation to local conditions",
      "Multi-disciplinary integration",
      "Innovative problem-solving",
    ],
    link: "/contact",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white">
        <Image
          src="/services-hero.jpg"
          alt="Engineering Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a2a6c]/90" />
        <div className="relative px-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Our Engineering Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Innovative solutions for resilient infrastructure and sustainable development
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2a6c]" data-aos="fade-up">
            Explore Our Expertise
          </h2>
          <p
            className="text-center text-gray-600 max-w-3xl mx-auto mt-4 mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Smart, sustainable, and data-driven engineering solutions tailored for challenging environments
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-8 hover:-translate-y-2 transition"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-[#1a2a6c] mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 mb-4">{s.desc}</p>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#4CAF50]">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={s.link}
                  className="text-[#4CAF50] font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div
          className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-[#1a2a6c] mb-4">
            Need Expert Engineering Solutions?
          </h2>
          <p className="text-gray-600 mb-6">
            Partner with Virinchie Hygen Engineering Consultants for reliable,
            sustainable, and innovative solutions.
          </p>
          <Link
            href="/contact"
            className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3d8b40]"
          >
            Contact Our Team
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            📞 +91 7018167926 &nbsp; | &nbsp; ✉️ info@virinchiehygen.com
          </p>
        </div>
      </section>
    </>
  );
}

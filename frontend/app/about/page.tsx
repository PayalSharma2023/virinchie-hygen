"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about.jpg"
            alt="Engineering Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1a2a6c]/90" />
        </div>

        <div className="max-w-7xl mx-auto px-6" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Building Resilient Futures
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Trusted Civil & Environmental Engineering Experts
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="bg-gradient-to-r from-green-500 to-[#6abbfe] px-6 py-3 rounded-lg font-semibold text-center hover:bg-[#3d8b40]"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#1a2a6c] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-[#1a2a6c] mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4">
              Virinchie Hygen Engineering Consultants Pvt. Ltd., based in Shimla,
              delivers sustainable and innovative solutions in civil and
              environmental engineering.
            </p>
            <p className="text-gray-600 mb-6">
              From hydrological modeling to GIS-based studies, we combine global
              standards with local expertise.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#1a2a6c] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#152053]"
            >
              Learn More About Us
            </Link>
          </div>

          <div
            className="relative h-[420px] rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <Image
              src="/about-team.jpg"
              alt="Engineering Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
  {/* Decorative Blur */}
  <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-[120px]" />
  <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-sky-200/30 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Our Foundation
      </h2>
      <p className="text-lg text-slate-600">
        The guiding principles that shape our strategy, culture, and engineering excellence.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: "Our Mission",
          text: "To deliver sustainable, cost-effective and innovative engineering solutions that create measurable impact.",
          icon: "🌱",
        },
        {
          title: "Our Vision",
          text: "To become a leading engineering consultancy in India, recognized for resilience-driven infrastructure.",
          icon: "🔭",
        },
        {
          title: "Our Values",
          text: "Sustainability • Innovation • Integrity • Client Focus",
          icon: "🤝",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3"
          data-aos="fade-up"
          data-aos-delay={i * 150}
        >
          {/* Icon Badge */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-2xl mb-6 group-hover:bg-[#1a2a6c] group-hover:text-white transition-colors duration-300">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            {item.title}
          </h3>

          <p className="text-slate-600 leading-relaxed">
            {item.text}
          </p>

          {/* Subtle Accent Line */}
          <div className="mt-6 w-10 h-[3px] bg-[#6abbfe] group-hover:w-16 transition-all duration-300" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* STATS */}
      <section className="bg-[#1a2a6c] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            ["40+", "Years of Rainfall Data"],
            ["25+", "Major Projects Delivered"],
            ["50+", "Clients Across India"],
            ["100%", "Sustainability Focus"],
          ].map(([num, label], i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur p-6 rounded-xl"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <h2 className="text-4xl font-extrabold mb-2">{num}</h2>
              <p className="text-gray-200">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div
          className="bg-white rounded-xl shadow-lg p-12 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-[#1a2a6c] mb-4">
            Let’s Build Something Sustainable Together
          </h2>
          <p className="text-gray-600 mb-6">
            Partner with Virinchie Hygen for future-ready engineering solutions.
          </p>
          <Link
            href="/contact"
            className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3d8b40]"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

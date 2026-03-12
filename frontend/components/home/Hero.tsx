"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Metrics from "./Metrics";

const SPECIALIZATIONS = [
  "Hydrology Solutions",
  "Environmental Engineering",
  "Civil Infrastructure",
  "Mountain City Planning",
  "Flood Risk Assessment",
  "Water Resource Management",
];

function useTypewriter(words: string[], speed = 60, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  useEffect(() => {
    setDisplayed(words[wordIndex].slice(0, charIndex));
  }, [charIndex, wordIndex, words]);

  return displayed;
}

const ORBS = [
  { w: 300, h: 300, left: "10%", top: "20%", dur: "18s", delay: "0s",  o: 0.12 },
  { w: 200, h: 200, left: "70%", top: "10%", dur: "22s", delay: "3s",  o: 0.1  },
  { w: 150, h: 150, left: "80%", top: "60%", dur: "16s", delay: "6s",  o: 0.08 },
  { w: 100, h: 100, left: "20%", top: "70%", dur: "20s", delay: "9s",  o: 0.1  },
  { w: 80,  h: 80,  left: "50%", top: "80%", dur: "14s", delay: "2s",  o: 0.07 },
];

export default function Hero() {
  const typed    = useTypewriter(SPECIALIZATIONS);
  const heroRef  = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      const { width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
      const x = (clientX / width  - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      const bg = hero.querySelector<HTMLElement>(".hero-bg");
      if (bg) bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    };
    const handleLeave = () => {
      const bg = hero.querySelector<HTMLElement>(".hero-bg");
      if (bg) bg.style.transform = `translate(0, 0) scale(1.05)`;
    };
    hero.addEventListener("mousemove", handleMouse);
    hero.addEventListener("mouseleave", handleLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMouse);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#f0f7ff] dark:bg-slate-950"
    >
      {/* Background image */}
      <div
        className="hero-bg absolute inset-[-5%] transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('./bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.05) saturate(0.8)",
        }}
      />

      {/* Overlay — light vs dark */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-white/75 to-teal-50/85 dark:from-slate-950/95 dark:via-slate-900/90 dark:to-slate-950/95" />

      {/* Diagonal band */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/4 -right-1/4 w-[70%] h-[150%] opacity-30 dark:opacity-10"
          style={{
            background: "linear-gradient(135deg, #bae6fd 0%, #e0f2fe 40%, transparent 70%)",
            transform: "rotate(-15deg)",
          }}
        />
      </div>

      {/* Floating orbs */}
      {mounted && ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.w, height: orb.h, left: orb.left, top: orb.top,
            background: `radial-gradient(circle, rgba(14,165,233,${orb.o}) 0%, transparent 70%)`,
            animation: `floatOrb ${orb.dur} ${orb.delay} ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 py-4 px-6 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-sky-200 dark:border-sky-700 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Engineering Excellence Since 2022
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-slate-800 dark:text-white"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: "-0.02em" }}
        >
          Transforming{" "}
          <span className="relative inline-block">
            <span className="text-sky-500 dark:text-sky-400">Infrastructure</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M0 8 Q75 0 150 8 Q225 16 300 8" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </span>
          <br />
          for a Resilient Tomorrow
        </h1>

        {/* Typewriter */}
        <div className="h-8 flex items-center justify-center mb-6">
          <p className="text-lg md:text-xl font-medium text-sky-600 dark:text-sky-400">
            {typed}
            <span className="inline-block w-0.5 h-5 bg-sky-400 ml-0.5 animate-pulse align-middle" />
          </p>
        </div>

        {/* Subtext */}
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Hydrology, Environmental, and Civil solutions tailored for mountain cities and beyond.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-sky-200 dark:shadow-sky-900/50 hover:shadow-sky-300 transition-all duration-200 hover:-translate-y-0.5"
          >
            Explore Services
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-sm text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-600 hover:border-slate-300 px-7 py-3.5 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        <Metrics />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500 text-xs">
        <span className="uppercase tracking-widest text-[10px]">Scroll</span>
        <div className="w-5 h-8 border-2 border-slate-300 dark:border-slate-600 rounded-full flex items-start justify-center pt-1">
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatOrb {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -40px) scale(1.1); }
        }
      `}</style>
    </section>
  );
}
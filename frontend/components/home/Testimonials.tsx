'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Suresh Thakur',
    role: 'Residential Client',
    company: 'Shimla',
    content:
      'Virinchie Hygen transformed our home renovation project with professionalism and precision. Their team communicated clearly at every step and delivered exceptional results.',
    rating: 5,
    image: '/testimonials/client-1.jpg',
    initials: 'ST',
    color: 'from-sky-400 to-cyan-400',
  },
  {
    name: 'Anita Verma',
    role: 'Commercial Client',
    company: 'Himachal Enterprises',
    content:
      'We engaged Virinchie Hygen for our office expansion planning. The engineering consultancy and execution were outstanding — timely, cost-effective, and highly efficient.',
    rating: 5,
    image: '/testimonials/client-4.jpg',
    initials: 'AV',
    color: 'from-teal-400 to-emerald-400',
  },
  {
    name: 'Rohan Mehta',
    role: 'Project Manager',
    company: 'Urban Infrastructure Ltd.',
    content:
      'Their team brought deep technical insight and meticulous planning to our infrastructure project. We appreciated their professional approach and follow-through.',
    rating: 5,
    image: '/testimonials/client-3.jpg',
    initials: 'RM',
    color: 'from-blue-400 to-indigo-400',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = (index: number) => {
    if (index === activeIndex || animating) return
    setAnimating(true)
    setTimeout(() => {
      setActiveIndex(index)
      setAnimating(false)
    }, 200)
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((activeIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [activeIndex])

  const t = testimonials[activeIndex]

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-sky-50/40 overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-100/50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-100/50 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Header */}
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          Client Stories
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-12"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          What Our{" "}
          <span className="relative inline-block">
            <span className="text-sky-500">Clients Say</span>
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M0 5 Q50 0 100 5 Q150 10 200 5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </span>
        </h2>

        {/* Card */}
        <div
          className={`relative bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-lg shadow-slate-100/80 transition-all duration-200 ${
            animating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Large quote mark */}
          <div className="absolute top-6 left-8 text-6xl leading-none text-sky-100 font-serif select-none">"</div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(t.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Content */}
          <p className="text-slate-600 text-base md:text-lg leading-relaxed italic mb-8 relative z-10">
            "{t.content}"
          </p>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br flex items-center justify-center shadow-sm">
              {/* Fallback gradient avatar */}
              <div className={`w-full h-full bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">{t.initials}</span>
              </div>
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
              />
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
              <p className="text-xs text-slate-400">{t.role} · {t.company}</p>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'bg-sky-400 w-8 h-2'
                  : 'bg-slate-200 hover:bg-slate-300 w-2 h-2'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail row */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((item, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`transition-all duration-300 rounded-xl text-xs font-medium px-3 py-1.5 border ${
                index === activeIndex
                  ? 'bg-sky-50 text-sky-600 border-sky-200'
                  : 'bg-white text-slate-400 border-slate-100 hover:border-sky-100'
              }`}
            >
              {item.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
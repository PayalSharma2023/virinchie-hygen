'use client'

import { useEffect, useState, useRef } from 'react'

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    color: 'from-sky-400 to-cyan-400',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    text: 'text-sky-600',
  },
  {
    value: 6,
    suffix: ' Yrs',
    label: 'Years of Experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    color: 'from-teal-400 to-emerald-400',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
    text: 'text-teal-600',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Happy Clients',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75Zm4.5 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
      </svg>
    ),
    color: 'from-blue-400 to-sky-400',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    text: 'text-blue-600',
  },
  {
    value: 10,
    suffix: '+',
    label: 'Expert Team Members',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    color: 'from-indigo-400 to-blue-400',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    text: 'text-indigo-600',
  },
]

export default function Metrics() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 max-w-6xl mx-auto"
    >
      {/* Section label */}
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-4 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          Our Track Record
        </span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`group relative ${stat.bg} border ${stat.border} rounded-2xl p-6 md:p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Background gradient blob on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white shadow-sm ${stat.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {stat.icon}
            </div>

            {/* Number */}
            <div
              className="text-4xl md:text-5xl font-bold text-slate-800 leading-none mb-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {isVisible ? (
                <CountUp end={stat.value} suffix={stat.suffix} delay={index * 150} />
              ) : (
                <>0{stat.suffix}</>
              )}
            </div>

            {/* Label */}
            <div className="text-sm font-medium text-slate-500 leading-snug">{stat.label}</div>

            {/* Animated bottom accent */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-1/2 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-500`} />
          </div>
        ))}
      </div>
    </section>
  )
}

function CountUp({ end, suffix, delay = 0 }: { end: number; suffix: string; delay?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let start = 0
      const duration = 1800
      const stepTime = 16
      const increment = end / (duration / stepTime)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, stepTime)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [end, delay])

  return <>{count}{suffix}</>
}
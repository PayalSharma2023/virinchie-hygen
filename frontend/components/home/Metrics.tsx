'use client'

import { useEffect, useState, useRef } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 6, suffix: ' Years', label: 'Experience' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Expert Team' },
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-b shadow-md from-slate-50 to-white rounded-3xl shadow-lg max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex-1 bg-[#c4eeffaa] rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 md:p-8 text-center"
        >
          <div className="text-4xl md:text-5xl font-bold text-[#1a2a6c]">
            {isVisible ? <CountUp end={stat.value} suffix={stat.suffix} /> : <>0{stat.suffix}</>}
          </div>
          <div className="text-md md:text-lg font-medium text-gray-600 mt-2">{stat.label}</div>
          {/* Accent underline */}
          {/* <div className="mt-4 w-12 h-[3px] bg-[#6abbfe] mx-auto rounded-full" /> */}
        </div>
      ))}
    </section>
  )
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
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
  }, [end])

  return (
    <>
      {count}
      {suffix}
    </>
  )
}
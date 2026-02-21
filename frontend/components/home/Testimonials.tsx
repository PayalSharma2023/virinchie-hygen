'use client'

import { useState } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    company: 'Ambala',
    content:
      'Dmaan Group built our dream home beyond expectations. Their attention to detail and commitment to quality is exceptional. Highly recommended!',
    rating: 5,
    image: '/testimonials/client-1.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Business Owner',
    company: 'Haryana',
    content:
      'Professional team, excellent communication, and delivered our commercial space on time. Very satisfied with their construction services.',
    rating: 5,
    image: '/testimonials/client-4.jpg',
  },
  {
    name: 'Amit Singh',
    role: 'Architect',
    company: 'Chandigarh',
    content:
      'Working with Dmaan Group has been a pleasure. They understand architecture and execute projects with precision and care.',
    rating: 5,
    image: '/testimonials/client-3.jpg',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-16 px-6 text-center">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
      <p className="text-lg text-gray-600 mb-8">
        Real feedback from satisfied customers
      </p>

      {/* Testimonial Card */}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Image */}
        <div className="w-24 h-24 mx-auto mb-4 relative">
          <Image
            src={activeTestimonial.image}
            alt={activeTestimonial.name}
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Rating Stars */}
        <div className="flex justify-center gap-1 mb-4 text-yellow-400 text-xl">
          {[...Array(activeTestimonial.rating)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        {/* Content */}
        <p className="text-gray-700 italic mb-6">
          &quot;{activeTestimonial.content}&quot;
        </p>

        {/* Name/Role */}
        <p className="text-lg font-semibold">
          {activeTestimonial.name}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {activeTestimonial.role} • {activeTestimonial.company}
        </p>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all rounded-full ${
              index === activeIndex
                ? 'bg-primary-600 w-6 h-2'
                : 'bg-gray-300 w-2 h-2'
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState, FormEvent } from "react"

const services = [
  "Hydrological & Hydraulic Studies",
  "Environmental Consultancy",
  "GIS & Remote Sensing",
  "Civil Infrastructure Design",
  "Water Supply & Wastewater",
  "Solid Waste Management",
  "Renewable Energy Solutions",
  "Project Management & Consultancy",
  "Disaster Risk Reduction",
  "Custom Engineering Solutions",
]

const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition-all duration-200"
const labelClass = "block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/60 p-8">
      <div className="mb-7">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          Get in Touch
        </span>
        <h2 className="text-2xl font-bold text-slate-800" style={{ fontFamily: "'Georgia', serif" }}>
          Send Us a Message
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name + Phone row */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name <span className="text-rose-400">*</span></label>
            <input
              type="text" id="name" required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass} placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number <span className="text-rose-400">*</span></label>
            <input
              type="tel" id="phone" required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass} placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>Email Address <span className="text-rose-400">*</span></label>
          <input
            type="email" id="email" required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass} placeholder="your@email.com"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClass}>Service Required <span className="text-rose-400">*</span></label>
          <select
            id="service" required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className={`${inputClass} ${!formData.service ? "text-slate-400" : "text-slate-800"}`}
          >
            <option value="" disabled>Select a service…</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>Message <span className="text-rose-400">*</span></label>
          <textarea
            id="message" required rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your project, location, and requirements…"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full inline-flex items-center justify-center gap-2 bg-[#210568] hover:bg-[#01589e] disabled:bg-slate-300 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-100/60 transition-all duration-200 hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>

        {/* Status messages */}
        {status === "success" && (
          <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm px-4 py-3 rounded-xl">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Thank you! We'll be in touch with you shortly.
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-3 bg-rose-50 border border-rose-100 text-rose-600 text-sm px-4 py-3 rounded-xl">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            Something went wrong. Please try again or call us directly.
          </div>
        )}
      </form>
    </div>
  )
}
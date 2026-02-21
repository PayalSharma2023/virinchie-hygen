"use client"

import { useState, FormEvent } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage("Thank you! We will contact you soon.")
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setSubmitMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Send us a Message</h2>

      <div>
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div>
        <label htmlFor="service">Service Required *</label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
        >
          <option value="">Select a service</option>
          <option value="Architecture Design">Architecture Design</option>
          <option value="Construction">Construction</option>
          <option value="Modular Kitchen">Modular Kitchen</option>
          <option value="Renovation">Renovation</option>
          <option value="Consultation">Consultation</option>
        </select>
      </div>

      <div>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-primary-600 text-black rounded-lg"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitMessage && <p className="text-sm text-center mt-2">{submitMessage}</p>}
    </form>
  )
}

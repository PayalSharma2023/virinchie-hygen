import { COMPANY_INFO } from "@/lib/constants"
import Link from "next/link"

const contactItems = [
  {
    label: "Address",
    color: "from-sky-400 to-cyan-400",
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    color: "from-teal-400 to-emerald-400",
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    color: "from-blue-400 to-indigo-400",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    color: "from-amber-400 to-orange-400",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
]

export default function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 bg-sky-50 border border-sky-100 px-3 py-1.5 rounded-full mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          Contact Details
        </span>
        <p className="text-slate-500 text-sm leading-relaxed">
          We'd love to hear from you — whether it's a question, quote request, or general inquiry.
        </p>
      </div>

      {/* Address */}
      <div className={`group flex items-start gap-4 ${contactItems[0].bg} border ${contactItems[0].border} rounded-2xl p-5 hover:shadow-md transition-all duration-200`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm ${contactItems[0].text} flex items-center justify-center`}>
          {contactItems[0].icon}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-0.5">Address</p>
          <p className="text-sm text-slate-700 leading-relaxed">
            {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city},{" "}
            {COMPANY_INFO.address.state}
            <br />
            {COMPANY_INFO.address.pincode}, {COMPANY_INFO.address.country}
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className={`group flex items-start gap-4 ${contactItems[1].bg} border ${contactItems[1].border} rounded-2xl p-5 hover:shadow-md transition-all duration-200`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm ${contactItems[1].text} flex items-center justify-center`}>
          {contactItems[1].icon}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-0.5">Phone</p>
          <Link
            href={`tel:${COMPANY_INFO.phone}`}
            className="text-sm text-slate-700 hover:text-teal-600 transition-colors duration-200 font-medium"
          >
            {COMPANY_INFO.phone}
          </Link>
        </div>
      </div>

      {/* Email */}
      <div className={`group flex items-start gap-4 ${contactItems[2].bg} border ${contactItems[2].border} rounded-2xl p-5 hover:shadow-md transition-all duration-200`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm ${contactItems[2].text} flex items-center justify-center`}>
          {contactItems[2].icon}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-0.5">Email</p>
          <Link
            href={`mailto:${COMPANY_INFO.email}`}
            className="text-sm text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium break-all"
          >
            {COMPANY_INFO.email}
          </Link>
        </div>
      </div>

      {/* Business Hours */}
      <div className={`group flex items-start gap-4 ${contactItems[3].bg} border ${contactItems[3].border} rounded-2xl p-5 hover:shadow-md transition-all duration-200`}>
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm ${contactItems[3].text} flex items-center justify-center`}>
          {contactItems[3].icon}
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-1.5">Business Hours</p>
          <div className="space-y-1 text-sm text-slate-700">
            <div className="flex justify-between gap-6">
              <span className="text-slate-500">Weekdays</span>
              <span className="font-medium">{COMPANY_INFO.businessHours?.weekdays}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-slate-500">Saturday</span>
              <span className="font-medium">{COMPANY_INFO.businessHours?.saturday}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="text-slate-500">Sunday</span>
              <span className="font-medium">{COMPANY_INFO.businessHours?.sunday}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
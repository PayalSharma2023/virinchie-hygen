"use client";

import { useState, FormEvent, ChangeEvent, FocusEvent } from "react";

const SERVICES = [
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
];

const EMPTY: FormData = { name: "", email: "", phone: "", service: "", message: "" };

interface FormData { name: string; email: string; phone: string; service: string; message: string; }
type FormErrors = Partial<Record<keyof FormData, string>>;
type Touched    = Partial<Record<keyof FormData, boolean>>;

function validatePhone(v: string): string | null {
  const cleaned = v.replace(/[\s\-()]/g, "");
  if (!cleaned) return "Mobile number is required.";
  if (!/^\+?\d+$/.test(cleaned)) return "Digits only, please.";
  const digits = cleaned.replace(/^\+91/, "");
  if (digits.length !== 10) return "Enter a valid 10-digit Indian mobile number.";
  if (!/^[6-9]/.test(digits)) return "Mobile numbers start with 6, 7, 8 or 9.";
  return null;
}

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.name.trim()) e.name = "Full name is required.";
  if (!d.email.trim()) e.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = "Enter a valid email address.";
  const phoneErr = validatePhone(d.phone);
  if (phoneErr) e.phone = phoneErr;
  if (!d.service) e.service = "Please select a service.";
  if (!d.message.trim()) e.message = "Message is required.";
  return e;
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-red-500 dark:text-red-400 text-xs mt-1.5" role="alert">
      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
      {msg}
    </p>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full px-4 py-3 rounded-xl border text-slate-800 dark:text-slate-100 text-sm",
    "placeholder:text-slate-400 dark:placeholder:text-slate-500",
    "focus:outline-none focus:ring-2 transition-all duration-200",
    hasError
      ? "border-red-300 dark:border-red-700 bg-red-50/40 dark:bg-red-900/20 focus:ring-red-300 dark:focus:ring-red-700 focus:border-red-400 dark:focus:border-red-600"
      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-sky-300 dark:focus:ring-sky-700 focus:border-sky-400 dark:focus:border-sky-600",
  ].join(" ");
}

const labelCls = "block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [submitting, setSubmitting] = useState(false);
  const [apiStatus, setApiStatus] = useState<"idle" | "success" | "error">("idle");
  const [apiMsg, setApiMsg] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "phone") {
      newValue = value.replace(/\D/g, "");
      if (newValue.length > 10) return;
    }
    const updated = { ...form, [name]: newValue };
    setForm(updated);
    if (touched[name as keyof FormData]) setErrors(validate(updated));
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const name = e.target.name as keyof FormData;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, service: true, message: true });
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSubmitting(true);
    setApiStatus("idle");
    setApiMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        setApiStatus("success");
        setForm(EMPTY);
        setTouched({});
        setErrors({});
      } else {
        setApiStatus("error");
        setApiMsg(body?.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setApiStatus("error");
      setApiMsg("Network error — please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── Success ─────────────────────────────────────────────────────────────────
  if (apiStatus === "success") {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-100/60 dark:shadow-black/30 p-10 text-center">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>
          Message Sent!
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
          Thank you for reaching out. We'll get back to you within one business day.
        </p>
        <button
          onClick={() => setApiStatus("idle")}
          className="text-sm font-semibold text-[#210568] dark:text-sky-400 hover:text-[#01589e] dark:hover:text-sky-300 transition-colors"
        >
          Send another message →
        </button>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-100/60 dark:shadow-black/30 p-8">
      <div className="mb-7">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-500 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/30 border border-sky-100 dark:border-sky-800/50 px-3 py-1.5 rounded-full mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          Get in Touch
        </span>
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white" style={{ fontFamily: "'Georgia', serif" }}>
          Send Us a Message
        </h2>
        <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">We typically respond within one business day.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelCls}>Full Name <span className="text-rose-400">*</span></label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} onBlur={handleBlur}
              placeholder="Er. Ramesh Sharma" className={inputCls(!!(errors.name && touched.name))} />
            <FieldError msg={touched.name ? errors.name : undefined} />
          </div>
          <div>
            <label htmlFor="phone" className={labelCls}>Mobile Number <span className="text-rose-400">*</span></label>
            <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur}
              placeholder="+91 98765 43210" maxLength={10} className={inputCls(!!(errors.phone && touched.phone))} />
            {touched.phone && errors.phone
              ? <FieldError msg={errors.phone} />
              : <p className="text-slate-400 dark:text-slate-500 text-xs mt-1.5">10-digit Indian mobile number</p>
            }
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>Email Address <span className="text-rose-400">*</span></label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
            placeholder="you@example.com" className={inputCls(!!(errors.email && touched.email))} />
          <FieldError msg={touched.email ? errors.email : undefined} />
        </div>

        <div>
          <label htmlFor="service" className={labelCls}>Service Required <span className="text-rose-400">*</span></label>
          <select id="service" name="service" value={form.service} onChange={handleChange} onBlur={handleBlur}
            className={`${inputCls(!!(errors.service && touched.service))} ${!form.service ? "text-slate-400 dark:text-slate-500" : "text-slate-800 dark:text-slate-100"}`}>
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <FieldError msg={touched.service ? errors.service : undefined} />
        </div>

        <div>
          <label htmlFor="message" className={labelCls}>Message <span className="text-rose-400">*</span></label>
          <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} onBlur={handleBlur}
            placeholder="Describe your project, location, and requirements…"
            className={`${inputCls(!!(errors.message && touched.message))} resize-none`} />
          <FieldError msg={touched.message ? errors.message : undefined} />
        </div>

        <button type="submit" disabled={submitting}
          className="group w-full inline-flex items-center justify-center gap-2 bg-[#210568] hover:bg-[#01589e] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5">
          {submitting ? (
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
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </>
          )}
        </button>

        {apiStatus === "error" && (
          <div className="flex items-start gap-3 bg-rose-50 dark:bg-rose-900/30 border border-rose-100 dark:border-rose-800/50 text-rose-600 dark:text-rose-400 text-sm px-4 py-3 rounded-xl" role="alert">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <span>{apiMsg || "Something went wrong. Please try again or call us directly."}</span>
          </div>
        )}
      </form>
    </div>
  );
}
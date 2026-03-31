"use client";

import { useState, useEffect, FormEvent, ChangeEvent, FocusEvent } from "react";

interface Job {
  title: string;
  location: string;
  type: string;
  experience: string;
  category: string;
}

interface Props {
  job: Job | null;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  resumeLink: string;
  message: string;
}

type Errors  = Partial<Record<keyof FormData, string>>;
type Touched = Partial<Record<keyof FormData, boolean>>;

const EMPTY: FormData = { name: "", email: "", phone: "", experience: "", resumeLink: "", message: "" };

function validatePhone(v: string): string | null {
  const d = v.replace(/\D/g, "");
  if (!d) return "Phone number is required.";
  if (d.length !== 10) return "Enter a valid 10-digit mobile number.";
  if (!/^[6-9]/.test(d)) return "Must start with 6, 7, 8, or 9.";
  return null;
}

function validate(f: FormData): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Full name is required.";
  if (!f.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email.";
  const pe = validatePhone(f.phone);
  if (pe) e.phone = pe;
  if (!f.experience.trim()) e.experience = "Years of experience is required.";
  return e;
}

function inputCls(err: boolean) {
  return [
    "w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 dark:text-slate-100",
    "placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-all duration-200",
    err
      ? "border-red-300 dark:border-red-700 bg-red-50/40 dark:bg-red-900/20 focus:ring-red-300 dark:focus:ring-red-700"
      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 focus:ring-sky-300 dark:focus:ring-sky-700 focus:border-sky-400 dark:focus:border-sky-600",
  ].join(" ");
}

const labelCls = "block text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1.5";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 text-red-500 dark:text-red-400 text-xs mt-1.5" role="alert">
      <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
      {msg}
    </p>
  );
}

export default function JobApplyModal({ job, onClose }: Props) {
  const [form, setForm]         = useState<FormData>(EMPTY);
  const [errors, setErrors]     = useState<Errors>({});
  const [touched, setTouched]   = useState<Touched>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus]     = useState<"idle" | "success" | "error">("idle");
  const [apiMsg, setApiMsg]     = useState("");

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Escape key closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Reset form when a new job is passed in
  useEffect(() => {
    setForm(EMPTY);
    setErrors({});
    setTouched({});
    setStatus("idle");
  }, [job]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    let v = value;
    if (name === "phone") {
      v = value.replace(/\D/g, "").slice(0, 10);
    }
    const updated = { ...form, [name]: v };
    setForm(updated);
    if (touched[name as keyof FormData]) setErrors(validate(updated));
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as keyof FormData;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(form));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const allTouched: Touched = { name: true, email: true, phone: true, experience: true, resumeLink: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, position: job?.title }),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setForm(EMPTY);
        setTouched({});
      } else {
        setStatus("error");
        setApiMsg(body?.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setApiMsg("Network error — please check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!job) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Panel */}
      <div className="relative max-w-7xl sm:max-w-lg max-h-[92dvh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-white dark:bg-slate-900 shadow-2xl dark:shadow-black/60 flex flex-col">

        {/* Header */}
        <div className="sticky mt-2 top-0 z-10 flex items-start justify-between gap-4 px-6 pt-6 pb-4 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-sky-500 dark:text-sky-400 mb-1">Apply Now</p>
            <h2 className="text-lg font-bold text-slate-800 dark:text-white leading-snug truncate" style={{ fontFamily: "'Georgia', serif" }}>
              {job.title}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
              <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {job.location}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {job.experience}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">{job.type}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 flex-1">

          {/* Success state */}
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2" style={{ fontFamily: "'Georgia', serif" }}>Application Sent!</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto leading-relaxed mb-6">
                We've received your application for <strong className="text-slate-700 dark:text-slate-200">{job.title}</strong>. We'll be in touch within 3–5 business days.
              </p>
              <button onClick={onClose} className="text-sm font-semibold text-[#210568] dark:text-sky-400 hover:text-[#01589e] dark:hover:text-sky-300 transition-colors">
                Close →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">

              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Full Name <span className="text-rose-400">*</span></label>
                  <input name="name" type="text" value={form.name} onChange={handleChange} onBlur={handleBlur}
                    placeholder="" className={inputCls(!!(errors.name && touched.name))} />
                  <FieldError msg={touched.name ? errors.name : undefined} />
                </div>
                <div>
                  <label className={labelCls}>Mobile <span className="text-rose-400">*</span></label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur}
                    placeholder="" maxLength={10} className={inputCls(!!(errors.phone && touched.phone))} />
                  <FieldError msg={touched.phone ? errors.phone : undefined} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelCls}>Email Address <span className="text-rose-400">*</span></label>
                <input name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur}
                  placeholder="" className={inputCls(!!(errors.email && touched.email))} />
                <FieldError msg={touched.email ? errors.email : undefined} />
              </div>

              {/* Experience */}
              <div>
                <label className={labelCls}>Years of Experience <span className="text-rose-400">*</span></label>
                <input name="experience" type="text" value={form.experience} onChange={handleChange} onBlur={handleBlur}
                  placeholder={`e.g. 3 years — role requires ${job.experience}`}
                  className={inputCls(!!(errors.experience && touched.experience)) + " p-2"} />
                <FieldError msg={touched.experience ? errors.experience : undefined} />
              </div>

              {/* Resume Link */}
              <div>
                <label className={labelCls}>Resume / Portfolio Link</label>
                <input name="resumeLink" type="url" value={form.resumeLink} onChange={handleChange} onBlur={handleBlur}
                  placeholder=""
                  className={inputCls(false)} />
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5">Google Drive, Dropbox, LinkedIn, or any public link</p>
              </div>

              {/* Cover note */}
              <div>
                <label className={labelCls}>Cover Note</label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange} onBlur={handleBlur}
                  placeholder="Briefly describe your relevant experience and why you'd be a great fit…"
                  className={`${inputCls(false)} resize-none p-2`} />
              </div>

              {/* API error */}
              {status === "error" && (
                <div className="flex items-start gap-3 bg-rose-50 dark:bg-rose-900/30 border border-rose-100 dark:border-rose-800/50 text-rose-600 dark:text-rose-400 text-sm px-4 py-3 rounded-xl" role="alert">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                  <span>{apiMsg || "Something went wrong. Please try again."}</span>
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={submitting}
                className="group w-full inline-flex items-center justify-center gap-2 bg-[#210568] hover:bg-[#01589e] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 disabled:hover:translate-y-0">
                {submitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Application
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 dark:text-slate-500 pb-1">
                By submitting, you agree to share your information with Virinchie Hygen for recruitment purposes.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
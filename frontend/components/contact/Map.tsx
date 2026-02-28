"use client";

export default function MapWithDirections() {
  const destination = encodeURIComponent(
    "First Floor, adj. Petrol pump, Defence Colony, Ambala Cantt, Haryana 133010, India"
  );

  return (
    <div className="space-y-4">
      {/* Map */}
      <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
        {/* Label overlay */}
        <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-xl px-3 py-2 shadow-sm">
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400">Our Office</p>
          <p className="text-xs font-semibold text-slate-700">Shimla, Himachal Pradesh</p>
        </div>

        <iframe
          title="Virinchie Hygen Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.428123214017!2d76.86283631508407!3d30.385656981833007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391041ecfe3a521f%3A0x83447e02caaa8a03!2sDefence%20Colony%2C%20Ambala%20Cantt%2C%20Haryana%20133010!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Directions button */}
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${destination}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-slate-700 hover:text-sky-600 px-5 py-3 rounded-xl font-semibold text-sm shadow-sm transition-all duration-200"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
        Get Directions on Google Maps
        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>
  );
}
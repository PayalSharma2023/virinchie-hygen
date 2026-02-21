'use client';

export default function MapWithDirections() {
  const destination = encodeURIComponent(
    "First Floor, adj. Petrol pump, Defence Colony, Ambala Cantt, Haryana 133010, India"
  );

  return (
    <section className="space-y-4">
      {/* Map iframe */}
      <div className="w-full h-[200px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Office Location – Dmaan Group"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.428123214017!2d76.86283631508407!3d30.385656981833007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391041ecfe3a521f%3A0x83447e02caaa8a03!2sDefence%20Colony%2C%20Ambala%20Cantt%2C%20Haryana%20133010!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Directions button */}
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${destination}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-primary-600 text-black font-semibold rounded-lg shadow transition"
      >
        Get Directions
      </a>
    </section>
  );
}

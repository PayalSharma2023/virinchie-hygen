const services = [
  {
    title: "Hydrological & Hydraulic Studies",
    badge: "💧 Hydrology",
    desc: "Flood modeling, stormwater design, and hydrological analysis.",
  },
  {
    title: "Environmental Consultancy",
    badge: "🌍 Environment",
    desc: "EIA/EMP, climate resilience, and compliance documentation.",
  },
  {
    title: "GIS & Remote Sensing",
    badge: "🛰️ GIS",
    desc: "DEM processing, mapping, and land-use analytics.",
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">What We Do</h2>
        <p className="text-center max-w-3xl mx-auto text-gray mb-12">
          End-to-end consulting grounded in sustainability.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-8 shadow-card rounded">
              <span className="inline-block mb-4 text-secondary font-semibold">
                {s.badge}
              </span>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

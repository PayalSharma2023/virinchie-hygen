import { Leaf, Lightbulb, Handshake } from "lucide-react";

export default function Values() {
  const values = [
    {
      title: "Sustainability",
      description:
        "We design solutions that protect communities and nature for generations to come, ensuring long-term environmental balance.",
      icon: <Leaf className="w-8 h-8" />,
    },
    {
      title: "Innovation",
      description:
        "From advanced GIS to hydrological modeling, we leverage cutting-edge tools to deliver engineering excellence.",
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      title: "Collaboration",
      description:
        "We work hand-in-hand with stakeholders, ensuring trust and transparency throughout every project lifecycle.",
      icon: <Handshake className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Values & What Drives Us
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
          The principles guiding our engineering decisions and long-term
          impact.
        </p>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#6abbfe]/10 text-[#1a2a6c] mb-6 mx-auto group-hover:bg-[#6abbfe] group-hover:text-white transition-colors duration-300">
                {value.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {value.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Decorative Blur */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#6abbfe]/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[120px]" />
    </section>
  );
}
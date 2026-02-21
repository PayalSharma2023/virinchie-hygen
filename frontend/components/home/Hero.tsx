export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,42,108,.85),rgba(26,42,108,.85)),url('./bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="px-6 max-w-4xl text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Transforming Infrastructure for a Resilient Tomorrow
        </h1>
        <p className="text-xl mb-8 text-white/90">
          Hydrology, Environmental, and Civil solutions tailored for mountain cities and beyond.
        </p>
        <div className="flex justify-center gap-4">
          <a className="bg-gradient-to-r from-green-500 to-[#6abbfe] px-6 py-3 rounded font-semibold" href="/services">
            Explore Services
          </a>
          <a className="bg-primary px-6 py-3 rounded font-semibold" href="/contact">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

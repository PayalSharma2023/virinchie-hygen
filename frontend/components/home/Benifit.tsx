export default function BenefitsSection() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Our Approach
      </h2>

      <ul className="space-y-6 max-w-3xl mx-auto text-gray-700">
        <li className="flex items-start gap-4">
          <span className="text-xl font-bold text-teal-600">✔</span>
          Integrated planning combining hydrology, engineering & ecology.
        </li>
        <li className="flex items-start gap-4">
          <span className="text-xl font-bold text-teal-600">✔</span>
          Solutions engineered for mountain city challenges.
        </li>
        <li className="flex items-start gap-4">
          <span className="text-xl font-bold text-teal-600">✔</span>
          Resilient, sustainable & future-ready infrastructure.
        </li>
      </ul>
    </section>
  );
}

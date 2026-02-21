import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-blue-900 text-white py-16 px-6 text-center">
      <h3 className="text-2xl font-bold mb-4">
        Ready to strengthen your city’s resilience?
      </h3>
      <p className="mb-6 max-w-xl mx-auto">
        Let’s talk about how we can tailor hydrology, environmental, and civil
        solutions for your unique challenges.
      </p>
      <Link
        href="/contact"
        className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
